import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

/**
 * Who published the current date. `article` is a news article or company announcement.
 * `company_website` is the issuer's own investor relations calendar. `null` when our editors set
 * the date.
 */
export type SourceNordicFinancialNewsCalendarEventsApi = {
  type?: Type;
  /**
   * The publisher: the outlet that carried the article, or the issuer's investor relations site.
   * `null` when the article is no longer available.
   */
  name?: string | null;
  /** The investor relations calendar page, for `company_website`. `null` for `article`. */
  url?: string | null;
  /**
   * ID of the article, for `article`. Matches `source_article_id`. `null` when the article is no
   * longer available, and for `company_website`.
   */
  articleId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceNordicFinancialNewsCalendarEventsApiSchema: Schema<SourceNordicFinancialNewsCalendarEventsApi> =
  s.object<SourceNordicFinancialNewsCalendarEventsApi>(
    {
      type: s.optional(s.lazy(() => typeSchema)),
      name: s.optionalNullable(s.string()),
      url: s.optionalNullable(s.string()),
      articleId: s.optionalNullable(s.string()),
      _keysMap: {
        articleId: "article_id",
      },
    },
    { additionalProperties: s.json() },
  );
