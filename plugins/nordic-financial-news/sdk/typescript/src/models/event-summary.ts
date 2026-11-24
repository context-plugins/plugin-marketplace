import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  eventTypeNordicFinancialNewsCompaniesApiSchema,
  type EventTypeNordicFinancialNewsCompaniesApi,
} from "./event-type-nordic-financial-news-companies-api.js";
import { significanceSchema, type Significance } from "./significance.js";
import {
  statusNordicFinancialNewsCompaniesApiSchema,
  type StatusNordicFinancialNewsCompaniesApi,
} from "./status-nordic-financial-news-companies-api.js";

/**
 * An event: one real-world development, grouping the articles that report it. A `merged` or
 * `removed` event (see `status`) returns only the minimal tombstone fields (`id`, `status`,
 * `merged_into`, `updated_at`). Title, significance, event_type, counts, and every id array are
 * omitted, never null-but-present, so a tombstone carries no content.
 */
export type EventSummary = {
  /** Unique event identifier */
  id: string;
  /** Event title (omitted on a tombstone) */
  title?: string;
  /**
   * Lifecycle status. `active`/`closed` are live (closed = coverage window lapsed but the event
   * stays visible and can reopen). `merged` = absorbed into another event (see `merged_into`);
   * `removed` = withdrawn from the feed (no live articles remain, or it was found to be incorrect).
   * `merged`/`removed` never appear in the default list and carry only the tombstone fields.
   */
  status: StatusNordicFinancialNewsCompaniesApi;
  /**
   * Editorial importance (omitted on a tombstone). `notable` = front-page-worthy; `routine` =
   * factual ledger record; `commentary` = single-article opinion/analysis.
   */
  significance?: Significance;
  /** The kind of event (omitted on a tombstone) */
  eventType?: EventTypeNordicFinancialNewsCompaniesApi | null;
  /**
   * Number of live articles reporting this event (omitted on a tombstone). This is the total count.
   * Your plan's age and source restrictions do not reduce it; use GET on the event to see which of
   * them your plan can fetch.
   */
  articleCount?: number;
  /**
   * When this event was first reported (ISO 8601, omitted on a tombstone): the earliest known
   * publication time among this event's member articles. Falls back to `last_article_at` for
   * ordering when null. This is editorial time, not the time the record reached this API.
   */
  firstReportedAt?: Date | null;
  /**
   * Publication time of the newest article reporting this event (ISO 8601, omitted on a tombstone).
   */
  lastArticleAt?: Date | null;
  /**
   * When this record last changed (ISO 8601). This is the clock incremental sync runs on. Pass your
   * last completed sync time as `updated_after`, drain every page via `pagination.next_cursor`, and
   * only then advance your stored timestamp.
   */
  updatedAt: Date;
  /**
   * IDs of companies associated with this event, verified and visible only (omitted on a
   * tombstone). Restricted to companies with an active-involvement role (subject, acquirer, target,
   * investor, issuer, partner) unless `include_peripheral=true`.
   */
  companyIds?: string[];
  /** IDs of published stories generated from this event, if any (omitted on a tombstone) */
  storyIds?: string[];
  /**
   * ID of the surviving event this one was merged into. Present only when `status` is `merged`;
   * null for every other status, including `removed` and on some older merged events.
   */
  mergedInto?: string | null;
  /**
   * Commentary-only metadata: the `id` of the factual event this commentary event comments on or
   * reacts to, when the piece is about a specific factual event. Always null for non-commentary
   * events, and often null for commentary events too (the piece may not be about a specific event).
   * Filter with `related_to=<id>` to find commentary reacting to a given event.
   */
  relatedTo?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventSummarySchema: Schema<EventSummary> = s.object<EventSummary>(
  {
    id: s.string(),
    title: s.optional(s.string()),
    status: statusNordicFinancialNewsCompaniesApiSchema,
    significance: s.optional(s.lazy(() => significanceSchema)),
    eventType: s.optionalNullable(s.lazy(() => eventTypeNordicFinancialNewsCompaniesApiSchema)),
    articleCount: s.optional(s.int()),
    firstReportedAt: s.optionalNullable(s.dateTime()),
    lastArticleAt: s.optionalNullable(s.dateTime()),
    updatedAt: s.dateTime(),
    companyIds: s.optional(s.array(s.string())),
    storyIds: s.optional(s.array(s.string())),
    mergedInto: s.optionalNullable(s.string()),
    relatedTo: s.optionalNullable(s.string()),
    _keysMap: {
      eventType: "event_type",
      articleCount: "article_count",
      firstReportedAt: "first_reported_at",
      lastArticleAt: "last_article_at",
      updatedAt: "updated_at",
      companyIds: "company_ids",
      storyIds: "story_ids",
      mergedInto: "merged_into",
      relatedTo: "related_to",
    },
  },
  { additionalProperties: s.json() },
);
