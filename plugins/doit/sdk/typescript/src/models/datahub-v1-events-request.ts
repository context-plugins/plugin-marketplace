import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";

export type DatahubV1EventsRequest = {
  events?: Event[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const datahubV1EventsRequestProperties: s.Shape<DatahubV1EventsRequest> = {
  events: s.optional(s.array(s.lazy(() => eventSchema))),
};

export const datahubV1EventsRequestInternalSchema: Schema<DatahubV1EventsRequest> =
  s.object<DatahubV1EventsRequest>(datahubV1EventsRequestProperties, { additionalProperties: s.json() });

export const datahubV1EventsRequestSchema: Schema<DatahubV1EventsRequest> = s.lazySchema(() =>
  s.object<DatahubV1EventsRequest>(
    {
      ...datahubV1EventsRequestProperties,
      events: s.optional(s.array(s.lazy(() => eventSchema)).check(s.minLength(1), s.maxLength(50000))),
    },
    { additionalProperties: s.json() },
  ),
);
