import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Game to list every set for */
export const Game = {
  Pokemon: "pokemon",
  OnePiece: "one-piece",
  Magic: "magic",
  Yugioh: "yugioh",
  DragonBall: "dragon-ball",
  Lorcana: "lorcana",
  Digimon: "digimon",
  WeissSchwarz: "weiss-schwarz",
  UnionArena: "union-arena",
  FleshAndBlood: "flesh-and-blood",
  StarWarsUnlimited: "star-wars-unlimited",
  CardfightVanguard: "cardfight-vanguard",
  DuelMasters: "duel-masters",
  BattleSpirits: "battle-spirits",
  FinalFantasy: "final-fantasy",
  Gundam: "gundam",
  Shadowverse: "shadowverse",
  Riftbound: "riftbound",
  GrandArchive: "grand-archive",
  Wixoss: "wixoss",
} as const;
export type Game = (typeof Game)[keyof typeof Game] | (string & {});

export const gameSchema: EnumSchema<Game> = s.enumOf<Game>(Game);
