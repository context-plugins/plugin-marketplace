import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { calendarEventSummarySchema, type CalendarEventSummary } from "./calendar-event-summary.js";
import {
  paginationNordicFinancialNewsCalendarEventsApiSchema,
  type PaginationNordicFinancialNewsCalendarEventsApi,
} from "./pagination-nordic-financial-news-calendar-events-api.js";

export type ApiV1CalendarEventsResponse = {
  calendarEvents: CalendarEventSummary[];
  pagination: PaginationNordicFinancialNewsCalendarEventsApi;
  /**
   * Present and `true` when your plan restricted the result to its upcoming-events window, so the
   * result may be incomplete. Filters narrow within that window rather than searching the full
   * calendar, so on a limited plan an issuer filter often returns an empty list. Absent when your
   * plan applies no restriction.
   */
  planLimited?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CalendarEventsResponseSchema: Schema<ApiV1CalendarEventsResponse> =
  s.object<ApiV1CalendarEventsResponse>(
    {
      calendarEvents: s.array(s.lazy(() => calendarEventSummarySchema)),
      pagination: paginationNordicFinancialNewsCalendarEventsApiSchema,
      planLimited: s.optional(s.boolean()),
      _keysMap: {
        calendarEvents: "calendar_events",
        planLimited: "plan_limited",
      },
    },
    { additionalProperties: s.json() },
  );
