import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AwsReservedInstanceRecurringCharge = {
  /** Amount of the recurring charge. */
  amount: number;
  /** Billing frequency of the recurring charge (for example, `Hourly`). */
  frequency: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const awsReservedInstanceRecurringChargeSchema: Schema<AwsReservedInstanceRecurringCharge> =
  s.object<AwsReservedInstanceRecurringCharge>(
    {
      amount: s.float64(),
      frequency: s.string(),
    },
    { additionalProperties: s.json() },
  );
