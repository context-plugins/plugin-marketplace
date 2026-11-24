import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paymentLinkInternalSchema, paymentLinkSchema, type PaymentLink } from "./payment-link.js";

export type PaymentLinksResponse = {
  paymentLinks?: PaymentLink[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentLinksResponseProperties: s.Shape<PaymentLinksResponse> = {
  paymentLinks: s.optional(s.array(s.lazy(() => paymentLinkInternalSchema))),
  _keysMap: {
    paymentLinks: "payment_links",
  },
};

export const paymentLinksResponseInternalSchema: Schema<PaymentLinksResponse> =
  s.object<PaymentLinksResponse>(paymentLinksResponseProperties, { additionalProperties: s.json() });

export const paymentLinksResponseSchema: Schema<PaymentLinksResponse> = s.lazySchema(() =>
  s.object<PaymentLinksResponse>(
    {
      ...paymentLinksResponseProperties,
      paymentLinks: s.optional(s.array(s.lazy(() => paymentLinkSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
