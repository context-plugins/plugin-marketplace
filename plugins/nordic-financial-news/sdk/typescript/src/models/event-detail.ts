import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  companyNordicFinancialNewsEventsApiSchema,
  type CompanyNordicFinancialNewsEventsApi,
} from "./company-nordic-financial-news-events-api.js";
import {
  eventTypeNordicFinancialNewsCompaniesApiSchema,
  type EventTypeNordicFinancialNewsCompaniesApi,
} from "./event-type-nordic-financial-news-companies-api.js";
import { figureDivergenceSchema, type FigureDivergence } from "./figure-divergence.js";
import { significanceSchema, type Significance } from "./significance.js";
import {
  statusNordicFinancialNewsCompaniesApiSchema,
  type StatusNordicFinancialNewsCompaniesApi,
} from "./status-nordic-financial-news-companies-api.js";

export type EventDetail = {
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
  /**
   * Event summary (omitted on a tombstone). Null when no summary has been generated for the event
   * yet.
   */
  summary?: string | null;
  /**
   * IDs of this event's live articles that your plan can fetch, oldest first by publication time
   * (omitted on a tombstone). May be shorter than `article_count` on a plan with age or source
   * restrictions. That gap is not an error.
   */
  articleIds?: string[];
  /**
   * The primary disclosure among this event's live articles your plan can fetch: the earliest one
   * from a primary-disclosure source (wire service, stock exchange feed, PR platform, or government
   * body). Null when the event has none. Always an element of `article_ids`, or null; omitted on a
   * tombstone. A plan with age or source restrictions may see a later official copy of the same
   * disclosure, or null, instead of the true earliest one.
   */
  primaryDisclosureArticleId?: string | null;
  /**
   * True when this event's own member articles report divergent values for the same headline figure
   * (e.g. one source reports operating profit as −2.2m, another as −2.4m). A signal that the single
   * consolidated summary hides a source-level disagreement. Omitted on a tombstone.
   */
  memberFiguresDisagree?: boolean;
  /**
   * Detail behind `member_figures_disagree`: the specific metrics whose values disagree across
   * member articles, with the per-source figures and range. Null when there is no disagreement;
   * omitted on a tombstone.
   */
  figureDivergence?: FigureDivergence | null;
  /**
   * The same companies as `company_ids`, with detail per company: name, ticker, primary flag,
   * association tier. Primary company first; omitted on a tombstone.
   */
  companies?: CompanyNordicFinancialNewsEventsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventDetailSchema: Schema<EventDetail> = s.object<EventDetail>(
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
    summary: s.optionalNullable(s.string()),
    articleIds: s.optional(s.array(s.string())),
    primaryDisclosureArticleId: s.optionalNullable(s.string()),
    memberFiguresDisagree: s.optional(s.boolean()),
    figureDivergence: s.optionalNullable(s.lazy(() => figureDivergenceSchema)),
    companies: s.optional(s.array(s.lazy(() => companyNordicFinancialNewsEventsApiSchema))),
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
      articleIds: "article_ids",
      primaryDisclosureArticleId: "primary_disclosure_article_id",
      memberFiguresDisagree: "member_figures_disagree",
      figureDivergence: "figure_divergence",
    },
  },
  { additionalProperties: s.json() },
);
