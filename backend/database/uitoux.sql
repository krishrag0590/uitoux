-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 16, 2023 at 10:41 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uitoux`
--

-- --------------------------------------------------------

--
-- Table structure for table `site_currency`
--

CREATE TABLE `site_currency` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `shorten` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `site_currency`
--

INSERT INTO `site_currency` (`id`, `name`, `shorten`) VALUES
(1, 'Rupees', 'INR'),
(2, 'United States Doller', 'USD');

-- --------------------------------------------------------

--
-- Table structure for table `site_language`
--

CREATE TABLE `site_language` (
  `id` int(11) NOT NULL DEFAULT 0,
  `name` varchar(30) NOT NULL,
  `shorten` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `site_language`
--

INSERT INTO `site_language` (`id`, `name`, `shorten`) VALUES
(1, 'English', 'EN'),
(2, 'Tamil', 'TA');

-- --------------------------------------------------------

--
-- Table structure for table `site_products`
--

CREATE TABLE `site_products` (
  `id` int(11) NOT NULL,
  `serial_no` varchar(40) DEFAULT NULL,
  `name` varchar(70) NOT NULL,
  `product_value` int(11) NOT NULL,
  `image` varchar(30) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_on` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `site_products`
--

INSERT INTO `site_products` (`id`, `serial_no`, `name`, `product_value`, `image`, `created_by`, `created_on`) VALUES
(1, 'SKU: A43-44328-B', 'Glossy Gray 19\' Aluminium Wheel AR-19', 589, 'product-1.jpeg', 1, '1692087581594'),
(2, 'SKU: 729-51203-B', 'Twin Exhaust Pipe From Brandix Z54', 749, 'product-2.jpeg', 1, '1692087581594'),
(3, 'SKU: 573-49386-C', 'Motor Oil Level 5', 23, 'product-3.jpeg', 2, '1692087581594'),
(4, 'SKU: 753-38573-B', 'Brandix Engine Block Z4', 452, 'product-4.jpeg', 2, '1692087581594'),
(5, 'SKU: 472-67382-Z', 'Brandix Clutch Discs Z175', 345, 'product-5.jpeg', 2, '1692087581594'),
(6, NULL, 'Fantastic 12-Stroke Engine With A Power of 1991 hp', 2579, 'product-6.jpeg', 1, '1692087581594'),
(7, NULL, 'Set of Four 19 Inch Spiked Tires', 327, 'product-7.jpeg', 1, '1692087581594'),
(8, NULL, '40 Megawatt Low Beam Lamp', 4, 'product-8.jpeg', 1, '1692087581594'),
(9, NULL, 'Brandix Manual Five Speed Gearbox', 879, 'product-9.jpeg', 1, '1692087581594'),
(10, NULL, 'Set of Car Floor Mats Brandix Z4', 78, 'product-10.jpeg', 2, '1692087581594'),
(11, NULL, 'Taillights Brandix Z54', 60, 'product-11.jpeg', 1, '1692087581594'),
(12, NULL, 'Brandix Engine Block Z4', 452, 'product-12.jpeg', 2, '1692087581594'),
(13, NULL, 'Brandix Clutch Discs Z175', 345, 'product-13.jpeg', 1, '1692087581594'),
(14, NULL, 'Brandix Manual Five Speed Gearbox', 879, 'product-9.jpeg', 1, '1692087581594');

-- --------------------------------------------------------

--
-- Table structure for table `site_product_category`
--

CREATE TABLE `site_product_category` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `site_product_category`
--

INSERT INTO `site_product_category` (`id`, `name`) VALUES
(1, 'Top Rated Products'),
(2, 'Special Offers'),
(3, 'Bestsellers');

-- --------------------------------------------------------

--
-- Table structure for table `site_product_category_mapping`
--

CREATE TABLE `site_product_category_mapping` (
  `id` int(11) NOT NULL,
  `product_category_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_on` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `site_product_category_mapping`
--

INSERT INTO `site_product_category_mapping` (`id`, `product_category_id`, `product_id`, `created_by`, `created_on`) VALUES
(1, 1, 6, 1, '1692087581594'),
(2, 1, 7, 1, '1692087581594'),
(3, 1, 8, 2, '1692087581594'),
(4, 2, 9, 2, '1692087581594'),
(5, 2, 10, 1, '1692087581594'),
(6, 2, 11, 2, '1692087581594'),
(7, 3, 12, 2, '1692087581594'),
(8, 3, 13, 2, '1692087581594'),
(9, 3, 14, 1, '1692087581594');

-- --------------------------------------------------------

--
-- Table structure for table `site_product_reviews`
--

CREATE TABLE `site_product_reviews` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `review` text NOT NULL,
  `created_on` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `site_product_reviews`
--

INSERT INTO `site_product_reviews` (`id`, `product_id`, `user_id`, `review`, `created_on`) VALUES
(1, 1, 1, 'Testing', '1692087581594'),
(2, 1, 2, 'Testing', '1692087581594'),
(3, 1, 1, 'Testing', '1692087581594'),
(4, 2, 1, 'Testing', '1692087581594'),
(5, 3, 1, 'Testing', '1692087581594'),
(6, 4, 2, 'Testing', '1692087581594'),
(7, 5, 1, 'Testing', '1692087581594'),
(8, 5, 2, 'Testing', '1692087581594'),
(9, 6, 2, 'Testing', '1692087581594'),
(10, 7, 1, 'Testing', '1692087581594'),
(11, 8, 1, 'Testing', '1692087581594'),
(12, 8, 2, 'Testing', '1692087581594'),
(13, 9, 2, 'Testing', '1692087581594'),
(14, 10, 2, 'Testing', '1692087581594'),
(15, 11, 1, 'Testing', '1692087581594'),
(16, 11, 2, 'Testing', '1692087581594'),
(17, 12, 1, 'Testing', '1692087581594'),
(18, 13, 2, 'Testing', '1692087581594'),
(19, 14, 1, 'Testing', '1692087581594'),
(20, 14, 2, 'Testing', '1692087581594');

-- --------------------------------------------------------

--
-- Table structure for table `site_tool_types`
--

CREATE TABLE `site_tool_types` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `site_tool_types`
--

INSERT INTO `site_tool_types` (`id`, `name`) VALUES
(1, 'Power Tools'),
(2, 'Hand Tools'),
(3, 'Plumbing');

-- --------------------------------------------------------

--
-- Table structure for table `site_tool_types_mapping`
--

CREATE TABLE `site_tool_types_mapping` (
  `id` int(11) NOT NULL,
  `tool_types_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_on` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `site_tool_types_mapping`
--

INSERT INTO `site_tool_types_mapping` (`id`, `tool_types_id`, `product_id`, `created_by`, `created_on`) VALUES
(1, 1, 1, 1, '1692087581594'),
(2, 1, 2, 1, '1692087581594'),
(3, 2, 3, 2, '1692087581594'),
(4, 2, 4, 2, '1692087581594'),
(5, 3, 5, 1, '1692087581594');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `site_currency`
--
ALTER TABLE `site_currency`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `site_language`
--
ALTER TABLE `site_language`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `site_products`
--
ALTER TABLE `site_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `site_product_category`
--
ALTER TABLE `site_product_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `site_product_category_mapping`
--
ALTER TABLE `site_product_category_mapping`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `site_product_reviews`
--
ALTER TABLE `site_product_reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `site_tool_types`
--
ALTER TABLE `site_tool_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `site_tool_types_mapping`
--
ALTER TABLE `site_tool_types_mapping`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `site_currency`
--
ALTER TABLE `site_currency`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `site_products`
--
ALTER TABLE `site_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `site_product_category`
--
ALTER TABLE `site_product_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `site_product_category_mapping`
--
ALTER TABLE `site_product_category_mapping`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `site_product_reviews`
--
ALTER TABLE `site_product_reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `site_tool_types`
--
ALTER TABLE `site_tool_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `site_tool_types_mapping`
--
ALTER TABLE `site_tool_types_mapping`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
