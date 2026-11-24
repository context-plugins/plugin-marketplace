import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The action applied when the custom category is matched */
export const Restriction = {
  Allow: "ALLOW",
  Block: "BLOCK",
  Warning: "WARNING",
  Ignore: "IGNORE",
} as const;
export type Restriction = (typeof Restriction)[keyof typeof Restriction] | (string & {});

export const restrictionSchema: EnumSchema<Restriction> = s.enumOf<Restriction>(Restriction);
