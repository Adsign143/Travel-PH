CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    booking_code VARCHAR(20) UNIQUE NOT NULL,


fullname VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
phone VARCHAR(30) NOT NULL,

destination VARCHAR(100) NOT NULL,
travel_date DATE NOT NULL,
guests INT NOT NULL,

price DECIMAL(10,2) NOT NULL,

status ENUM(
    'Pending',
    'Confirmed',
    'Cancelled',
) DEFAULT 'Pending',

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);