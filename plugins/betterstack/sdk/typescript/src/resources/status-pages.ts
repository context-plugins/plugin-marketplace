import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusPageCreateInternalSchema, type StatusPageCreate } from "../models/status-page-create.js";
import type { Servers } from "../servers.js";

export class StatusPages {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create status page
   *
   * @returns Created status page.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createStatusPage(
    request: StatusPages.CreateStatusPageRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/status-pages"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: statusPageCreateInternalSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove status page
   *
   * @returns Removed.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteStatusPage(
    request: StatusPages.DeleteStatusPageRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/status-pages/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get status page
   *
   * @returns Status page.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStatusPage(
    request: StatusPages.GetStatusPageRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/status-pages/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List status pages
   *
   * @returns A page of status pages.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listStatusPages(
    request: StatusPages.ListStatusPagesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/status-pages"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "per_page", value: request.perPage, schema: s.optional(s.int()) },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List status pages in group
   *
   * @returns Status pages in the group.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listStatusPagesInGroup(
    request: StatusPages.ListStatusPagesInGroupRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/status-pages/group/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update status page
   *
   * @returns Updated status page.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BetterStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateStatusPage(
    request: StatusPages.UpdateStatusPageRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/status-pages/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: statusPageCreateInternalSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace StatusPages {
  export type CreateStatusPageRequest = {
    body: StatusPageCreate;
  };

  export type DeleteStatusPageRequest = {
    id: string;
  };

  export type GetStatusPageRequest = {
    id: string;
  };

  export type ListStatusPagesRequest = {
    perPage?: number;
    page?: number;
  };

  export const listStatusPagesRequestSchema: Schema<ListStatusPagesRequest> = s.lazySchema(() =>
    s.object<ListStatusPagesRequest>({
      perPage: s.optional(s.int().check(s.gte(1), s.lte(50))),
      page: s.optional(s.int().check(s.gte(1))),
    }),
  );

  export type ListStatusPagesInGroupRequest = {
    id: string;
  };

  export type UpdateStatusPageRequest = {
    id: string;
    body: StatusPageCreate;
  };
}
