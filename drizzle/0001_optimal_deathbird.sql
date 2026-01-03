CREATE TABLE `registrations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`fullName` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`teamName` varchar(255),
	`teamSize` int NOT NULL,
	`experience` varchar(50) NOT NULL,
	`interests` text,
	`dietaryRestrictions` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `registrations_id` PRIMARY KEY(`id`)
);
