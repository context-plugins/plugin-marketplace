import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** DTO for Recurring Invoice Line Item classifications. */
export type RecurringInvoiceLineItemClassificationsDto = {
  /** BILL-generated ID of the chart of accounts. The value begins with `0ca`. */
  chartOfAccountId?: string;
  /** BILL-generated ID of the accounting class. The value begins with `cls`. */
  accountingClassId?: string;
  /** BILL-generated ID of the department. The value begins with `0de`. */
  departmentId?: string;
  /** BILL-generated ID of the job. The value begins with `job`. */
  jobId?: string;
  /** BILL-generated ID of the location. The value begins with `loc`. */
  locationId?: string;
  /** BILL-generated ID of the item. The value begins with `0ii`. */
  itemId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recurringInvoiceLineItemClassificationsDtoSchema: Schema<RecurringInvoiceLineItemClassificationsDto> =
  s.object<RecurringInvoiceLineItemClassificationsDto>(
    {
      chartOfAccountId: s.optional(s.string()),
      accountingClassId: s.optional(s.string()),
      departmentId: s.optional(s.string()),
      jobId: s.optional(s.string()),
      locationId: s.optional(s.string()),
      itemId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
