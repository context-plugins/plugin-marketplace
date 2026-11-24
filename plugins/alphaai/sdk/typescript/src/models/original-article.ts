import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ownershipFormSchema, type OwnershipForm } from "./ownership-form.js";
import { topicSchema, type Topic } from "./topic.js";

/** The article as fetched from the source. `raw_text` is intentionally NOT exposed here. */
export type OriginalArticle = {
  id?: number;
  uid: string;
  title: string;
  url: string;
  timePublished: Date;
  /**
   * Article authors. On SEC Form 4 rows: every reporting owner of the filing, primary first — a
   * joint filing by a holding vehicle and the person behind it lists both.
   */
  authors?: string[];
  /** AI-generated summary safe to redistribute. */
  summary: string;
  bannerImage?: string | null;
  source: string;
  sourceDomain?: string;
  topics?: Topic[];
  tickersSentiment?: Record<string, unknown>[];
  /**
   * SEC Form 4 insider rows only — the holding pool the transaction touched. `null` for non-insider
   * news. A single Form 4 can surface a `direct` and an `indirect` leg of the same plan as two
   * separate articles (same filing URL, same date); they are distinct economic events, so SUM them
   * rather than dedupe by URL/accession.
   */
  ownershipForm?: OwnershipForm | null;
  /**
   * When AlphAI received the article — NOT its publish time (that is `time_published`). Use it to
   * judge how fresh a pickup is. Do not build "what's new" polling on this field; that is what
   * `sort=ingested` on `/api/news/` and `/api/news/insider/` is for.
   */
  createdAt?: Date;
  /**
   * Last time the stored article row was touched (including internal maintenance). Informational
   * only.
   */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const originalArticleProperties: s.Shape<OriginalArticle> = {
  id: s.optional(s.int()),
  uid: s.string(),
  title: s.string(),
  url: s.string(),
  timePublished: s.dateTime(),
  authors: s.optional(s.array(s.string())),
  summary: s.string(),
  bannerImage: s.optionalNullable(s.string()),
  source: s.string(),
  sourceDomain: s.optional(s.string()),
  topics: s.optional(s.array(s.lazy(() => topicSchema))),
  tickersSentiment: s.optional(s.array(s.record(s.string(), s.unknown()))),
  ownershipForm: s.optionalNullable(s.lazy(() => ownershipFormSchema)),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  _keysMap: {
    timePublished: "time_published",
    bannerImage: "banner_image",
    sourceDomain: "source_domain",
    tickersSentiment: "tickers_sentiment",
    ownershipForm: "ownership_form",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};

export const originalArticleInternalSchema: Schema<OriginalArticle> = s.object<OriginalArticle>(
  originalArticleProperties,
  { additionalProperties: s.json() },
);

export const originalArticleSchema: Schema<OriginalArticle> = s.lazySchema(() =>
  s.object<OriginalArticle>(
    {
      ...originalArticleProperties,
      uid: s.string().check(s.pattern("^[a-f0-9]{16}$")),
      url: s.string().check(s.url()),
      bannerImage: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
