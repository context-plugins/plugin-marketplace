import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldDtoSchema, type CustomFieldDto } from "./custom-field-dto.js";
import { fulfillmentTypeSchema, type FulfillmentType } from "./fulfillment-type.js";
import { receiptImageInternalSchema, receiptImageSchema, type ReceiptImage } from "./receipt-image.js";
import { reimbursementStatusSchema, type ReimbursementStatus } from "./reimbursement-status.js";
import { reimbursementTypeSchema, type ReimbursementType } from "./reimbursement-type.js";
import { statusHistorySchema, type StatusHistory } from "./status-history.js";

/** DTO representing a reimbursement response. */
export type ReimbursementResponseDto = {
  /** BILL-generated ID of the reimbursement */
  id?: string;
  /** BILL-generated UUID of the reimbursement */
  uuid?: string;
  /** Reimbursement amount */
  amount?: number;
  fulfillmentType?: FulfillmentType;
  /**
   * Amount that must be added to the user funds for the user to have enough funds for this
   * reimbursement
   */
  fundRequestAmount?: number;
  /**
   * Amount that must be added to the budget for the user to have enough funds for this
   * reimbursement
   */
  fundRequestBudgetAmount?: number;
  /** Merchant name for the expense */
  merchantName?: string;
  /** Reimbursement note. Use this field to describe the business purpose for the expense. */
  note?: string;
  /** Reimbursement request submission date and time */
  submittedTime?: Date;
  /** Expense created date. The value is in the `yyyy-MM-dd` format. */
  occurredDate?: string;
  /** This field is set as `true` if the reimbursement has been deleted */
  retired?: boolean;
  status?: ReimbursementStatus;
  type?: ReimbursementType;
  /**
   * ACH batch ID.
   *
   * You can use `batchId` to identify the set of reimbursements bundled together when funds are
   * withdrawn from the company bank account. Reimbursements with the same `batchId` are withdrawn
   * at the same time.
   */
  batchId?: string;
  /** ACH batch amount */
  batchAmount?: number;
  /** Reimbursement approval status history */
  statusHistory?: StatusHistory[];
  /** BILL-generated ID of the budget to be used for the reimbursement */
  budgetId?: string;
  /** BILL-generated UUID of the budget to be used for the reimbursement */
  budgetUuid?: string;
  /** BILL-generated ID of the user to be reimbursed */
  userId?: string;
  /** BILL-generated UUID of the user to be reimbursed */
  userUuid?: string;
  /** List of reimbursement receipts */
  receipts?: ReceiptImage[];
  /** List of reimbursement custom fields and values */
  customFields?: CustomFieldDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const reimbursementResponseDtoProperties: s.Shape<ReimbursementResponseDto> = {
  id: s.optional(s.string()),
  uuid: s.optional(s.string()),
  amount: s.optional(s.float64()),
  fulfillmentType: s.optional(s.lazy(() => fulfillmentTypeSchema)),
  fundRequestAmount: s.optional(s.float64()),
  fundRequestBudgetAmount: s.optional(s.float64()),
  merchantName: s.optional(s.string()),
  note: s.optional(s.string()),
  submittedTime: s.optional(s.dateTime()),
  occurredDate: s.optional(s.dateOnly()),
  retired: s.optional(s.boolean()),
  status: s.optional(s.lazy(() => reimbursementStatusSchema)),
  type: s.optional(s.lazy(() => reimbursementTypeSchema)),
  batchId: s.optional(s.string()),
  batchAmount: s.optional(s.float64()),
  statusHistory: s.optional(s.array(s.lazy(() => statusHistorySchema))),
  budgetId: s.optional(s.string()),
  budgetUuid: s.optional(s.string()),
  userId: s.optional(s.string()),
  userUuid: s.optional(s.string()),
  receipts: s.optional(s.array(s.lazy(() => receiptImageInternalSchema))),
  customFields: s.optional(s.array(s.lazy(() => customFieldDtoSchema))),
};

export const reimbursementResponseDtoInternalSchema: Schema<ReimbursementResponseDto> =
  s.object<ReimbursementResponseDto>(reimbursementResponseDtoProperties, { additionalProperties: s.json() });

export const reimbursementResponseDtoSchema: Schema<ReimbursementResponseDto> = s.lazySchema(() =>
  s.object<ReimbursementResponseDto>(
    {
      ...reimbursementResponseDtoProperties,
      receipts: s.optional(s.array(s.lazy(() => receiptImageSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
