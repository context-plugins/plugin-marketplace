import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { durationSchema, type Duration } from "./duration.js";

export type Coupon = {
  id: string;
  name?: string | null;
  amountOff?: number | null;
  percentOff?: number | null;
  duration: Duration;
  durationInMonths?: number | null;
  maxRedemptions?: number | null;
  valid: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const couponSchema: Schema<Coupon> = s.object<Coupon>(
  {
    id: s.string(),
    name: s.optionalNullable(s.string()),
    amountOff: s.optionalNullable(s.float64()),
    percentOff: s.optionalNullable(s.float64()),
    duration: durationSchema,
    durationInMonths: s.optionalNullable(s.float64()),
    maxRedemptions: s.optionalNullable(s.float64()),
    valid: s.boolean(),
    createdAt: s.nullable(s.dateTime()),
    updatedAt: s.nullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
