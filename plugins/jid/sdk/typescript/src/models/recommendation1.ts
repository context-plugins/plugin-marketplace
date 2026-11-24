import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Recommendation1 = {
  Engage: "engage",
  VerifyFirst: "verify_first",
  DoNotEngage: "do_not_engage",
} as const;
export type Recommendation1 = (typeof Recommendation1)[keyof typeof Recommendation1] | (string & {});

export const recommendation1Schema: EnumSchema<Recommendation1> = s.enumOf<Recommendation1>(Recommendation1);
