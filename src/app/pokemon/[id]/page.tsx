import { fetchPokemonData } from "@/apis/pokemon";
import { Pokemon } from "@/types/Pokemon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PokemonDetailPage = async ({ params }: { params: { id: string } }) => {
  const pokemon : Pokemon = await fetchPokemonData(params.id);

  console.log(pokemon);
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4">{pokemon.korean_name}</h2>
        <p className="text-lg text-gray-700 mb-4">No.{pokemon.id.toString().padStart(4, "0")}</p>
        <div className="flex flex-col items-center">
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.korean_name}
            width={150}
            height={150}
            className="mb-4"
          />
          <p className="text-xl font-semibold mb-2">이름 : {pokemon.korean_name}</p>
          <div className="bg-gray-100 rounded-lg p-4 w-full md:w-1/2">
            <p className="text-lg">키 : {pokemon.height / 10} m</p>
            <p className="text-lg">무게 : {pokemon.weight / 10} kg</p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-xl font-semibold mb-2">기술 :</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {pokemon.moves.map((move) => (
              <div
                key={move.move.name}
                className="bg-blue-100 text-blue-800 rounded-lg p-2 text-center"
              >
                {move.move.korean_name}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <Link href="/">
            <div className="text-blue-500 hover:underline">뒤로가기</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
