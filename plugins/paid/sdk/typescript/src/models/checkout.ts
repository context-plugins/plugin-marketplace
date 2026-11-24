import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { checkoutCustomCardSchema, type CheckoutCustomCard } from "./checkout-custom-card.js";
import { checkoutProductSchema, type CheckoutProduct } from "./checkout-product.js";
import { checkoutStatusSchema, type CheckoutStatus } from "./checkout-status.js";

export type Checkout = {
  id: string;
  url: string;
  status: CheckoutStatus;
  products: CheckoutProduct[];
  customerId: string | null;
  externalCustomerId: string | null;
  successUrl: string;
  cancelUrl: string | null;
  expiresAt: Date | null;
  metadata: Record<string, unknown> | null;
  collectAddress: boolean;
  collectPhone: boolean;
  singleUse: boolean;
  allowedCurrencies: string[];
  /** Additional informational pricing cards rendered alongside the plans. */
  customCards?: CheckoutCustomCard[];
  createdAt: Date;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkoutSchema: Schema<Checkout> = s.object<Checkout>(
  {
    id: s.string(),
    url: s.string(),
    status: checkoutStatusSchema,
    products: s.array(s.lazy(() => checkoutProductSchema)),
    customerId: s.nullable(s.string()),
    externalCustomerId: s.nullable(s.string()),
    successUrl: s.string(),
    cancelUrl: s.nullable(s.string()),
    expiresAt: s.nullable(s.dateTime()),
    metadata: s.nullable(s.record(s.string(), s.unknown())),
    collectAddress: s.boolean(),
    collectPhone: s.boolean(),
    singleUse: s.boolean(),
    allowedCurrencies: s.array(s.string()),
    customCards: s.optional(s.array(s.lazy(() => checkoutCustomCardSchema))),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
