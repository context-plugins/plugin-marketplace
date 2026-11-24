import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Restriction = {
  Audit: "audit",
  Warn: "warn",
  Block: "block",
} as const;
export type Restriction = (typeof Restriction)[keyof typeof Restriction] | (string & {});

export const restrictionSchema: EnumSchema<Restriction> = s.enumOf<Restriction>(Restriction);
