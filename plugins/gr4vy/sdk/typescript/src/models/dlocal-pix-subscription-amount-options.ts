import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type49Schema, type Type49 } from "./type49.js";
import { minValueSchema, type MinValue } from "./unions/min-value.js";
import { value5Schema, type Value5 } from "./unions/value5.js";

export type DlocalPixSubscriptionAmountOptions = {
  /**
   * Indicates the amount type unit for the subscription. Allowed values are: `FIXED`, `VARIABLE`.
   */
  type: Type49;
  /**
   * Fixed subscription amount in local currency. Required only for fixed amount subscriptions
   * depending on the payment method.
   */
  value?: Value5;
  /** Minimum payer enrollment limit, not minimum recurring charge amount. */
  minValue: MinValue;
};

export const dlocalPixSubscriptionAmountOptionsSchema: Schema<DlocalPixSubscriptionAmountOptions> =
  s.object<DlocalPixSubscriptionAmountOptions>({
    type: type49Schema,
    value: s.optional(s.lazy(() => value5Schema)),
    minValue: minValueSchema,
    _keysMap: {
      minValue: "min_value",
    },
  });
