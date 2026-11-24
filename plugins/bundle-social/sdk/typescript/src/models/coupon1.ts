import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { durationSchema, type Duration } from "./duration.js";

export type Coupon1 = {
  percentOff: number;
  duration: Duration;
  durationInMonths?: number | null;
  valid: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const coupon1Schema: Schema<Coupon1> = s.object<Coupon1>(
  {
    percentOff: s.float64(),
    duration: durationSchema,
    durationInMonths: s.optionalNullable(s.float64()),
    valid: s.boolean(),
  },
  { additionalProperties: s.json() },
);
