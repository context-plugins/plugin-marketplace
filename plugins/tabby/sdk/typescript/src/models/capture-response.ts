import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  orderItemResponseInternalSchema,
  orderItemResponseSchema,
  type OrderItemResponse,
} from "./order-item-response.js";

export type CaptureResponse = {
  /** Unique capture ID, assigned by Tabby. */
  id?: string;
  /**
   * Date and time the capture was created, in UTC, and displayed in ISO 8601 datetime format,
   * assigned by Tabby.
   */
  createdAt?: Date;
  /**
   * Total payment amount captured, including tax, shipping, and excluding any discounts. Allows to
   * send up to 2 decimals for AED and SAR, up to 3 decimals for KWD.
   */
  amount: string;
  /** Tax amount captured. @default "0" */
  taxAmount?: string;
  /** Shipping cost captured. @default "0" */
  shippingAmount?: string;
  /** Total discount for the order. Should be positive or zero. @default "0" */
  discountAmount?: string;
  /** Array of objects representing the order items being captured. */
  items?: OrderItemResponse[] | null;
  /** Idempotency key. Used to avoid similar capture requests. */
  referenceId: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const captureResponseProperties: s.Shape<CaptureResponse> = {
  id: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  amount: s.string(),
  taxAmount: s.defaulted(s.string(), "0"),
  shippingAmount: s.defaulted(s.string(), "0"),
  discountAmount: s.defaulted(s.string(), "0"),
  items: s.optionalNullable(s.array(s.lazy(() => orderItemResponseInternalSchema))),
  referenceId: s.nullable(s.string()),
  _keysMap: {
    createdAt: "created_at",
    taxAmount: "tax_amount",
    shippingAmount: "shipping_amount",
    discountAmount: "discount_amount",
    referenceId: "reference_id",
  },
};

export const captureResponseInternalSchema: Schema<CaptureResponse> = s.object<CaptureResponse>(
  captureResponseProperties,
  { additionalProperties: s.json() },
);

export const captureResponseSchema: Schema<CaptureResponse> = s.lazySchema(() =>
  s.object<CaptureResponse>(
    {
      ...captureResponseProperties,
      items: s.optionalNullable(s.array(s.lazy(() => orderItemResponseSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
