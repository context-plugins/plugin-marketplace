import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. The type for the custom metric's value. */
export const MeasurementUnit = {
  MeasurementUnitUnspecified: "MEASUREMENT_UNIT_UNSPECIFIED",
  Standard: "STANDARD",
  Currency: "CURRENCY",
  Feet: "FEET",
  Meters: "METERS",
  Kilometers: "KILOMETERS",
  Miles: "MILES",
  Milliseconds: "MILLISECONDS",
  Seconds: "SECONDS",
  Minutes: "MINUTES",
  Hours: "HOURS",
} as const;
export type MeasurementUnit = (typeof MeasurementUnit)[keyof typeof MeasurementUnit] | (string & {});

export const measurementUnitSchema: EnumSchema<MeasurementUnit> = s.enumOf<MeasurementUnit>(MeasurementUnit);
