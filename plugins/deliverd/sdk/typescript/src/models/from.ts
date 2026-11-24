import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const From = {
  Allow: "allow",
  Deny: "deny",
  RequireHuman: "require_human",
  RequireReview: "require_review",
} as const;
export type From = (typeof From)[keyof typeof From] | (string & {});

export const fromSchema: EnumSchema<From> = s.enumOf<From>(From);
