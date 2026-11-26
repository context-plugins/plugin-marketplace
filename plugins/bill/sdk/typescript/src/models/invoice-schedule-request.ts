import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { periodRequestSchema, type PeriodRequest } from "./period-request.js";

/** Schedule properties for a recurring Invoices. */
export type InvoiceScheduleRequest = {
  period?: PeriodRequest;
  /**
   * Invoice frequency per time `period`.
   *
   * For example, if the time `period` is `MONTHLY` and `frequency` is `3`, an invoice is generated
   * once every 3 months.
   */
  frequency?: number;
  /** Due date for the next invoice. This value is in the `yyyy-MM-dd` format. */
  nextDueDate?: string;
  /**
   * End date for the recurring invoices schedule. Recurring invoices stop on the `endDate`. This
   * value is in the `yyyy-MM-dd` format.
   */
  endDate?: string;
  /**
   * Number of days before `nextDueDate` when the next invoice is generated. If the date has
   * occurred in the past for one or more invoices, all those invoices are generated.
   */
  daysInAdvance?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invoiceScheduleRequestSchema: Schema<InvoiceScheduleRequest> = s.object<InvoiceScheduleRequest>(
  {
    period: s.optional(s.lazy(() => periodRequestSchema)),
    frequency: s.optional(s.int()),
    nextDueDate: s.optional(s.dateOnly()),
    endDate: s.optional(s.dateOnly()),
    daysInAdvance: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
