import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  orderBillingFrequencyOverrideFrequencySchema,
  type OrderBillingFrequencyOverrideFrequency,
} from "./order-billing-frequency-override-frequency.js";

export type OrderBillingFrequencyOverride = {
  frequency: OrderBillingFrequencyOverrideFrequency;
  customMonths?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderBillingFrequencyOverrideSchema: Schema<OrderBillingFrequencyOverride> =
  s.object<OrderBillingFrequencyOverride>(
    {
      frequency: orderBillingFrequencyOverrideFrequencySchema,
      customMonths: s.optionalNullable(s.int()),
    },
    { additionalProperties: s.json() },
  );
