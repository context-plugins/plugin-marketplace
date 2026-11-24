import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. Target linter for the style guide. */
export const Linter1 = {
  LinterUnspecified: "LINTER_UNSPECIFIED",
  Spectral: "SPECTRAL",
  Other: "OTHER",
} as const;
export type Linter1 = (typeof Linter1)[keyof typeof Linter1] | (string & {});

export const linter1Schema: EnumSchema<Linter1> = s.enumOf<Linter1>(Linter1);
