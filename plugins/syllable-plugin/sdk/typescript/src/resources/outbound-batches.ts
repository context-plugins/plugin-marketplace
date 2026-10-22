import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { batchDetailsSchema, type BatchDetails } from "../models/batch-details.js";
import { batchPropertiesSchema, type BatchProperties } from "../models/batch-properties.js";
import {
  communicationBatchInputSchema,
  type CommunicationBatchInput,
} from "../models/communication-batch-input.js";
import {
  communicationBatchUpdateSchema,
  type CommunicationBatchUpdate,
} from "../models/communication-batch-update.js";
import { communicationBatchSchema, type CommunicationBatch } from "../models/communication-batch.js";
import {
  communicationRequestResultSchema,
  type CommunicationRequestResult,
} from "../models/communication-request-result.js";
import { communicationRequestSchema, type CommunicationRequest } from "../models/communication-request.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  listResponseCommunicationBatchSchema,
  type ListResponseCommunicationBatch,
} from "../models/list-response-communication-batch.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields25Schema, type Fields25 } from "../models/unions/fields25.js";
import { insightsStatus1Schema, type InsightsStatus1 } from "../models/unions/insights-status1.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy313Schema, type OrderBy313 } from "../models/unions/order-by313.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { referenceIdSchema, type ReferenceId } from "../models/unions/reference-id.js";
import {
  responseOutboundBatchCreateSchema,
  type ResponseOutboundBatchCreate,
} from "../models/unions/response-outbound-batch-create.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import { status5Schema, type Status5 } from "../models/unions/status5.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to outbound campaign batches
 */
export class OutboundBatches {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Outbound Communication Request
   *
   * @returns Successful Response
   *
   * @throws {@link OutboundBatches.OutboundBatchAddError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  outboundBatchAdd(
    request: OutboundBatches.OutboundBatchAddRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, OutboundBatches.OutboundBatchAddError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/outbound/batches/{batch_id}/requests"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "batch_id", value: request.batchId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: communicationRequestSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: OutboundBatches.OutboundBatchAddError,
      },
      options,
    );
  }

  /**
   * Create Outbound Communication Batch
   *
   * @returns Successful Response
   *
   * @throws {@link OutboundBatches.OutboundBatchCreateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  outboundBatchCreate(
    request: OutboundBatches.OutboundBatchCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ResponseOutboundBatchCreate, OutboundBatches.OutboundBatchCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/outbound/batches"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: communicationBatchInputSchema },
      },
      {
        success: { kind: "json", schema: responseOutboundBatchCreateSchema },
        errorFactory: OutboundBatches.OutboundBatchCreateError,
      },
      options,
    );
  }

  /**
   * Delete Outbound Communication Batch
   *
   * @returns Successful Response
   *
   * @throws {@link OutboundBatches.OutboundBatchDeleteError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  outboundBatchDelete(
    request: OutboundBatches.OutboundBatchDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, OutboundBatches.OutboundBatchDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/outbound/batches/{batch_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "batch_id", value: request.batchId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "delete_reason", value: request.deleteReason, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: OutboundBatches.OutboundBatchDeleteError,
      },
      options,
    );
  }

  /**
   * Get Outbound Communication Batch
   *
   * @returns Successful Response
   *
   * @throws {@link OutboundBatches.OutboundBatchGetByIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  outboundBatchGetById(
    request: OutboundBatches.OutboundBatchGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchDetails, OutboundBatches.OutboundBatchGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/outbound/batches/{batch_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "batch_id", value: request.batchId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: batchDetailsSchema },
        errorFactory: OutboundBatches.OutboundBatchGetByIdError,
      },
      options,
    );
  }

  /**
   * List Outbound Communication Batches
   *
   * @returns Successful Response
   *
   * @throws {@link OutboundBatches.OutboundBatchListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  outboundBatchList(
    request: OutboundBatches.OutboundBatchListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseCommunicationBatch, OutboundBatches.OutboundBatchListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/outbound/batches"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => batchPropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy313Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields25Schema)) },
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
        success: { kind: "json", schema: listResponseCommunicationBatchSchema },
        errorFactory: OutboundBatches.OutboundBatchListError,
      },
      options,
    );
  }

  /**
   * Delete Requests By List Of Reference Ids
   *
   * @returns Successful Response
   *
   * @throws {@link OutboundBatches.OutboundBatchRemoveError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  outboundBatchRemove(
    request: OutboundBatches.OutboundBatchRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, OutboundBatches.OutboundBatchRemoveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/outbound/batches/{batch_id}/remove-requests"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "batch_id", value: request.batchId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.array(s.string()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: OutboundBatches.OutboundBatchRemoveError,
      },
      options,
    );
  }

  /**
   * Fetch Outbound Communication Batch Results
   *
   * @returns Successful Response
   *
   * @throws {@link OutboundBatches.OutboundBatchResultsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  outboundBatchResults(
    request: OutboundBatches.OutboundBatchResultsRequest,
    options?: RequestOptions,
  ): ApiPromise<CommunicationRequestResult[], OutboundBatches.OutboundBatchResultsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/outbound/batches/{batch_id}/results"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "batch_id", value: request.batchId, schema: s.string() }],
        query: [
          {
            name: "reference_id",
            value: request.referenceId,
            schema: s.optional(s.lazy(() => referenceIdSchema)),
          },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => status5Schema)) },
          {
            name: "insights_status",
            value: request.insightsStatus,
            schema: s.optional(s.lazy(() => insightsStatus1Schema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => communicationRequestResultSchema)) },
        errorFactory: OutboundBatches.OutboundBatchResultsError,
      },
      options,
    );
  }

  /**
   * Update Outbound Communication Batch
   *
   * @returns Successful Response
   *
   * @throws {@link OutboundBatches.OutboundBatchUpdateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  outboundBatchUpdate(
    request: OutboundBatches.OutboundBatchUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<CommunicationBatch, OutboundBatches.OutboundBatchUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/outbound/batches/{batch_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "batch_id", value: request.batchId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: communicationBatchUpdateSchema },
      },
      {
        success: { kind: "json", schema: communicationBatchSchema },
        errorFactory: OutboundBatches.OutboundBatchUpdateError,
      },
      options,
    );
  }

  /**
   * Upload Outbound Communication Batch
   *
   * @returns Successful Response
   *
   * @throws {@link OutboundBatches.OutboundBatchUploadError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  outboundBatchUpload(
    request: OutboundBatches.OutboundBatchUploadRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, OutboundBatches.OutboundBatchUploadError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/outbound/batches/{batch_id}/upload_batch"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "batch_id", value: request.batchId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "file", value: request.file }] },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: OutboundBatches.OutboundBatchUploadError,
      },
      options,
    );
  }
}

export namespace OutboundBatches {
  export type OutboundBatchAddRequest = {
    batchId: string;
    body: CommunicationRequest;
  };

  export class OutboundBatchAddError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<OutboundBatchAddError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type OutboundBatchCreateRequest = {
    body: CommunicationBatchInput;
  };

  export class OutboundBatchCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<OutboundBatchCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type OutboundBatchDeleteRequest = {
    batchId: string;
    deleteReason: string;
  };

  export class OutboundBatchDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<OutboundBatchDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type OutboundBatchGetByIdRequest = {
    batchId: string;
  };

  export class OutboundBatchGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<OutboundBatchGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type OutboundBatchListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: BatchProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy313;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields25;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class OutboundBatchListError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<OutboundBatchListError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type OutboundBatchRemoveRequest = {
    batchId: string;
    body: string[];
  };

  export class OutboundBatchRemoveError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<OutboundBatchRemoveError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type OutboundBatchResultsRequest = {
    batchId: string;
    referenceId?: ReferenceId;
    status?: Status5;
    insightsStatus?: InsightsStatus1;
  };

  export class OutboundBatchResultsError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<OutboundBatchResultsError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type OutboundBatchUpdateRequest = {
    batchId: string;
    body: CommunicationBatchUpdate;
  };

  export class OutboundBatchUpdateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<OutboundBatchUpdateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type OutboundBatchUploadRequest = {
    batchId: string;
    file?: FileInput;
  };

  export class OutboundBatchUploadError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<OutboundBatchUploadError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
