import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The action applied for this entity */
export const Restriction1 = {
  Allow: "ALLOW",
  Block: "BLOCK",
  Warning: "WARNING",
} as const;
export type Restriction1 = (typeof Restriction1)[keyof typeof Restriction1] | (string & {});

export const restriction1Schema: EnumSchema<Restriction1> = s.enumOf<Restriction1>(Restriction1);
