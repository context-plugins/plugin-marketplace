import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Complex filter structure for Wikipedia page searches that supports nested logical operations
 * (AND, OR, NOT) and multiple filtering criteria.
 */
export type WikipediaSearchFilter = {
  /**
   * Filter by specific Perigon page identifiers. Accepts either a single ID or an array of IDs.
   * Returns only pages matching these IDs.
   */
  pageId?: string[] | null;
  /**
   * Filter by specific section identifiers. Accepts either a single ID or an array of IDs. Returns
   * only pages containing these sections.
   */
  sectionId?: string[] | null;
  /**
   * Filter by specific Wikipedia page identifiers. Accepts either a single ID or an array of IDs.
   * Returns only pages matching these IDs.
   */
  wikiPageId?: number[] | null;
  /**
   * Filter by specific Perigon page revision identifiers. Accepts either a single ID or an array of
   * IDs. Returns only pages matching these IDs.
   */
  wikiRevisionId?: number[] | null;
  /** Filter by specific Wikipedia project codes. Returns only pages matching these projects. */
  wikiCode?: string[] | null;
  /** Filter by specific Wikipedia namespaces. Returns only pages matching these namespaces. */
  wikiNamespace?: number[] | null;
  /**
   * Filter by specific Wikidata entity IDs. Returns only pages whose Wikidata entities match those
   * ids.
   */
  wikidataId?: string[] | null;
  /**
   * Filter by specific Wikidata entity IDs. Returns only pages whose Wikidata entities are
   * instances of provided ids.
   */
  wikidataInstanceOfId?: string[] | null;
  /**
   * Filter by specific Wikidata entity labels. Returns only pages whose Wikidata entities are
   * instances of these labels.
   */
  wikidataInstanceOfLabel?: string[] | null;
  /**
   * Adds additional AND filter objects. These objects must be of the same type as the original
   * filter object and will be combined with the existing filter using the AND logical operator.
   */
  and?: WikipediaSearchFilter[] | null;
  /**
   * Adds additional OR filter objects. These objects must be of the same type as the original
   * filter object and will be combined with the existing filter using the OR logical operator.
   */
  or?: WikipediaSearchFilter[] | null;
  /** A filter object for logical NOT operations */
  not?: WikipediaSearchFilter[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const wikipediaSearchFilterSchema: Schema<WikipediaSearchFilter> = s.object<WikipediaSearchFilter>(
  {
    pageId: s.optionalNullable(s.array(s.string())),
    sectionId: s.optionalNullable(s.array(s.string())),
    wikiPageId: s.optionalNullable(s.array(s.int())),
    wikiRevisionId: s.optionalNullable(s.array(s.int())),
    wikiCode: s.optionalNullable(s.array(s.string())),
    wikiNamespace: s.optionalNullable(s.array(s.int())),
    wikidataId: s.optionalNullable(s.array(s.string())),
    wikidataInstanceOfId: s.optionalNullable(s.array(s.string())),
    wikidataInstanceOfLabel: s.optionalNullable(s.array(s.string())),
    and: s.optionalNullable(s.array(s.lazy(() => wikipediaSearchFilterSchema))),
    or: s.optionalNullable(s.array(s.lazy(() => wikipediaSearchFilterSchema))),
    not: s.optionalNullable(s.array(s.lazy(() => wikipediaSearchFilterSchema))),
    _keysMap: {
      and: "AND",
      or: "OR",
      not: "NOT",
    },
  },
  { additionalProperties: s.json() },
);
