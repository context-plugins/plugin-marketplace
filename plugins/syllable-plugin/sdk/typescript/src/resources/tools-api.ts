import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  listResponseToolHistoryResponseSchema,
  type ListResponseToolHistoryResponse,
} from "../models/list-response-tool-history-response.js";
import {
  listResponseToolResponseSchema,
  type ListResponseToolResponse,
} from "../models/list-response-tool-response.js";
import {
  orderByDirection1EnumSchema,
  type OrderByDirection1Enum,
} from "../models/order-by-direction1-enum.js";
import { toolCreateRequestSchema, type ToolCreateRequest } from "../models/tool-create-request.js";
import { toolDetailResponseSchema, type ToolDetailResponse } from "../models/tool-detail-response.js";
import { toolPropertiesSchema, type ToolProperties } from "../models/tool-properties.js";
import { toolResponseSchema, type ToolResponse } from "../models/tool-response.js";
import { toolUpdateRequestSchema, type ToolUpdateRequest } from "../models/tool-update-request.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields20Schema, type Fields20 } from "../models/unions/fields20.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy38Schema, type OrderBy38 } from "../models/unions/order-by38.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to tool configuration. A tool is a function that an agent can call to perform
 * actions like accessing databases, making API calls, or processing data. For an agent to have
 * access to a tool, the prompt associated with that agent should be linked to the tool and include
 * instructions to use it. For more information, see [Console
 * docs](https://docs.syllable.ai/Resources/Tools).
 */
export class ToolsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Tool
   *
   * @remarks
   * Create a new tool
   *
   * @returns Successful Response
   *
   * @throws {@link ToolsApi.ToolCreateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  toolCreate(
    request: ToolsApi.ToolCreateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ToolResponse, ToolsApi.ToolCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tools/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: toolCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: toolResponseSchema },
        errorFactory: ToolsApi.ToolCreateError,
      },
      options,
    );
  }

  /**
   * Delete Tool
   *
   * @remarks
   * Delete a tool.
   *
   * @returns Successful Response
   *
   * @throws {@link ToolsApi.ToolDeleteError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  toolDelete(
    request: ToolsApi.ToolDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ToolsApi.ToolDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/tools/{tool_name}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "tool_name", value: request.toolName, schema: s.string() }],
        query: [{ name: "reason", value: request.reason, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ToolsApi.ToolDeleteError,
      },
      options,
    );
  }

  /**
   * Tool Info
   *
   * @remarks
   * Get the details of a specific tool
   *
   * @returns Successful Response
   *
   * @throws {@link ToolsApi.ToolGetByNameError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  toolGetByName(
    request: ToolsApi.ToolGetByNameRequest,
    options?: RequestOptions,
  ): ApiPromise<ToolDetailResponse, ToolsApi.ToolGetByNameError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/tools/{tool_name}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "tool_name", value: request.toolName, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: toolDetailResponseSchema },
        errorFactory: ToolsApi.ToolGetByNameError,
      },
      options,
    );
  }

  /**
   * Tool History
   *
   * @remarks
   * Get version history for a tool.
   *
   * @returns Successful Response
   *
   * @throws {@link ToolsApi.ToolHistoryError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  toolHistory(
    request: ToolsApi.ToolHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseToolHistoryResponse, ToolsApi.ToolHistoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/tools/{tool_id}/history"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "tool_id", value: request.toolId, schema: s.int() }],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1EnumSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponseToolHistoryResponseSchema },
        errorFactory: ToolsApi.ToolHistoryError,
      },
      options,
    );
  }

  /**
   * Tool List
   *
   * @remarks
   * List the existing tools
   *
   * @returns Successful Response
   *
   * @throws {@link ToolsApi.ToolListError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  toolList(
    request: ToolsApi.ToolListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseToolResponse, ToolsApi.ToolListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/tools/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => toolPropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy38Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields20Schema)) },
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
        success: { kind: "json", schema: listResponseToolResponseSchema },
        errorFactory: ToolsApi.ToolListError,
      },
      options,
    );
  }

  /**
   * Update Tool
   *
   * @remarks
   * Update an existing tool
   *
   * @returns Successful Response
   *
   * @throws {@link ToolsApi.ToolUpdateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  toolUpdate(
    request: ToolsApi.ToolUpdateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ToolResponse, ToolsApi.ToolUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/tools/"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: toolUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: toolResponseSchema },
        errorFactory: ToolsApi.ToolUpdateError,
      },
      options,
    );
  }
}

export namespace ToolsApi {
  export type ToolCreateRequestParams = {
    body: ToolCreateRequest;
  };

  export class ToolCreateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ToolCreateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ToolDeleteRequest = {
    toolName: string;
    reason: string;
  };

  export class ToolDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ToolDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ToolGetByNameRequest = {
    toolName: string;
  };

  export class ToolGetByNameError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ToolGetByNameError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ToolHistoryRequest = {
    toolId: number;
    /** Page number (0-based) @default 0 */
    page?: number;
    /** Items per page @default 25 */
    limit?: number;
    /** Sort by oldest first (asc) or newest first (desc). Version 1 is always the oldest. */
    orderByDirection?: OrderByDirection1Enum;
  };

  export class ToolHistoryError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ToolHistoryError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ToolListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: ToolProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy38;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields20;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class ToolListError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ToolListError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ToolUpdateRequestParams = {
    body: ToolUpdateRequest;
  };

  export class ToolUpdateError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ToolUpdateError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
