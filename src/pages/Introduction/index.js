import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

import './style.css';

import logo from '../../assets/logo_green.svg';

export default function Introduction() {

  return (
    <>
      <div className="content">
        
        <h1>Trabalho de Matémática</h1>

        <h3>Integrantes: </h3>
        
        <p>Jacson de Sousa Rodrigues 2012901/8 - Desenvolvedor <a 
            href="https://www.linkedin.com/in/jacson-rodrigues/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} color={'#81ff6d'} />
          </a> <a 
            href="https://github.com/jacksrm" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub size={24} color={'#81ff6d'} />
          </a>
        </p>
        <p>Matheus Teixeira Rodrigues 2012913/1 - Designer e Dev. Assist <a 
            href="https://www.instagram.com/mayh6m" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} color={'#81ff6d'} />
          </a>
        </p>
        <p>Dante de Oliveira Dantas 2012894/1 - Designer e Dev. Assist  </p>

        <h3>Objetivo: </h3>
        <p>Construir um algoritmo que gere todas as permutações dos inteiros de 1 até n em ordem lexicográfica.</p>

        <div className="bottom">
          <Link className="button" to="/permutation">Seguinte →</Link>

          <a href="https://www.unifor.br/" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="UNIFOR"/>
          </a>
        </div>

      </div>
    </>
  );
}