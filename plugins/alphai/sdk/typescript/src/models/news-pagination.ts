import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  richNewsArticleInternalSchema,
  richNewsArticleSchema,
  type RichNewsArticle,
} from "./rich-news-article.js";

export type NewsPagination = {
  results: RichNewsArticle[];
  /**
   * Opaque cursor for the next page. Pass it back as `?cursor=` with the same `sort` mode. Default
   * (`sort=published`) feed: the next older page, `null` when the end of the feed has been reached.
   * Delta mode (`sort=ingested`): always non-null — it is your polling position; empty `results`
   * means caught up, keep the cursor and poll again later.
   */
  nextCursor: string | null;
  /**
   * Crypto-collider hint, set only when `symbol` named a string a stock/ETF owns while an active
   * cryptocurrency answers to the same base (crypto is addressed as `<SYM>-USD`, so `BTC` is the
   * Grayscale ETF and `BTC-USD` the coin). One sentence naming the coin ticker to request; `null`
   * for every other query. The page itself still serves the equity's feed — the string keeps its
   * equity meaning.
   */
  symbolNote?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const newsPaginationProperties: s.Shape<NewsPagination> = {
  results: s.array(s.lazy(() => richNewsArticleInternalSchema)),
  nextCursor: s.nullable(s.string()),
  symbolNote: s.optionalNullable(s.string()),
  _keysMap: {
    nextCursor: "next_cursor",
    symbolNote: "symbol_note",
  },
};

export const newsPaginationInternalSchema: Schema<NewsPagination> = s.object<NewsPagination>(
  newsPaginationProperties,
  { additionalProperties: s.json() },
);

export const newsPaginationSchema: Schema<NewsPagination> = s.lazySchema(() =>
  s.object<NewsPagination>(
    {
      ...newsPaginationProperties,
      results: s.array(s.lazy(() => richNewsArticleSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
