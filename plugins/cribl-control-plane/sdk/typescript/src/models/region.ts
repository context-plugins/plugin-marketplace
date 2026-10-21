import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Which New Relic region endpoint to use. */
export const Region = {
  Us: "US",
  Eu: "EU",
  Custom: "Custom",
} as const;
export type Region = (typeof Region)[keyof typeof Region] | (string & {});

export const regionSchema: EnumSchema<Region> = s.enumOf<Region>(Region);
