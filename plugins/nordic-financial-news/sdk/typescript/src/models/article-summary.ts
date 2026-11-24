import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";
import { contentTypeSchema, type ContentType } from "./content-type.js";
import { sourceSchema, type Source } from "./source.js";

export type ArticleSummary = {
  /** Unique article identifier */
  id: string;
  /** Article title in English. Machine-translated when the source article is not in English. */
  title: string;
  /** Link to the original article */
  articleUrl: string;
  /** Type of article content */
  contentType: ContentType;
  /**
   * When the article was published by its source (ISO 8601). This is editorial time, not the time
   * the article reached this API. Use it to filter by when news happened, never to track what is
   * new to you.
   */
  publishedAt: Date;
  /**
   * When this record last changed (ISO 8601). This is the clock incremental sync runs on. It only
   * ever moves forward, unlike published_at. To sync: pass your last completed sync time as
   * `updated_after`, drain every page via `pagination.next_cursor`, and only then advance your
   * stored timestamp.
   */
  updatedAt: Date;
  /** Article category */
  category: Category;
  /** The news source that published this article */
  source: Source;
  /** IDs of companies mentioned in the article */
  companyIds: string[];
  /** Country code (ISO 3166-1 alpha-2) */
  country: string | null;
  /**
   * ID of the event this article belongs to. Null when the article has not been assigned to an
   * event yet. An event that has since been merged or removed still answers `GET /events/{id}` with
   * a tombstone rather than a 404.
   */
  eventId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const articleSummarySchema: Schema<ArticleSummary> = s.object<ArticleSummary>(
  {
    id: s.string(),
    title: s.string(),
    articleUrl: s.string(),
    contentType: contentTypeSchema,
    publishedAt: s.dateTime(),
    updatedAt: s.dateTime(),
    category: categorySchema,
    source: sourceSchema,
    companyIds: s.array(s.string()),
    country: s.nullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    _keysMap: {
      articleUrl: "article_url",
      contentType: "content_type",
      publishedAt: "published_at",
      updatedAt: "updated_at",
      companyIds: "company_ids",
      eventId: "event_id",
    },
  },
  { additionalProperties: s.json() },
);
