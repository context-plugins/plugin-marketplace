import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  errorResponseBoomiDataHubGoldenRecordsApiSchema,
  type ErrorResponseBoomiDataHubGoldenRecordsApi,
} from "../models/error-response-boomi-data-hub-golden-records-api.js";
import {
  repositoriesUniversesQuarantineResponseSchema,
  type RepositoriesUniversesQuarantineResponse,
} from "../models/repositories-universes-quarantine-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage quarantined records that could not be automatically processed due to data quality issues.
 */
export class Quarantine {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Boomi List quarantine entries
   *
   * @remarks
   * Returns records held in quarantine that could not be automatically processed due to data
   * quality or matching issues.
   *
   * @returns A list of quarantined records.
   *
   * @throws {@link Quarantine.ListQuarantineEntriesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link BoomiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listQuarantineEntries(
    request: Quarantine.ListQuarantineEntriesRequest,
    options?: RequestOptions,
  ): ApiPromise<RepositoriesUniversesQuarantineResponse, Quarantine.ListQuarantineEntriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBoomiDataHubGoldenRecordsApi(
          "/repositories/{repositoryId}/universes/{universeId}/quarantine",
        ),
        auth: anyAuth(this.#auth.basicAuth, this.#auth.bearerAuth),
        pathParams: [
          { name: "repositoryId", value: request.repositoryId, schema: s.string() },
          { name: "universeId", value: request.universeId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: repositoriesUniversesQuarantineResponseSchema },
        errorFactory: Quarantine.ListQuarantineEntriesError,
      },
      options,
    );
  }
}

export namespace Quarantine {
  export type ListQuarantineEntriesRequest = {
    /** Unique identifier of the DataHub repository. */
    repositoryId: string;
    /** Unique identifier of the master data domain (universe). */
    universeId: string;
  };

  export class ListQuarantineEntriesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Declared<"errorResponseBoomiDataHubGoldenRecordsApi2", ErrorResponseBoomiDataHubGoldenRecordsApi>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListQuarantineEntriesError> = [
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
