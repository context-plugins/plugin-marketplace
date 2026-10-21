import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Indicates whether the ticket is restricted (refundable). */
export type RestrictedTicket = boolean;

export const restrictedTicketSchema: Schema<RestrictedTicket> = s.of<RestrictedTicket>(
  s.union([s.boolean()]),
);
