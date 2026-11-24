import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Servers } from "../servers.js";

/**
 * Manage custom documentation pages
 */
export class CustomPages {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete A Custom Page
   *
   * @returns Deleted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBranchesByBranchCustomPagesBySlug(
    request: CustomPages.DeleteBranchesByBranchCustomPagesBySlugRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultReadMeApiKeysApi("/branches/{branch}/custom_pages/{slug}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "branch", value: request.branch, schema: s.string() },
          { name: "slug", value: request.slug, schema: s.string() },
        ],
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
   * List Custom Pages
   *
   * @returns Custom pages
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBranchesByBranchCustomPages(
    request: CustomPages.GetBranchesByBranchCustomPagesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReadMeApiKeysApi("/branches/{branch}/custom_pages"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "branch", value: request.branch, schema: s.string() }],
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
   * Get A Custom Page
   *
   * @returns Custom page
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBranchesByBranchCustomPagesBySlug(
    request: CustomPages.GetBranchesByBranchCustomPagesBySlugRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReadMeApiKeysApi("/branches/{branch}/custom_pages/{slug}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "branch", value: request.branch, schema: s.string() },
          { name: "slug", value: request.slug, schema: s.string() },
        ],
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
   * Create A Custom Page
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postBranchesByBranchCustomPages(
    request: CustomPages.PostBranchesByBranchCustomPagesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReadMeApiKeysApi("/branches/{branch}/custom_pages"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "branch", value: request.branch, schema: s.string() }],
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
   * Update A Custom Page
   *
   * @returns Updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putBranchesByBranchCustomPagesBySlug(
    request: CustomPages.PutBranchesByBranchCustomPagesBySlugRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultReadMeApiKeysApi("/branches/{branch}/custom_pages/{slug}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "branch", value: request.branch, schema: s.string() },
          { name: "slug", value: request.slug, schema: s.string() },
        ],
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
}

export namespace CustomPages {
  export type DeleteBranchesByBranchCustomPagesBySlugRequest = {
    branch: string;
    slug: string;
  };

  export type GetBranchesByBranchCustomPagesRequest = {
    branch: string;
  };

  export type GetBranchesByBranchCustomPagesBySlugRequest = {
    branch: string;
    slug: string;
  };

  export type PostBranchesByBranchCustomPagesRequest = {
    branch: string;
  };

  export type PutBranchesByBranchCustomPagesBySlugRequest = {
    branch: string;
    slug: string;
  };
}
