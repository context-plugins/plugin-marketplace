import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { balanceSchema, type Balance } from "./balance.js";
import {
  billingAddressInternalSchema,
  billingAddressSchema,
  type BillingAddress,
} from "./billing-address.js";
import { contactInternalSchema, contactSchema, type Contact } from "./contact.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import {
  customerAccountTypeResponseSchema,
  type CustomerAccountTypeResponse,
} from "./customer-account-type-response.js";
import {
  shippingAddressInternalSchema,
  shippingAddressSchema,
  type ShippingAddress,
} from "./shipping-address.js";

/** Customers response. */
export type CustomerResponseDto = {
  /** BILL-generated ID of the customer. The value begins with `0cu`. */
  id?: string;
  /** Set as `true` if the customer is archived. */
  archived?: boolean;
  /** Customer name */
  name: string;
  /**
   * Customer company name. This field is overridden when you connect with a customer in the BILL
   * network.
   */
  companyName?: string;
  contact?: Contact;
  /** Customer email address */
  email: string;
  /**
   * Customer phone number. This field is overridden when you connect with a customer in the BILL
   * network.
   */
  phone?: string;
  /** Customer fax number */
  fax?: string;
  /** Customer description */
  description?: string;
  invoiceCurrency?: CurrencyCode;
  accountType?: CustomerAccountTypeResponse;
  /**
   * BILL-generated ID of the payment term. Use payment terms to set the number of days the customer
   * has to clear an invoice.
   */
  paymentTermId?: string;
  /** Customer account number. The number appears in customer invoices. */
  accountNumber?: string;
  billingAddress?: BillingAddress;
  shippingAddress?: ShippingAddress;
  balance?: Balance;
  /** Set as `true` if the customer bank account is added */
  hasBankAccount?: boolean;
  /** Set as `true` if your organization is authorized to charge the customer for invoices */
  authorizedToCharge?: boolean;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customerResponseDtoProperties: s.Shape<CustomerResponseDto> = {
  id: s.optional(s.string()),
  archived: s.optional(s.boolean()),
  name: s.string(),
  companyName: s.optional(s.string()),
  contact: s.optional(s.lazy(() => contactInternalSchema)),
  email: s.string(),
  phone: s.optional(s.string()),
  fax: s.optional(s.string()),
  description: s.optional(s.string()),
  invoiceCurrency: s.optional(s.lazy(() => currencyCodeSchema)),
  accountType: s.optional(s.lazy(() => customerAccountTypeResponseSchema)),
  paymentTermId: s.optional(s.string()),
  accountNumber: s.optional(s.string()),
  billingAddress: s.optional(s.lazy(() => billingAddressInternalSchema)),
  shippingAddress: s.optional(s.lazy(() => shippingAddressInternalSchema)),
  balance: s.optional(s.lazy(() => balanceSchema)),
  hasBankAccount: s.optional(s.boolean()),
  authorizedToCharge: s.optional(s.boolean()),
  createdTime: s.optional(s.dateTime()),
  updatedTime: s.optional(s.dateTime()),
};

export const customerResponseDtoInternalSchema: Schema<CustomerResponseDto> = s.object<CustomerResponseDto>(
  customerResponseDtoProperties,
  { additionalProperties: s.json() },
);

export const customerResponseDtoSchema: Schema<CustomerResponseDto> = s.lazySchema(() =>
  s.object<CustomerResponseDto>(
    {
      ...customerResponseDtoProperties,
      contact: s.optional(s.lazy(() => contactSchema)),
      phone: s.optional(s.string().check(s.pattern("^.{0,20}$"))),
      fax: s.optional(s.string().check(s.pattern("^.{0,20}$"))),
      billingAddress: s.optional(s.lazy(() => billingAddressSchema)),
      shippingAddress: s.optional(s.lazy(() => shippingAddressSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
