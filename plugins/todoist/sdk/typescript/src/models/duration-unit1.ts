import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Unit of time for duration. Must be provided to update the task duration. Pass null to clear the
 * value. Omit this field to keep it unchanged.
 */
export const DurationUnit1 = {
  Minute: "minute",
  Day: "day",
} as const;
export type DurationUnit1 = (typeof DurationUnit1)[keyof typeof DurationUnit1] | (string & {});

export const durationUnit1Schema: EnumSchema<DurationUnit1> = s.enumOf<DurationUnit1>(DurationUnit1);
