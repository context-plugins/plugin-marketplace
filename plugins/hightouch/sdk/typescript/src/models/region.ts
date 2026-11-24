import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Match Booster region to run the enrichment in. Defaults to the model's configured region. */
export const Region = {
  Us: "us",
  Eu: "eu",
} as const;
export type Region = (typeof Region)[keyof typeof Region] | (string & {});

export const regionSchema: EnumSchema<Region> = s.enumOf<Region>(Region);
