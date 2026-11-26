import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creditStatusDtoSchema, type CreditStatusDto } from "./credit-status-dto.js";
import {
  updateVendorCreditLineItemDtoInternalSchema,
  updateVendorCreditLineItemDtoSchema,
  type UpdateVendorCreditLineItemDto,
} from "./update-vendor-credit-line-item-dto.js";
import { vendorCreditUsageDtoSchema, type VendorCreditUsageDto } from "./vendor-credit-usage-dto.js";

/** VendorCredit response Dto with usage. */
export type VendorCreditWithUsageResponseDto = {
  /** BILL-generated ID of the vendor credit. The value begins with `vcr`. */
  id?: string;
  /** BILL-generated ID of the vendor. The value begins with `009`. */
  vendorId?: string;
  /** User-generated vendor credit number. This value can be in your chosen number scheme. */
  referenceNumber?: string;
  /** Vendor credit issued date. This value is in the `yyyy-MM-dd` format. */
  creditDate?: string;
  /** Vendor credit description */
  description?: string;
  /** Set as `true` if the vendor credit is archived */
  archived?: boolean;
  /**
   * BILL-generated ID of the chart of accounts used when the vendor credit is applied to a bill
   * payment. The value begins with `0ca`.
   */
  applyToChartOfAccountId?: string;
  /**
   * BILL-generated ID of the bank account used when the vendor credit is applied to a bill payment.
   * The value begins with `bac`.
   *
   * **Note**: You can set only one of `applyToChartOfAccountId` or `applyToBankAccountId`.
   */
  applyToBankAccountId?: string;
  /** Vendor credit amount */
  amount?: number;
  /** Vendor credit amount applied to invoices */
  appliedAmount?: number;
  status?: CreditStatusDto;
  /** Vendor credit created time */
  createdTime?: Date;
  /** Vendor credit updated time */
  updatedTime?: Date;
  /** Vendor credit line item information */
  vendorCreditLineItems?: UpdateVendorCreditLineItemDto[];
  /** Vendor credit usage information */
  usage?: VendorCreditUsageDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const vendorCreditWithUsageResponseDtoProperties: s.Shape<VendorCreditWithUsageResponseDto> = {
  id: s.optional(s.string()),
  vendorId: s.optional(s.string()),
  referenceNumber: s.optional(s.string()),
  creditDate: s.optional(s.dateOnly()),
  description: s.optional(s.string()),
  archived: s.optional(s.boolean()),
  applyToChartOfAccountId: s.optional(s.string()),
  applyToBankAccountId: s.optional(s.string()),
  amount: s.optional(s.float64()),
  appliedAmount: s.optional(s.float64()),
  status: s.optional(s.lazy(() => creditStatusDtoSchema)),
  createdTime: s.optional(s.dateTime()),
  updatedTime: s.optional(s.dateTime()),
  vendorCreditLineItems: s.optional(s.array(s.lazy(() => updateVendorCreditLineItemDtoInternalSchema))),
  usage: s.optional(s.array(s.lazy(() => vendorCreditUsageDtoSchema))),
};

export const vendorCreditWithUsageResponseDtoInternalSchema: Schema<VendorCreditWithUsageResponseDto> =
  s.object<VendorCreditWithUsageResponseDto>(vendorCreditWithUsageResponseDtoProperties, {
    additionalProperties: s.json(),
  });

export const vendorCreditWithUsageResponseDtoSchema: Schema<VendorCreditWithUsageResponseDto> = s.lazySchema(
  () =>
    s.object<VendorCreditWithUsageResponseDto>(
      {
        ...vendorCreditWithUsageResponseDtoProperties,
        vendorCreditLineItems: s.optional(s.array(s.lazy(() => updateVendorCreditLineItemDtoSchema))),
      },
      { additionalProperties: s.json() },
    ),
);
