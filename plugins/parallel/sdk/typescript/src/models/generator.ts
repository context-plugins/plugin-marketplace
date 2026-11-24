import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The generator of the FindAll run. */
export const Generator = {
  Base: "base",
  Core: "core",
  Pro: "pro",
  Preview: "preview",
} as const;
export type Generator = (typeof Generator)[keyof typeof Generator] | (string & {});

export const generatorSchema: EnumSchema<Generator> = s.enumOf<Generator>(Generator);
