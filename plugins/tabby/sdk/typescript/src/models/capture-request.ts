import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { orderItemInternalSchema, orderItemSchema, type OrderItem } from "./order-item.js";

export type CaptureRequest = {
  /**
   * Total payment amount captured, including tax, shipping, and excluding any discounts. Allows to
   * send up to 2 decimals for AED and SAR, up to 3 decimals for KWD.
   */
  amount: string;
  /** Idempotency key. Used to avoid similar capture requests. @default "string" */
  referenceId?: string;
  /** Tax amount captured. @default "0.00" */
  taxAmount?: string;
  /** Shipping cost captured. @default "0.00" */
  shippingAmount?: string;
  /** Total discount for the order. Should be positive or zero. @default "0.00" */
  discountAmount?: string;
  /** Array of objects representing the order items being captured. */
  items?: OrderItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const captureRequestProperties: s.Shape<CaptureRequest> = {
  amount: s.string(),
  referenceId: s.defaulted(s.string(), "string"),
  taxAmount: s.defaulted(s.string(), "0.00"),
  shippingAmount: s.defaulted(s.string(), "0.00"),
  discountAmount: s.defaulted(s.string(), "0.00"),
  items: s.optional(s.array(s.lazy(() => orderItemInternalSchema))),
  _keysMap: {
    referenceId: "reference_id",
    taxAmount: "tax_amount",
    shippingAmount: "shipping_amount",
    discountAmount: "discount_amount",
  },
};

export const captureRequestInternalSchema: Schema<CaptureRequest> = s.object<CaptureRequest>(
  captureRequestProperties,
  { additionalProperties: s.json() },
);

export const captureRequestSchema: Schema<CaptureRequest> = s.lazySchema(() =>
  s.object<CaptureRequest>(
    {
      ...captureRequestProperties,
      items: s.optional(s.array(s.lazy(() => orderItemSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
