import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Signature11 = {
  Fail: "fail",
} as const;
export type Signature11 = (typeof Signature11)[keyof typeof Signature11] | (string & {});

export const signature11Schema: EnumSchema<Signature11> = s.enumOf<Signature11>(Signature11);
