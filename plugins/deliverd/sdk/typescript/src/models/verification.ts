import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Verification = {
  Verified: "verified",
  HashMatched: "hash_matched",
  Reported: "reported",
} as const;
export type Verification = (typeof Verification)[keyof typeof Verification] | (string & {});

export const verificationSchema: EnumSchema<Verification> = s.enumOf<Verification>(Verification);
