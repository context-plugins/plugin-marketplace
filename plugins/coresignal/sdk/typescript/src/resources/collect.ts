import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { bulkCollectRequestSchema, type BulkCollectRequest } from "../models/bulk-collect-request.js";
import { companyInternalSchema, type Company } from "../models/company.js";
import type { Servers } from "../servers.js";

/**
 * Retrieve full company records by ID.
 */
export class Collect {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Bulk Collect Companies
   *
   * @remarks
   * Retrieve multiple full company records by an array of IDs.
   *
   * @returns Array of company records
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CoresignalError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkCollectCompanies(
    request: Collect.BulkCollectCompaniesRequest,
    options?: RequestOptions,
  ): ApiPromise<Company[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/bulk_collect"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkCollectRequestSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => companyInternalSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Collect a Company record
   *
   * @remarks
   * Retrieve the full company record for the given ID.
   *
   * @returns Full company record
   *
   * @throws {@link Collect.CollectCompanyError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CoresignalError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  collectCompany(
    request: Collect.CollectCompanyRequest,
    options?: RequestOptions,
  ): ApiPromise<Company, Collect.CollectCompanyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/collect/{id}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyInternalSchema },
        errorFactory: Collect.CollectCompanyError,
      },
      options,
    );
  }
}

export namespace Collect {
  export type BulkCollectCompaniesRequest = {
    body: BulkCollectRequest;
  };

  export type CollectCompanyRequest = {
    /** Coresignal internal company ID */
    id: number;
  };

  export class CollectCompanyError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CollectCompanyError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }
}
