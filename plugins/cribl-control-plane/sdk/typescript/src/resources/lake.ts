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
  countedCriblLakeDatasetSchema,
  type CountedCriblLakeDataset,
} from "../models/counted-cribl-lake-dataset.js";
import {
  criblLakeDatasetUpdateSchema,
  type CriblLakeDatasetUpdate,
} from "../models/cribl-lake-dataset-update.js";
import { criblLakeDatasetSchema, type CriblLakeDataset } from "../models/cribl-lake-dataset.js";
import { datasetFormatFilterSchema, type DatasetFormatFilter } from "../models/dataset-format-filter.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  paginatedCriblLakeDatasetSchema,
  type PaginatedCriblLakeDataset,
} from "../models/paginated-cribl-lake-dataset.js";
import type { Servers } from "../servers.js";

/**
 * Actions related to Lake
 */
export class Lake {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Lake Datasets (Cribl.Cloud only)
   *
   * @remarks
   * Creates one or more Lake Datasets in the specified Lake in a single transaction (Cribl.Cloud
   * only). Send a single Lake Dataset object to create just one, or an array to bulk-create
   * multiple. When an array is sent, the response is <code>{ items, errors }</code> —
   * <code>items</code> contains the successfully created Lake Datasets, and <code>errors</code>
   * contains an entry (<code>{ id, reason }</code>) for each Lake Dataset that failed validation,
   * so a per-item failure does not fail the rest of the batch.
   *
   * @returns The created CriblLakeDataset object in a single-item list.
   *
   * @throws {@link Lake.CreateCriblLakeDatasetByLakeIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createCriblLakeDatasetByLakeId(
    request: Lake.CreateCriblLakeDatasetByLakeIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedCriblLakeDataset, Lake.CreateCriblLakeDatasetByLakeIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/products/lake/lakes/{lakeId}/datasets"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "lakeId", value: request.lakeId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: criblLakeDatasetSchema },
      },
      {
        success: { kind: "json", schema: countedCriblLakeDatasetSchema },
        errorFactory: Lake.CreateCriblLakeDatasetByLakeIdError,
      },
      options,
    );
  }

  /**
   * Delete a Lake Dataset (Cribl.Cloud only)
   *
   * @remarks
   * Delete the specified Lake Dataset in the specified Lake (Cribl.Cloud only).
   *
   * @returns The deleted CriblLakeDataset object in a single-item list.
   *
   * @throws {@link Lake.DeleteCriblLakeDatasetByLakeIdAndIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteCriblLakeDatasetByLakeIdAndId(
    request: Lake.DeleteCriblLakeDatasetByLakeIdAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedCriblLakeDataset, Lake.DeleteCriblLakeDatasetByLakeIdAndIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/products/lake/lakes/{lakeId}/datasets/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "lakeId", value: request.lakeId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedCriblLakeDatasetSchema },
        errorFactory: Lake.DeleteCriblLakeDatasetByLakeIdAndIdError,
      },
      options,
    );
  }

  /**
   * List all Lake Datasets (Cribl.Cloud only)
   *
   * @remarks
   * Get a list of all Lake Datasets in the specified Lake (Cribl.Cloud only).
   *
   * @returns List of CriblLakeDataset objects.
   *
   * @throws {@link Lake.GetCriblLakeDatasetByLakeIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getCriblLakeDatasetByLakeId(
    request: Lake.GetCriblLakeDatasetByLakeIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedCriblLakeDataset, Lake.GetCriblLakeDatasetByLakeIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/products/lake/lakes/{lakeId}/datasets"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "lakeId", value: request.lakeId, schema: s.string() }],
        query: [
          { name: "storageLocationId", value: request.storageLocationId, schema: s.optional(s.string()) },
          {
            name: "format",
            value: request.format,
            schema: s.optional(s.lazy(() => datasetFormatFilterSchema)),
          },
          { name: "excludeDDSS", value: request.excludeDdss, schema: s.optional(s.boolean()) },
          { name: "excludeNetskope", value: request.excludeNetskope, schema: s.optional(s.boolean()) },
          { name: "excludeDeleted", value: request.excludeDeleted, schema: s.optional(s.boolean()) },
          { name: "excludeInternal", value: request.excludeInternal, schema: s.optional(s.boolean()) },
          { name: "excludeBYOS", value: request.excludeByos, schema: s.optional(s.boolean()) },
          { name: "includeMetrics", value: request.includeMetrics, schema: s.optional(s.boolean()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "orderBy", value: request.orderBy, schema: s.optional(s.string()) },
          { name: "orderDir", value: request.orderDir, schema: s.optional(s.string()) },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "nameContains", value: request.nameContains, schema: s.optional(s.string()) },
          {
            name: "providerPathContains",
            value: request.providerPathContains,
            schema: s.optional(s.string()),
          },
          { name: "descriptionContains", value: request.descriptionContains, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedCriblLakeDatasetSchema },
        errorFactory: Lake.GetCriblLakeDatasetByLakeIdError,
      },
      options,
    );
  }

  /**
   * Get a Lake Dataset (Cribl.Cloud only)
   *
   * @remarks
   * Get the specified Lake Dataset in the specified Lake (Cribl.Cloud only).
   *
   * @returns The requested CriblLakeDataset object in a single-item list.
   *
   * @throws {@link Lake.GetCriblLakeDatasetByLakeIdAndIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getCriblLakeDatasetByLakeIdAndId(
    request: Lake.GetCriblLakeDatasetByLakeIdAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedCriblLakeDataset, Lake.GetCriblLakeDatasetByLakeIdAndIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/products/lake/lakes/{lakeId}/datasets/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "lakeId", value: request.lakeId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [{ name: "includeMetrics", value: request.includeMetrics, schema: s.optional(s.boolean()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedCriblLakeDatasetSchema },
        errorFactory: Lake.GetCriblLakeDatasetByLakeIdAndIdError,
      },
      options,
    );
  }

  /**
   * Update a Lake Dataset (Cribl.Cloud only)
   *
   * @remarks
   * Update the specified Lake Dataset in the specified Lake (Cribl.Cloud only).
   *
   * @returns The updated CriblLakeDataset object in a single-item list.
   *
   * @throws {@link Lake.UpdateCriblLakeDatasetByLakeIdAndIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateCriblLakeDatasetByLakeIdAndId(
    request: Lake.UpdateCriblLakeDatasetByLakeIdAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedCriblLakeDataset, Lake.UpdateCriblLakeDatasetByLakeIdAndIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/products/lake/lakes/{lakeId}/datasets/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "lakeId", value: request.lakeId, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: criblLakeDatasetUpdateSchema },
      },
      {
        success: { kind: "json", schema: countedCriblLakeDatasetSchema },
        errorFactory: Lake.UpdateCriblLakeDatasetByLakeIdAndIdError,
      },
      options,
    );
  }
}

export namespace Lake {
  export type CreateCriblLakeDatasetByLakeIdRequest = {
    /** The <code>id</code> of the Lake to create the Lake Datasets in. */
    lakeId: string;
    /** CriblLakeDataset object. */
    body: CriblLakeDataset;
  };

  export class CreateCriblLakeDatasetByLakeIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<CreateCriblLakeDatasetByLakeIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteCriblLakeDatasetByLakeIdAndIdRequest = {
    /** The <code>id</code> of the Lake that contains the Lake Dataset to delete. */
    lakeId: string;
    /** The <code>id</code> of the Lake Dataset to delete. */
    id: string;
  };

  export class DeleteCriblLakeDatasetByLakeIdAndIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCriblLakeDatasetByLakeIdAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCriblLakeDatasetByLakeIdRequest = {
    /** The <code>id</code> of the Lake that contains the Lake Datasets to list. */
    lakeId: string;
    /**
     * Filter datasets by storage location ID. Use <code>default</code> for default storage
     * location.
     */
    storageLocationId?: string;
    /** Filter datasets by format. Set to <code>ddss</code> to return only DDSS datasets. */
    format?: DatasetFormatFilter;
    /** Exclude DDSS format datasets from the response. */
    excludeDdss?: boolean;
    /** Exclude Netskope format datasets from the response. */
    excludeNetskope?: boolean;
    /** Exclude deleted datasets from the response. */
    excludeDeleted?: boolean;
    /**
     * Exclude internal datasets (those with IDs starting with <code>cribl_</code>) from the
     * response.
     */
    excludeInternal?: boolean;
    /** Exclude BYOS (Bring Your Own Storage) datasets from the response. */
    excludeByos?: boolean;
    /**
     * Set to <code>true</code> to include storage metrics for each Lake Dataset. Otherwise,
     * <code>false</code> (default). Requires a Cribl Lake metrics license.
     */
    includeMetrics?: boolean;
    /** Starting point for catalog-backed pagination. Requires <code>limit</code>. */
    offset?: number;
    /** Page size for catalog-backed pagination. Requires <code>offset</code>. */
    limit?: number;
    /**
     * Catalog sort field when paginating: <code>name</code>, <code>createdAt</code>,
     * <code>updatedAt</code>, <code>providerPath</code>, <code>type</code>, or
     * <code>retentionPeriodInDays</code>. Defaults to <code>name</code>.
     */
    orderBy?: string;
    /**
     * Sort direction when paginating: <code>asc</code> or <code>desc</code>. Defaults to
     * <code>asc</code>.
     */
    orderDir?: string;
    /** Exact dataset name match (catalog path, with pagination). */
    name?: string;
    /** Case-insensitive substring match on dataset name (catalog path, with pagination). */
    nameContains?: string;
    /** Case-insensitive substring match on provider path (catalog path, with pagination). */
    providerPathContains?: string;
    /** Case-insensitive substring match on description (catalog path, with pagination). */
    descriptionContains?: string;
  };

  export class GetCriblLakeDatasetByLakeIdError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCriblLakeDatasetByLakeIdError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetCriblLakeDatasetByLakeIdAndIdRequest = {
    /** The <code>id</code> of the Lake that contains the Lake Dataset to get. */
    lakeId: string;
    /** The <code>id</code> of the Lake Dataset to get. */
    id: string;
    /**
     * Set to <code>true</code> to include storage metrics for each Lake Dataset. Otherwise,
     * <code>false</code> (default). Requires a Cribl Lake metrics license.
     */
    includeMetrics?: boolean;
  };

  export class GetCriblLakeDatasetByLakeIdAndIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetCriblLakeDatasetByLakeIdAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateCriblLakeDatasetByLakeIdAndIdRequest = {
    /** The <code>id</code> of the Lake that contains the Lake Dataset to update. */
    lakeId: string;
    /** The <code>id</code> of the Lake Dataset to update. */
    id: string;
    /** CriblLakeDatasetUpdate object. */
    body: CriblLakeDatasetUpdate;
  };

  export class UpdateCriblLakeDatasetByLakeIdAndIdError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error409", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateCriblLakeDatasetByLakeIdAndIdError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
