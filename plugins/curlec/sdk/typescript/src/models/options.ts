import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { checkoutSchema, type Checkout } from "./checkout.js";
import { hostedPageSchema, type HostedPage } from "./hosted-page.js";
import {
  orderRazorpayPaymentLinksApiInternalSchema,
  orderRazorpayPaymentLinksApiSchema,
  type OrderRazorpayPaymentLinksApi,
} from "./order-razorpay-payment-links-api.js";

/** Checkout and payment page customization. */
export type Options = {
  checkout?: Checkout;
  /** Customise labels on the payment details section of the hosted page. */
  hostedPage?: HostedPage;
  /** Order-level options including offers and transfers. */
  order?: OrderRazorpayPaymentLinksApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const optionsProperties: s.Shape<Options> = {
  checkout: s.optional(s.lazy(() => checkoutSchema)),
  hostedPage: s.optional(s.lazy(() => hostedPageSchema)),
  order: s.optional(s.lazy(() => orderRazorpayPaymentLinksApiInternalSchema)),
  _keysMap: {
    hostedPage: "hosted_page",
  },
};

export const optionsInternalSchema: Schema<Options> = s.object<Options>(optionsProperties, {
  additionalProperties: s.json(),
});

export const optionsSchema: Schema<Options> = s.lazySchema(() =>
  s.object<Options>(
    {
      ...optionsProperties,
      order: s.optional(s.lazy(() => orderRazorpayPaymentLinksApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
