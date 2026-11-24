import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ticketExtApiInternalSchema, ticketExtApiSchema, type TicketExtApi } from "./ticket-ext-api.js";

/** Wrapper object for creating support tickets via the external API. */
export type TicketCreateFormExtApi = {
  /** Payload to create a support ticket via API. */
  ticket: TicketExtApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ticketCreateFormExtApiProperties: s.Shape<TicketCreateFormExtApi> = {
  ticket: ticketExtApiInternalSchema,
};

export const ticketCreateFormExtApiInternalSchema: Schema<TicketCreateFormExtApi> =
  s.object<TicketCreateFormExtApi>(ticketCreateFormExtApiProperties, { additionalProperties: s.json() });

export const ticketCreateFormExtApiSchema: Schema<TicketCreateFormExtApi> = s.lazySchema(() =>
  s.object<TicketCreateFormExtApi>(
    {
      ...ticketCreateFormExtApiProperties,
      ticket: ticketExtApiSchema,
    },
    { additionalProperties: s.json() },
  ),
);
