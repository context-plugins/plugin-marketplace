import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the flag */
export const Name = {
  New: "new",
  Inactive: "inactive",
  Active: "active",
  Launched: "launched",
} as const;
export type Name = (typeof Name)[keyof typeof Name] | (string & {});

export const nameSchema: EnumSchema<Name> = s.enumOf<Name>(Name);
