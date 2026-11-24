import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { usageSummaryOrderLineSchema, type UsageSummaryOrderLine } from "./usage-summary-order-line.js";
import { usageSummaryOrderSchema, type UsageSummaryOrder } from "./usage-summary-order.js";

/** A single usage summary record */
export type UsageSummary = {
  /** The unique identifier of the usage summary */
  id: string;
  /** The name of the event being tracked */
  eventName: string;
  /** The quantity of events in this usage period */
  eventsQuantity: number;
  /** The start date of the usage period */
  startDate: Date;
  /** The end date of the usage period */
  endDate: Date;
  /** The subtotal amount in the smallest currency unit (e.g., cents) */
  subtotal: number;
  /** The next billing date for this usage */
  nextBillingDate: Date;
  /** The internal customer ID */
  customerId: string;
  /** The order ID associated with this usage */
  orderId: string;
  /** The order line ID associated with this usage */
  orderLineId: string;
  /** The order line attribute ID associated with this usage */
  orderLineAttributeId: string;
  /** The invoice ID if this usage has been invoiced */
  invoiceId?: string | null;
  /** The invoice line ID if this usage has been invoiced */
  invoiceLineId?: string | null;
  /** When the usage summary was created */
  createdAt: Date;
  /** When the usage summary was last updated */
  updatedAt: Date;
  /** Associated order information */
  order?: UsageSummaryOrder;
  /** Associated order line information */
  orderLine?: UsageSummaryOrderLine;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageSummarySchema: Schema<UsageSummary> = s.object<UsageSummary>(
  {
    id: s.string(),
    eventName: s.string(),
    eventsQuantity: s.int(),
    startDate: s.dateTime(),
    endDate: s.dateTime(),
    subtotal: s.int(),
    nextBillingDate: s.dateTime(),
    customerId: s.string(),
    orderId: s.string(),
    orderLineId: s.string(),
    orderLineAttributeId: s.string(),
    invoiceId: s.optionalNullable(s.string()),
    invoiceLineId: s.optionalNullable(s.string()),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    order: s.optional(s.lazy(() => usageSummaryOrderSchema)),
    orderLine: s.optional(s.lazy(() => usageSummaryOrderLineSchema)),
  },
  { additionalProperties: s.json() },
);
