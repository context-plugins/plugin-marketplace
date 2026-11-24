import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The 2-letter ISO 3166-1 code representing the continent associated with the location of the user.
 */
export const Continent = {
  Af: "AF",
  An: "AN",
  As: "AS",
  Eu: "EU",
  Na: "NA",
  Oc: "OC",
  Sa: "SA",
} as const;
export type Continent = (typeof Continent)[keyof typeof Continent] | (string & {});

export const continentSchema: EnumSchema<Continent> = s.enumOf<Continent>(Continent);
