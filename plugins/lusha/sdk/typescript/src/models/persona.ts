import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Persona = {
  DecisionMaker: "decision_maker",
  PotentialChampion: "potential_champion",
  EndUser: "end_user",
} as const;
export type Persona = (typeof Persona)[keyof typeof Persona] | (string & {});

export const personaSchema: EnumSchema<Persona> = s.enumOf<Persona>(Persona);
