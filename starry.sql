DROP DATABASE IF EXISTS starry;
CREATE DATABASE starry;

\c starry;

CREATE TABLE users (
  user_id VARCHAR(40) PRIMARY KEY,
  xml_balance DOUBLE DEFAULT 0.0,
  wallet_address VARCHAR(64)
);