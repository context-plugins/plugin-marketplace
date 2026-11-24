import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Alg = {
  Ed25519: "Ed25519",
} as const;
export type Alg = (typeof Alg)[keyof typeof Alg] | (string & {});

export const algSchema: EnumSchema<Alg> = s.enumOf<Alg>(Alg);
