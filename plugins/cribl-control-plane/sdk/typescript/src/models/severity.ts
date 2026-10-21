import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Severity level to assign to the Detection Rule. */
export const Severity = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
} as const;
export type Severity = (typeof Severity)[keyof typeof Severity] | (number & {});

export const severitySchema: EnumSchema<Severity> = s.enumOf<Severity>(Severity);
