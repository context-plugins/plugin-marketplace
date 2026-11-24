import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  companyNordicFinancialNewsCalendarEventsApiSchema,
  type CompanyNordicFinancialNewsCalendarEventsApi,
} from "./company-nordic-financial-news-calendar-events-api.js";
import { datePrecisionSchema, type DatePrecision } from "./date-precision.js";
import { dividendSchema, type Dividend } from "./dividend.js";
import { eventTypeSchema, type EventType } from "./event-type.js";
import {
  sourceNordicFinancialNewsCalendarEventsApiSchema,
  type SourceNordicFinancialNewsCalendarEventsApi,
} from "./source-nordic-financial-news-calendar-events-api.js";
import { statusSchema, type Status } from "./status.js";

export type CalendarEventSummary = {
  /** Unique calendar event identifier */
  id: string;
  /** Event title as reported by the issuer or exchange */
  title: string;
  /** Optional long-form description */
  description?: string | null;
  /** The kind of calendar event */
  eventType: EventType;
  /**
   * Event lifecycle status. `scheduled` is upcoming; `published` means the event has occurred
   * (events flip ~2 days after their date); `cancelled` means the issuer withdrew it. List
   * endpoints return `scheduled` + `published` and exclude `cancelled` by default. Pass the
   * `status` query parameter to filter (e.g. `status=cancelled`).
   */
  status: Status;
  /**
   * Granularity of `scheduled_at`. `exact` = timestamp known; `day` = date only; `month` = only the
   * month is known. Consumers that need a date should still use `scheduled_at` (set to a
   * representative point inside the window).
   */
  datePrecision?: DatePrecision;
  /**
   * Fiscal period slug (required for report-type events, e.g. `q3_2026`, `fy_2025`). For a split
   * fiscal year the year is the one in which the fiscal year ends (2025/26 → `fy_2026`).
   */
  fiscalPeriod?: string | null;
  /**
   * Scheduled date/time in UTC (ISO 8601). For the local calendar date use `local_time` instead: a
   * day-precision event is stored at local midnight, so its UTC instant falls on the previous day
   * for ahead-of-UTC (Nordic) zones.
   */
  scheduledAt: Date;
  /**
   * The issuer's IANA timezone, used to interpret `scheduled_at`. Resolved from the source article,
   * falling back to the company's country zone.
   */
  timezone?: string;
  /**
   * `scheduled_at` rendered in the issuer's `timezone` (ISO 8601 with offset). Use this for the
   * correct local date/time. Its date is right even for day-precision events.
   */
  localTime?: Date;
  /** When `scheduled_at` last changed. Useful for change-feed consumers tracking date moves. */
  scheduledAtChangedAt?: Date | null;
  /**
   * ID of the article the event was extracted from. `null` when the article is not retrievable (not
   * live, or removed), or when the event was first found on a company website. If a company website
   * later supplied the date, this still names the original article, and `source` names the website.
   * Best-effort: on the free plan it may reference an article your plan can't fetch (premium source
   * or outside the age window).
   */
  sourceArticleId?: string | null;
  /**
   * Who published the current date. `article` is a news article or company announcement.
   * `company_website` is the issuer's own investor relations calendar. `null` when our editors set
   * the date.
   */
  source?: SourceNordicFinancialNewsCalendarEventsApi | null;
  /** ID of the company this event relates to */
  companyId: string;
  /**
   * The issuer this event belongs to, inlined so a calendar can be rendered without a lookup per
   * row. `id` is the same value as `company_id`. `null` only when the issuer is not published by
   * this API.
   */
  company?: CompanyNordicFinancialNewsCalendarEventsApi | null;
  /** Country ISO 3166-1 alpha-2 code */
  country?: string | null;
  /**
   * Dividend lifecycle dates. `null` for non-dividend events. `scheduled_at` follows the priority
   * ex-date > record-date > payment-date, whichever is explicitly stated.
   */
  dividend?: Dividend | null;
  /** When the event was last updated (ISO 8601). Use with `updated_after` for polling */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const calendarEventSummarySchema: Schema<CalendarEventSummary> = s.object<CalendarEventSummary>(
  {
    id: s.string(),
    title: s.string(),
    description: s.optionalNullable(s.string()),
    eventType: eventTypeSchema,
    status: statusSchema,
    datePrecision: s.optional(s.lazy(() => datePrecisionSchema)),
    fiscalPeriod: s.optionalNullable(s.string()),
    scheduledAt: s.dateTime(),
    timezone: s.optional(s.string()),
    localTime: s.optional(s.dateTime()),
    scheduledAtChangedAt: s.optionalNullable(s.dateTime()),
    sourceArticleId: s.optionalNullable(s.string()),
    source: s.optionalNullable(s.lazy(() => sourceNordicFinancialNewsCalendarEventsApiSchema)),
    companyId: s.string(),
    company: s.optionalNullable(s.lazy(() => companyNordicFinancialNewsCalendarEventsApiSchema)),
    country: s.optionalNullable(s.string()),
    dividend: s.optionalNullable(s.lazy(() => dividendSchema)),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      eventType: "event_type",
      datePrecision: "date_precision",
      fiscalPeriod: "fiscal_period",
      scheduledAt: "scheduled_at",
      localTime: "local_time",
      scheduledAtChangedAt: "scheduled_at_changed_at",
      sourceArticleId: "source_article_id",
      companyId: "company_id",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
