import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  apiV1StatutesByStateResponseSchema,
  type ApiV1StatutesByStateResponse,
} from "../models/api-v1-statutes-by-state-response.js";
import {
  apiV1StatutesSearchResponseSchema,
  type ApiV1StatutesSearchResponse,
} from "../models/api-v1-statutes-search-response.js";
import {
  apiV1StatutesSectionsResponseSchema,
  type ApiV1StatutesSectionsResponse,
} from "../models/api-v1-statutes-sections-response.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

export class Statutes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Browse/enumerate every statute section on file for a state, grouped by chapter…
   *
   * @remarks
   * Browse/enumerate every statute section on file for a state, grouped by chapter — the companion
   * to statutes/search for "show me everything" rather than a keyword match. Filter to one chapter
   * or a tagged topic.
   *
   * **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.
   *
   * @returns Success.
   *
   * @throws {@link Statutes.StatutesByStateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  statutesByState(
    request: Statutes.StatutesByStateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1StatutesByStateResponse, Statutes.StatutesByStateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/statutes/by-state"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "state", value: request.state, schema: s.string() },
          { name: "chapter", value: request.chapter, schema: s.optional(s.string()) },
          { name: "topic", value: request.topic, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1StatutesByStateResponseSchema },
        errorFactory: Statutes.StatutesByStateError,
      },
      options,
    );
  }

  /**
   * Full-text search across the community-association statute corpus, ranked by…
   *
   * @remarks
   * Full-text search across the community-association statute corpus, ranked by relevance. The
   * endpoint behind the statute search on commonelements.com, available programmatically.
   *
   * **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.
   *
   * @returns Success.
   *
   * @throws {@link Statutes.StatutesSearchError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  statutesSearch(
    request: Statutes.StatutesSearchRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1StatutesSearchResponse, Statutes.StatutesSearchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/statutes/search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.string() },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1StatutesSearchResponseSchema },
        errorFactory: Statutes.StatutesSearchError,
      },
      options,
    );
  }

  /**
   * The full text and metadata for one statute section, including its parent…
   *
   * @remarks
   * The full text and metadata for one statute section, including its parent chapter and formatted
   * citation. Follow-up call after search or by-state to read the section in full.
   *
   * @returns Success.
   *
   * @throws {@link Statutes.StatutesSectionDetailError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  statutesSectionDetail(
    request: Statutes.StatutesSectionDetailRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1StatutesSectionsResponse, Statutes.StatutesSectionDetailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/statutes/sections/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1StatutesSectionsResponseSchema },
        errorFactory: Statutes.StatutesSectionDetailError,
      },
      options,
    );
  }
}

export namespace Statutes {
  export type StatutesByStateRequest = {
    /** Two-letter state code. */
    state: string;
    /** Limit to one chapter number. */
    chapter?: string;
    /** Limit to sections tagged with this topic. */
    topic?: string;
    /** Max results, 1 to 200 (default 100). */
    limit?: number;
    /** Pagination offset (default 0). */
    offset?: number;
  };

  export class StatutesByStateError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<StatutesByStateError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type StatutesSearchRequest = {
    /** Search text, minimum 2 characters. */
    q: string;
    /**
     * Two-letter state code to scope results to one jurisdiction. Omit to search every
     * jurisdiction.
     */
    state?: string;
    /** Max results, 1 to 25 (default 10). */
    limit?: number;
    /** Pagination offset (default 0). */
    offset?: number;
  };

  export class StatutesSearchError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<StatutesSearchError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type StatutesSectionDetailRequest = {
    /** Section id from search or by-state. */
    id: string;
  };

  export class StatutesSectionDetailError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<StatutesSectionDetailError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
