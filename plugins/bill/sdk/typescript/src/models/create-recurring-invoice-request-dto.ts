import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  recurringInvoiceLineItemDtoInternalSchema,
  recurringInvoiceLineItemDtoSchema,
  type RecurringInvoiceLineItemDto,
} from "./recurring-invoice-line-item-dto.js";
import { scheduleSchema, type Schedule } from "./schedule.js";

/** Create a recurring invoice */
export type CreateRecurringInvoiceRequestDto = {
  /** BILL-generated ID of the customer. The value begins with `0cu`. */
  customerId: string;
  paymentTermId?: string;
  /**
   * User-generated invoice number. This value can be your chosen number scheme or invoice due date.
   */
  description?: string;
  schedule: Schedule;
  /** Recurring invoice line item information */
  recurringInvoiceLineItems: RecurringInvoiceLineItemDto[];
  /** Set as `true` to send an email to the customer when an invoice is created. */
  sendEmail?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createRecurringInvoiceRequestDtoProperties: s.Shape<CreateRecurringInvoiceRequestDto> = {
  customerId: s.string(),
  paymentTermId: s.optional(s.string()),
  description: s.optional(s.string()),
  schedule: scheduleSchema,
  recurringInvoiceLineItems: s.array(s.lazy(() => recurringInvoiceLineItemDtoInternalSchema)),
  sendEmail: s.optional(s.boolean()),
};

export const createRecurringInvoiceRequestDtoInternalSchema: Schema<CreateRecurringInvoiceRequestDto> =
  s.object<CreateRecurringInvoiceRequestDto>(createRecurringInvoiceRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const createRecurringInvoiceRequestDtoSchema: Schema<CreateRecurringInvoiceRequestDto> = s.lazySchema(
  () =>
    s.object<CreateRecurringInvoiceRequestDto>(
      {
        ...createRecurringInvoiceRequestDtoProperties,
        customerId: s.string().check(s.minLength(1)),
        description: s.optional(s.string().check(s.maxLength(4000))),
        recurringInvoiceLineItems: s.array(s.lazy(() => recurringInvoiceLineItemDtoSchema)),
      },
      { additionalProperties: s.json() },
    ),
);
