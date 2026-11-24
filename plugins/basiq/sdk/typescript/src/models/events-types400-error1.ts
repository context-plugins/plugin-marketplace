import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data1PlatformEventsApiSchema, type Data1PlatformEventsApi } from "./data1-platform-events-api.js";

export type EventsTypes400Error1 = {
  type?: string;
  correlationId?: string;
  data?: Data1PlatformEventsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventsTypes400Error1Schema: Schema<EventsTypes400Error1> = s.object<EventsTypes400Error1>(
  {
    type: s.optional(s.string()),
    correlationId: s.optional(s.string()),
    data: s.optional(s.array(s.lazy(() => data1PlatformEventsApiSchema))),
  },
  { additionalProperties: s.json() },
);
