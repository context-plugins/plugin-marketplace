import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HomeType = {
  House: "house",
  Condo: "condo",
  Townhouse: "townhouse",
  MultiFamily: "multi_family",
  Manufactured: "manufactured",
  Lot: "lot",
  Apartment: "apartment",
} as const;
export type HomeType = (typeof HomeType)[keyof typeof HomeType] | (string & {});

export const homeTypeSchema: EnumSchema<HomeType> = s.enumOf<HomeType>(HomeType);
