import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import type { Servers } from "../servers.js";

/**
 * Manage API definitions and reference pages
 */
export class ApIs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete An API Definition
   *
   * @returns Deleted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBranchesByBranchApisById(
    request: ApIs.DeleteBranchesByBranchApisByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultReadMeApiKeysApi("/branches/{branch}/apis/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "branch", value: request.branch, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
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
   * List API Definitions
   *
   * @remarks
   * Retrieve metadata for API definitions on a branch.
   *
   * @returns Successful retrieval
   *
   * @throws {@link ApIs.GetBranchesByBranchApisError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBranchesByBranchApis(
    request: ApIs.GetBranchesByBranchApisRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApIs.GetBranchesByBranchApisError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReadMeApiKeysApi("/branches/{branch}/apis"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "branch", value: request.branch, schema: s.string() }],
        query: [
          { name: "perPage", value: request.perPage, schema: s.defaulted(s.int(), 10) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApIs.GetBranchesByBranchApisError,
      },
      options,
    );
  }

  /**
   * Get An API Definition
   *
   * @returns API definition
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBranchesByBranchApisById(
    request: ApIs.GetBranchesByBranchApisByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultReadMeApiKeysApi("/branches/{branch}/apis/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "branch", value: request.branch, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
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
   * Upload An API Definition
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postBranchesByBranchApis(
    request: ApIs.PostBranchesByBranchApisRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultReadMeApiKeysApi("/branches/{branch}/apis"),
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
   * Update An API Definition
   *
   * @returns Updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ReadMeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putBranchesByBranchApisById(
    request: ApIs.PutBranchesByBranchApisByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultReadMeApiKeysApi("/branches/{branch}/apis/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "branch", value: request.branch, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
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

export namespace ApIs {
  export type DeleteBranchesByBranchApisByIdRequest = {
    branch: string;
    id: string;
  };

  export type GetBranchesByBranchApisRequest = {
    branch: string;
    /** @default 10 */
    perPage?: number;
    /** @default 1 */
    page?: number;
  };

  export const getBranchesByBranchApisRequestSchema: Schema<GetBranchesByBranchApisRequest> = s.lazySchema(
    () =>
      s.object<GetBranchesByBranchApisRequest>({
        branch: s.string(),
        perPage: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
        page: s.defaulted(s.int().check(s.gte(1)), 1),
      }),
  );

  export class GetBranchesByBranchApisError extends ApiError {
    declare readonly payload: Declared<"error401", undefined> | Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetBranchesByBranchApisError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetBranchesByBranchApisByIdRequest = {
    branch: string;
    id: string;
  };

  export type PostBranchesByBranchApisRequest = {
    branch: string;
  };

  export type PutBranchesByBranchApisByIdRequest = {
    branch: string;
    id: string;
  };
}
