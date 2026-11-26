import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  billApprovalStatusResponseSchema,
  type BillApprovalStatusResponse,
} from "./bill-approval-status-response.js";
import { billPaymentStatusDtoSchema, type BillPaymentStatusDto } from "./bill-payment-status-dto.js";
import { billRecordStatusSchema, type BillRecordStatus } from "./bill-record-status.js";
import { billResponseLineItemSchema, type BillResponseLineItem } from "./bill-response-line-item.js";
import { classifications2Schema, type Classifications2 } from "./classifications2.js";
import { invoice1InternalSchema, invoice1Schema, type Invoice1 } from "./invoice1.js";

/** Bills read response without approvers. */
export type BillReadWithoutApproversResponseDto = {
  /** BILL-generated ID of the bill. The value begins with `00n`. */
  id: string;
  recordStatus: BillRecordStatus;
  /** Set as `true` if the bill is archived */
  archived: boolean;
  /** BILL-generated ID of the vendor. The value begins with `009`. */
  vendorId: string;
  /** Vendor name */
  vendorName: string;
  /** Bill total amount. This value is in USD. */
  fundingAmount?: number;
  /**
   * Bill total amount. For a bill in an international currency (not USD), this value is in the
   * local currency.
   */
  amount?: number;
  /**
   * Bill paid amount. This value is the sum of all cleared payments and any credit amount applied
   * to the bill.
   */
  paidAmount?: number;
  /**
   * Bill due amount. The value is calculated by subtracting any applied credits (`creditAmount`),
   * scheduled payment (`scheduledAmount`), and cleared payment from the bill `amount`.
   */
  dueAmount?: number;
  /**
   * Bill scheduled amount. The value is set as the vendor payment amount that is pending clearance.
   */
  scheduledAmount?: number;
  /** Credit amount applied to the bill */
  creditAmount?: number;
  /**
   * Exchange rate for the bill amount in an international currency (not USD).
   *
   * The BILL exchange rate changes periodically and a different rate may apply at the time of
   * payment.
   */
  exchangeRate?: number;
  /** Bill description */
  description?: string;
  /** Bill due date. The value is in the `yyyy-MM-dd` format. */
  dueDate?: string;
  paymentTermId?: string;
  invoice?: Invoice1;
  /** Bill line item information */
  billLineItems?: BillResponseLineItem[];
  /**
   * BILL-generated ID of the chart of accounts for the bill payment. The value begins with `0ca`.
   */
  payFromChartOfAccountId?: string;
  paymentStatus?: BillPaymentStatusDto;
  approvalStatus?: BillApprovalStatusResponse;
  /** BILL-generated ID of the user that created the bill. The value begins with `006`. */
  createdBy?: string;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  classifications?: Classifications2;
  /** Purchase order number linked with the bill */
  purchaseOrderNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const billReadWithoutApproversResponseDtoProperties: s.Shape<BillReadWithoutApproversResponseDto> = {
  id: s.string(),
  recordStatus: billRecordStatusSchema,
  archived: s.boolean(),
  vendorId: s.string(),
  vendorName: s.string(),
  fundingAmount: s.optional(s.float64()),
  amount: s.optional(s.float64()),
  paidAmount: s.optional(s.float64()),
  dueAmount: s.optional(s.float64()),
  scheduledAmount: s.optional(s.float64()),
  creditAmount: s.optional(s.float64()),
  exchangeRate: s.optional(s.float64()),
  description: s.optional(s.string()),
  dueDate: s.optional(s.dateOnly()),
  paymentTermId: s.optional(s.string()),
  invoice: s.optional(s.lazy(() => invoice1InternalSchema)),
  billLineItems: s.optional(s.array(s.lazy(() => billResponseLineItemSchema))),
  payFromChartOfAccountId: s.optional(s.string()),
  paymentStatus: s.optional(s.lazy(() => billPaymentStatusDtoSchema)),
  approvalStatus: s.optional(s.lazy(() => billApprovalStatusResponseSchema)),
  createdBy: s.optional(s.string()),
  createdTime: s.optional(s.dateTime()),
  updatedTime: s.optional(s.dateTime()),
  classifications: s.optional(s.lazy(() => classifications2Schema)),
  purchaseOrderNumber: s.optional(s.string()),
};

export const billReadWithoutApproversResponseDtoInternalSchema: Schema<BillReadWithoutApproversResponseDto> =
  s.object<BillReadWithoutApproversResponseDto>(billReadWithoutApproversResponseDtoProperties, {
    additionalProperties: s.json(),
  });

export const billReadWithoutApproversResponseDtoSchema: Schema<BillReadWithoutApproversResponseDto> =
  s.lazySchema(() =>
    s.object<BillReadWithoutApproversResponseDto>(
      {
        ...billReadWithoutApproversResponseDtoProperties,
        invoice: s.optional(s.lazy(() => invoice1Schema)),
      },
      { additionalProperties: s.json() },
    ),
  );
