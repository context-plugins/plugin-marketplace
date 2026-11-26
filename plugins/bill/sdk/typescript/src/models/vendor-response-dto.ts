import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountTypeResponseSchema, type AccountTypeResponse } from "./account-type-response.js";
import { additionalInfo1Schema, type AdditionalInfo1 } from "./additional-info1.js";
import { address2InternalSchema, address2Schema, type Address2 } from "./address2.js";
import {
  autoPayBillV3VendorsApiInternalSchema,
  autoPayBillV3VendorsApiSchema,
  type AutoPayBillV3VendorsApi,
} from "./auto-pay-bill-v3-vendors-api.js";
import { balance2Schema, type Balance2 } from "./balance2.js";
import { currencyCodeSchema, type CurrencyCode } from "./currency-code.js";
import { networkInvitationStatusSchema, type NetworkInvitationStatus } from "./network-invitation-status.js";
import {
  paymentInformation1InternalSchema,
  paymentInformation1Schema,
  type PaymentInformation1,
} from "./payment-information1.js";
import {
  vendorBankAccountStatusResponseSchema,
  type VendorBankAccountStatusResponse,
} from "./vendor-bank-account-status-response.js";

/** Vendors response. */
export type VendorResponseDto = {
  /** BILL-generated ID of the vendor. The value begins with `009`. */
  id?: string;
  /** Set as `true` if the vendor is archived */
  archived: boolean;
  /** Vendor name */
  name?: string;
  /** Vendor short name */
  shortName?: string;
  /**
   * User account number set by the vendor.
   *
   * When you pay the vendor, this value appears on the check memo or electronic payment record.
   */
  accountNumber?: string;
  accountType?: AccountTypeResponse;
  /** Vendor email address */
  email?: string;
  /**
   * Vendor phone number. This field is overridden when you connect with a vendor in the BILL
   * network.
   */
  phone?: string;
  address?: Address2;
  paymentInformation?: PaymentInformation1;
  additionalInfo?: AdditionalInfo1;
  /**
   * BILL-generated ID of the verified national vendor (if the vendor is a verified national vendor)
   */
  rppsId?: string;
  bankAccountStatus?: VendorBankAccountStatusResponse;
  /** Set as `true` if the vendor has recurring payments enabled */
  recurringPayments?: boolean;
  billCurrency?: CurrencyCode;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  balance?: Balance2;
  autoPay?: AutoPayBillV3VendorsApi;
  networkStatus?: NetworkInvitationStatus;
  /** Vendor Payment Network ID (PNI). Each vendor with a BILL account is assigned a unique PNI. */
  paymentNetworkId?: string;
  /**
   * Relevance score from the fuzzy name search that matched this vendor. This field appears in the
   * response only for vendors matched by an `fz` filter on `name`.
   *
   * Scores are comparable only among the results of a single search. Do not compare them across
   * searches or against a fixed threshold.
   */
  relevanceScore?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const vendorResponseDtoProperties: s.Shape<VendorResponseDto> = {
  id: s.optional(s.string()),
  archived: s.boolean(),
  name: s.optional(s.string()),
  shortName: s.optional(s.string()),
  accountNumber: s.optional(s.string()),
  accountType: s.optional(s.lazy(() => accountTypeResponseSchema)),
  email: s.optional(s.string()),
  phone: s.optional(s.string()),
  address: s.optional(s.lazy(() => address2InternalSchema)),
  paymentInformation: s.optional(s.lazy(() => paymentInformation1InternalSchema)),
  additionalInfo: s.optional(s.lazy(() => additionalInfo1Schema)),
  rppsId: s.optional(s.string()),
  bankAccountStatus: s.optional(s.lazy(() => vendorBankAccountStatusResponseSchema)),
  recurringPayments: s.optional(s.boolean()),
  billCurrency: s.optional(s.lazy(() => currencyCodeSchema)),
  createdTime: s.optional(s.dateTime()),
  updatedTime: s.optional(s.dateTime()),
  balance: s.optional(s.lazy(() => balance2Schema)),
  autoPay: s.optional(s.lazy(() => autoPayBillV3VendorsApiInternalSchema)),
  networkStatus: s.optional(s.lazy(() => networkInvitationStatusSchema)),
  paymentNetworkId: s.optional(s.string()),
  relevanceScore: s.optional(s.float64()),
};

export const vendorResponseDtoInternalSchema: Schema<VendorResponseDto> = s.object<VendorResponseDto>(
  vendorResponseDtoProperties,
  { additionalProperties: s.json() },
);

export const vendorResponseDtoSchema: Schema<VendorResponseDto> = s.lazySchema(() =>
  s.object<VendorResponseDto>(
    {
      ...vendorResponseDtoProperties,
      address: s.optional(s.lazy(() => address2Schema)),
      paymentInformation: s.optional(s.lazy(() => paymentInformation1Schema)),
      autoPay: s.optional(s.lazy(() => autoPayBillV3VendorsApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
