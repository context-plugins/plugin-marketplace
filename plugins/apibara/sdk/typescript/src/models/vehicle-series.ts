import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Canonical model-family / series resolved from the generation catalog. */
export type VehicleSeries = {
  key?: string | null;
  name?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vehicleSeriesSchema: Schema<VehicleSeries> = s.object<VehicleSeries>(
  {
    key: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
