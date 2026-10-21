import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The airline's unique ticket number. */
export type TicketNumber1 = string;

export const ticketNumber1Schema: Schema<TicketNumber1> = s.of<TicketNumber1>(s.union([s.string()]));
