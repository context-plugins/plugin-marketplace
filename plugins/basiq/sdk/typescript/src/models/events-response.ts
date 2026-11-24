import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataPlatformEventsApiSchema, type DataPlatformEventsApi } from "./data-platform-events-api.js";
import { linksPlatformEventsApiSchema, type LinksPlatformEventsApi } from "./links-platform-events-api.js";

export type EventsResponse = {
  type?: string;
  id?: string;
  createdDate?: string;
  entity?: string;
  eventType?: string;
  userId?: string;
  dataRef?: string;
  data?: DataPlatformEventsApi;
  links?: LinksPlatformEventsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventsResponseSchema: Schema<EventsResponse> = s.object<EventsResponse>(
  {
    type: s.optional(s.string()),
    id: s.optional(s.string()),
    createdDate: s.optional(s.string()),
    entity: s.optional(s.string()),
    eventType: s.optional(s.string()),
    userId: s.optional(s.string()),
    dataRef: s.optional(s.string()),
    data: s.optional(s.lazy(() => dataPlatformEventsApiSchema)),
    links: s.optional(s.lazy(() => linksPlatformEventsApiSchema)),
  },
  { additionalProperties: s.json() },
);
