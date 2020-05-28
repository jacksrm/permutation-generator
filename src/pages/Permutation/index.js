import React, { useState } from 'react';

import './style.css';

export default function Permutation() {
  const [valor, setValor] = useState('');
  const [isNumber, setIsNumber] = useState(true);
  const [permutations, setPermutations] = useState([]);

  // cria o nosso array dependendo da entrada do usuário
  async function generateArray(e) {
    e.preventDefault();

    if (!valor) return;

    let array = [];

    if (isNumber) {
      let val = parseInt(valor);

      if (!val || val <= 0) return;
      if (val > 8) val = 8;

      for (let i = 0; i < val; i++) {
        array.push(i + 1);
      }
    } else {
      array = valor.split(',', 8);
      array.sort();
    }

    setPermutations(perm(array));
  }

  // função para trocar a posição de 2 elementos
  function swap(array, indexA, indexB) {
    const aux = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = aux;
  }

  // encontra o "teto" do nosso elemento "first"
  function findSecond(array, first, nextElementIndex, lastElementIndex) {
    let ceillIndex = nextElementIndex;

    for (let i = ceillIndex + 1; i <= lastElementIndex; i++) {
      if (array[i] > first && array[i] < array[ceillIndex]) ceillIndex = i;
    }

    return ceillIndex;
  }

  // executa as permutações
  function perm(array) {
    const size = array.length;
    let permutations = [];
    let isFinished = false;

    array.sort();

    while (isFinished !== true) {
      permutations.push(array.toString());

      let firstIndex;

      for (firstIndex = size - 2; firstIndex >= 0; firstIndex--) {
        if (array[firstIndex] < array[firstIndex + 1]) break;
      }

      if (firstIndex === -1) {
        isFinished = true;
      } else {
        let ceillIndex = findSecond(
          array,
          array[firstIndex],
          firstIndex + 1,
          size - 1
        );

        swap(array, firstIndex, ceillIndex);

        let aux = array.splice(firstIndex + 1);

        aux.sort();

        array.splice(firstIndex + 1, 0, ...aux);
      }
    }
    return permutations;
  }

  return (
    <>
      <div className="content center">
        <h1>Gerador de Permutações</h1>

        <div className="app">
          <div className="info">
            <p>
              Essa é uma aplicação com a finalidade de gerar permutações em
              ordem lexicográfica, tomando como base o algorítmo que consta{' '}
              <a
                href="https://www.geeksforgeeks.org/lexicographic-permutations-of-string/"
                target="_blank"
                rel="noopener noreferrer"
              >
                neste artigo
              </a>
              .
            </p>

            <p>
              Você pode escolher permutações com sistema numérico ou
              alfanumérico. Para ambos os sistemas, as permutações são de{' '}
              <strong>1 → N</strong>, porém, por questões de desempenho,
              limitaremos a <strong>1 → 8</strong>. Para o sistema numérico,
              escolha o valor de <strong>N</strong>, para o sistema
              alfanumérico, insira os caracteres separados por vírgula ( , ).
            </p>

            <form onSubmit={generateArray}>
              <select
                name="select"
                onChange={(e) =>
                  setIsNumber(e.target.value === 'true' ? true : false)
                }
              >
                <option value="true">Numérico</option>

                <option value="false">Alfanumérico</option>
              </select>
              <input
                type={isNumber ? 'number' : 'text'}
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
              <button className="button" type="submit">
                GO!
              </button>
            </form>
          </div>

          <div className="permutations">
            <h3 id="perm-count">
              Número de permutações: {permutations.length}
            </h3>

            <div className="scroll">
              <ul>
                {permutations.map((val, ind) => (
                  <li key={ind}>{val}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
