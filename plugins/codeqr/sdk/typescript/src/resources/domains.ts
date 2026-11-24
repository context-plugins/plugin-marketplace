import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { domainSchemaSchema, type DomainSchema } from "../models/domain-schema.js";
import { domainsRequestInternalSchema, type DomainsRequest } from "../models/domains-request.js";
import { domainsRequest1InternalSchema, type DomainsRequest1 } from "../models/domains-request1.js";
import { domainsResponseSchema, type DomainsResponse } from "../models/domains-response.js";
import { m4001Schema, type M4001 } from "../models/m4001.js";
import type { Servers } from "../servers.js";

export class Domains {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a domain
   *
   * @remarks
   * Create a domain for the authenticated workspace.
   *
   * @returns The domain was created.
   *
   * @throws {@link Domains.CreateDomainError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDomain(
    request: Domains.CreateDomainRequest = {},
    options?: RequestOptions,
  ): ApiPromise<DomainSchema, Domains.CreateDomainError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/domains"),
        auth: this.#auth.token,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => domainsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: domainSchemaSchema },
        errorFactory: Domains.CreateDomainError,
      },
      options,
    );
  }

  /**
   * Delete a domain
   *
   * @remarks
   * Delete a domain from a workspace. It cannot be undone. This will also delete all the links
   * associated with the domain.
   *
   * @returns The domain was deleted.
   *
   * @throws {@link Domains.DeleteDomainError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDomain(
    request: Domains.DeleteDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<DomainsResponse, Domains.DeleteDomainError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/domains/{slug}"),
        auth: this.#auth.token,
        pathParams: [{ name: "slug", value: request.slug, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: domainsResponseSchema },
        errorFactory: Domains.DeleteDomainError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of domains
   *
   * @remarks
   * Retrieve a list of domains associated with the authenticated workspace.
   *
   * @returns The domains were retrieved.
   *
   * @throws {@link Domains.ListDomainsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDomains(
    request: Domains.ListDomainsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<DomainSchema[], Domains.ListDomainsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/domains"),
        auth: this.#auth.token,
        pathParams: [],
        query: [
          { name: "archived", value: request.archived, schema: s.defaulted(s.boolean(), false) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.float64(), 50) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => domainSchemaSchema)) },
        errorFactory: Domains.ListDomainsError,
      },
      options,
    );
  }

  /**
   * Update a domain
   *
   * @remarks
   * Update a domain for the authenticated workspace.
   *
   * @returns The domain was updated.
   *
   * @throws {@link Domains.UpdateDomainError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link CodeQrError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDomain(
    request: Domains.UpdateDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<DomainSchema, Domains.UpdateDomainError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/domains/{slug}"),
        auth: this.#auth.token,
        pathParams: [{ name: "slug", value: request.slug, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => domainsRequest1InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: domainSchemaSchema },
        errorFactory: Domains.UpdateDomainError,
      },
      options,
    );
  }
}

export namespace Domains {
  export type CreateDomainRequest = {
    body?: DomainsRequest;
  };

  export class CreateDomainError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateDomainError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type DeleteDomainRequest = {
    /** The domain name. */
    slug: string;
  };

  export class DeleteDomainError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDomainError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type ListDomainsRequest = {
    /**
     * Whether to include archived domains in the response. Defaults to `false` if not provided.
     *
     * @default false
     */
    archived?: boolean;
    /** The search term to filter the domains by. */
    search?: string;
    /** The page number for pagination. @default 1 */
    page?: number;
    /** The number of items per page. @default 50 */
    pageSize?: number;
  };

  export const listDomainsRequestSchema: Schema<ListDomainsRequest> = s.lazySchema(() =>
    s.object<ListDomainsRequest>({
      archived: s.defaulted(s.boolean(), false),
      search: s.optional(s.string()),
      page: s.defaulted(s.float64().check(s.gt(0)), 1),
      pageSize: s.defaulted(s.float64().check(s.gt(0), s.lte(50)), 50),
    }),
  );

  export class ListDomainsError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListDomainsError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }

  export type UpdateDomainRequest = {
    /** The domain name. */
    slug: string;
    body?: DomainsRequest1;
  };

  export class UpdateDomainError extends ApiError {
    declare readonly payload:
      | Declared<"m4001", M4001>
      | Declared<"m40012", M4001>
      | Declared<"m40013", M4001>
      | Declared<"m40014", M4001>
      | Declared<"m40015", M4001>
      | Declared<"m40016", M4001>
      | Declared<"m40017", M4001>
      | Declared<"m40018", M4001>
      | Declared<"m40019", M4001>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateDomainError> = [
      { on: 400, kind: "m4001", decode: { kind: "json", schema: m4001Schema } },
      { on: 401, kind: "m40012", decode: { kind: "json", schema: m4001Schema } },
      { on: 403, kind: "m40013", decode: { kind: "json", schema: m4001Schema } },
      { on: 404, kind: "m40014", decode: { kind: "json", schema: m4001Schema } },
      { on: 409, kind: "m40015", decode: { kind: "json", schema: m4001Schema } },
      { on: 410, kind: "m40016", decode: { kind: "json", schema: m4001Schema } },
      { on: 422, kind: "m40017", decode: { kind: "json", schema: m4001Schema } },
      { on: 429, kind: "m40018", decode: { kind: "json", schema: m4001Schema } },
      { on: 500, kind: "m40019", decode: { kind: "json", schema: m4001Schema } },
    ];
  }
}
