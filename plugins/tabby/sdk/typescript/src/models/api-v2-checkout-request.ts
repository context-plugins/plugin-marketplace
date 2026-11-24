import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  checkoutCreationInternalSchema,
  checkoutCreationSchema,
  type CheckoutCreation,
} from "./checkout-creation.js";
import { languageCodeSchema, type LanguageCode } from "./language-code.js";
import { merchantUrlsInternalSchema, merchantUrlsSchema, type MerchantUrls } from "./merchant-urls.js";

export type ApiV2CheckoutRequest = {
  /** Payment object associated with the current session. */
  payment: CheckoutCreation;
  /** Session language, used to launch HPP with desired language. */
  lang: LanguageCode;
  /** Please contact your integration manager to get the merchant code. */
  merchantCode: string;
  /**
   * Used for redirecting the customer after Tabby Checkout flow. Required for Web integration,
   * optional for Mobile App integration.
   */
  merchantUrls?: MerchantUrls;
  /**
   * If you already have `token`, you can pass it there. Authorization header still requires Secret
   * Key.
   */
  token?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV2CheckoutRequestProperties: s.Shape<ApiV2CheckoutRequest> = {
  payment: checkoutCreationInternalSchema,
  lang: languageCodeSchema,
  merchantCode: s.string(),
  merchantUrls: s.optional(s.lazy(() => merchantUrlsInternalSchema)),
  token: s.optional(s.string()),
  _keysMap: {
    merchantCode: "merchant_code",
    merchantUrls: "merchant_urls",
  },
};

export const apiV2CheckoutRequestInternalSchema: Schema<ApiV2CheckoutRequest> =
  s.object<ApiV2CheckoutRequest>(apiV2CheckoutRequestProperties, { additionalProperties: s.json() });

export const apiV2CheckoutRequestSchema: Schema<ApiV2CheckoutRequest> = s.lazySchema(() =>
  s.object<ApiV2CheckoutRequest>(
    {
      ...apiV2CheckoutRequestProperties,
      payment: checkoutCreationSchema,
      merchantUrls: s.optional(s.lazy(() => merchantUrlsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
