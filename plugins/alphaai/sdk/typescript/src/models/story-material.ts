import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StoryMaterial = {
  /** The article's uid — `/api/news/{uid}/` has the enriched row. */
  uid: string;
  title: string;
  /** Source domain. */
  publisher: string;
  timePublished: Date;
  /** The publisher's own URL of the article. */
  url: string;
  relevanceScore: number;
  /**
   * Whether the article passes AlphAI's quality gate (relevance 7+, tickers, a news category, new
   * information); the story page links such articles to their alphai.io page. Informational — the
   * API serves every row regardless.
   */
  seoEligible: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const storyMaterialProperties: s.Shape<StoryMaterial> = {
  uid: s.string(),
  title: s.string(),
  publisher: s.string(),
  timePublished: s.dateTime(),
  url: s.string(),
  relevanceScore: s.int(),
  seoEligible: s.boolean(),
  _keysMap: {
    timePublished: "time_published",
    relevanceScore: "relevance_score",
    seoEligible: "seo_eligible",
  },
};

export const storyMaterialInternalSchema: Schema<StoryMaterial> = s.object<StoryMaterial>(
  storyMaterialProperties,
  { additionalProperties: s.json() },
);

export const storyMaterialSchema: Schema<StoryMaterial> = s.lazySchema(() =>
  s.object<StoryMaterial>(
    {
      ...storyMaterialProperties,
      relevanceScore: s.int().check(s.gte(1), s.lte(10)),
    },
    { additionalProperties: s.json() },
  ),
);
