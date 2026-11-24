import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSummarySchema, type EventSummary } from "./event-summary.js";
import {
  paginationNordicFinancialNewsCalendarEventsApiSchema,
  type PaginationNordicFinancialNewsCalendarEventsApi,
} from "./pagination-nordic-financial-news-calendar-events-api.js";

export type ApiV1EventsResponse = {
  events: EventSummary[];
  pagination: PaginationNordicFinancialNewsCalendarEventsApi;
  /**
   * Present and `true` when your plan capped the result to its top-N most recent events. Absent
   * when your plan applies no cap. With `mode=semantic`, present and `true` when your plan's source
   * or age restrictions are in force instead.
   */
  planLimited?: boolean;
  /**
   * Only with `mode=semantic`. Present and `true` when the article-match horizon was exhausted, so
   * further matching events exist that this response cannot reach.
   */
  truncated?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1EventsResponseSchema: Schema<ApiV1EventsResponse> = s.object<ApiV1EventsResponse>(
  {
    events: s.array(s.lazy(() => eventSummarySchema)),
    pagination: paginationNordicFinancialNewsCalendarEventsApiSchema,
    planLimited: s.optional(s.boolean()),
    truncated: s.optional(s.boolean()),
    _keysMap: {
      planLimited: "plan_limited",
    },
  },
  { additionalProperties: s.json() },
);
