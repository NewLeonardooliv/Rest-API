create database blog;

create schema blog;

create table blog.post (
    id serial primary key,
    title text not null,
    content TEXT not null,
    date TIMESTAMP default now()
);