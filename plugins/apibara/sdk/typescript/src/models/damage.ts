import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Damage = {
  Fire: "Fire",
  Hail: "Hail",
  Theft: "Theft",
  Water: "Water",
  Chemical: "Chemical",
  Rollover: "Rollover",
  Mechanical: "Mechanical",
  Vandalized: "Vandalized",
  Repossession: "Repossession",
} as const;
export type Damage = (typeof Damage)[keyof typeof Damage] | (string & {});

export const damageSchema: EnumSchema<Damage> = s.enumOf<Damage>(Damage);
