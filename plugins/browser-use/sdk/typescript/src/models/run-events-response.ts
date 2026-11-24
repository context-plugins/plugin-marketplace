import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { runEventSchema, type RunEvent } from "./run-event.js";
import { nextafterSchema, type Nextafter } from "./unions/nextafter.js";

export type RunEventsResponse = {
  events: RunEvent[];
  nextAfter?: Nextafter;
  /** @default false */
  hasMore?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runEventsResponseSchema: Schema<RunEventsResponse> = s.object<RunEventsResponse>(
  {
    events: s.array(s.lazy(() => runEventSchema)),
    nextAfter: s.optional(s.lazy(() => nextafterSchema)),
    hasMore: s.defaulted(s.boolean(), false),
  },
  { additionalProperties: s.json() },
);
