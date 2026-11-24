import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  billingAddress2InternalSchema,
  billingAddress2Schema,
  type BillingAddress2,
} from "./billing-address2.js";
import { contactInternalSchema, contactSchema, type Contact } from "./contact.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import {
  customerAccountTypeRequestSchema,
  type CustomerAccountTypeRequest,
} from "./customer-account-type-request.js";
import {
  shippingAddress2InternalSchema,
  shippingAddress2Schema,
  type ShippingAddress2,
} from "./shipping-address2.js";

/** Create a customer */
export type CustomerCreateRequestDto = {
  /** Customer name */
  name: string;
  /** Customer company name */
  companyName?: string;
  contact?: Contact;
  /** Customer email address */
  email: string;
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
  billingAddress?: BillingAddress2;
  shippingAddress?: ShippingAddress2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customerCreateRequestDtoProperties: s.Shape<CustomerCreateRequestDto> = {
  name: s.string(),
  companyName: s.optional(s.string()),
  contact: s.optional(s.lazy(() => contactInternalSchema)),
  email: s.string(),
  phone: s.optional(s.string()),
  fax: s.optional(s.string()),
  description: s.optional(s.string()),
  invoiceCurrency: s.optional(s.lazy(() => currencyCodeSchema)),
  accountType: s.optional(s.lazy(() => customerAccountTypeRequestSchema)),
  paymentTermId: s.optional(s.string()),
  accountNumber: s.optional(s.string()),
  billingAddress: s.optional(s.lazy(() => billingAddress2InternalSchema)),
  shippingAddress: s.optional(s.lazy(() => shippingAddress2InternalSchema)),
};

export const customerCreateRequestDtoInternalSchema: Schema<CustomerCreateRequestDto> =
  s.object<CustomerCreateRequestDto>(customerCreateRequestDtoProperties, { additionalProperties: s.json() });

export const customerCreateRequestDtoSchema: Schema<CustomerCreateRequestDto> = s.lazySchema(() =>
  s.object<CustomerCreateRequestDto>(
    {
      ...customerCreateRequestDtoProperties,
      name: s.string().check(s.minLength(1), s.maxLength(100)),
      companyName: s.optional(s.string().check(s.maxLength(250))),
      contact: s.optional(s.lazy(() => contactSchema)),
      email: s.string().check(s.minLength(1)),
      phone: s.optional(s.string().check(s.pattern("^.{0,20}$"))),
      fax: s.optional(s.string().check(s.pattern("^.{0,20}$"))),
      description: s.optional(s.string().check(s.maxLength(4000))),
      accountNumber: s.optional(s.string().check(s.maxLength(100))),
      billingAddress: s.optional(s.lazy(() => billingAddress2Schema)),
      shippingAddress: s.optional(s.lazy(() => shippingAddress2Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
