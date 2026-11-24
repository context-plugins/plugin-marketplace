import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classifications2BillV3RecurringInvoicesApiSchema,
  type Classifications2BillV3RecurringInvoicesApi,
} from "./classifications2-bill-v3-recurring-invoices-api.js";
import {
  recurringInvoiceLineItemResponseDtoSchema,
  type RecurringInvoiceLineItemResponseDto,
} from "./recurring-invoice-line-item-response-dto.js";
import { schedule1Schema, type Schedule1 } from "./schedule1.js";

/** RecurringInvoice response Dto. */
export type RecurringInvoiceResponseDto = {
  /** BILL-generated ID of the recurring invoice. The value begins with `rit`. */
  id: string;
  /** BILL-generated ID of the customer. The value begins with `0cu`. */
  customerId?: string;
  paymentTermId?: string;
  /** Recurring invoice line item description */
  description?: string;
  /** Set as `true` if the recurring invoice is archived */
  archived?: boolean;
  schedule?: Schedule1;
  /** Recurring invoice line item information */
  recurringInvoiceLineItems?: RecurringInvoiceLineItemResponseDto[];
  classifications?: Classifications2BillV3RecurringInvoicesApi;
  /** Set as `true` to send an email to the customer when an invoice is created. */
  sendEmail?: boolean;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recurringInvoiceResponseDtoSchema: Schema<RecurringInvoiceResponseDto> =
  s.object<RecurringInvoiceResponseDto>(
    {
      id: s.string(),
      customerId: s.optional(s.string()),
      paymentTermId: s.optional(s.string()),
      description: s.optional(s.string()),
      archived: s.optional(s.boolean()),
      schedule: s.optional(s.lazy(() => schedule1Schema)),
      recurringInvoiceLineItems: s.optional(s.array(s.lazy(() => recurringInvoiceLineItemResponseDtoSchema))),
      classifications: s.optional(s.lazy(() => classifications2BillV3RecurringInvoicesApiSchema)),
      sendEmail: s.optional(s.boolean()),
      createdTime: s.optional(s.dateTime()),
      updatedTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
