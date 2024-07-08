"use client";

import { Pokemon } from "@/types/Pokemon";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);

  React.useEffect(() => {
    const fetchInitialData = async () => {
      const response = await fetch("/api/pokemons");
      const data = await response.json();
      setPokemons(data);
    };
    fetchInitialData();
  }, []);
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">포켓몬 리스트</h1>
      <div>
        {pokemons.length === 0 ? (
          <div className="text-center text-lg">불러오는중..</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {pokemons.map((pokemon) => (
              <Link href={`/pokemon/${pokemon.id}`} key={pokemon.id} legacyBehavior>
                <a className="border rounded-lg p-4 hover:shadow-lg flex flex-col items-center">
                  <Image 
                    src={pokemon.sprites.front_default} 
                    alt={pokemon.korean_name} 
                    width={96} 
                    height={96} 
                    className="mb-2"
                  />
                  <p className="text-xl font-semibold">{pokemon.korean_name}</p>
                  <p className="text-gray-600">도감번호 : {pokemon.id}</p>
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonList;
