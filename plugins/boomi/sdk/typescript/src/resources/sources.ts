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
import {
  repositoriesSourcesResponseSchema,
  type RepositoriesSourcesResponse,
} from "../models/repositories-sources-response.js";
import {
  sourceBoomiDataHubSourcesApiSchema,
  type SourceBoomiDataHubSourcesApi,
} from "../models/source-boomi-data-hub-sources-api.js";
import { sourceInputSchema, type SourceInput } from "../models/source-input.js";
import type { Servers } from "../servers.js";

/**
 * Manage data sources that contribute records to the master data hub for matching and merging.
 */
export class Sources {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Boomi Create a source
   *
   * @remarks
   * Creates a new data source within the repository representing a system that contributes records
   * to the master data hub.
   *
   * @returns The created data source.
   *
   * @throws {@link Sources.CreateSourceError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSource(
    request: Sources.CreateSourceRequest,
    options?: RequestOptions,
  ): ApiPromise<SourceBoomiDataHubSourcesApi, Sources.CreateSourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBoomiDataHubGoldenRecordsApi(
          "/repositories/{repositoryId}/sources",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "repositoryId", value: request.repositoryId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sourceInputSchema },
      },
      {
        success: { kind: "json", schema: sourceBoomiDataHubSourcesApiSchema },
        errorFactory: Sources.CreateSourceError,
      },
      options,
    );
  }

  /**
   * Boomi List sources
   *
   * @remarks
   * Returns all data sources configured within a specific repository.
   *
   * @returns A list of data sources.
   *
   * @throws {@link Sources.ListSourcesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSources(
    request: Sources.ListSourcesRequest,
    options?: RequestOptions,
  ): ApiPromise<RepositoriesSourcesResponse, Sources.ListSourcesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBoomiDataHubGoldenRecordsApi(
          "/repositories/{repositoryId}/sources",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "repositoryId", value: request.repositoryId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: repositoriesSourcesResponseSchema },
        errorFactory: Sources.ListSourcesError,
      },
      options,
    );
  }
}

export namespace Sources {
  export type CreateSourceRequest = {
    /** Unique identifier of the DataHub repository. */
    repositoryId: string;
    body: SourceInput;
  };

  export class CreateSourceError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi2", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSourceError> = [
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

  export type ListSourcesRequest = {
    /** Unique identifier of the DataHub repository. */
    repositoryId: string;
  };

  export class ListSourcesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi2", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSourcesError> = [
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
}
