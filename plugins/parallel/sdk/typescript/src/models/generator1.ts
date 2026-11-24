import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Generator for the FindAll run. */
export const Generator1 = {
  Base: "base",
  Core: "core",
  Pro: "pro",
  Preview: "preview",
} as const;
export type Generator1 = (typeof Generator1)[keyof typeof Generator1] | (string & {});

export const generator1Schema: EnumSchema<Generator1> = s.enumOf<Generator1>(Generator1);
