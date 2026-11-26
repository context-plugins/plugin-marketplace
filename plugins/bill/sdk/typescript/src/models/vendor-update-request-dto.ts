import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountTypeRequestSchema, type AccountTypeRequest } from "./account-type-request.js";
import {
  additionalInfoBillV3VendorsApiSchema,
  type AdditionalInfoBillV3VendorsApi,
} from "./additional-info-bill-v3-vendors-api.js";
import { address1InternalSchema, address1Schema, type Address1 } from "./address1.js";
import {
  autoPayBillV3VendorsApiInternalSchema,
  autoPayBillV3VendorsApiSchema,
  type AutoPayBillV3VendorsApi,
} from "./auto-pay-bill-v3-vendors-api.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import {
  paymentInformationBillV3VendorsApiInternalSchema,
  paymentInformationBillV3VendorsApiSchema,
  type PaymentInformationBillV3VendorsApi,
} from "./payment-information-bill-v3-vendors-api.js";

/** Update a vendor */
export type VendorUpdateRequestDto = {
  /** Vendor name */
  name?: string;
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
  address?: Address1;
  paymentInformation?: PaymentInformationBillV3VendorsApi;
  additionalInfo?: AdditionalInfoBillV3VendorsApi;
  billCurrency?: CurrencyCode;
  autoPay?: AutoPayBillV3VendorsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const vendorUpdateRequestDtoProperties: s.Shape<VendorUpdateRequestDto> = {
  name: s.optional(s.string()),
  shortName: s.optional(s.string()),
  accountNumber: s.optional(s.string()),
  accountType: s.optional(s.lazy(() => accountTypeRequestSchema)),
  email: s.optional(s.string()),
  phone: s.optional(s.string()),
  address: s.optional(s.lazy(() => address1InternalSchema)),
  paymentInformation: s.optional(s.lazy(() => paymentInformationBillV3VendorsApiInternalSchema)),
  additionalInfo: s.optional(s.lazy(() => additionalInfoBillV3VendorsApiSchema)),
  billCurrency: s.optional(s.lazy(() => currencyCodeSchema)),
  autoPay: s.optional(s.lazy(() => autoPayBillV3VendorsApiInternalSchema)),
};

export const vendorUpdateRequestDtoInternalSchema: Schema<VendorUpdateRequestDto> =
  s.object<VendorUpdateRequestDto>(vendorUpdateRequestDtoProperties, { additionalProperties: s.json() });

export const vendorUpdateRequestDtoSchema: Schema<VendorUpdateRequestDto> = s.lazySchema(() =>
  s.object<VendorUpdateRequestDto>(
    {
      ...vendorUpdateRequestDtoProperties,
      name: s.optional(s.string().check(s.maxLength(100))),
      shortName: s.optional(s.string().check(s.maxLength(40))),
      address: s.optional(s.lazy(() => address1Schema)),
      paymentInformation: s.optional(s.lazy(() => paymentInformationBillV3VendorsApiSchema)),
      autoPay: s.optional(s.lazy(() => autoPayBillV3VendorsApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
