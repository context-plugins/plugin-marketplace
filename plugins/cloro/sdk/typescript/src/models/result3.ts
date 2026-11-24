import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { adInternalSchema, adSchema, type Ad } from "./ad.js";
import { aioverviewInternalSchema, aioverviewSchema, type Aioverview } from "./aioverview.js";
import { knowledgeGraphSchema, type KnowledgeGraph } from "./knowledge-graph.js";
import { localResultSchema, type LocalResult } from "./local-result.js";
import { organicResultSchema, type OrganicResult } from "./organic-result.js";
import { peopleAlsoAskSchema, type PeopleAlsoAsk } from "./people-also-ask.js";
import { peopleAreSayingSchema, type PeopleAreSaying } from "./people-are-saying.js";
import { productResultInternalSchema, productResultSchema, type ProductResult } from "./product-result.js";
import { relatedSearchSchema, type RelatedSearch } from "./related-search.js";
import { shoppingCard3InternalSchema, shoppingCard3Schema, type ShoppingCard3 } from "./shopping-card3.js";

/** Google search results data */
export type Result3 = {
  /** Organic search results from Google */
  organicResults?: OrganicResult[];
  /** People Also Ask questions from Google */
  peopleAlsoAsk?: PeopleAlsoAsk[];
  /**
   * Cards from Google's "What people are saying" / "Trending posts and discussions" SERP module.
   * The field is omitted from `result` when no such module appears on the SERP, so clients should
   * treat it as optional rather than expecting an empty array.
   */
  peopleAreSaying?: PeopleAreSaying[];
  /**
   * Places from Google's local pack (the map-backed "3-pack" of local businesses on local-intent
   * queries, e.g. "best pizza in new york city"). The field is omitted from `result` when no local
   * pack appears on the SERP, so clients should treat it as optional rather than expecting an empty
   * array. Desktop only; mobile and the separate hotels/travel pack are not surfaced.
   */
  localResults?: LocalResult[];
  /**
   * Absolute URL of the local pack's "More places" / "More businesses" control — Google's expanded
   * Local Finder for the query. Returned only alongside `localResults` when the SERP renders the
   * control.
   */
  localResultsMoreLink?: string;
  /** Related search suggestions */
  relatedSearches?: RelatedSearch[];
  /**
   * Sponsored ad results from Google search, including text ads (`type: RESULT`) and shopping-style
   * sponsored cards (`type: SHOPPING_CARD`) from the right-hand-side and top-of-page carousels.
   */
  ads?: Ad[];
  /**
   * Google AI Overview data (if requested). Omitted when Google shows no AI Overview for the query.
   */
  aioverview?: Aioverview;
  /**
   * Shopping product cards extracted from the SERP's organic shopping grids ("Popular products" /
   * "More products"). The field is omitted from `result` when no shopping section is present, so
   * clients should treat it as optional rather than expecting an empty array. Cards carry no
   * product URL: they open a Google-side overlay rather than an external page.
   */
  shoppingCards?: ShoppingCard3[];
  /**
   * Google's Knowledge Graph panel for the queried entity. Omitted from `result` when no Knowledge
   * Graph panel appears on the SERP — treat it as optional rather than expecting null.
   */
  knowledgeGraph?: KnowledgeGraph;
  /**
   * Merchant offers from the right-rail product panel. At most one entry, present only when Google
   * shows the panel; no request flag needed. See [product
   * results](/api-reference/endpoint/google/product-results).
   */
  productResults?: ProductResult[];
  /** Raw HTML from Google search page (if requested) */
  html?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const result3Properties: s.Shape<Result3> = {
  organicResults: s.optional(s.array(s.lazy(() => organicResultSchema))),
  peopleAlsoAsk: s.optional(s.array(s.lazy(() => peopleAlsoAskSchema))),
  peopleAreSaying: s.optional(s.array(s.lazy(() => peopleAreSayingSchema))),
  localResults: s.optional(s.array(s.lazy(() => localResultSchema))),
  localResultsMoreLink: s.optional(s.string()),
  relatedSearches: s.optional(s.array(s.lazy(() => relatedSearchSchema))),
  ads: s.optional(s.array(s.lazy(() => adInternalSchema))),
  aioverview: s.optional(s.lazy(() => aioverviewInternalSchema)),
  shoppingCards: s.optional(s.array(s.lazy(() => shoppingCard3InternalSchema))),
  knowledgeGraph: s.optional(s.lazy(() => knowledgeGraphSchema)),
  productResults: s.optional(s.array(s.lazy(() => productResultInternalSchema))),
  html: s.optional(s.array(s.string())),
};

export const result3InternalSchema: Schema<Result3> = s.object<Result3>(result3Properties, {
  additionalProperties: s.json(),
});

export const result3Schema: Schema<Result3> = s.lazySchema(() =>
  s.object<Result3>(
    {
      ...result3Properties,
      ads: s.optional(s.array(s.lazy(() => adSchema))),
      aioverview: s.optional(s.lazy(() => aioverviewSchema)),
      shoppingCards: s.optional(s.array(s.lazy(() => shoppingCard3Schema))),
      productResults: s.optional(s.array(s.lazy(() => productResultSchema))),
      html: s.optional(s.array(s.string().check(s.url()))),
    },
    { additionalProperties: s.json() },
  ),
);
