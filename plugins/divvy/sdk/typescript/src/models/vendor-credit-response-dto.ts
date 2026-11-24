import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creditStatusDtoSchema, type CreditStatusDto } from "./credit-status-dto.js";
import {
  vendorCreditLineItemResponseDtoSchema,
  type VendorCreditLineItemResponseDto,
} from "./vendor-credit-line-item-response-dto.js";

/** VendorCredit response Dto. */
export type VendorCreditResponseDto = {
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
  vendorCreditLineItems?: VendorCreditLineItemResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vendorCreditResponseDtoSchema: Schema<VendorCreditResponseDto> =
  s.object<VendorCreditResponseDto>(
    {
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
      vendorCreditLineItems: s.optional(s.array(s.lazy(() => vendorCreditLineItemResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
