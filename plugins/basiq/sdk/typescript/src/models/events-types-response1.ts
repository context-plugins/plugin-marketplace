import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { linksPlatformEventsApiSchema, type LinksPlatformEventsApi } from "./links-platform-events-api.js";

export type EventsTypesResponse1 = {
  type?: string;
  /** Identifer of the event type */
  id?: string;
  /** a brief description of the event type */
  description?: string;
  links?: LinksPlatformEventsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventsTypesResponse1Schema: Schema<EventsTypesResponse1> = s.object<EventsTypesResponse1>(
  {
    type: s.optional(s.string()),
    id: s.optional(s.string()),
    description: s.optional(s.string()),
    links: s.optional(s.lazy(() => linksPlatformEventsApiSchema)),
  },
  { additionalProperties: s.json() },
);
