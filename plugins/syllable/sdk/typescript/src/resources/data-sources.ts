import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  dataSourceCreateRequestSchema,
  type DataSourceCreateRequest,
} from "../models/data-source-create-request.js";
import {
  dataSourceDetailResponseSchema,
  type DataSourceDetailResponse,
} from "../models/data-source-detail-response.js";
import { dataSourcePropertiesSchema, type DataSourceProperties } from "../models/data-source-properties.js";
import {
  dataSourceUpdateRequestSchema,
  type DataSourceUpdateRequest,
} from "../models/data-source-update-request.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  listResponseDataSourceMetadataResponseSchema,
  type ListResponseDataSourceMetadataResponse,
} from "../models/list-response-data-source-metadata-response.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields4Schema, type Fields4 } from "../models/unions/fields4.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy4Schema, type OrderBy4 } from "../models/unions/order-by4.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to data sources. A data source is a blob of text that can be made available to
 * an agent's general info tools to provide more context to the agent when generating its responses.
 * For more information, see [Console docs](https://docs.syllable.ai/Resources/DataSources).
 */
export class DataSources {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Data Source
   *
   * @remarks
   * Create a new data source.
   *
   * @returns Successful Response
   *
   * @throws {@link DataSources.DataSourcesCreateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dataSourcesCreate(
    request: DataSources.DataSourcesCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<DataSourceDetailResponse, DataSources.DataSourcesCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/data_sources/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: dataSourceCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: dataSourceDetailResponseSchema },
        errorFactory: DataSources.DataSourcesCreateError,
      },
      options,
    );
  }

  /**
   * Delete Data Source
   *
   * @remarks
   * Delete a given data source.
   *
   * @returns Successful Response
   *
   * @throws {@link DataSources.DataSourcesDeleteError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dataSourcesDelete(
    request: DataSources.DataSourcesDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, DataSources.DataSourcesDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/data_sources/{data_source_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "data_source_id", value: request.dataSourceId, schema: s.int() }],
        query: [{ name: "reason", value: request.reason, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: DataSources.DataSourcesDeleteError,
      },
      options,
    );
  }

  /**
   * Get Data Source
   *
   * @remarks
   * Fetch a given data source, including its text.
   *
   * @returns Successful Response
   *
   * @throws {@link DataSources.DataSourcesGetByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dataSourcesGetById(
    request: DataSources.DataSourcesGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<DataSourceDetailResponse, DataSources.DataSourcesGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/data_sources/{data_source_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "data_source_id", value: request.dataSourceId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dataSourceDetailResponseSchema },
        errorFactory: DataSources.DataSourcesGetByIdError,
      },
      options,
    );
  }

  /**
   * List Data Sources
   *
   * @remarks
   * Fetch metadata about all data sources, not including their text.
   *
   * @returns Successful Response
   *
   * @throws {@link DataSources.DataSourcesListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dataSourcesList(
    request: DataSources.DataSourcesListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseDataSourceMetadataResponse, DataSources.DataSourcesListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/data_sources/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => dataSourcePropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy4Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields4Schema)) },
          {
            name: "start_datetime",
            value: request.startDatetime,
            schema: s.optional(s.lazy(() => startDatetime3Schema)),
          },
          {
            name: "end_datetime",
            value: request.endDatetime,
            schema: s.optional(s.lazy(() => endDatetime3Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseDataSourceMetadataResponseSchema },
        errorFactory: DataSources.DataSourcesListError,
      },
      options,
    );
  }

  /**
   * Update Data Source
   *
   * @remarks
   * Update an existing data source.
   *
   * @returns Successful Response
   *
   * @throws {@link DataSources.DataSourcesUpdateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dataSourcesUpdate(
    request: DataSources.DataSourcesUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<DataSourceDetailResponse, DataSources.DataSourcesUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/data_sources/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: dataSourceUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: dataSourceDetailResponseSchema },
        errorFactory: DataSources.DataSourcesUpdateError,
      },
      options,
    );
  }
}

export namespace DataSources {
  export type DataSourcesCreateRequest = {
    body: DataSourceCreateRequest;
  };

  export class DataSourcesCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<DataSourcesCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DataSourcesDeleteRequest = {
    dataSourceId: number;
    reason: string;
  };

  export class DataSourcesDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<DataSourcesDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DataSourcesGetByIdRequest = {
    dataSourceId: number;
  };

  export class DataSourcesGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<DataSourcesGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DataSourcesListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: DataSourceProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy4;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields4;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class DataSourcesListError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<DataSourcesListError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DataSourcesUpdateRequest = {
    body: DataSourceUpdateRequest;
  };

  export class DataSourcesUpdateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<DataSourcesUpdateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
