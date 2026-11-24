import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { transferInternalSchema, transferSchema, type Transfer } from "./transfer.js";

/** Order-level options including offers and transfers. */
export type OrderRazorpayPaymentLinksApi = {
  /** Offer IDs to apply. Do not combine with accept_partial. */
  offers?: string[];
  /** Auto-transfer payments to linked accounts. */
  transfers?: Transfer[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const orderRazorpayPaymentLinksApiProperties: s.Shape<OrderRazorpayPaymentLinksApi> = {
  offers: s.optional(s.array(s.string())),
  transfers: s.optional(s.array(s.lazy(() => transferInternalSchema))),
};

export const orderRazorpayPaymentLinksApiInternalSchema: Schema<OrderRazorpayPaymentLinksApi> =
  s.object<OrderRazorpayPaymentLinksApi>(orderRazorpayPaymentLinksApiProperties, {
    additionalProperties: s.json(),
  });

export const orderRazorpayPaymentLinksApiSchema: Schema<OrderRazorpayPaymentLinksApi> = s.lazySchema(() =>
  s.object<OrderRazorpayPaymentLinksApi>(
    {
      ...orderRazorpayPaymentLinksApiProperties,
      transfers: s.optional(s.array(s.lazy(() => transferSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
