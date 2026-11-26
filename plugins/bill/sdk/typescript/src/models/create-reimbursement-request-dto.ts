import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  reimbursementReceiptRequestDtoInternalSchema,
  reimbursementReceiptRequestDtoSchema,
  type ReimbursementReceiptRequestDto,
} from "./reimbursement-receipt-request-dto.js";
import { updateCustomFieldDtoSchema, type UpdateCustomFieldDto } from "./update-custom-field-dto.js";

/** Create a reimbursement */
export type CreateReimbursementRequestDto = {
  /** BILL-generated ID of the user to be reimbursed */
  userId: string;
  /** BILL-generated ID of the budget to be used for the reimbursement */
  budgetId: string;
  /** Reimbursement amount */
  amount: number;
  /** Reimbursement note. Use this field to describe the business purpose for the expense. */
  note: string;
  /** Merchant name for the expense */
  merchantName: string;
  /** Expense created date. The value is in the `yyyy-MM-dd` format. */
  occurredDate: string;
  /** List of reimbursement receipts */
  receipts: ReimbursementReceiptRequestDto[];
  /** List of reimbursement custom fields and values */
  customFields?: UpdateCustomFieldDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createReimbursementRequestDtoProperties: s.Shape<CreateReimbursementRequestDto> = {
  userId: s.string(),
  budgetId: s.string(),
  amount: s.float64(),
  note: s.string(),
  merchantName: s.string(),
  occurredDate: s.dateOnly(),
  receipts: s.array(s.lazy(() => reimbursementReceiptRequestDtoInternalSchema)),
  customFields: s.optional(s.array(s.lazy(() => updateCustomFieldDtoSchema))),
};

export const createReimbursementRequestDtoInternalSchema: Schema<CreateReimbursementRequestDto> =
  s.object<CreateReimbursementRequestDto>(createReimbursementRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const createReimbursementRequestDtoSchema: Schema<CreateReimbursementRequestDto> = s.lazySchema(() =>
  s.object<CreateReimbursementRequestDto>(
    {
      ...createReimbursementRequestDtoProperties,
      receipts: s.array(s.lazy(() => reimbursementReceiptRequestDtoSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
