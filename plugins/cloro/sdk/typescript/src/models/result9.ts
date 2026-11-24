import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ads3InternalSchema, ads3Schema, type Ads3 } from "./ads3.js";
import { aioverview2InternalSchema, aioverview2Schema, type Aioverview2 } from "./aioverview2.js";
import { knowledgeGraph1Schema, type KnowledgeGraph1 } from "./knowledge-graph1.js";
import { localResult1InternalSchema, localResult1Schema, type LocalResult1 } from "./local-result1.js";
import { organicResult1Schema, type OrganicResult1 } from "./organic-result1.js";
import { peopleAlsoAsk1Schema, type PeopleAlsoAsk1 } from "./people-also-ask1.js";
import { peopleAreSaying1Schema, type PeopleAreSaying1 } from "./people-are-saying1.js";
import {
  productResult2InternalSchema,
  productResult2Schema,
  type ProductResult2,
} from "./product-result2.js";
import { recipeSchema, type Recipe } from "./recipe.js";
import { relatedSearchSchema, type RelatedSearch } from "./related-search.js";
import { shoppingCard6InternalSchema, shoppingCard6Schema, type ShoppingCard6 } from "./shopping-card6.js";

/** Google search results data */
export type Result9 = {
  /** Organic search results from Google */
  organicResults?: OrganicResult1[];
  /** People Also Ask questions from Google */
  peopleAlsoAsk?: PeopleAlsoAsk1[];
  /**
   * Cards from Google's "What people are saying" / "Trending posts and discussions" SERP module.
   * The field is omitted from `result` when no such module appears on the SERP, so clients should
   * treat it as optional rather than expecting an empty array.
   */
  peopleAreSaying?: PeopleAreSaying1[];
  /**
   * Cards from Google's Recipes carousel, on desktop and mobile. Only the cards in the page as
   * first loaded are returned. The field is omitted from `result` when no Recipes carousel appears
   * on the SERP, so clients should treat it as optional rather than expecting an empty array.
   */
  recipes?: Recipe[];
  /**
   * Places from Google's local pack (the map-backed "3-pack" of local businesses on local-intent
   * queries, e.g. "best pizza in new york city"). The field is omitted from `result` when no local
   * pack appears on the SERP, so clients should treat it as optional rather than expecting an empty
   * array. Returned on desktop and mobile. Google's separate hotels/travel pack is not surfaced.
   */
  localResults?: LocalResult1[];
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
  ads?: Ads3[];
  /**
   * Google AI Overview data (if requested). Omitted when Google shows no AI Overview for the query.
   */
  aioverview?: Aioverview2;
  /**
   * Shopping product cards extracted from the SERP's organic shopping grids ("Popular products" /
   * "More products"). The field is omitted from `result` when no shopping section is present, so
   * clients should treat it as optional rather than expecting an empty array. Cards carry no
   * product URL: they open a Google-side overlay rather than an external page.
   */
  shoppingCards?: ShoppingCard6[];
  /**
   * Google's Knowledge Graph panel for the queried entity. Omitted from `result` when no Knowledge
   * Graph panel appears on the SERP — treat it as optional rather than expecting null.
   */
  knowledgeGraph?: KnowledgeGraph1;
  /**
   * Merchant offers from the right-rail product panel. At most one entry, present only when Google
   * shows the panel; no request flag needed. See [product
   * results](/api-reference/endpoint/google/product-results).
   */
  productResults?: ProductResult2[];
  /** Raw HTML from Google search page (if requested) */
  html?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const result9Properties: s.Shape<Result9> = {
  organicResults: s.optional(s.array(s.lazy(() => organicResult1Schema))),
  peopleAlsoAsk: s.optional(s.array(s.lazy(() => peopleAlsoAsk1Schema))),
  peopleAreSaying: s.optional(s.array(s.lazy(() => peopleAreSaying1Schema))),
  recipes: s.optional(s.array(s.lazy(() => recipeSchema))),
  localResults: s.optional(s.array(s.lazy(() => localResult1InternalSchema))),
  localResultsMoreLink: s.optional(s.string()),
  relatedSearches: s.optional(s.array(s.lazy(() => relatedSearchSchema))),
  ads: s.optional(s.array(s.lazy(() => ads3InternalSchema))),
  aioverview: s.optional(s.lazy(() => aioverview2InternalSchema)),
  shoppingCards: s.optional(s.array(s.lazy(() => shoppingCard6InternalSchema))),
  knowledgeGraph: s.optional(s.lazy(() => knowledgeGraph1Schema)),
  productResults: s.optional(s.array(s.lazy(() => productResult2InternalSchema))),
  html: s.optional(s.array(s.string())),
};

export const result9InternalSchema: Schema<Result9> = s.object<Result9>(result9Properties, {
  additionalProperties: s.json(),
});

export const result9Schema: Schema<Result9> = s.lazySchema(() =>
  s.object<Result9>(
    {
      ...result9Properties,
      localResults: s.optional(s.array(s.lazy(() => localResult1Schema))),
      ads: s.optional(s.array(s.lazy(() => ads3Schema))),
      aioverview: s.optional(s.lazy(() => aioverview2Schema)),
      shoppingCards: s.optional(s.array(s.lazy(() => shoppingCard6Schema))),
      productResults: s.optional(s.array(s.lazy(() => productResult2Schema))),
      html: s.optional(s.array(s.string().check(s.url()))),
    },
    { additionalProperties: s.json() },
  ),
);
