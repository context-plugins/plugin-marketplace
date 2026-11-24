import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companyInputSchema, type CompanyInput } from "../models/company-input.js";
import { companyListSchema, type CompanyList } from "../models/company-list.js";
import { companySchema, type Company } from "../models/company.js";
import { deletedSchema, type Deleted } from "../models/deleted.js";
import type { Servers } from "../servers.js";

export class Companies {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a company (name required)
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCompany(
    request: Companies.CreateCompanyRequest,
    options?: RequestOptions,
  ): ApiPromise<Company, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/companies"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "json", value: request.body, schema: companyInputSchema },
      },
      {
        success: { kind: "json", schema: companySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Soft-delete a company
   *
   * @returns Deleted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCompany(
    request: Companies.DeleteCompanyRequest,
    options?: RequestOptions,
  ): ApiPromise<Deleted, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/companies/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deletedSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch a company
   *
   * @returns Company
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompany(request: Companies.GetCompanyRequest, options?: RequestOptions): ApiPromise<Company, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List companies
   *
   * @returns Company list
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCompanies(
    request: Companies.ListCompaniesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CompanyList, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "include_deleted", value: request.includeDeleted, schema: s.optional(s.boolean()) },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "domain", value: request.domain, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyListSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Restore a company
   *
   * @returns Restored
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreCompany(
    request: Companies.RestoreCompanyRequest,
    options?: RequestOptions,
  ): ApiPromise<Company, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/companies/{id}/restore"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a company
   *
   * @returns Updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link RelmCrmError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCompany(
    request: Companies.UpdateCompanyRequest,
    options?: RequestOptions,
  ): ApiPromise<Company, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/companies/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.oauth2),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: companyInputSchema },
      },
      {
        success: { kind: "json", schema: companySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Companies {
  export type CreateCompanyRequest = {
    /** Safely retry a create: same key + same body replays the original result. */
    idempotencyKey?: string;
    body: CompanyInput;
  };

  export type DeleteCompanyRequest = {
    id: string;
  };

  export type GetCompanyRequest = {
    id: string;
  };

  export type ListCompaniesRequest = {
    /** Page size (default 25, max 100). @default 25 */
    limit?: number;
    /** Opaque keyset cursor from a prior next_cursor. */
    cursor?: string;
    /** Include soft-deleted rows. */
    includeDeleted?: boolean;
    q?: string;
    domain?: string;
  };

  export const listCompaniesRequestSchema: Schema<ListCompaniesRequest> = s.lazySchema(() =>
    s.object<ListCompaniesRequest>({
      limit: s.defaulted(s.int().check(s.lte(100)), 25),
      cursor: s.optional(s.string()),
      includeDeleted: s.optional(s.boolean()),
      q: s.optional(s.string()),
      domain: s.optional(s.string()),
    }),
  );

  export type RestoreCompanyRequest = {
    id: string;
  };

  export type UpdateCompanyRequest = {
    id: string;
    /**
     * The record's current version for optimistic concurrency; a mismatch returns 412
     * version_conflict.
     */
    ifMatch?: string;
    body: CompanyInput;
  };
}
