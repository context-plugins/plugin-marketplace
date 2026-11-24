import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Effect = {
  Allow: "allow",
  Deny: "deny",
  RequireHuman: "require_human",
  RequireReview: "require_review",
} as const;
export type Effect = (typeof Effect)[keyof typeof Effect] | (string & {});

export const effectSchema: EnumSchema<Effect> = s.enumOf<Effect>(Effect);
