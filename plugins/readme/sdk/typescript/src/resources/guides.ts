import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Servers } from "../servers.js";

/**
 * Manage knowledge base guide pages
 */
export class Guides {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete A Guide
   *
   * @returns Deleted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBranchesByBranchGuidesBySlug(
    request: Guides.DeleteBranchesByBranchGuidesBySlugRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultReadMeApiKeysApi("/branches/{branch}/guides/{slug}"),
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
   * List Guide Pages
   *
   * @returns List of guides
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBranchesByBranchGuides(
    request: Guides.GetBranchesByBranchGuidesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReadMeApiKeysApi("/branches/{branch}/guides"),
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
   * Get A Guide By Slug
   *
   * @returns Guide page
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBranchesByBranchGuidesBySlug(
    request: Guides.GetBranchesByBranchGuidesBySlugRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReadMeApiKeysApi("/branches/{branch}/guides/{slug}"),
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
   * Create A Guide Page
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postBranchesByBranchGuides(
    request: Guides.PostBranchesByBranchGuidesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReadMeApiKeysApi("/branches/{branch}/guides"),
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
   * Update A Guide
   *
   * @returns Updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putBranchesByBranchGuidesBySlug(
    request: Guides.PutBranchesByBranchGuidesBySlugRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultReadMeApiKeysApi("/branches/{branch}/guides/{slug}"),
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

export namespace Guides {
  export type DeleteBranchesByBranchGuidesBySlugRequest = {
    branch: string;
    slug: string;
  };

  export type GetBranchesByBranchGuidesRequest = {
    branch: string;
  };

  export type GetBranchesByBranchGuidesBySlugRequest = {
    branch: string;
    slug: string;
  };

  export type PostBranchesByBranchGuidesRequest = {
    branch: string;
  };

  export type PutBranchesByBranchGuidesBySlugRequest = {
    branch: string;
    slug: string;
  };
}
