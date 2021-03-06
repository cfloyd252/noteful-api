CREATE TABLE notes (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    folder_id INTEGER REFERENCES folders(id) ON DELETE CASCADE NOT NULL,
    modified TIMESTAMPTZ DEFAULT now() NOT NULL,
    name TEXT NOT NULL,
    content TEXT
);