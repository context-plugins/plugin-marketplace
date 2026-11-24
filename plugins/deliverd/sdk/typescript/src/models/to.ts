import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const To = {
  Allow: "allow",
  Deny: "deny",
  RequireHuman: "require_human",
  RequireReview: "require_review",
} as const;
export type To = (typeof To)[keyof typeof To] | (string & {});

export const toSchema: EnumSchema<To> = s.enumOf<To>(To);
