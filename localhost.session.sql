CREATE TABLE IF NOT EXISTS test_schema.album (
    artist VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    title VARCHAR(255) PRIMARY KEY NOT NULL
);


SELECT * FROM test_schema.album;


INSERT INTO test_schema.album (artist, genre, title) VALUES 
    ('Rolling Stones', 'Rock & Roll', 'Let It Bleed'),
    ('The Beatles', 'Rock', 'Abbey Road'),
    ('Metallica', 'Heavy Metal', 'Ride the Lightning');

