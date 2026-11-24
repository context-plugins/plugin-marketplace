import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  errorResponseBoomiDataHubGoldenRecordsApiSchema,
  type ErrorResponseBoomiDataHubGoldenRecordsApi,
} from "../models/error-response-boomi-data-hub-golden-records-api.js";
import {
  repositoriesUniversesRecordsResponseSchema,
  type RepositoriesUniversesRecordsResponse,
} from "../models/repositories-universes-records-response.js";
import type { Servers } from "../servers.js";

/**
 * Query and manage the authoritative master records that result from matching and merging source
 * records.
 */
export class GoldenRecords {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Boomi List golden records
   *
   * @remarks
   * Returns a paginated list of golden records from the specified master data domain (universe).
   *
   * @returns A paginated list of golden records.
   *
   * @throws {@link GoldenRecords.ListGoldenRecordsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listGoldenRecords(
    request: GoldenRecords.ListGoldenRecordsRequest,
    options?: RequestOptions,
  ): ApiPromise<RepositoriesUniversesRecordsResponse, GoldenRecords.ListGoldenRecordsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBoomiDataHubGoldenRecordsApi(
          "/repositories/{repositoryId}/universes/{universeId}/records",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "repositoryId", value: request.repositoryId, schema: s.string() },
          { name: "universeId", value: request.universeId, schema: s.string() },
        ],
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.int(), 100) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: repositoriesUniversesRecordsResponseSchema },
        errorFactory: GoldenRecords.ListGoldenRecordsError,
      },
      options,
    );
  }
}

export namespace GoldenRecords {
  export type ListGoldenRecordsRequest = {
    /** Unique identifier of the DataHub repository. */
    repositoryId: string;
    /** Unique identifier of the master data domain (universe). */
    universeId: string;
    /** Number of records per page. @default 100 */
    pageSize?: number;
    /** Pagination token from a previous response. */
    pageToken?: string;
  };

  export const listGoldenRecordsRequestSchema: Schema<ListGoldenRecordsRequest> = s.lazySchema(() =>
    s.object<ListGoldenRecordsRequest>({
      repositoryId: s.string(),
      universeId: s.string(),
      pageSize: s.defaulted(s.int().check(s.gte(1), s.lte(200)), 100),
      pageToken: s.optional(s.string()),
    }),
  );

  export class ListGoldenRecordsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi2", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListGoldenRecordsError> = [
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
