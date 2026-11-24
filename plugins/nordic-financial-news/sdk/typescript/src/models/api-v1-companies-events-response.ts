import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSummarySchema, type EventSummary } from "./event-summary.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type ApiV1CompaniesEventsResponse = {
  events: EventSummary[];
  pagination: Pagination;
  /**
   * Present and `true` when your plan capped what this endpoint can return. Absent when your plan
   * applies no cap.
   */
  planLimited?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CompaniesEventsResponseSchema: Schema<ApiV1CompaniesEventsResponse> =
  s.object<ApiV1CompaniesEventsResponse>(
    {
      events: s.array(s.lazy(() => eventSummarySchema)),
      pagination: paginationSchema,
      planLimited: s.optional(s.boolean()),
      _keysMap: {
        planLimited: "plan_limited",
      },
    },
    { additionalProperties: s.json() },
  );
