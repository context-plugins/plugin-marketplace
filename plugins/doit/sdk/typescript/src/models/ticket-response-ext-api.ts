import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platform2Schema, type Platform2 } from "./platform2.js";
import { severity1Schema, type Severity1 } from "./severity1.js";

/** Response returned after creating a ticket. */
export type TicketResponseExtApi = {
  /** Ticket creation time. */
  created?: number;
  /** Ticket ID. */
  id?: number;
  /** Ticket platform. */
  platform?: Platform2;
  /** Ticket product. */
  product?: string;
  /** Email address of the requester. */
  requester?: string;
  /** Severity of the ticket. */
  severity?: Severity1;
  /** Ticket status. */
  status?: string;
  /** Ticket subject. */
  subject?: string;
  /** URL to access the ticket in DoiT console. */
  urlUi?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ticketResponseExtApiSchema: Schema<TicketResponseExtApi> = s.object<TicketResponseExtApi>(
  {
    created: s.optional(s.int()),
    id: s.optional(s.int()),
    platform: s.optional(s.lazy(() => platform2Schema)),
    product: s.optional(s.string()),
    requester: s.optional(s.string()),
    severity: s.optional(s.lazy(() => severity1Schema)),
    status: s.optional(s.string()),
    subject: s.optional(s.string()),
    urlUi: s.optional(s.string()),
    _keysMap: {
      urlUi: "urlUI",
    },
  },
  { additionalProperties: s.json() },
);
