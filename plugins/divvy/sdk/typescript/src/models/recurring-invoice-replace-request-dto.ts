import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  recurringInvoiceReplaceLineItemInternalSchema,
  recurringInvoiceReplaceLineItemSchema,
  type RecurringInvoiceReplaceLineItem,
} from "./recurring-invoice-replace-line-item.js";
import { scheduleSchema, type Schedule } from "./schedule.js";

/** Replace a recurring invoice (line item added) */
export type RecurringInvoiceReplaceRequestDto = {
  /** BILL-generated ID of the customer. The value begins with `0cu`. */
  customerId: string;
  paymentTermId?: string;
  /**
   * User-generated invoice number. This value can be your chosen number scheme or invoice due date.
   */
  description?: string;
  schedule: Schedule;
  /** Recurring invoice line item information */
  recurringInvoiceLineItems: RecurringInvoiceReplaceLineItem[];
  /** Set as `true` to send an email to the customer when an invoice is created. */
  sendEmail?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const recurringInvoiceReplaceRequestDtoProperties: s.Shape<RecurringInvoiceReplaceRequestDto> = {
  customerId: s.string(),
  paymentTermId: s.optional(s.string()),
  description: s.optional(s.string()),
  schedule: scheduleSchema,
  recurringInvoiceLineItems: s.array(s.lazy(() => recurringInvoiceReplaceLineItemInternalSchema)),
  sendEmail: s.optional(s.boolean()),
};

export const recurringInvoiceReplaceRequestDtoInternalSchema: Schema<RecurringInvoiceReplaceRequestDto> =
  s.object<RecurringInvoiceReplaceRequestDto>(recurringInvoiceReplaceRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const recurringInvoiceReplaceRequestDtoSchema: Schema<RecurringInvoiceReplaceRequestDto> =
  s.lazySchema(() =>
    s.object<RecurringInvoiceReplaceRequestDto>(
      {
        ...recurringInvoiceReplaceRequestDtoProperties,
        customerId: s.string().check(s.minLength(1)),
        description: s.optional(s.string().check(s.maxLength(4000))),
        recurringInvoiceLineItems: s.array(s.lazy(() => recurringInvoiceReplaceLineItemSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
