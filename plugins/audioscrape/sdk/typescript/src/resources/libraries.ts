import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { apiErrorBodySchema, type ApiErrorBody } from "../models/api-error-body.js";
import { datasetDetailSchema, type DatasetDetail } from "../models/dataset-detail.js";
import { libraryDetailSchema, type LibraryDetail } from "../models/library-detail.js";
import { libraryListSchema, type LibraryList } from "../models/library-list.js";
import type { Servers } from "../servers.js";

/**
 * Published content catalogs — public workspaces and published datasets. The organizational
 * hierarchy: Library → Dataset → Item. Use these endpoints to browse content shared with everyone;
 * for your own tenant, use Workspaces.
 */
export class Libraries {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get dataset detail
   *
   * @remarks
   * Returns a dataset + a reference to its parent library, in a single response. Saves a round-trip
   * when you have a dataset ID from a search result and need its context.
   *
   * @returns Dataset + parent library reference
   *
   * @throws {@link Libraries.GetDatasetError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDataset(
    request: Libraries.GetDatasetRequest,
    options?: RequestOptions,
  ): ApiPromise<DatasetDetail, Libraries.GetDatasetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/datasets/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: datasetDetailSchema },
        errorFactory: Libraries.GetDatasetError,
      },
      options,
    );
  }

  /**
   * Get library detail
   *
   * @remarks
   * Returns one library + the datasets the calling user can see. Public datasets are always
   * returned; workspace-scoped datasets are returned only to members.
   *
   * @returns Library + visible datasets
   *
   * @throws {@link Libraries.GetLibraryError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLibrary(
    request: Libraries.GetLibraryRequest,
    options?: RequestOptions,
  ): ApiPromise<LibraryDetail, Libraries.GetLibraryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/libraries/{slug}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "slug", value: request.slug, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: libraryDetailSchema },
        errorFactory: Libraries.GetLibraryError,
      },
      options,
    );
  }

  /**
   * List public libraries
   *
   * @remarks
   * Returns every public library on Audioscrape, ordered by subscriber count. The `is_subscribed`
   * field on each entry tells you whether the calling user is already a member.
   *
   * @returns All public libraries
   *
   * @throws {@link Libraries.ListLibrariesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listLibraries(options?: RequestOptions): ApiPromise<LibraryList, Libraries.ListLibrariesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/libraries"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: libraryListSchema },
        errorFactory: Libraries.ListLibrariesError,
      },
      options,
    );
  }
}

export namespace Libraries {
  export type GetDatasetRequest = {
    /** Numeric dataset ID */
    id: number;
  };

  export class GetDatasetError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Declared<"apiErrorBody5", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDatasetError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 404, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody5", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }

  export type GetLibraryRequest = {
    /** Library slug (e.g. `audioscrape`) */
    slug: string;
  };

  export class GetLibraryError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Declared<"apiErrorBody5", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLibraryError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 404, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody5", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }

  export class ListLibrariesError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Declared<"apiErrorBody3", ApiErrorBody>
      | Declared<"apiErrorBody4", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListLibrariesError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 402, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 403, kind: "apiErrorBody3", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 429, kind: "apiErrorBody4", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }
}
