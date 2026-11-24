import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventDomainSchema, type EventDomain } from "./event-domain.js";

export type EventsDomainsResponse = {
  data: EventDomain[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventsDomainsResponseSchema: Schema<EventsDomainsResponse> = s.object<EventsDomainsResponse>(
  {
    data: s.array(s.lazy(() => eventDomainSchema)),
  },
  { additionalProperties: s.json() },
);
