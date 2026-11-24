import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Determines whether the statement allows or denies access to the resource. */
export const Effect = {
  Allow: "Allow",
  Deny: "Deny",
} as const;
export type Effect = (typeof Effect)[keyof typeof Effect] | (string & {});

export const effectSchema: EnumSchema<Effect> = s.enumOf<Effect>(Effect);
