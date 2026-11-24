import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ads2InternalSchema, ads2Schema, type Ads2 } from "./ads2.js";
import { citationPill5InternalSchema, citationPill5Schema, type CitationPill5 } from "./citation-pill5.js";
import { entitySchema, type Entity } from "./entity.js";
import { inlineProductSchema, type InlineProduct } from "./inline-product.js";
import { map1InternalSchema, map1Schema, type Map1 } from "./map1.js";
import { rawResponseSchema, type RawResponse } from "./raw-response.js";
import { shoppingCard5Schema, type ShoppingCard5 } from "./shopping-card5.js";
import { source8Schema, type Source8 } from "./source8.js";

/** ChatGPT's response data */
export type Result6 = {
  /** ChatGPT's response text */
  text?: string;
  /**
   * Array of sources referenced in the response. Returns empty array when no sources are available.
   */
  sources?: Source8[];
  /** A URL to the full HTML of the response (included when include.html is true) */
  html?: string;
  /** ChatGPT's response formatted in Markdown (included when include.markdown is true) */
  markdown?: string;
  /**
   * Array of streaming events returned by ChatGPT (included when include.rawResponse is true). With
   * `include.shopping` on as well, it includes the `product_update` events fetched for each inline
   * product and shopping-card product.
   */
  rawResponse?: RawResponse[];
  /**
   * Array of query fan-out ChatGPT used to generate the response (included when
   * include.searchQueries is true)
   */
  searchQueries?: string[];
  /**
   * Queries ChatGPT sent to its maps tool to build the `map` entries, deduplicated in first-seen
   * order (included when include.searchQueries is true). Distinct from `searchQueries`, the
   * web-search fan-out. Empty on responses served through OpenAI's mobile-web format; see `legacy`.
   */
  mapSearchQueries?: string[];
  /**
   * The ChatGPT model used to generate the response. Empty on responses served through OpenAI's
   * mobile-web format.
   */
  model?: string | null;
  /**
   * Array of shopping/product cards extracted from the response. The field is omitted entirely from
   * `result` when `include.shopping` is `false` or unset — clients should treat it as optional
   * rather than expecting an empty array.
   */
  shoppingCards?: ShoppingCard5[];
  /**
   * Array of inline products with pricing and offers. The field is omitted entirely from `result`
   * when `include.shopping` is `false` or unset — clients should treat it as optional rather than
   * expecting an empty array.
   */
  inlineProducts?: InlineProduct[];
  /** Array of entities extracted from the response (when available) */
  entities?: Entity[];
  /**
   * Array of business/place map entries extracted from the response (when available). Items come
   * from ChatGPT's enriched providers (Yelp, Google Business) and use camelCase field names. The
   * full field set is documented at /api-reference/endpoint/chatgpt/map; only the most commonly
   * populated fields are listed here.
   */
  map?: Map1[];
  /**
   * Array of inline citation pills extracted from the response (when available). These are
   * citations that appear inline within the text. Each entry is one (pill, source) pair; group by
   * `citationPillId` to recover pill-level structure.
   */
  citationPills?: CitationPill5[];
  /**
   * Array of ads served in the ChatGPT response (included when include.ads is true). OpenAI serves
   * candidate ads but the interface renders at most one; use `rendered` to identify which were
   * actually shown.
   */
  ads?: Ads2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const result6Properties: s.Shape<Result6> = {
  text: s.optional(s.string()),
  sources: s.optional(s.array(s.lazy(() => source8Schema))),
  html: s.optional(s.string()),
  markdown: s.optional(s.string()),
  rawResponse: s.optional(s.array(s.lazy(() => rawResponseSchema))),
  searchQueries: s.optional(s.array(s.string())),
  mapSearchQueries: s.optional(s.array(s.string())),
  model: s.optionalNullable(s.string()),
  shoppingCards: s.optional(s.array(s.lazy(() => shoppingCard5Schema))),
  inlineProducts: s.optional(s.array(s.lazy(() => inlineProductSchema))),
  entities: s.optional(s.array(s.lazy(() => entitySchema))),
  map: s.optional(s.array(s.lazy(() => map1InternalSchema))),
  citationPills: s.optional(s.array(s.lazy(() => citationPill5InternalSchema))),
  ads: s.optional(s.array(s.lazy(() => ads2InternalSchema))),
};

export const result6InternalSchema: Schema<Result6> = s.object<Result6>(result6Properties, {
  additionalProperties: s.json(),
});

export const result6Schema: Schema<Result6> = s.lazySchema(() =>
  s.object<Result6>(
    {
      ...result6Properties,
      html: s.optional(s.string().check(s.url())),
      map: s.optional(s.array(s.lazy(() => map1Schema))),
      citationPills: s.optional(s.array(s.lazy(() => citationPill5Schema))),
      ads: s.optional(s.array(s.lazy(() => ads2Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
