import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiErrorBodySchema, type ApiErrorBody } from "../models/api-error-body.js";
import { entityDetailSchema, type EntityDetail } from "../models/entity-detail.js";
import { entitySearchResponseSchema, type EntitySearchResponse } from "../models/entity-search-response.js";
import { trendingResponseSchema, type TrendingResponse } from "../models/trending-response.js";
import type { Servers } from "../servers.js";

/**
 * Named-entity search and trending topics
 */
export class KnowledgeGraph {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get entity detail
   *
   * @remarks
   * Returns an entity (person, organisation, place, etc.) plus the episodes where it's most
   * mentioned. Useful for building topic-specific feeds: pin to an entity, watch which episodes
   * mention it.
   *
   * @returns Entity + most-mentioning episodes
   *
   * @throws {@link KnowledgeGraph.GetEntityError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEntity(
    request: KnowledgeGraph.GetEntityRequest,
    options?: RequestOptions,
  ): ApiPromise<EntityDetail, KnowledgeGraph.GetEntityError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/entities/{entity_slug}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "entity_slug", value: request.entitySlug, schema: s.string() }],
        query: [{ name: "dataset_id", value: request.datasetId, schema: s.optional(s.int()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: entityDetailSchema },
        errorFactory: KnowledgeGraph.GetEntityError,
      },
      options,
    );
  }

  /**
   * Trending searches and entities
   *
   * @remarks
   * Returns what's trending across Audioscrape in the last 7 days — most-searched queries and
   * most-mentioned entities. Computed from anonymised search logs and live entity-mention counts.
   *
   * @returns Top searches + top entities for the last 7 days
   *
   * @throws {@link KnowledgeGraph.GetRealTrendingError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRealTrending(
    options?: RequestOptions,
  ): ApiPromise<TrendingResponse, KnowledgeGraph.GetRealTrendingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/trending"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trendingResponseSchema },
        errorFactory: KnowledgeGraph.GetRealTrendingError,
      },
      options,
    );
  }

  /**
   * Search knowledge-graph entities
   *
   * @remarks
   * Searches the knowledge-graph index for entities (people, organisations, places, topics,
   * products) extracted from podcast content. Results are sorted by total mention count across the
   * corpus.
   *
   * @returns Matching entities sorted by mention count
   *
   * @throws {@link KnowledgeGraph.SearchEntitiesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchEntities(
    request: KnowledgeGraph.SearchEntitiesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<EntitySearchResponse, KnowledgeGraph.SearchEntitiesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/entities"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "type", value: request.type, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "dataset_id", value: request.datasetId, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: entitySearchResponseSchema },
        errorFactory: KnowledgeGraph.SearchEntitiesError,
      },
      options,
    );
  }
}

export namespace KnowledgeGraph {
  export type GetEntityRequest = {
    /** URL slug from entity search results */
    entitySlug: string;
    /**
     * Only count/list episodes from this dataset. The dataset must be in your visible scope;
     * otherwise 404.
     */
    datasetId?: number;
  };

  export class GetEntityError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Declared<"apiErrorBody5", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEntityError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 404, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody5", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }

  export class GetRealTrendingError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRealTrendingError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }

  export type SearchEntitiesRequest = {
    /** Name prefix to search for */
    q?: string;
    /** Filter by entity type (e.g. `person`, `organization`, `place`) */
    type?: string;
    /** Max results (default 20, max 50) */
    limit?: number;
    /**
     * Only entities mentioned in this dataset. The dataset must be in your visible scope (public,
     * or in a workspace you belong to); otherwise 404.
     */
    datasetId?: number;
  };

  export class SearchEntitiesError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchEntitiesError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }
}
