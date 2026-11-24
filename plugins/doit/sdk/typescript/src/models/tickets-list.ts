import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ticketListItemSchema, type TicketListItem } from "./ticket-list-item.js";

/** List of support tickets. */
export type TicketsList = {
  /** Page token, returned by a previous call, to request the next page of results. */
  pageToken?: string;
  /** Tickets rows count */
  rowCount?: number;
  tickets?: TicketListItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ticketsListSchema: Schema<TicketsList> = s.object<TicketsList>(
  {
    pageToken: s.optional(s.string()),
    rowCount: s.optional(s.int()),
    tickets: s.optional(s.array(s.lazy(() => ticketListItemSchema))),
  },
  { additionalProperties: s.json() },
);
