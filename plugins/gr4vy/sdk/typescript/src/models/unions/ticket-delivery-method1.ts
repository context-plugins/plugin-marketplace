import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { ticketDeliveryMethodSchema, type TicketDeliveryMethod } from "../ticket-delivery-method.js";

/** The delivery method of the ticket. */
export type TicketDeliveryMethod1 = TicketDeliveryMethod;

export const ticketDeliveryMethod1Schema: Schema<TicketDeliveryMethod1> = s.of<TicketDeliveryMethod1>(
  s.union([s.lazy(() => ticketDeliveryMethodSchema)]),
);
