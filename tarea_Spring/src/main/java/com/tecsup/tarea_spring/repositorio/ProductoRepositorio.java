package com.tecsup.tarea_spring.repositorio;

import com.tecsup.tarea_spring.modelo.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepositorio extends JpaRepository<Producto, Long> {}