import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentLinkStatus2Schema, type PaymentLinkStatus2 } from "./payment-link-status2.js";
import { transactionIntent1Schema, type TransactionIntent1 } from "./transaction-intent1.js";
import {
  transactionPaymentSource1Schema,
  type TransactionPaymentSource1,
} from "./transaction-payment-source1.js";
import { Type46, type46Schema } from "./type46.js";
import { buyerId15Schema, type BuyerId15 } from "./unions/buyer-id15.js";
import { buyer13Schema, type Buyer13 } from "./unions/buyer13.js";
import { cartItems3Schema, type CartItems3 } from "./unions/cart-items3.js";
import { connectionOptionsSchema, type ConnectionOptions } from "./unions/connection-options.js";
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
import { shippingDetails11Schema, type ShippingDetails11 } from "./unions/shipping-details11.js";
import {
  statementDescriptor1ModelSchema,
  type StatementDescriptor1Model,
} from "./unions/statement-descriptor1-model.js";

export type PaymentLink = {
  /** The unique identifier for the payment link. */
  id: string;
  /** Always `payment-link`. @default Type46.PaymentLink */
  type?: Type46;
  /** The URL for the payment link. */
  url: string;
  /** The expiration date and time for the payment link. */
  expiresAt?: ExpiresAt;
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
  intent: TransactionIntent1;
  /** The return URL after payment completion. */
  returnUrl?: ReturnUrl;
  /** The cart items for the payment link. */
  cartItems: CartItems3;
  /** Arbitrary metadata for the payment link. */
  metadata?: Metadata6;
  /** The payment source for the payment link. */
  paymentSource: TransactionPaymentSource1;
  /** The date and time the payment link was created. */
  createdAt: Date;
  /** The date and time the payment link was last updated. */
  updatedAt: Date;
  /** The status of the payment link. */
  status: PaymentLinkStatus2;
  /** The buyer associated with the payment link. */
  buyer?: Buyer13;
  /** The shipping details for the payment link. */
  shippingDetails?: ShippingDetails11;
  /** The connection options for the payment link. */
  connectionOptions?: ConnectionOptions;
  /** Whether the payment method was stored. @default false */
  store?: boolean;
  /** The ID of the buyer to associate with the stored payment method. */
  buyerId?: BuyerId15;
  /** The number of installments a buyer is required to make. */
  installmentCount?: InstallmentCount;
};

export const paymentLinkSchema: Schema<PaymentLink> = s.object<PaymentLink>({
  id: s.string(),
  type: s.defaulted(type46Schema, Type46.PaymentLink),
  url: s.string(),
  expiresAt: s.optional(s.lazy(() => expiresAtSchema)),
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
  intent: transactionIntent1Schema,
  returnUrl: s.optional(s.lazy(() => returnUrlSchema)),
  cartItems: cartItems3Schema,
  metadata: s.optional(s.lazy(() => metadata6Schema)),
  paymentSource: transactionPaymentSource1Schema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  status: paymentLinkStatus2Schema,
  buyer: s.optional(s.lazy(() => buyer13Schema)),
  shippingDetails: s.optional(s.lazy(() => shippingDetails11Schema)),
  connectionOptions: s.optional(s.lazy(() => connectionOptionsSchema)),
  store: s.defaulted(s.boolean(), false),
  buyerId: s.optional(s.lazy(() => buyerId15Schema)),
  installmentCount: s.optional(s.lazy(() => installmentCountSchema)),
  _keysMap: {
    expiresAt: "expires_at",
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
    createdAt: "created_at",
    updatedAt: "updated_at",
    shippingDetails: "shipping_details",
    connectionOptions: "connection_options",
    buyerId: "buyer_id",
    installmentCount: "installment_count",
  },
});
