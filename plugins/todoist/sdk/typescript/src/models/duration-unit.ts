import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Unit of time for duration. */
export const DurationUnit = {
  Minute: "minute",
  Day: "day",
} as const;
export type DurationUnit = (typeof DurationUnit)[keyof typeof DurationUnit] | (string & {});

export const durationUnitSchema: EnumSchema<DurationUnit> = s.enumOf<DurationUnit>(DurationUnit);
