import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  createEventsRequestEventForRequestSchema,
  type CreateEventsRequestEventForRequest,
} from "./create-events-request-event-for-request.js";

export type V1CreateEventsRequest = {
  events?: CreateEventsRequestEventForRequest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1CreateEventsRequestSchema: Schema<V1CreateEventsRequest> = s.object<V1CreateEventsRequest>(
  {
    events: s.optional(s.array(s.lazy(() => createEventsRequestEventForRequestSchema))),
  },
  { additionalProperties: s.json() },
);
