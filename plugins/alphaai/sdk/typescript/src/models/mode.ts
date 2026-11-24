import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** See the endpoint description. */
export const Mode = {
  Strict: "strict",
  Broadened: "broadened",
  NoMatch: "no_match",
  NoTerms: "no_terms",
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode] | (string & {});

export const modeSchema: EnumSchema<Mode> = s.enumOf<Mode>(Mode);
