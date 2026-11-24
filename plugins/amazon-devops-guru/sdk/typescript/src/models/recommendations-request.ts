import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { localeSchema, type Locale } from "./locale.js";

export type RecommendationsRequest = {
  /** The ID of the requested insight. */
  insightId: string;
  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this
   * value is null, it retrieves the first page.
   */
  nextToken?: string;
  /** A locale that specifies the language to use for recommendations. */
  locale?: Locale;
  /** The ID of the Amazon Web Services account. */
  accountId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recommendationsRequestSchema: Schema<RecommendationsRequest> = s.object<RecommendationsRequest>(
  {
    insightId: s.string(),
    nextToken: s.optional(s.string()),
    locale: s.optional(s.lazy(() => localeSchema)),
    accountId: s.optional(s.string()),
    _keysMap: {
      insightId: "InsightId",
      nextToken: "NextToken",
      locale: "Locale",
      accountId: "AccountId",
    },
  },
  { additionalProperties: s.json() },
);
