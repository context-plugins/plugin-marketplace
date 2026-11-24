import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventDetailSchema, type EventDetail } from "./event-detail.js";

export type ApiV1EventsResponse1 = {
  event: EventDetail;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1EventsResponse1Schema: Schema<ApiV1EventsResponse1> = s.object<ApiV1EventsResponse1>(
  {
    event: eventDetailSchema,
  },
  { additionalProperties: s.json() },
);
