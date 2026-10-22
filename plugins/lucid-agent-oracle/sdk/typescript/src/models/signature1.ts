import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Signature1 = {
  Pass: "pass",
} as const;
export type Signature1 = (typeof Signature1)[keyof typeof Signature1] | (string & {});

export const signature1Schema: EnumSchema<Signature1> = s.enumOf<Signature1>(Signature1);
