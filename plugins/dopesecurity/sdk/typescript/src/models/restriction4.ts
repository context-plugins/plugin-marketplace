import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Custom categories can be ignored, in addition to regular restrictions */
export const Restriction4 = {
  Allow: "ALLOW",
  Block: "BLOCK",
  Warning: "WARNING",
  Ignore: "IGNORE",
} as const;
export type Restriction4 = (typeof Restriction4)[keyof typeof Restriction4] | (string & {});

export const restriction4Schema: EnumSchema<Restriction4> = s.enumOf<Restriction4>(Restriction4);
