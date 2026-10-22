import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalDataSchema, type AdditionalData } from "./unions/additional-data.js";
import { brandNameSchema, type BrandName } from "./unions/brand-name.js";
import { landingPageSchema, type LandingPage } from "./unions/landing-page.js";
import { locale1Schema, type Locale1 } from "./unions/locale1.js";
import {
  orderUpdateCallbackConfigSchema,
  type OrderUpdateCallbackConfig,
} from "./unions/order-update-callback-config.js";
import { shippingPreferenceSchema, type ShippingPreference } from "./unions/shipping-preference.js";
import { shippingSchema, type Shipping } from "./unions/shipping.js";
import { userActionSchema, type UserAction } from "./unions/user-action.js";

export type PaypalOptions = {
  /** Configuration for server-side callbacks during the PayPal checkout flow. */
  orderUpdateCallbackConfig?: OrderUpdateCallbackConfig;
  /**
   * Additional Set Transaction Context Values (STC) to be sent to PayPal as part of the
   * transaction.
   */
  additionalData?: AdditionalData;
  /** Shipping information to be passed to the PayPal API. */
  shipping?: Shipping;
  /**
   * Customizes the PayPal Checkout button text. Use `PAY_NOW` to show a pay now button, or
   * `CONTINUE` to show a continue button for deferred payments.
   */
  userAction?: UserAction;
  /**
   * Controls the shipping address display in the PayPal Checkout flow. Use `GET_FROM_FILE` to use
   * the shipping address from the PayPal account, `NO_SHIPPING` to hide shipping address fields, or
   * `SET_PROVIDED_ADDRESS` to use the shipping address provided in the request.
   */
  shippingPreference?: ShippingPreference;
  /** The merchant brand name that appears in the PayPal Checkout flow. Maximum 127 characters. */
  brandName?: BrandName;
  /**
   * The type of landing page to display on the PayPal Checkout. Use `LOGIN` to show the PayPal
   * login page, `GUEST_CHECKOUT` to show the guest checkout page, or `NO_PREFERENCE` to let PayPal
   * decide.
   */
  landingPage?: LandingPage;
  /**
   * The BCP 47 locale used to localize the PayPal Checkout page. For example, `en-US` or `fr-FR`.
   */
  locale?: Locale1;
};

export const paypalOptionsSchema: Schema<PaypalOptions> = s.object<PaypalOptions>({
  orderUpdateCallbackConfig: s.optional(s.lazy(() => orderUpdateCallbackConfigSchema)),
  additionalData: s.optional(s.lazy(() => additionalDataSchema)),
  shipping: s.optional(s.lazy(() => shippingSchema)),
  userAction: s.optional(s.lazy(() => userActionSchema)),
  shippingPreference: s.optional(s.lazy(() => shippingPreferenceSchema)),
  brandName: s.optional(s.lazy(() => brandNameSchema)),
  landingPage: s.optional(s.lazy(() => landingPageSchema)),
  locale: s.optional(s.lazy(() => locale1Schema)),
  _keysMap: {
    orderUpdateCallbackConfig: "order_update_callback_config",
    additionalData: "additional_data",
    userAction: "user_action",
    shippingPreference: "shipping_preference",
    brandName: "brand_name",
    landingPage: "landing_page",
  },
});
