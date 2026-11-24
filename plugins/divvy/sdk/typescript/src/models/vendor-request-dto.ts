import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountTypeRequestSchema, type AccountTypeRequest } from "./account-type-request.js";
import {
  additionalInfoBillV3VendorsApiSchema,
  type AdditionalInfoBillV3VendorsApi,
} from "./additional-info-bill-v3-vendors-api.js";
import { address4InternalSchema, address4Schema, type Address4 } from "./address4.js";
import {
  autoPayBillV3VendorsApiInternalSchema,
  autoPayBillV3VendorsApiSchema,
  type AutoPayBillV3VendorsApi,
} from "./auto-pay-bill-v3-vendors-api.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import {
  paymentInformation2InternalSchema,
  paymentInformation2Schema,
  type PaymentInformation2,
} from "./payment-information2.js";

/** Create a US vendor */
export type VendorRequestDto = {
  /** Vendor name */
  name: string;
  /** Vendor short name */
  shortName?: string;
  /**
   * User account number set by the vendor. Set this field as the billing statement account number
   * for vendor services such as utility or credit card bills.
   *
   * When you pay the vendor, this value appears on the check memo or electronic payment record.
   */
  accountNumber?: string;
  accountType?: AccountTypeRequest;
  /** Vendor email address */
  email?: string;
  /** Vendor phone number */
  phone?: string;
  address: Address4;
  paymentInformation?: PaymentInformation2;
  additionalInfo?: AdditionalInfoBillV3VendorsApi;
  billCurrency?: CurrencyCode;
  autoPay?: AutoPayBillV3VendorsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const vendorRequestDtoProperties: s.Shape<VendorRequestDto> = {
  name: s.string(),
  shortName: s.optional(s.string()),
  accountNumber: s.optional(s.string()),
  accountType: s.optional(s.lazy(() => accountTypeRequestSchema)),
  email: s.optional(s.string()),
  phone: s.optional(s.string()),
  address: address4InternalSchema,
  paymentInformation: s.optional(s.lazy(() => paymentInformation2InternalSchema)),
  additionalInfo: s.optional(s.lazy(() => additionalInfoBillV3VendorsApiSchema)),
  billCurrency: s.optional(s.lazy(() => currencyCodeSchema)),
  autoPay: s.optional(s.lazy(() => autoPayBillV3VendorsApiInternalSchema)),
};

export const vendorRequestDtoInternalSchema: Schema<VendorRequestDto> = s.object<VendorRequestDto>(
  vendorRequestDtoProperties,
  { additionalProperties: s.json() },
);

export const vendorRequestDtoSchema: Schema<VendorRequestDto> = s.lazySchema(() =>
  s.object<VendorRequestDto>(
    {
      ...vendorRequestDtoProperties,
      name: s.string().check(s.minLength(1), s.maxLength(100)),
      shortName: s.optional(s.string().check(s.maxLength(40))),
      phone: s.optional(s.string().check(s.pattern("^.{0,20}$"))),
      address: address4Schema,
      paymentInformation: s.optional(s.lazy(() => paymentInformation2Schema)),
      autoPay: s.optional(s.lazy(() => autoPayBillV3VendorsApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
