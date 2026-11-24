import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Policy = {
  PublishableKey: "publishable_key",
  TrustedOnly: "trusted_only",
} as const;
export type Policy = (typeof Policy)[keyof typeof Policy] | (string & {});

export const policySchema: EnumSchema<Policy> = s.enumOf<Policy>(Policy);
