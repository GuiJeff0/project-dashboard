package com.projectweb.dsvendas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.projectweb.dsvendas.entities.Seller;
import com.projectweb.dsvendas.repositories.SellerRepository;
import com.projectweb.dsvendas.services.exceptions.DatabaseException;
import com.projectweb.dsvendas.services.exceptions.ResourceNotFoundException;

import jakarta.persistence.EntityNotFoundException;

@Service
public class SellerService {
	
	@Autowired
	private SellerRepository repository;
	
	public List<Seller> findAll(){
		return repository.findAll();
	}
	
	
	public Seller findById(Long id) {
		Optional<Seller> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}
	
	public Seller insert(Seller obj) {
        return repository.save(obj);
    }
	
	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException(id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException(e.getMessage());
		}
        
    }
	
	public Seller update(Long id, Seller obj) {
		try {
			Seller entity = repository.getReferenceById(id);
			updateData(entity, obj);
	        return repository.save(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException(id);
		} 
		
    }
	
	private void updateData(Seller entity, Seller obj) {
		entity.setName(obj.getName());
	}

}
