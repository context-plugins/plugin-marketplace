import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companySchema, type Company } from "./company.js";

export type ExtraParameterParameters = {
  /**
   * The [Apple Pay
   * Payment](https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypayment) token
   * object (encoded as JSON) that is part of the result of authorizing a payment request. The token
   * contains the payment information needed to authorize the payment.
   *
   * The object should be passed encoded in a JSON string. For example: `{"paymentData": {"version":
   * "EC_v1", "data": "vK3BbrCbI/...."}}`
   */
  applePayPaymentToken?: string;
  /**
   * The date the bank transfer payment should expire, in `YYYY-MM-DD` format. The minimum date is
   * tomorrow, and the maximum date is 100 days after tomorrow. Sending `null` has the same effect
   * as omitting the field.
   *
   * After you created the payment, you can still update the `dueDate` via [Update
   * payment](update-payment).
   *
   * <Callout icon="📘" theme="info"> If `dueDate` falls out of business days, it will be set to the
   * **next business day** and the payment will expire at 00:00 (on the following business day).
   * Example: `dueDate` is `2025-12-06` (Saturday) -> `dueDate` will be set for `2025-12-08`,
   * `expiresAt` `2025-12-09 00:00` </Callout>
   */
  dueDate?: string | null;
  /**
   * Billie is a business-to-business (B2B) payment method. It requires extra information to
   * identify the organization that is completing the payment. It is recommended to include these
   * parameters up front for a seamless flow. Otherwise, Billie will ask the customer to complete
   * the missing fields during checkout.
   *
   * * `billingAddress.organizationName`: The organization's name.
   * * `registrationNumber` _string_: The organization's registration number.
   * * `vatNumber` _string_: The organization's VAT number.
   * * `entityType` _string_: The organization's entity type.
   */
  company?: Company;
  /**
   * When creating credit card payments using Mollie Components, you need to provide the card token
   * you received from the card component in this field. The token represents the customer's card
   * information needed to complete the payment. **Note:** field only valid for `oneoff` and `first`
   * payments. For recurring payments, the `customerId` alone is enough.
   */
  cardToken?: string;
  /**
   * The Google Pay payment token object (encoded as JSON) returned by the Google Pay SDK after the
   * customer authorizes the payment. The token contains the payment information needed to complete
   * the payment.
   *
   * The object should be passed encoded in a JSON string.
   */
  googlePayPaymentToken?: string;
  /**
   * The card token you received from the card component of Mollie Components. The token represents
   * the customer's card information needed to complete the payment.
   */
  voucherNumber?: string;
  /** The PIN on the gift card. You can supply this to prefill the PIN, if the card has any. */
  voucherPin?: string;
  /**
   * The customer's date of birth. If not provided via the API, iDeal in3 will ask the customer to
   * provide it during the payment process.
   */
  consumerDateOfBirth?: string;
  /**
   * For some industries, additional purchase information can be sent to Klarna to increase the
   * authorization rate. You can submit your extra data in this field if you have agreed upon this
   * with Klarna. This field should be an object containing any of the allowed keys and sub-objects
   * described at the <Anchor label="Klarna Developer Documentation" target="_blank"
   * href="https://docs.klarna.com/acquirer/mollie/api/extra-merchant-data/">Klarna Developer
   * Documentation</Anchor>.
   *
   * Reach out to your account manager at Mollie to enable this feature with Klarna, and to agree on
   * which fields you can send.
   */
  extraMerchantData?: Record<string, unknown>;
  /**
   * The unique ID you have used for the PayPal fraud library. You should include this if you use
   * PayPal for an on-demand payment.
   */
  sessionId?: string;
  /**
   * Indicate if you are about to deliver digital goods, such as for example a software license.
   * Setting this parameter can have consequences for your PayPal Seller Protection. Refer to
   * [PayPal's documentation](https://www.paypal.com/us/webapps/mpp/ua/seller-protection) for more
   * information.
   */
  digitalGoods?: boolean;
  /**
   * Used by paysafecard for customer identification across payments. When you generate a customer
   * reference yourself, make sure not to put personal identifiable information or IP addresses in
   * the customer reference directly.
   *
   * If not provided, Mollie will use a hashed version of the customer's IP address.
   */
  customerReference?: string;
  /**
   * The ID of the terminal device where you want to initiate the payment on. See also the
   * [Terminals API](ref:terminals-api).
   */
  terminalId?: string;
};

export const extraParameterParametersSchema: Schema<ExtraParameterParameters> =
  s.object<ExtraParameterParameters>({
    applePayPaymentToken: s.optional(s.string()),
    dueDate: s.optionalNullable(s.string()),
    company: s.optional(s.lazy(() => companySchema)),
    cardToken: s.optional(s.string()),
    googlePayPaymentToken: s.optional(s.string()),
    voucherNumber: s.optional(s.string()),
    voucherPin: s.optional(s.string()),
    consumerDateOfBirth: s.optional(s.dateOnly()),
    extraMerchantData: s.optional(s.record(s.string(), s.unknown())),
    sessionId: s.optional(s.string()),
    digitalGoods: s.optional(s.boolean()),
    customerReference: s.optional(s.string()),
    terminalId: s.optional(s.string()),
  });
