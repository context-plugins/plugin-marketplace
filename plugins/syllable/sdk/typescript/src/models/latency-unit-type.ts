import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LatencyUnitType = {
  Minutes: "minutes",
  Seconds: "seconds",
  Milliseconds: "milliseconds",
  Microseconds: "microseconds",
  Nanoseconds: "nanoseconds",
} as const;
export type LatencyUnitType = (typeof LatencyUnitType)[keyof typeof LatencyUnitType] | (string & {});

export const latencyUnitTypeSchema: EnumSchema<LatencyUnitType> = s.enumOf<LatencyUnitType>(LatencyUnitType);
