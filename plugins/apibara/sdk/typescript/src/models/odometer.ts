import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Source-backed odometer readings in miles and kilometres. Missing readings may be null; unknown
 * mileage is not zero.
 */
export type Odometer = {
  mi?: number | null;
  km?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const odometerProperties: s.Shape<Odometer> = {
  mi: s.optionalNullable(s.float64()),
  km: s.optionalNullable(s.float64()),
};

export const odometerInternalSchema: Schema<Odometer> = s.object<Odometer>(odometerProperties, {
  additionalProperties: s.json(),
});

export const odometerSchema: Schema<Odometer> = s.lazySchema(() =>
  s.object<Odometer>(
    {
      ...odometerProperties,
      mi: s.optionalNullable(s.float64().check(s.gte(0))),
      km: s.optionalNullable(s.float64().check(s.gte(0))),
    },
    { additionalProperties: s.json() },
  ),
);
