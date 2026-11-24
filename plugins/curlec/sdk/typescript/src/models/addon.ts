import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  itemRazorpaySubscriptionsApiSchema,
  type ItemRazorpaySubscriptionsApi,
} from "./item-razorpay-subscriptions-api.js";

export type Addon = {
  item?: ItemRazorpaySubscriptionsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const addonSchema: Schema<Addon> = s.object<Addon>(
  {
    item: s.optional(s.lazy(() => itemRazorpaySubscriptionsApiSchema)),
  },
  { additionalProperties: s.json() },
);
