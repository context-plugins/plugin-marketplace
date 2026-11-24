import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { linksSchema, type Links } from "./links.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";
import { ticketResourceSchema, type TicketResource } from "./ticket-resource.js";

export type V1TicketsResponse = {
  data: TicketResource[];
  links: Links;
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1TicketsResponseProperties: s.Shape<V1TicketsResponse> = {
  data: s.array(s.lazy(() => ticketResourceSchema)),
  links: linksSchema,
  meta: metaInternalSchema,
};

export const v1TicketsResponseInternalSchema: Schema<V1TicketsResponse> = s.object<V1TicketsResponse>(
  v1TicketsResponseProperties,
  { additionalProperties: s.json() },
);

export const v1TicketsResponseSchema: Schema<V1TicketsResponse> = s.lazySchema(() =>
  s.object<V1TicketsResponse>(
    {
      ...v1TicketsResponseProperties,
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
