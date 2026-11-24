import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Basis = {
  Gaap: "GAAP",
  NonGaap: "non-GAAP",
  Other: "other",
} as const;
export type Basis = (typeof Basis)[keyof typeof Basis] | (string & {});

export const basisSchema: EnumSchema<Basis> = s.enumOf<Basis>(Basis);
