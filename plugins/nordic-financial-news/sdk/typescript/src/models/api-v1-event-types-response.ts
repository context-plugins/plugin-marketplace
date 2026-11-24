import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventTypeSummarySchema, type EventTypeSummary } from "./event-type-summary.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type ApiV1EventTypesResponse = {
  eventTypes: EventTypeSummary[];
  pagination?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1EventTypesResponseSchema: Schema<ApiV1EventTypesResponse> =
  s.object<ApiV1EventTypesResponse>(
    {
      eventTypes: s.array(s.lazy(() => eventTypeSummarySchema)),
      pagination: s.optional(s.lazy(() => paginationSchema)),
      _keysMap: {
        eventTypes: "event_types",
      },
    },
    { additionalProperties: s.json() },
  );
