import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Servers } from "../servers.js";

/**
 * Manage sidebar groupings
 */
export class Categories {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete A Category
   *
   * @returns Deleted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBranchesByBranchCategoriesBySlug(
    request: Categories.DeleteBranchesByBranchCategoriesBySlugRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultReadMeApiKeysApi("/branches/{branch}/categories/{slug}"),
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
   * List Categories
   *
   * @returns Categories
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBranchesByBranchCategories(
    request: Categories.GetBranchesByBranchCategoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReadMeApiKeysApi("/branches/{branch}/categories"),
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
   * Get A Category
   *
   * @returns Category
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBranchesByBranchCategoriesBySlug(
    request: Categories.GetBranchesByBranchCategoriesBySlugRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReadMeApiKeysApi("/branches/{branch}/categories/{slug}"),
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
   * Create A Category
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postBranchesByBranchCategories(
    request: Categories.PostBranchesByBranchCategoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReadMeApiKeysApi("/branches/{branch}/categories"),
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
   * Update A Category
   *
   * @returns Updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putBranchesByBranchCategoriesBySlug(
    request: Categories.PutBranchesByBranchCategoriesBySlugRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultReadMeApiKeysApi("/branches/{branch}/categories/{slug}"),
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

export namespace Categories {
  export type DeleteBranchesByBranchCategoriesBySlugRequest = {
    branch: string;
    slug: string;
  };

  export type GetBranchesByBranchCategoriesRequest = {
    branch: string;
  };

  export type GetBranchesByBranchCategoriesBySlugRequest = {
    branch: string;
    slug: string;
  };

  export type PostBranchesByBranchCategoriesRequest = {
    branch: string;
  };

  export type PutBranchesByBranchCategoriesBySlugRequest = {
    branch: string;
    slug: string;
  };
}
