import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { companyFilterSchema, type CompanyFilter } from "../models/company-filter.js";
import type { Servers } from "../servers.js";

/**
 * Search and filter company records.
 */
export class Search {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Search Companies (Elasticsearch DSL)
   *
   * @remarks
   * Search company records using a full Elasticsearch DSL query body.
   *
   * @returns Array of matching company record IDs
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoresignalError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchCompaniesByEsDsl(
    request: Search.SearchCompaniesByEsDslRequest,
    options?: RequestOptions,
  ): ApiPromise<number[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/search/es_dsl"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.array(s.int()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Search Companies (filter)
   *
   * @remarks
   * Search company records using a structured filter object. Returns matching record IDs.
   *
   * @returns Array of matching company record IDs
   *
   * @throws {@link Search.SearchCompaniesByFilterError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CoresignalError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchCompaniesByFilter(
    request: Search.SearchCompaniesByFilterRequest,
    options?: RequestOptions,
  ): ApiPromise<number[], Search.SearchCompaniesByFilterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/search/filter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: companyFilterSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.int()) },
        errorFactory: Search.SearchCompaniesByFilterError,
      },
      options,
    );
  }
}

export namespace Search {
  export type SearchCompaniesByEsDslRequest = {
    body: Record<string, unknown>;
  };

  export type SearchCompaniesByFilterRequest = {
    body: CompanyFilter;
  };

  export class SearchCompaniesByFilterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error402", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchCompaniesByFilterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 402, kind: "error402", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
