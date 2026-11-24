import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The action applied for this user or group */
export const Restriction5 = {
  Allow: "ALLOW",
  Block: "BLOCK",
  Warning: "WARNING",
} as const;
export type Restriction5 = (typeof Restriction5)[keyof typeof Restriction5] | (string & {});

export const restriction5Schema: EnumSchema<Restriction5> = s.enumOf<Restriction5>(Restriction5);
