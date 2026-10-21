import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether this statement should allow or deny actions on the resources. */
export const Effect = {
  Allow: "allow",
  Deny: "deny",
} as const;
export type Effect = (typeof Effect)[keyof typeof Effect] | (string & {});

export const effectSchema: EnumSchema<Effect> = s.enumOf<Effect>(Effect);
