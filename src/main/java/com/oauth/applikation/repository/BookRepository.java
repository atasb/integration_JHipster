package com.oauth.applikation.repository;

import com.oauth.applikation.domain.Book;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Book entity.
 */
@SuppressWarnings("unused")
public interface BookRepository extends MongoRepository<Book,String> {

}
