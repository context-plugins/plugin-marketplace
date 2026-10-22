import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Defines how sample rate will be derived: log(previousPeriodCount) or sqrt(previousPeriodCount)
 */
export const SampleMode = {
  Log: "log",
  Sqrt: "sqrt",
} as const;
export type SampleMode = (typeof SampleMode)[keyof typeof SampleMode] | (string & {});

export const sampleModeSchema: EnumSchema<SampleMode> = s.enumOf<SampleMode>(SampleMode);
