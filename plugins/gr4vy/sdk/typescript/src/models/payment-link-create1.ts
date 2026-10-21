import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transactionIntent1Schema, type TransactionIntent1 } from "./transaction-intent1.js";
import {
  transactionPaymentSource1Schema,
  type TransactionPaymentSource1,
} from "./transaction-payment-source1.js";
import { buyerId16Schema, type BuyerId16 } from "./unions/buyer-id16.js";
import { buyer14Schema, type Buyer14 } from "./unions/buyer14.js";
import { cartItems3Schema, type CartItems3 } from "./unions/cart-items3.js";
import { connectionOptions1Schema, type ConnectionOptions1 } from "./unions/connection-options1.js";
import { expiresAtSchema, type ExpiresAt } from "./unions/expires-at.js";
import { externalIdentifier19Schema, type ExternalIdentifier19 } from "./unions/external-identifier19.js";
import { installmentCountSchema, type InstallmentCount } from "./unions/installment-count.js";
import { localeSchema, type Locale } from "./unions/locale.js";
import { merchantBannerUrlSchema, type MerchantBannerUrl } from "./unions/merchant-banner-url.js";
import { merchantColorSchema, type MerchantColor } from "./unions/merchant-color.js";
import { merchantFaviconUrlSchema, type MerchantFaviconUrl } from "./unions/merchant-favicon-url.js";
import { merchantMessageSchema, type MerchantMessage } from "./unions/merchant-message.js";
import { merchantName2Schema, type MerchantName2 } from "./unions/merchant-name2.js";
import {
  merchantTermsAndConditionsUrlSchema,
  type MerchantTermsAndConditionsUrl,
} from "./unions/merchant-terms-and-conditions-url.js";
import { merchantUrl4Schema, type MerchantUrl4 } from "./unions/merchant-url4.js";
import { metadata6Schema, type Metadata6 } from "./unions/metadata6.js";
import { returnUrlSchema, type ReturnUrl } from "./unions/return-url.js";
import {
  statementDescriptor1ModelSchema,
  type StatementDescriptor1Model,
} from "./unions/statement-descriptor1-model.js";

/** The payment link to create */
export type PaymentLinkCreate1 = {
  /** The guest buyer for the payment link. */
  buyer?: Buyer14;
  /** The expiration date and time for the payment link. */
  expiresAt?: ExpiresAt;
  /** Connection options for the payment link. */
  connectionOptions?: ConnectionOptions1;
  /** The merchant reference for the payment link. */
  externalIdentifier?: ExternalIdentifier19;
  /** The statement descriptor for the payment link. */
  statementDescriptor?: StatementDescriptor1Model;
  /** The locale for the payment link. */
  locale?: Locale;
  /** The merchant's display name. */
  merchantName?: MerchantName2;
  /** The merchant's website URL. */
  merchantUrl?: MerchantUrl4;
  /** The merchant's banner image URL. */
  merchantBannerUrl?: MerchantBannerUrl;
  /** The merchant's brand color. */
  merchantColor?: MerchantColor;
  /** A message from the merchant. */
  merchantMessage?: MerchantMessage;
  /** URL to the merchant's terms and conditions. */
  merchantTermsAndConditionsUrl?: MerchantTermsAndConditionsUrl;
  /** URL to the merchant's favicon. */
  merchantFaviconUrl?: MerchantFaviconUrl;
  /** The amount for the payment link. */
  amount: number;
  /** The country code for the payment link. */
  country: string;
  /** The currency code for the payment link. */
  currency: string;
  /** The transaction intent for the payment link. */
  intent?: TransactionIntent1;
  /** The return URL after payment completion. */
  returnUrl?: ReturnUrl;
  /** The cart items for the payment link. */
  cartItems?: CartItems3;
  /** Arbitrary metadata for the payment link. */
  metadata?: Metadata6;
  /** The payment source for the payment link. */
  paymentSource?: TransactionPaymentSource1;
  /** Whether to store the payment method for future use. @default false */
  store?: boolean;
  /**
   * The ID of the buyer to associate the payment method with. Note: When `buyer_id` is provided,
   * the payment link should be treated as a secret as it will allow the user to manage payment
   * methods for the associated buyer.
   */
  buyerId?: BuyerId16;
  /** The number of installments a buyer is required to make. */
  installmentCount?: InstallmentCount;
};

export const paymentLinkCreate1Schema: Schema<PaymentLinkCreate1> = s.object<PaymentLinkCreate1>({
  buyer: s.optional(s.lazy(() => buyer14Schema)),
  expiresAt: s.optional(s.lazy(() => expiresAtSchema)),
  connectionOptions: s.optional(s.lazy(() => connectionOptions1Schema)),
  externalIdentifier: s.optional(s.lazy(() => externalIdentifier19Schema)),
  statementDescriptor: s.optional(s.lazy(() => statementDescriptor1ModelSchema)),
  locale: s.optional(s.lazy(() => localeSchema)),
  merchantName: s.optional(s.lazy(() => merchantName2Schema)),
  merchantUrl: s.optional(s.lazy(() => merchantUrl4Schema)),
  merchantBannerUrl: s.optional(s.lazy(() => merchantBannerUrlSchema)),
  merchantColor: s.optional(s.lazy(() => merchantColorSchema)),
  merchantMessage: s.optional(s.lazy(() => merchantMessageSchema)),
  merchantTermsAndConditionsUrl: s.optional(s.lazy(() => merchantTermsAndConditionsUrlSchema)),
  merchantFaviconUrl: s.optional(s.lazy(() => merchantFaviconUrlSchema)),
  amount: s.int(),
  country: s.string(),
  currency: s.string(),
  intent: s.optional(s.lazy(() => transactionIntent1Schema)),
  returnUrl: s.optional(s.lazy(() => returnUrlSchema)),
  cartItems: s.optional(s.lazy(() => cartItems3Schema)),
  metadata: s.optional(s.lazy(() => metadata6Schema)),
  paymentSource: s.optional(s.lazy(() => transactionPaymentSource1Schema)),
  store: s.defaulted(s.boolean(), false),
  buyerId: s.optional(s.lazy(() => buyerId16Schema)),
  installmentCount: s.optional(s.lazy(() => installmentCountSchema)),
  _keysMap: {
    expiresAt: "expires_at",
    connectionOptions: "connection_options",
    externalIdentifier: "external_identifier",
    statementDescriptor: "statement_descriptor",
    merchantName: "merchant_name",
    merchantUrl: "merchant_url",
    merchantBannerUrl: "merchant_banner_url",
    merchantColor: "merchant_color",
    merchantMessage: "merchant_message",
    merchantTermsAndConditionsUrl: "merchant_terms_and_conditions_url",
    merchantFaviconUrl: "merchant_favicon_url",
    returnUrl: "return_url",
    cartItems: "cart_items",
    paymentSource: "payment_source",
    buyerId: "buyer_id",
    installmentCount: "installment_count",
  },
});
