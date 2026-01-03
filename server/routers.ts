import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { createRegistration, getAllRegistrations } from "./db";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  registration: router({
    submit: publicProcedure
      .input(
        z.object({
          fullName: z.string().min(1, "Full name is required"),
          email: z.string().email("Valid email is required"),
          teamName: z.string().optional(),
          teamSize: z.number().min(1).max(8),
          experience: z.enum(["beginner", "intermediate", "advanced"]),
          interests: z.string().optional(),
          dietaryRestrictions: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        await createRegistration(input);
        return { success: true };
      }),
    list: protectedProcedure.query(async ({ ctx }) => {
      // Only admins can view registrations
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized");
      }
      return await getAllRegistrations();
    }),
  }),
});

export type AppRouter = typeof appRouter;
