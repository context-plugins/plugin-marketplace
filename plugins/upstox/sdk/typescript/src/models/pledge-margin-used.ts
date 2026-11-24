import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deliveryMarginSchema, type DeliveryMargin } from "./delivery-margin.js";

export type PledgeMarginUsed = {
  total?: number;
  mtf?: number;
  spanExposure?: number;
  cashMarginVarElm?: number;
  premiumPresent?: number;
  deliveryMargin?: DeliveryMargin;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pledgeMarginUsedSchema: Schema<PledgeMarginUsed> = s.object<PledgeMarginUsed>(
  {
    total: s.optional(s.float64()),
    mtf: s.optional(s.float64()),
    spanExposure: s.optional(s.float64()),
    cashMarginVarElm: s.optional(s.float64()),
    premiumPresent: s.optional(s.float64()),
    deliveryMargin: s.optional(s.lazy(() => deliveryMarginSchema)),
    _keysMap: {
      spanExposure: "span_exposure",
      cashMarginVarElm: "cash_margin_var_elm",
      premiumPresent: "premium_present",
      deliveryMargin: "delivery_margin",
    },
  },
  { additionalProperties: s.json() },
);
