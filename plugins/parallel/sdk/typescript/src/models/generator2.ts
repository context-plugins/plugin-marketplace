import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Generator for the FindAll run. One of base, core, pro, preview. */
export const Generator2 = {
  Base: "base",
  Core: "core",
  Pro: "pro",
  Preview: "preview",
} as const;
export type Generator2 = (typeof Generator2)[keyof typeof Generator2] | (string & {});

export const generator2Schema: EnumSchema<Generator2> = s.enumOf<Generator2>(Generator2);
