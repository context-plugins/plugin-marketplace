import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  billingAddress1InternalSchema,
  billingAddress1Schema,
  type BillingAddress1,
} from "./billing-address1.js";
import { contactInternalSchema, contactSchema, type Contact } from "./contact.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import {
  customerAccountTypeRequestSchema,
  type CustomerAccountTypeRequest,
} from "./customer-account-type-request.js";
import {
  shippingAddress1InternalSchema,
  shippingAddress1Schema,
  type ShippingAddress1,
} from "./shipping-address1.js";

/** Update a customer */
export type CustomerUpdateRequestDto = {
  /** Customer name */
  name?: string;
  /** Customer company name */
  companyName?: string;
  contact?: Contact;
  /** Customer email address */
  email?: string;
  /** Customer phone number */
  phone?: string;
  /** Customer fax number */
  fax?: string;
  /** Customer description */
  description?: string;
  invoiceCurrency?: CurrencyCode;
  accountType?: CustomerAccountTypeRequest;
  /**
   * BILL-generated ID of the payment term. Use payment terms to set the number of days the customer
   * has to clear an invoice.
   */
  paymentTermId?: string;
  /** Customer account number. The number appears in customer invoices. */
  accountNumber?: string;
  billingAddress?: BillingAddress1;
  shippingAddress?: ShippingAddress1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customerUpdateRequestDtoProperties: s.Shape<CustomerUpdateRequestDto> = {
  name: s.optional(s.string()),
  companyName: s.optional(s.string()),
  contact: s.optional(s.lazy(() => contactInternalSchema)),
  email: s.optional(s.string()),
  phone: s.optional(s.string()),
  fax: s.optional(s.string()),
  description: s.optional(s.string()),
  invoiceCurrency: s.optional(s.lazy(() => currencyCodeSchema)),
  accountType: s.optional(s.lazy(() => customerAccountTypeRequestSchema)),
  paymentTermId: s.optional(s.string()),
  accountNumber: s.optional(s.string()),
  billingAddress: s.optional(s.lazy(() => billingAddress1InternalSchema)),
  shippingAddress: s.optional(s.lazy(() => shippingAddress1InternalSchema)),
};

export const customerUpdateRequestDtoInternalSchema: Schema<CustomerUpdateRequestDto> =
  s.object<CustomerUpdateRequestDto>(customerUpdateRequestDtoProperties, { additionalProperties: s.json() });

export const customerUpdateRequestDtoSchema: Schema<CustomerUpdateRequestDto> = s.lazySchema(() =>
  s.object<CustomerUpdateRequestDto>(
    {
      ...customerUpdateRequestDtoProperties,
      name: s.optional(s.string().check(s.maxLength(100))),
      companyName: s.optional(s.string().check(s.maxLength(250))),
      contact: s.optional(s.lazy(() => contactSchema)),
      phone: s.optional(s.string().check(s.pattern("^.{0,20}$"))),
      fax: s.optional(s.string().check(s.pattern("^.{0,20}$"))),
      description: s.optional(s.string().check(s.maxLength(4000))),
      accountNumber: s.optional(s.string().check(s.maxLength(100))),
      billingAddress: s.optional(s.lazy(() => billingAddress1Schema)),
      shippingAddress: s.optional(s.lazy(() => shippingAddress1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
