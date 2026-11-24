import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The behavior of the proxy rule. */
export const Effect = {
  Allow: "ALLOW",
  Deny: "DENY",
} as const;
export type Effect = (typeof Effect)[keyof typeof Effect] | (string & {});

export const effectSchema: EnumSchema<Effect> = s.enumOf<Effect>(Effect);
