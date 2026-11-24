import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  recurringInvoiceUpdateLineItemDtoInternalSchema,
  recurringInvoiceUpdateLineItemDtoSchema,
  type RecurringInvoiceUpdateLineItemDto,
} from "./recurring-invoice-update-line-item-dto.js";
import { scheduleSchema, type Schedule } from "./schedule.js";

/** Update a recurring invoice */
export type UpdateRecurringInvoiceRequestDto = {
  /** BILL-generated ID of the customer. The value begins with `0cu`. */
  customerId?: string;
  paymentTermId?: string;
  /**
   * User-generated invoice number. This value can be your chosen number scheme or invoice due date.
   */
  description?: string;
  schedule?: Schedule;
  /** Recurring invoice line item information */
  recurringInvoiceLineItems?: RecurringInvoiceUpdateLineItemDto[];
  /** Set as `true` to send an email to the customer when an invoice is created. */
  sendEmail?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateRecurringInvoiceRequestDtoProperties: s.Shape<UpdateRecurringInvoiceRequestDto> = {
  customerId: s.optional(s.string()),
  paymentTermId: s.optional(s.string()),
  description: s.optional(s.string()),
  schedule: s.optional(s.lazy(() => scheduleSchema)),
  recurringInvoiceLineItems: s.optional(
    s.array(s.lazy(() => recurringInvoiceUpdateLineItemDtoInternalSchema)),
  ),
  sendEmail: s.optional(s.boolean()),
};

export const updateRecurringInvoiceRequestDtoInternalSchema: Schema<UpdateRecurringInvoiceRequestDto> =
  s.object<UpdateRecurringInvoiceRequestDto>(updateRecurringInvoiceRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const updateRecurringInvoiceRequestDtoSchema: Schema<UpdateRecurringInvoiceRequestDto> = s.lazySchema(
  () =>
    s.object<UpdateRecurringInvoiceRequestDto>(
      {
        ...updateRecurringInvoiceRequestDtoProperties,
        description: s.optional(s.string().check(s.maxLength(4000))),
        recurringInvoiceLineItems: s.optional(s.array(s.lazy(() => recurringInvoiceUpdateLineItemDtoSchema))),
      },
      { additionalProperties: s.json() },
    ),
);
