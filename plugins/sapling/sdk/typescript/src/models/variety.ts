import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** English variety to enforce, e.g. "us-variety" or "gb-variety". Optional. */
export const Variety = {
  UsVariety: "us-variety",
  GbVariety: "gb-variety",
  AuVariety: "au-variety",
  CaVariety: "ca-variety",
  SVariety: "s-variety",
  TVariety: "t-variety",
  NullVariety: "null-variety",
} as const;
export type Variety = (typeof Variety)[keyof typeof Variety] | (string & {});

export const varietySchema: EnumSchema<Variety> = s.enumOf<Variety>(Variety);
