import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. Name of the linter used. */
export const Linter = {
  LinterUnspecified: "LINTER_UNSPECIFIED",
  Spectral: "SPECTRAL",
  Other: "OTHER",
} as const;
export type Linter = (typeof Linter)[keyof typeof Linter] | (string & {});

export const linterSchema: EnumSchema<Linter> = s.enumOf<Linter>(Linter);
