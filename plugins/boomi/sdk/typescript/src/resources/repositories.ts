import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  errorResponseBoomiDataHubGoldenRecordsApiSchema,
  type ErrorResponseBoomiDataHubGoldenRecordsApi,
} from "../models/error-response-boomi-data-hub-golden-records-api.js";
import { repositoriesResponseSchema, type RepositoriesResponse } from "../models/repositories-response.js";
import { repositoryInputSchema, type RepositoryInput } from "../models/repository-input.js";
import { repositorySchema, type Repository } from "../models/repository.js";
import type { Servers } from "../servers.js";

/**
 * Manage DataHub repositories that contain master data domains.
 */
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
   * Boomi Create a repository
   *
   * @remarks
   * Creates a new DataHub repository for managing master data.
   *
   * @returns The created repository.
   *
   * @throws {@link Repositories.CreateRepositoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createRepository(
    request: Repositories.CreateRepositoryRequest,
    options?: RequestOptions,
  ): ApiPromise<Repository, Repositories.CreateRepositoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBoomiDataHubGoldenRecordsApi("/repositories"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: repositoryInputSchema },
      },
      {
        success: { kind: "json", schema: repositorySchema },
        errorFactory: Repositories.CreateRepositoryError,
      },
      options,
    );
  }

  /**
   * Boomi Delete a repository
   *
   * @remarks
   * Permanently deletes a DataHub repository and all its data.
   *
   * @returns Deletion successful.
   *
   * @throws {@link Repositories.DeleteRepositoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteRepository(
    request: Repositories.DeleteRepositoryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Repositories.DeleteRepositoryError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultBoomiDataHubGoldenRecordsApi("/repositories/{repositoryId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "repositoryId", value: request.repositoryId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Repositories.DeleteRepositoryError,
      },
      options,
    );
  }

  /**
   * Boomi Get a repository
   *
   * @remarks
   * Retrieves details of a specific DataHub repository by its ID.
   *
   * @returns The repository details.
   *
   * @throws {@link Repositories.GetRepositoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
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
        urlTemplate: this.#servers.defaultBoomiDataHubGoldenRecordsApi("/repositories/{repositoryId}"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "repositoryId", value: request.repositoryId, schema: s.string() }],
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
   * Boomi List repositories
   *
   * @remarks
   * Returns a list of all DataHub repositories associated with the authenticated account.
   *
   * @returns A list of DataHub repositories.
   *
   * @throws {@link Repositories.ListRepositoriesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRepositories(
    options?: RequestOptions,
  ): ApiPromise<RepositoriesResponse, Repositories.ListRepositoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBoomiDataHubGoldenRecordsApi("/repositories"),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: repositoriesResponseSchema },
        errorFactory: Repositories.ListRepositoriesError,
      },
      options,
    );
  }
}

export namespace Repositories {
  export type CreateRepositoryRequest = {
    body: RepositoryInput;
  };

  export class CreateRepositoryError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi2", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateRepositoryError> = [
      {
        on: 400,
        kind: "errorResponseBoomiDataHubGoldenRecordsApi",
        decode: { kind: "json", schema: errorResponseBoomiDataHubGoldenRecordsApiSchema },
      },
      {
        on: 401,
        kind: "errorResponseBoomiDataHubGoldenRecordsApi2",
        decode: { kind: "json", schema: errorResponseBoomiDataHubGoldenRecordsApiSchema },
      },
    ];
  }

  export type DeleteRepositoryRequest = {
    /** Unique identifier of the DataHub repository. */
    repositoryId: string;
  };

  export class DeleteRepositoryError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi2", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteRepositoryError> = [
      {
        on: 401,
        kind: "errorResponseBoomiDataHubGoldenRecordsApi",
        decode: { kind: "json", schema: errorResponseBoomiDataHubGoldenRecordsApiSchema },
      },
      {
        on: 404,
        kind: "errorResponseBoomiDataHubGoldenRecordsApi2",
        decode: { kind: "json", schema: errorResponseBoomiDataHubGoldenRecordsApiSchema },
      },
    ];
  }

  export type GetRepositoryRequest = {
    /** Unique identifier of the DataHub repository. */
    repositoryId: string;
  };

  export class GetRepositoryError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi2", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRepositoryError> = [
      {
        on: 401,
        kind: "errorResponseBoomiDataHubGoldenRecordsApi",
        decode: { kind: "json", schema: errorResponseBoomiDataHubGoldenRecordsApiSchema },
      },
      {
        on: 404,
        kind: "errorResponseBoomiDataHubGoldenRecordsApi2",
        decode: { kind: "json", schema: errorResponseBoomiDataHubGoldenRecordsApiSchema },
      },
    ];
  }

  export class ListRepositoriesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRepositoriesError> = [
      {
        on: 401,
        kind: "errorResponseBoomiDataHubGoldenRecordsApi",
        decode: { kind: "json", schema: errorResponseBoomiDataHubGoldenRecordsApiSchema },
      },
    ];
  }
}
