/****************************************************************************************
* Parker Howell
* Aug. 9th, 2018
* SQL Database Initialization for Client Project
* Adds two testing entries to Users table for testing...
****************************************************************************************/


-- Usage examples for website:


-- To add a new user
-- INSERT INTO `users` (`fname`, `lname`, `email`, `geolocation`, `created`) VALUES ("Paul", "Staments", "shroomhat@errowind.com", PointFromText("POINT(69 69)"), "2016-02-02 06:12:58");


-- To get a user's geolocation coordinates
-- SELECT `geolocation` FROM `users` WHERE `fname` = "Adam";
-- returns = POINT(24.4477 14.69106)


-- To update a user's password based on first and last name
-- UPDATE `users` SET `password` = "NewPass" WHERE `fname` = "Adam" AND `lname` = "Lowd";


-- Delete existing tables
DROP TABLE IF EXISTS `users`;
-- DROP TABLE IF EXISTS `assistance_req`;
-- DROP TABLE IF EXISTS `request_resp`;
-- DROP TABLE IF EXISTS `alerts`;


-- Create the Users table
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `geolocation` point NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- Add testing values to Users table
INSERT INTO `users` (`id`, `username`, `password`, `fname`, `lname`, `email`, `geolocation`, `created`) VALUES
(1, "alowd", "$2a$10$XQxn53ey.VCU/dc58nt72u2GvjXXn2Wjvtb0qwziqHJN8BvhTuCVS", "Adam", "Lowd", "alowd@gmail.com", PointFromText("POINT(24.44770 14.69106)"), "2018-08-02 16:33:18");
(2, "alowd", "$2a$10$nG/UF0lODWsD38jU8CBWjezNF8GoJFG9vjFfw3tlgcwiekVIkdxZ2", "Michael", "Fern", "ferndog@hotmail.com", PointFromText("POINT(121.45778 24.69106)"), "2017-10-10 12:13:59");


/* adjust and add later if needed...
-- Create the Assistance Request table
CREATE TABLE `assistance_req` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`fname` varchar(100) NOT NULL,
	`lname` varchar(100) NOT NULL,
	`email` varchar(100) NOT NULL,
	`geo`	point NOT NULL, 
	`created` datetime NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
*/
