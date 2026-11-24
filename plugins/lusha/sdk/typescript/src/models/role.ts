import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Role = {
  DecisionMaker: "decision_maker",
  PotentialChampion: "potential_champion",
  EndUser: "end_user",
} as const;
export type Role = (typeof Role)[keyof typeof Role] | (string & {});

export const roleSchema: EnumSchema<Role> = s.enumOf<Role>(Role);
