import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { folderDetailsSchema, type FolderDetails } from "../models/folder-details.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  insightsFolderFileMoveSchema,
  type InsightsFolderFileMove,
} from "../models/insights-folder-file-move.js";
import { insightsFolderInputSchema, type InsightsFolderInput } from "../models/insights-folder-input.js";
import {
  insightsFolderPropertiesSchema,
  type InsightsFolderProperties,
} from "../models/insights-folder-properties.js";
import { insightsFolderSchema, type InsightsFolder } from "../models/insights-folder.js";
import {
  insightsUploadFilePropertiesSchema,
  type InsightsUploadFileProperties,
} from "../models/insights-upload-file-properties.js";
import { insightsUploadFileSchema, type InsightsUploadFile } from "../models/insights-upload-file.js";
import {
  listResponseInsightsFolderSchema,
  type ListResponseInsightsFolder,
} from "../models/list-response-insights-folder.js";
import {
  listResponseInsightsUploadFileSchema,
  type ListResponseInsightsUploadFile,
} from "../models/list-response-insights-upload-file.js";
import { agentNumber1Schema, type AgentNumber1 } from "../models/unions/agent-number1.js";
import { customerNumber1Schema, type CustomerNumber1 } from "../models/unions/customer-number1.js";
import { duration2Schema, type Duration2 } from "../models/unions/duration2.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { endTime1Schema, type EndTime1 } from "../models/unions/end-time1.js";
import { fields10Schema, type Fields10 } from "../models/unions/fields10.js";
import { fields9Schema, type Fields9 } from "../models/unions/fields9.js";
import { metadata8Schema, type Metadata8 } from "../models/unions/metadata8.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy10Schema, type OrderBy10 } from "../models/unions/order-by10.js";
import { orderBy9Schema, type OrderBy9 } from "../models/unions/order-by9.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import {
  responseInsightsFolderCreateSchema,
  type ResponseInsightsFolderCreate,
} from "../models/unions/response-insights-folder-create.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import { startTime1Schema, type StartTime1 } from "../models/unions/start-time1.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to insights upload folders. An insight folder is used to upload call
 * recordings for insight workflow analysis.
 */
export class InsightsFolders {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Insights Upload Folder
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsFolders.InsightsFolderCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsFolderCreate(
    request: InsightsFolders.InsightsFolderCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ResponseInsightsFolderCreate, InsightsFolders.InsightsFolderCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/insights/folders/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: insightsFolderInputSchema },
      },
      {
        success: { kind: "json", schema: responseInsightsFolderCreateSchema },
        errorFactory: InsightsFolders.InsightsFolderCreateError,
      },
      options,
    );
  }

  /**
   * Delete Insights Folder
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsFolders.InsightsFolderDeleteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsFolderDelete(
    request: InsightsFolders.InsightsFolderDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<boolean, InsightsFolders.InsightsFolderDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/insights/folders/{folder_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "folder_id", value: request.folderId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.boolean() },
        errorFactory: InsightsFolders.InsightsFolderDeleteError,
      },
      options,
    );
  }

  /**
   * Get Insights Folder Details
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsFolders.InsightsFolderGetByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsFolderGetById(
    request: InsightsFolders.InsightsFolderGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<FolderDetails, InsightsFolders.InsightsFolderGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/insights/folders/{folder_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "folder_id", value: request.folderId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: folderDetailsSchema },
        errorFactory: InsightsFolders.InsightsFolderGetByIdError,
      },
      options,
    );
  }

  /**
   * List Insights Upload Folders
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsFolders.InsightsFolderListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsFolderList(
    request: InsightsFolders.InsightsFolderListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseInsightsFolder, InsightsFolders.InsightsFolderListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/insights/folders/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => insightsFolderPropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy9Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields9Schema)) },
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
        success: { kind: "json", schema: listResponseInsightsFolderSchema },
        errorFactory: InsightsFolders.InsightsFolderListError,
      },
      options,
    );
  }

  /**
   * Update Insights Folder
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsFolders.InsightsFolderUpdateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsFolderUpdate(
    request: InsightsFolders.InsightsFolderUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsFolder, InsightsFolders.InsightsFolderUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/insights/folders/{folder_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "folder_id", value: request.folderId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: insightsFolderInputSchema },
      },
      {
        success: { kind: "json", schema: insightsFolderSchema },
        errorFactory: InsightsFolders.InsightsFolderUpdateError,
      },
      options,
    );
  }

  /**
   * Upload Insights Upload Folder
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsFolders.InsightsFolderUploadFileError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsFolderUploadFile(
    request: InsightsFolders.InsightsFolderUploadFileRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsUploadFile, InsightsFolders.InsightsFolderUploadFileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/insights/folders/{folder_id}/upload-file"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "folder_id", value: request.folderId, schema: s.int() }],
        query: [
          { name: "call_id", value: request.callId, schema: s.string() },
          {
            name: "agent_number",
            value: request.agentNumber,
            schema: s.optional(s.lazy(() => agentNumber1Schema)),
          },
          {
            name: "customer_number",
            value: request.customerNumber,
            schema: s.optional(s.lazy(() => customerNumber1Schema)),
          },
          {
            name: "start_time",
            value: request.startTime,
            schema: s.optional(s.lazy(() => startTime1Schema)),
          },
          { name: "end_time", value: request.endTime, schema: s.optional(s.lazy(() => endTime1Schema)) },
          { name: "duration", value: request.duration, schema: s.optional(s.lazy(() => duration2Schema)) },
          { name: "metadata", value: request.metadata, schema: s.optional(s.lazy(() => metadata8Schema)) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "file", value: request.file }] },
      },
      {
        success: { kind: "json", schema: insightsUploadFileSchema },
        errorFactory: InsightsFolders.InsightsFolderUploadFileError,
      },
      options,
    );
  }

  /**
   * Fetch Insights Upload Files
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsFolders.InsightsUploadListFilesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsUploadListFiles(
    request: InsightsFolders.InsightsUploadListFilesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseInsightsUploadFile, InsightsFolders.InsightsUploadListFilesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/insights/folders/{folder_id}/files"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "folder_id", value: request.folderId, schema: s.int() }],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => insightsUploadFilePropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy10Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields10Schema)) },
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
        success: { kind: "json", schema: listResponseInsightsUploadFileSchema },
        errorFactory: InsightsFolders.InsightsUploadListFilesError,
      },
      options,
    );
  }

  /**
   * Move Insights Upload Files
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsFolders.InsightsUploadMoveFilesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsUploadMoveFiles(
    request: InsightsFolders.InsightsUploadMoveFilesRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsUploadFile[], InsightsFolders.InsightsUploadMoveFilesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/insights/folders/{folder_id}/move-files"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "folder_id", value: request.folderId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: insightsFolderFileMoveSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => insightsUploadFileSchema)) },
        errorFactory: InsightsFolders.InsightsUploadMoveFilesError,
      },
      options,
    );
  }
}

export namespace InsightsFolders {
  export type InsightsFolderCreateRequest = {
    body: InsightsFolderInput;
  };

  export class InsightsFolderCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<InsightsFolderCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsFolderDeleteRequest = {
    folderId: number;
  };

  export class InsightsFolderDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<InsightsFolderDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsFolderGetByIdRequest = {
    folderId: number;
  };

  export class InsightsFolderGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<InsightsFolderGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsFolderListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: InsightsFolderProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy9;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields9;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class InsightsFolderListError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<InsightsFolderListError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsFolderUpdateRequest = {
    folderId: number;
    body: InsightsFolderInput;
  };

  export class InsightsFolderUpdateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<InsightsFolderUpdateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsFolderUploadFileRequest = {
    folderId: number;
    /** A unique identifier for the call */
    callId: string;
    /** The phone number or ID of the agent involved. */
    agentNumber?: AgentNumber1;
    /** The phone number or ID of the customer. */
    customerNumber?: CustomerNumber1;
    /** The timestamp of the call's beginning */
    startTime?: StartTime1;
    /** The timestamp of the call's end. */
    endTime?: EndTime1;
    /** The call duration in seconds. */
    duration?: Duration2;
    metadata?: Metadata8;
    file?: FileInput;
  };

  export class InsightsFolderUploadFileError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<InsightsFolderUploadFileError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsUploadListFilesRequest = {
    folderId: number;
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: InsightsUploadFileProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy10;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields10;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class InsightsUploadListFilesError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<InsightsUploadListFilesError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsUploadMoveFilesRequest = {
    folderId: number;
    body: InsightsFolderFileMove;
  };

  export class InsightsUploadMoveFilesError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<InsightsUploadMoveFilesError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
