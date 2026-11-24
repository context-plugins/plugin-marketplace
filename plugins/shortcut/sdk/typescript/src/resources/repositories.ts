import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { repositorySchema, type Repository } from "../models/repository.js";
import type { Servers } from "../servers.js";

export class Repositories {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Repository
   *
   * @remarks
   * Get Repository returns information about the selected Repository.
   *
   * @returns Resource
   *
   * @throws {@link Repositories.GetRepositoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRepository(
    request: Repositories.GetRepositoryRequest,
    options?: RequestOptions,
  ): ApiPromise<Repository, Repositories.GetRepositoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/repositories/{repo-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "repo-public-id", value: request.repoPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: repositorySchema },
        errorFactory: Repositories.GetRepositoryError,
      },
      options,
    );
  }

  /**
   * List Repositories
   *
   * @remarks
   * List Repositories returns a list of all Repositories and their attributes.
   *
   * @returns Resource
   *
   * @throws {@link Repositories.ListRepositoriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRepositories(options?: RequestOptions): ApiPromise<Repository[], Repositories.ListRepositoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/repositories"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => repositorySchema)) },
        errorFactory: Repositories.ListRepositoriesError,
      },
      options,
    );
  }
}

export namespace Repositories {
  export type GetRepositoryRequest = {
    /** The unique ID of the Repository. */
    repoPublicId: number;
  };

  export class GetRepositoryError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRepositoryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export class ListRepositoriesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRepositoriesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
