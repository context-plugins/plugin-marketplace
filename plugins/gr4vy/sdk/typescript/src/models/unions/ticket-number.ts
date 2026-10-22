import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ticket number for a flight. */
export type TicketNumber = string;

export const ticketNumberSchema: Schema<TicketNumber> = s.of<TicketNumber>(s.union([s.string()]));
