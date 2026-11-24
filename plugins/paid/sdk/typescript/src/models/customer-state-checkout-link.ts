import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customerStateCheckoutLinkStatusSchema,
  type CustomerStateCheckoutLinkStatus,
} from "./customer-state-checkout-link-status.js";

export type CustomerStateCheckoutLink = {
  id: string;
  url: string;
  status: CustomerStateCheckoutLinkStatus;
  productIds: string[];
  singleUse: boolean;
  allowedCurrencies: string[];
  expiresAt: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerStateCheckoutLinkSchema: Schema<CustomerStateCheckoutLink> =
  s.object<CustomerStateCheckoutLink>(
    {
      id: s.string(),
      url: s.string(),
      status: customerStateCheckoutLinkStatusSchema,
      productIds: s.array(s.string()),
      singleUse: s.boolean(),
      allowedCurrencies: s.array(s.string()),
      expiresAt: s.nullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
