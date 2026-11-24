import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Basis = {
  Policy: "policy",
  Human: "human",
} as const;
export type Basis = (typeof Basis)[keyof typeof Basis] | (string & {});

export const basisSchema: EnumSchema<Basis> = s.enumOf<Basis>(Basis);
