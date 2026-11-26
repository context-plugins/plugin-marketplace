import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { updateCustomFieldDtoSchema, type UpdateCustomFieldDto } from "./update-custom-field-dto.js";

/** Update a reimbursement (Date updated) */
export type UpdateReimbursementRequestDto = {
  /** BILL-generated ID of the user to be reimbursed */
  userId?: string;
  /** BILL-generated ID of the budget to be used for the reimbursement */
  budgetId?: string;
  /** Reimbursement amount */
  amount?: number;
  /** Reimbursement note. Use this field to describe the business purpose for the expense. */
  note?: string;
  /** Merchant name for the expense */
  merchantName?: string;
  /** Expense created date. The value is in the `yyyy-MM-dd` format. */
  occurredDate?: string;
  /** List of reimbursement custom fields and values */
  customFields?: UpdateCustomFieldDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateReimbursementRequestDtoSchema: Schema<UpdateReimbursementRequestDto> =
  s.object<UpdateReimbursementRequestDto>(
    {
      userId: s.optional(s.string()),
      budgetId: s.optional(s.string()),
      amount: s.optional(s.float64()),
      note: s.optional(s.string()),
      merchantName: s.optional(s.string()),
      occurredDate: s.optional(s.dateOnly()),
      customFields: s.optional(s.array(s.lazy(() => updateCustomFieldDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
