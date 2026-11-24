import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Method, methodSchema } from "./method.js";
import { Model, modelSchema } from "./model.js";
import { summarizeFieldSchema, type SummarizeField } from "./summarize-field.js";

/**
 * Request body for the Search-Summarizer endpoint. Contains the user’s summary instructions, how
 * many articles to include, which fields to use, the retrieval method, and LLM generation settings.
 */
export type SummaryBody = {
  /**
   * Instructions guiding how the summary should be written. Maximum length: 2,048 characters.
   *
   * @default "You are a helpful assistant tasked with summarizing the search results. In a casual,
   * natural tone, craft a vivid, insightful synthesis in one fluid paragraph (no more than 125
   * words). Cover as many relevant points as possible, connect ideas, highlight themes, and surface
   * anything interesting or surprising."
   */
  prompt?: string | null;
  /**
   * Maximum number of articles used to generate the summary. Must be between 1 and 100.
   *
   * @default 10
   */
  maxArticleCount?: number | null;
  /**
   * Maximum number of articles returned in the response. Must be between 1 and 100 and cannot
   * return more articles than maxArticleCount selected.
   *
   * @default 10
   */
  returnedArticleCount?: number | null;
  /**
   * Which article fields to include when generating the summary. Up to three values from TITLE,
   * CONTENT, SUMMARY.
   */
  summarizeFields?: SummarizeField[] | null;
  /**
   * Article selection method. ARTICLES selects up to maxArticleCount matching articles; CLUSTERS
   * selects the first article from each of up to maxArticleCount stories.
   *
   * @default Method.Articles
   */
  method?: Method | null;
  /** The underlying LLM model to use for generation. @default Model.Gpt41 */
  model?: Model | null;
  /**
   * Sampling temperature from 0.0 to 2.0. Ignored by gpt-5.4-mini, gpt-5.4-nano, gpt-5-mini, and
   * gpt-5-nano.
   *
   * @default 0.7
   */
  temperature?: number | null;
  /** Nucleus sampling (top-p) for the LLM (0.0 to 1.0). @default 1 */
  topP?: number | null;
  /** Maximum number of tokens to generate. Must be 0 or greater. @default 2048 */
  maxTokens?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const summaryBodyProperties: s.Shape<SummaryBody> = {
  prompt: s.defaulted(
    s.nullable(s.string()),
    "You are a helpful assistant tasked with summarizing the search results. In a casual, natural tone, craft a vivid, insightful synthesis in one fluid paragraph (no more than 125 words). Cover as many relevant points as possible, connect ideas, highlight themes, and surface anything interesting or surprising.",
  ),
  maxArticleCount: s.defaulted(s.nullable(s.int()), 10),
  returnedArticleCount: s.defaulted(s.nullable(s.int()), 10),
  summarizeFields: s.optionalNullable(s.array(s.lazy(() => summarizeFieldSchema))),
  method: s.defaulted(s.nullable(s.lazy(() => methodSchema)), Method.Articles),
  model: s.defaulted(s.nullable(s.lazy(() => modelSchema)), Model.Gpt41),
  temperature: s.defaulted(s.nullable(s.float64()), 0.7),
  topP: s.defaulted(s.nullable(s.float64()), 1),
  maxTokens: s.defaulted(s.nullable(s.int()), 2048),
};

export const summaryBodyInternalSchema: Schema<SummaryBody> = s.object<SummaryBody>(summaryBodyProperties, {
  additionalProperties: s.json(),
});

export const summaryBodySchema: Schema<SummaryBody> = s.lazySchema(() =>
  s.object<SummaryBody>(
    {
      ...summaryBodyProperties,
      maxArticleCount: s.defaulted(s.nullable(s.int().check(s.gte(1), s.lte(100))), 10),
      returnedArticleCount: s.defaulted(s.nullable(s.int().check(s.gte(1), s.lte(100))), 10),
      temperature: s.defaulted(s.nullable(s.float64().check(s.gte(0), s.lte(2))), 0.7),
      topP: s.defaulted(s.nullable(s.float64().check(s.gte(0), s.lte(1))), 1),
      maxTokens: s.defaulted(s.nullable(s.int().check(s.gte(0))), 2048),
    },
    { additionalProperties: s.json() },
  ),
);
