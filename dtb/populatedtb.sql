USE GameStore;

INSERT INTO Address (HouseName,Street,Street2,Town,County,PostCode)
Values
(42,'London St','','Bristol','Somerset','BS15 07HG'),
('The Platform','Gable Cross','Gable Cross','Oxford','Oxfordshire','OX92 06BU'),
(7,'Station Rd','','Bridgewater','Somerset','BR24 03EF'),
(104,'Law Courts','Westbridge Park','Newbury','Wiltshire','TR17 16JK'),
(15,'St Johns Way','','Kingston','Essex','ES55 13RH');
-- DELETE FROM Address WHERE Criteria = Value ;
-- SELECT * FROM Address;

INSERT INTO Category (Cat)
Values
('Platform'),
('Mouse'),
('Keyboard'),
('Joystick'),
('Monitor'),
('RPG'),
('Arena'),
('Sim'),
('Sandbx'),
('FPS')
;
-- DELETE FROM Category WHERE Cat = 'Platform';
-- SELECT * FROM Category;

INSERT INTO Customer (FirstName,Surname,DOB,AddressID,MobNo,Email)
Values
('John','Smith','2003-12-27',4,'07894567891','jks@gmail.com'),
('Tim','Jones','1995-05-12',1,'07258987654','tj-thedj@yahoo.co.uk'),
('Sue','Marks','1986-07-26',2,'','sweetiemarks@hotmail.com'),
('Milly','Carter','1997-0-04',4,'07531159735','miraclemilly@gmail.com'),
('Dean','Legg','2001-11-30',3,'07368453859','')
;
-- DELETE FROM Customer WHERE Criteria = Value;
-- SELECT * FROM Customer;

INSERT INTO Staff (FirstName,Surname)
Values
('Jess','Rogers'),
('Ben','Candy')
;
-- DELETE FROM Staff WHERE Criteria = Value ;
-- SELECT * FROM Staff;

INSERT INTO Vendor (VendorName)
Values 
('Microsoft'),
('Origin'),
('Logitech'),
('HP'),
('Dell'),
('Nintendo'),
('EA'),
('2 Point'),
('Mojang'),
('Activision'),
('Blizzard'),
('Rockstar')
;
-- DELETE FROM Vendor WHERE Criteria = Value;
-- SELECT * FROM Vendor;

INSERT INTO ProductType (PType)
Values
('Hard'),
('Soft')
;
-- DELETE FROM ProductType WHERE Criteria = Value ;
-- SELECT * FROM ProductType;

INSERT INTO Product (VendorID, ProductTypeID, CategoryID, Item, Cost, Price)
Values
(2,1,1,'XBox 1200',540,1299.99),
(3,1,1,'DreamDeck v2',120,349.99),
(4,1,2,'MX7',5,14.99),
(4,1,3,'KX5',7,24.99),
(4,1,4,'JX12',8,19.99),
(1,1,1,'GSI64X17',445,999.99),
(1,1,2,'GS16',8,17.99),
(1,1,3,'GS10',10,24.99),
(1,1,5,'GS30',55,119.99),
(5,1,1,'DIX32',525,1499.99),
(5,1,1,'AW500',770,2199.99),
(6,2,6,'Kelda',25,49.99),
(7,2,7,'Forknight',17,45.99),
(8,2,8,'2Point Home',3,7.99),
(9,2,9,'Mincecraft',10,24.99),
(9,2,7,'Dungeons',12,24.99),
(6,2,7,'MarioArt',19,39.99),
(8,2,8,'2Point City',5,14.99),
(2,2,8,'SIms 5',49,89.99),
(10,2,10,'Call of Dudy',30,79.99),
(11,2,6,'World of Wonder',45,65.99),
(7,2,6,'SWORD',35,59.99)
;
-- DELETE FROM Product WHERE Criteria = Value ;
-- SELECT * FROM Product;