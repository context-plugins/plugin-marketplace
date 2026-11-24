import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  calendarEventSummaryNordicFinancialNewsCompaniesApiSchema,
  type CalendarEventSummaryNordicFinancialNewsCompaniesApi,
} from "./calendar-event-summary-nordic-financial-news-companies-api.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type ApiV1CompaniesCalendarEventsResponse = {
  calendarEvents: CalendarEventSummaryNordicFinancialNewsCompaniesApi[];
  pagination: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CompaniesCalendarEventsResponseSchema: Schema<ApiV1CompaniesCalendarEventsResponse> =
  s.object<ApiV1CompaniesCalendarEventsResponse>(
    {
      calendarEvents: s.array(s.lazy(() => calendarEventSummaryNordicFinancialNewsCompaniesApiSchema)),
      pagination: paginationSchema,
      _keysMap: {
        calendarEvents: "calendar_events",
      },
    },
    { additionalProperties: s.json() },
  );
