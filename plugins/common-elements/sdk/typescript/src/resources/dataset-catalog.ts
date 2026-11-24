import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  apiV1AssociationsDatasetsResponseSchema,
  type ApiV1AssociationsDatasetsResponse,
} from "../models/api-v1-associations-datasets-response.js";
import {
  apiV1DatasetsResponseSchema,
  type ApiV1DatasetsResponse,
} from "../models/api-v1-datasets-response.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * What the platform holds, and what it holds for one association. Start here: the catalog names
 * every resource, the plan it needs, and the caveat that stops an unmatched jurisdiction reading as
 * a clean record.
 */
export class DatasetCatalog {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * What the platform holds for one association across every resource, in one round…
   *
   * @remarks
   * What the platform holds for one association across every resource, in one round trip: record
   * counts, how many of each resource's sources could be measured, whether your key can read them,
   * and the coverage caveat. The call to make before deciding which resource endpoints are worth a
   * request.
   *
   * - Counts are returned for resources above your plan on purpose. The size of what is behind the
   *   gate is the offer.
   *
   * @returns Success.
   *
   * @throws {@link DatasetCatalog.DatasetsAssociationIndexError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  datasetsAssociationIndex(
    request: DatasetCatalog.DatasetsAssociationIndexRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AssociationsDatasetsResponse, DatasetCatalog.DatasetsAssociationIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/{id}/datasets"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsDatasetsResponseSchema },
        errorFactory: DatasetCatalog.DatasetsAssociationIndexError,
      },
      options,
    );
  }

  /**
   * The resource catalog: every published resource and every source behind it, with…
   *
   * @remarks
   * The resource catalog: every published resource and every source behind it, with display name,
   * buyer summary, provenance, state footprint, coverage basis and caveat, the plan each needs, and
   * whether your key can read it. Resources above your plan are listed deliberately — an absence
   * you cannot see is indistinguishable from a clean record.
   *
   * @returns Success.
   *
   * @throws {@link DatasetCatalog.DatasetsCatalogError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  datasetsCatalog(
    options?: RequestOptions,
  ): ApiPromise<ApiV1DatasetsResponse, DatasetCatalog.DatasetsCatalogError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/datasets"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1DatasetsResponseSchema },
        errorFactory: DatasetCatalog.DatasetsCatalogError,
      },
      options,
    );
  }
}

export namespace DatasetCatalog {
  export type DatasetsAssociationIndexRequest = {
    /** Association id. */
    id: string;
  };

  export class DatasetsAssociationIndexError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DatasetsAssociationIndexError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export class DatasetsCatalogError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DatasetsCatalogError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
