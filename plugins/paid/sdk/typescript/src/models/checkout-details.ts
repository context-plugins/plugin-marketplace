import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { checkoutCustomCardSchema, type CheckoutCustomCard } from "./checkout-custom-card.js";
import { checkoutProductSchema, type CheckoutProduct } from "./checkout-product.js";
import { checkoutSelectedProductSchema, type CheckoutSelectedProduct } from "./checkout-selected-product.js";
import { checkoutStatusSchema, type CheckoutStatus } from "./checkout-status.js";

export type CheckoutDetails = {
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
  /** The resulting order ID once checkout has completed. Null until an order is created. */
  orderId: string | null;
  /**
   * The product and plan the customer selected, once checkout completes. Null before completion.
   */
  selectedProduct: CheckoutSelectedProduct;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkoutDetailsSchema: Schema<CheckoutDetails> = s.object<CheckoutDetails>(
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
    orderId: s.nullable(s.string()),
    selectedProduct: checkoutSelectedProductSchema,
  },
  { additionalProperties: s.json() },
);
