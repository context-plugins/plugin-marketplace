import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { additionalInfoSchema, type AdditionalInfo } from "./additional-info.js";
import {
  addressConnectEventsSubscriptionsApiSchema,
  type AddressConnectEventsSubscriptionsApi,
} from "./address-connect-events-subscriptions-api.js";
import { autoPaySchema, type AutoPay } from "./auto-pay.js";
import {
  balanceConnectEventsSubscriptionsApiSchema,
  type BalanceConnectEventsSubscriptionsApi,
} from "./balance-connect-events-subscriptions-api.js";
import {
  paymentInformationConnectEventsSubscriptionsApiSchema,
  type PaymentInformationConnectEventsSubscriptionsApi,
} from "./payment-information-connect-events-subscriptions-api.js";

export type Vendor1 = {
  id?: string;
  name?: string;
  shortName?: string;
  archived?: boolean;
  paymentNetworkId?: string;
  rppsId?: string;
  networkStatus?: string;
  /** Vendor address information. */
  address?: AddressConnectEventsSubscriptionsApi;
  /** Vendor payment information. */
  paymentInformation?: PaymentInformationConnectEventsSubscriptionsApi;
  createdTime?: Date;
  updatedTime?: Date;
  accountNumber?: string;
  email?: string;
  phone?: string;
  recurringPayments?: boolean;
  billCurrency?: string;
  /** Vendor auto-pay information. */
  autoPay?: AutoPay;
  /** Vendor account balance information. */
  balance?: BalanceConnectEventsSubscriptionsApi;
  /** Vendor additional information. */
  additionalInfo?: AdditionalInfo;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vendor1Schema: Schema<Vendor1> = s.object<Vendor1>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    shortName: s.optional(s.string()),
    archived: s.optional(s.boolean()),
    paymentNetworkId: s.optional(s.string()),
    rppsId: s.optional(s.string()),
    networkStatus: s.optional(s.string()),
    address: s.optional(s.lazy(() => addressConnectEventsSubscriptionsApiSchema)),
    paymentInformation: s.optional(s.lazy(() => paymentInformationConnectEventsSubscriptionsApiSchema)),
    createdTime: s.optional(s.dateTime()),
    updatedTime: s.optional(s.dateTime()),
    accountNumber: s.optional(s.string()),
    email: s.optional(s.string()),
    phone: s.optional(s.string()),
    recurringPayments: s.optional(s.boolean()),
    billCurrency: s.optional(s.string()),
    autoPay: s.optional(s.lazy(() => autoPaySchema)),
    balance: s.optional(s.lazy(() => balanceConnectEventsSubscriptionsApiSchema)),
    additionalInfo: s.optional(s.lazy(() => additionalInfoSchema)),
  },
  { additionalProperties: s.json() },
);
