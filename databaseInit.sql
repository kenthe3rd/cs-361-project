/****************************************************************************************
* Parker Howell
* Aug. 9th, 2018
* SQL Database Initialization for Client Project
* Adds two testing entries to Users table for testing...
****************************************************************************************/


-- Usage Example for website:

-- INSERT INTO `users` (`fname`, `lname`, `email`, `pass`, `geo`, `created`) VALUES ("Paul", "Staments", "shroomhat@errowind.com", "Imafungi", PointFromText("POINT(69 69)"), "2016-02-02 06:12:58");

-- SELECT `geo` FROM `users` WHERE `fname` = "Adam";
-- returns = POINT(24.4477 14.69106)



-- delete esisting tables
DROP TABLE IF EXISTS `users`;
-- DROP TABLE IF EXISTS `assitance_req`;
-- DROP TABLE IF EXISTS `request_resp`;
-- DROP TABLE IF EXISTS `alerts`;



-- Create the Users table
CREATE TABLE `users` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`fname` varchar(100) NOT NULL,
	`lname` varchar(100) NOT NULL,
	`email` varchar(100) NOT NULL,
	`pass` varchar(100) NOT NULL,
	`geo`	point NOT NULL, 
	`created` datetime NOT NULL,
	PRIMARY KEY (`id`),
	UNIQUE KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- Add testeing values to Users table
INSERT INTO `users` VALUES (00000000000, "Adam", "Lowd", "alowd@gmail.com", "adamspass", PointFromText("POINT(24.44770 14.69106)"), "2018-08-02 16:33:18"),
									(00000000001, "Michael", "Fern", "ferndog@hotmail.com", "FernToWin73", PointFromText("POINT(121.45778 24.69106)"), "2017-10-10 12:13:59");



/*  adjust and add later if needed...
-- Create the Assitance Request table
CREATE TABLE `assitance_req` (
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



