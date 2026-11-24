import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  datahubV1CsvUploadResponseSchema,
  type DatahubV1CsvUploadResponse,
} from "../models/datahub-v1-csv-upload-response.js";
import {
  datahubV1DatasetsRequestInternalSchema,
  type DatahubV1DatasetsRequest,
} from "../models/datahub-v1-datasets-request.js";
import {
  datahubV1DatasetsRequest1Schema,
  type DatahubV1DatasetsRequest1,
} from "../models/datahub-v1-datasets-request1.js";
import {
  datahubV1DatasetsRequest2InternalSchema,
  type DatahubV1DatasetsRequest2,
} from "../models/datahub-v1-datasets-request2.js";
import {
  datahubV1DatasetsResponseSchema,
  type DatahubV1DatasetsResponse,
} from "../models/datahub-v1-datasets-response.js";
import {
  datahubV1DatasetsResponse1Schema,
  type DatahubV1DatasetsResponse1,
} from "../models/datahub-v1-datasets-response1.js";
import {
  datahubV1DatasetsResponse2Schema,
  type DatahubV1DatasetsResponse2,
} from "../models/datahub-v1-datasets-response2.js";
import {
  datahubV1DatasetsResponse4Schema,
  type DatahubV1DatasetsResponse4,
} from "../models/datahub-v1-datasets-response4.js";
import {
  datahubV1EventsDeleteRequestSchema,
  type DatahubV1EventsDeleteRequest,
} from "../models/datahub-v1-events-delete-request.js";
import {
  datahubV1EventsDeleteResponseSchema,
  type DatahubV1EventsDeleteResponse,
} from "../models/datahub-v1-events-delete-response.js";
import {
  datahubV1EventsRequestInternalSchema,
  type DatahubV1EventsRequest,
} from "../models/datahub-v1-events-request.js";
import {
  datahubV1EventsResponseSchema,
  type DatahubV1EventsResponse,
} from "../models/datahub-v1-events-response.js";
import {
  datahubV1ImportRequestSchema,
  type DatahubV1ImportRequest,
} from "../models/datahub-v1-import-request.js";
import {
  datahubV1ImportResponseSchema,
  type DatahubV1ImportResponse,
} from "../models/datahub-v1-import-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { Format, formatSchema } from "../models/format.js";
import type { Servers } from "../servers.js";

/**
 * Ingest third-party cost, usage, and metric-based data for analysis.
 */
export class DataHub {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create dataset
   *
   * @remarks
   * Creates a new DataHub dataset. A dataset is a logical grouping of events that share the same
   * provider name. Creating a dataset allows you to define metadata such as name and description
   * before ingesting events.
   *
   * @returns Created - Dataset created successfully.
   *
   * @throws {@link DataHub.CreateDatahubDatasetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDatahubDataset(
    request: DataHub.CreateDatahubDatasetRequest,
    options?: RequestOptions,
  ): ApiPromise<DatahubV1DatasetsResponse1, DataHub.CreateDatahubDatasetError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/datahub/v1/datasets"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: datahubV1DatasetsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: datahubV1DatasetsResponse1Schema },
        errorFactory: DataHub.CreateDatahubDatasetError,
      },
      options,
    );
  }

  /**
   * Ingest JSON
   *
   * @remarks
   * Sends a batch of events to DataHub.
   *
   * @returns OK - Ingestion succeeded.
   *
   * @throws {@link DataHub.DatahubEventsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  datahubEvents(
    request: DataHub.DatahubEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<DatahubV1EventsResponse, DataHub.DatahubEventsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/datahub/v1/events"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: datahubV1EventsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: datahubV1EventsResponseSchema },
        errorFactory: DataHub.DatahubEventsError,
      },
      options,
    );
  }

  /**
   * Ingest CSV file
   *
   * @remarks
   * Sends a batch of events to DataHub using a CSV file, either uncompressed or compressed in ZIP
   * or GZ format. It may take up to 15 minutes for the data to become available in the DoiT
   * console.
   *
   * @returns OK - Ingestion succeeded.
   *
   * @throws {@link DataHub.DatahubEventsCsvFileError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  datahubEventsCsvFile(
    request: DataHub.DatahubEventsCsvFileRequest = {},
    options?: RequestOptions,
  ): ApiPromise<DatahubV1CsvUploadResponse, DataHub.DatahubEventsCsvFileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/datahub/v1/csv/upload"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "text", name: "provider", value: request.provider, schema: s.optional(s.string()) },
            { kind: "file", name: "file", value: request.file },
            {
              kind: "text",
              name: "schemaTemplate",
              value: request.schemaTemplate,
              schema: s.optional(s.string()),
            },
            {
              kind: "text",
              name: "periodStart",
              value: request.periodStart,
              schema: s.optional(s.dateOnly()),
            },
            { kind: "text", name: "periodEnd", value: request.periodEnd, schema: s.optional(s.dateOnly()) },
            {
              kind: "text",
              name: "replace",
              value: request.replace,
              schema: s.defaulted(s.boolean(), false),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: datahubV1CsvUploadResponseSchema },
        errorFactory: DataHub.DatahubEventsCsvFileError,
      },
      options,
    );
  }

  /**
   * Import provider-native records
   *
   * @remarks
   * Sends provider-native records as JSON instead of a CSV file. The records use the same columns
   * as the template's CSV (currently `anthropic-spend-report@1` only) and are validated, normalized
   * and booked on `periodEnd` exactly like a CSV upload. It may take up to 15 minutes for the data
   * to become available in the DoiT console.
   *
   * @returns OK - Ingestion succeeded.
   *
   * @throws {@link DataHub.DatahubImportProviderRecordsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  datahubImportProviderRecords(
    request: DataHub.DatahubImportProviderRecordsRequest,
    options?: RequestOptions,
  ): ApiPromise<DatahubV1ImportResponse, DataHub.DatahubImportProviderRecordsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/datahub/v1/import"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: datahubV1ImportRequestSchema },
      },
      {
        success: { kind: "json", schema: datahubV1ImportResponseSchema },
        errorFactory: DataHub.DatahubImportProviderRecordsError,
      },
      options,
    );
  }

  /**
   * Delete a dataset
   *
   * @remarks
   * Deletes a specific DataHub dataset.
   *
   * @returns OK - Dataset deleted successfully.
   *
   * @throws {@link DataHub.DeleteDatahubDatasetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDatahubDataset(
    request: DataHub.DeleteDatahubDatasetRequest,
    options?: RequestOptions,
  ): ApiPromise<DatahubV1DatasetsResponse2, DataHub.DeleteDatahubDatasetError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/datahub/v1/datasets/{name}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: datahubV1DatasetsResponse2Schema },
        errorFactory: DataHub.DeleteDatahubDatasetError,
      },
      options,
    );
  }

  /**
   * Delete datasets
   *
   * @remarks
   * Deletes one or more DataHub datasets and all their associated data.
   *
   * @returns OK - Datasets deleted successfully.
   *
   * @throws {@link DataHub.DeleteDatahubDatasetsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDatahubDatasets(
    request: DataHub.DeleteDatahubDatasetsRequest,
    options?: RequestOptions,
  ): ApiPromise<DatahubV1DatasetsResponse2, DataHub.DeleteDatahubDatasetsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/datahub/v1/datasets"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: datahubV1DatasetsRequest1Schema },
      },
      {
        success: { kind: "json", schema: datahubV1DatasetsResponse2Schema },
        errorFactory: DataHub.DeleteDatahubDatasetsError,
      },
      options,
    );
  }

  /**
   * Delete specific events
   *
   * @remarks
   * Deletes specific events using filters. Note that the two filters, `eventIds` and `time ranges`,
   * are mutually exclusive.
   *
   * @returns OK - Events deleted.
   *
   * @throws {@link DataHub.DeleteDatahubEventsByFilterError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDatahubEventsByFilter(
    request: DataHub.DeleteDatahubEventsByFilterRequest,
    options?: RequestOptions,
  ): ApiPromise<DatahubV1EventsDeleteResponse, DataHub.DeleteDatahubEventsByFilterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/datahub/v1/events/delete"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: datahubV1EventsDeleteRequestSchema },
      },
      {
        success: { kind: "json", schema: datahubV1EventsDeleteResponseSchema },
        errorFactory: DataHub.DeleteDatahubEventsByFilterError,
      },
      options,
    );
  }

  /**
   * Export dataset records
   *
   * @remarks
   * Returns one page of the live records of a DataHub dataset, as CSV (default) or as
   * newline-delimited JSON in the same shape as the `/datahub/v1/events` payload.
   *
   * A time window is required: `startTime` is inclusive, `endTime` is exclusive, and the window
   * must not exceed 366 days. Rows are ordered by their event time and event id, and pages never
   * overlap: read the `X-Next-Page-Token` response header and pass it back as `pageToken` until the
   * header is absent. `X-Row-Count` carries the number of rows in the page. Only live rows are
   * returned; rows deleted through the console or the delete endpoints are excluded.
   *
   * Every row starts with five provenance columns (`event_id`, `batch`, `source`, `export_time`,
   * `updated_by`) followed by the dataset's business columns in the CSV ingest vocabulary
   * (`usage_date`, `fixed.`, `label.`, `project_label.`, `system_label.`, `metric.`). The business
   * columns are computed from the rows of each page, so consecutive pages can have different label
   * and metric columns; union the headers when concatenating pages. Datasets created with the FOCUS
   * schema template use the FOCUS column names instead and can only be exported as CSV.
   *
   * To re-import an export into another dataset, drop the `batch`, `source`, `export_time` and
   * `updated_by` columns, and either drop `event_id` or rename it to `id`.
   *
   * @returns OK - One page of records. The body is streamed.
   *
   * @throws {@link DataHub.ExportDatahubDatasetRecordsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  exportDatahubDatasetRecords(
    request: DataHub.ExportDatahubDatasetRecordsRequest,
    options?: RequestOptions,
  ): ApiPromise<Uint8Array, DataHub.ExportDatahubDatasetRecordsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/datahub/v1/datasets/{name}/records"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        query: [
          { name: "startTime", value: request.startTime, schema: s.dateTime() },
          { name: "endTime", value: request.endTime, schema: s.dateTime() },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Csv) },
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 10000) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "text", schema: s.bytes() },
        errorFactory: DataHub.ExportDatahubDatasetRecordsError,
      },
      options,
    );
  }

  /**
   * Retrieve a dataset
   *
   * @remarks
   * Returns a specific DataHub dataset by name.
   *
   * @returns OK - Dataset returned.
   *
   * @throws {@link DataHub.GetDatahubDatasetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDatahubDataset(
    request: DataHub.GetDatahubDatasetRequest,
    options?: RequestOptions,
  ): ApiPromise<DatahubV1DatasetsResponse4, DataHub.GetDatahubDatasetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/datahub/v1/datasets/{name}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: datahubV1DatasetsResponse4Schema },
        errorFactory: DataHub.GetDatahubDatasetError,
      },
      options,
    );
  }

  /**
   * List datasets
   *
   * @remarks
   * Returns a list of all DataHub datasets for the customer.
   *
   * @returns OK - List of datasets returned successfully.
   *
   * @throws {@link DataHub.ListDatahubDatasetsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDatahubDatasets(
    options?: RequestOptions,
  ): ApiPromise<DatahubV1DatasetsResponse, DataHub.ListDatahubDatasetsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/datahub/v1/datasets"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: datahubV1DatasetsResponseSchema },
        errorFactory: DataHub.ListDatahubDatasetsError,
      },
      options,
    );
  }

  /**
   * Update dataset
   *
   * @remarks
   * Updates an existing DataHub dataset's metadata. The `description`, `displayName` and `logoName`
   * fields can be updated. Only the fields present in the request body are changed; an omitted
   * field keeps its stored value, and an empty string clears it. The dataset `name` is immutable
   * and serves as the resource identifier and the ingest `provider` value. To change how a dataset
   * is displayed in the console and in report results, set `displayName`; saved reports, budgets,
   * alerts and filters keep working because they reference `name`. If `name` is included in the
   * request body, it must match the dataset name in the URL path. A mismatched name will be
   * rejected with a 400 error.
   *
   * @returns OK - Dataset updated successfully.
   *
   * @throws {@link DataHub.UpdateDatahubDatasetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateDatahubDataset(
    request: DataHub.UpdateDatahubDatasetRequest,
    options?: RequestOptions,
  ): ApiPromise<DatahubV1DatasetsResponse1, DataHub.UpdateDatahubDatasetError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/datahub/v1/datasets/{name}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "name", value: request.name, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: datahubV1DatasetsRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: datahubV1DatasetsResponse1Schema },
        errorFactory: DataHub.UpdateDatahubDatasetError,
      },
      options,
    );
  }
}

export namespace DataHub {
  export type CreateDatahubDatasetRequest = {
    body: DatahubV1DatasetsRequest;
  };

  export class CreateDatahubDatasetError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateDatahubDatasetError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DatahubEventsRequest = {
    body: DatahubV1EventsRequest;
  };

  export class DatahubEventsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DatahubEventsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DatahubEventsCsvFileRequest = {
    /**
     * The identifier of the data provider. Allowed characters: alphanumeric (0-9,a-z,A-Z),
     * underscore (_), space, dash (-).
     */
    provider?: string;
    /**
     * The CSV file to upload, either uncompressed or compressed in ZIP or GZ format. The maximum
     * file size is 30 MB.
     */
    file?: FileInput;
    /**
     * Versioned schema template of the file. Defaults to the dataset's template (`default@1` for
     * datasets created without one). Provider-native templates such as `anthropic-spend-report@1`
     * and `codex-usage-report@1` validate the vendor's own columns and normalize them into DataHub
     * events. Must match the template stored on the dataset.
     */
    schemaTemplate?: string;
    /**
     * Inclusive first day of the report period (YYYY-MM-DD). Required for template uploads whose
     * filename does not carry the period; when both are present they must agree.
     */
    periodStart?: string;
    /** Inclusive last day of the report period (YYYY-MM-DD). Events are booked on this day. */
    periodEnd?: string;
    /**
     * Template uploads only. When `true`, active batches whose report period overlaps this upload
     * are soft-deleted before the new file is ingested, and their ids are returned in
     * `replacedBatches`. Refused with `409` when an overlapping batch extends outside the requested
     * period (so a one-day replacement can never remove a wider upload) or was ingested less than
     * 90 minutes ago (`Retry-After` header set). Without `replace`, any overlap is rejected with
     * `409`.
     *
     * @default false
     */
    replace?: boolean;
  };

  export class DatahubEventsCsvFileError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DatahubEventsCsvFileError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DatahubImportProviderRecordsRequest = {
    body: DatahubV1ImportRequest;
  };

  export class DatahubImportProviderRecordsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DatahubImportProviderRecordsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteDatahubDatasetRequest = {
    /** The name of the dataset to delete. */
    name: string;
  };

  export class DeleteDatahubDatasetError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDatahubDatasetError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteDatahubDatasetsRequest = {
    body: DatahubV1DatasetsRequest1;
  };

  export class DeleteDatahubDatasetsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDatahubDatasetsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteDatahubEventsByFilterRequest = {
    body: DatahubV1EventsDeleteRequest;
  };

  export class DeleteDatahubEventsByFilterError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDatahubEventsByFilterError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ExportDatahubDatasetRecordsRequest = {
    /** The name of the dataset to export. */
    name: string;
    /** Inclusive lower bound on the event time, RFC3339. */
    startTime: Date;
    /** Exclusive upper bound on the event time, RFC3339. At most 366 days after the start time. */
    endTime: Date;
    /** Output format. @default Format.Csv */
    format?: Format;
    /** Maximum number of rows in the page. @default 10000 */
    maxResults?: number;
    /** Page token, returned by a previous call, to request the next page of results */
    pageToken?: string;
  };

  export const exportDatahubDatasetRecordsRequestSchema: Schema<ExportDatahubDatasetRecordsRequest> =
    s.lazySchema(() =>
      s.object<ExportDatahubDatasetRecordsRequest>({
        name: s.string(),
        startTime: s.dateTime(),
        endTime: s.dateTime(),
        format: s.defaulted(formatSchema, Format.Csv),
        maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(50000)), 10000),
        pageToken: s.optional(s.string()),
      }),
    );

  export class ExportDatahubDatasetRecordsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExportDatahubDatasetRecordsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetDatahubDatasetRequest = {
    /** The name of the dataset to retrieve. */
    name: string;
  };

  export class GetDatahubDatasetError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDatahubDatasetError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class ListDatahubDatasetsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListDatahubDatasetsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateDatahubDatasetRequest = {
    /** The name of the dataset to update (immutable, used for identification only). */
    name: string;
    body: DatahubV1DatasetsRequest2;
  };

  export class UpdateDatahubDatasetError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateDatahubDatasetError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
