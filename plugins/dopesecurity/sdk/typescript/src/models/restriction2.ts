import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The action applied when the category is matched */
export const Restriction2 = {
  Allow: "ALLOW",
  Block: "BLOCK",
  Warning: "WARNING",
} as const;
export type Restriction2 = (typeof Restriction2)[keyof typeof Restriction2] | (string & {});

export const restriction2Schema: EnumSchema<Restriction2> = s.enumOf<Restriction2>(Restriction2);
