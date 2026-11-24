import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  categoryNordicFinancialNewsStoriesApiSchema,
  type CategoryNordicFinancialNewsStoriesApi,
} from "./category-nordic-financial-news-stories-api.js";
import {
  companyNordicFinancialNewsStoriesApiSchema,
  type CompanyNordicFinancialNewsStoriesApi,
} from "./company-nordic-financial-news-stories-api.js";

export type StoryDetail = {
  /** Unique story identifier */
  id: string;
  /** Story title */
  title: string;
  /** Story summary */
  summary: string;
  /** Number of articles in this story (matches the length of article_ids) */
  articleCount: number;
  /**
   * When the story's newest source article was published (ISO 8601). This is editorial time, not
   * the time the story reached this API: a story about older news carries an older date. Use it to
   * filter by when news happened, never to track what is new to you.
   */
  publishedAt: Date;
  /**
   * When this record last changed (ISO 8601). This is the clock incremental sync runs on. It only
   * ever moves forward, unlike published_at. To sync: pass your last completed sync time as
   * `updated_after`, drain every page via `pagination.next_cursor`, and only then advance your
   * stored timestamp.
   */
  updatedAt: Date;
  /** IDs of articles in this story, most relevant first */
  articleIds?: string[];
  /** Country code (ISO 3166-1 alpha-2) */
  country?: string | null;
  /** IDs of companies mentioned in this story */
  companyIds?: string[];
  /** Story category */
  category?: CategoryNordicFinancialNewsStoriesApi;
  /**
   * ID of the event this story was generated from. An event that has since been merged or removed
   * still answers `GET /events/{id}` with a tombstone rather than a 404.
   */
  eventId?: string | null;
  /** Full story content in Markdown format */
  content?: string;
  /** Companies mentioned in this story */
  companies?: CompanyNordicFinancialNewsStoriesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storyDetailSchema: Schema<StoryDetail> = s.object<StoryDetail>(
  {
    id: s.string(),
    title: s.string(),
    summary: s.string(),
    articleCount: s.int(),
    publishedAt: s.dateTime(),
    updatedAt: s.dateTime(),
    articleIds: s.optional(s.array(s.string())),
    country: s.optionalNullable(s.string()),
    companyIds: s.optional(s.array(s.string())),
    category: s.optional(s.lazy(() => categoryNordicFinancialNewsStoriesApiSchema)),
    eventId: s.optionalNullable(s.string()),
    content: s.optional(s.string()),
    companies: s.optional(s.array(s.lazy(() => companyNordicFinancialNewsStoriesApiSchema))),
    _keysMap: {
      articleCount: "article_count",
      publishedAt: "published_at",
      updatedAt: "updated_at",
      articleIds: "article_ids",
      companyIds: "company_ids",
      eventId: "event_id",
    },
  },
  { additionalProperties: s.json() },
);
