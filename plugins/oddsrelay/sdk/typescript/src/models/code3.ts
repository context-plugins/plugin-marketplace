import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Stable machine code; branch on this, never on `message`. */
export const Code3 = {
  TooManyRequests: "too_many_requests",
  TooManyFromAddress: "too_many_from_address",
} as const;
export type Code3 = (typeof Code3)[keyof typeof Code3] | (string & {});

export const code3Schema: EnumSchema<Code3> = s.enumOf<Code3>(Code3);
