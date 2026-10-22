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
  insightToolDefinitionSchema,
  type InsightToolDefinition,
} from "../models/insight-tool-definition.js";
import { insightToolInputSchema, type InsightToolInput } from "../models/insight-tool-input.js";
import {
  insightToolPropertiesSchema,
  type InsightToolProperties,
} from "../models/insight-tool-properties.js";
import { insightToolResponseSchema, type InsightToolResponse } from "../models/insight-tool-response.js";
import { insightToolTestInputSchema, type InsightToolTestInput } from "../models/insight-tool-test-input.js";
import {
  listResponseInsightToolResponseSchema,
  type ListResponseInsightToolResponse,
} from "../models/list-response-insight-tool-response.js";
import { endDatetime3Schema, type EndDatetime3 } from "../models/unions/end-datetime3.js";
import { fields13Schema, type Fields13 } from "../models/unions/fields13.js";
import { orderByDirection1Schema, type OrderByDirection1 } from "../models/unions/order-by-direction1.js";
import { orderBy311Schema, type OrderBy311 } from "../models/unions/order-by311.js";
import { pageSchema, type Page } from "../models/unions/page.js";
import { startDatetime3Schema, type StartDatetime3 } from "../models/unions/start-datetime3.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to insights tool configurationss. An insight is a tool that processes
 * conversation data to extract information and generate reports.
 */
export class InsightsTools {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Insight Tool Config By Id
   *
   * @remarks
   * Get a InsightTool by Name.
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsTools.InsightToolGetByIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightToolGetById(
    request: InsightsTools.InsightToolGetByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightToolResponse, InsightsTools.InsightToolGetByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/insights/tool-configurations/{tool_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "tool_id", value: request.toolId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightToolResponseSchema },
        errorFactory: InsightsTools.InsightToolGetByIdError,
      },
      options,
    );
  }

  /**
   * Get Insight Tool Definitions
   *
   * @remarks
   * Get a InsightTool by Name.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightToolGetDefinitions(options?: RequestOptions): ApiPromise<InsightToolDefinition[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/insights/tool-definitions"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => insightToolDefinitionSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List Insight Tool Configurations
   *
   * @remarks
   * List the existing insight_tools
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsTools.InsightToolListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightToolList(
    request: InsightsTools.InsightToolListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListResponseInsightToolResponse, InsightsTools.InsightToolListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/insights/tool-configurations"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.lazy(() => pageSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          {
            name: "search_fields",
            value: request.searchFields,
            schema: s.optional(s.array(s.lazy(() => insightToolPropertiesSchema))),
          },
          {
            name: "search_field_values",
            value: request.searchFieldValues,
            schema: s.optional(s.array(s.string())),
          },
          { name: "order_by", value: request.orderBy, schema: s.optional(s.lazy(() => orderBy311Schema)) },
          {
            name: "order_by_direction",
            value: request.orderByDirection,
            schema: s.optional(s.lazy(() => orderByDirection1Schema)),
          },
          { name: "fields", value: request.fields, schema: s.optional(s.lazy(() => fields13Schema)) },
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
        success: { kind: "json", schema: listResponseInsightToolResponseSchema },
        errorFactory: InsightsTools.InsightToolListError,
      },
      options,
    );
  }

  /**
   * Create Insight Tool Configuration
   *
   * @remarks
   * Create a new insight tool.
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsTools.InsightsToolCreateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsToolCreate(
    request: InsightsTools.InsightsToolCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightToolResponse, InsightsTools.InsightsToolCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/insights/tool-configurations"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: insightToolInputSchema },
      },
      {
        success: { kind: "json", schema: insightToolResponseSchema },
        errorFactory: InsightsTools.InsightsToolCreateError,
      },
      options,
    );
  }

  /**
   * Delete Insight Tool Configuration
   *
   * @remarks
   * Delete an Insights tool configuration.
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsTools.InsightsToolDeleteError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsToolDelete(
    request: InsightsTools.InsightsToolDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, InsightsTools.InsightsToolDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/insights/tool-configurations/{tool_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "tool_id", value: request.toolId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: InsightsTools.InsightsToolDeleteError,
      },
      options,
    );
  }

  /**
   * Test Insights Tool
   *
   * @remarks
   * Run the saved tool against one session or uploaded file without persisting insights.
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsTools.InsightsToolTestError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsToolTest(
    request: InsightsTools.InsightsToolTestRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, InsightsTools.InsightsToolTestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/insights/tools-test"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: insightToolTestInputSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: InsightsTools.InsightsToolTestError,
      },
      options,
    );
  }

  /**
   * Update Insights Tool Configuration
   *
   * @remarks
   * Update an Insights tool.
   *
   * @returns Successful Response
   *
   * @throws {@link InsightsTools.InsightsToolUpdateError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SyllableSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  insightsToolUpdate(
    request: InsightsTools.InsightsToolUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightToolResponse, InsightsTools.InsightsToolUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v1/insights/tool-configurations/{tool_id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "tool_id", value: request.toolId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: insightToolInputSchema },
      },
      {
        success: { kind: "json", schema: insightToolResponseSchema },
        errorFactory: InsightsTools.InsightsToolUpdateError,
      },
      options,
    );
  }
}

export namespace InsightsTools {
  export type InsightToolGetByIdRequest = {
    toolId: string;
  };

  export class InsightToolGetByIdError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<InsightToolGetByIdError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightToolListRequest = {
    /** The page number from which to start (0-based) */
    page?: Page;
    /** The maximum number of items to return @default 25 */
    limit?: number;
    /** String names of fields to search. Correspond by index to search field values */
    searchFields?: InsightToolProperties[];
    /**
     * Values of fields to search. Correspond by index to search fields. Unless field name contains
     * "list", an individual search field value cannot be a list
     */
    searchFieldValues?: string[];
    /** The field whose value should be used to order the results */
    orderBy?: OrderBy311;
    /** The direction in which to order the results */
    orderByDirection?: OrderByDirection1;
    /** The fields to include in the response */
    fields?: Fields13;
    /** The start datetime for filtering results */
    startDatetime?: StartDatetime3;
    /** The end datetime for filtering results */
    endDatetime?: EndDatetime3;
  };

  export class InsightToolListError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<InsightToolListError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsToolCreateRequest = {
    body: InsightToolInput;
  };

  export class InsightsToolCreateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error500", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<InsightsToolCreateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsToolDeleteRequest = {
    toolId: number;
  };

  export class InsightsToolDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error412", undefined>
      | Declared<"error500", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<InsightsToolDeleteError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 412, kind: "error412", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsToolTestRequest = {
    body: InsightToolTestInput;
  };

  export class InsightsToolTestError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Declared<"error502", undefined>
      | Declared<"error504", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<InsightsToolTestError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 502, kind: "error502", decode: { kind: "empty" } },
      { on: 504, kind: "error504", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type InsightsToolUpdateRequest = {
    toolId: number;
    body: InsightToolInput;
  };

  export class InsightsToolUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error412", undefined>
      | Declared<"error500", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<InsightsToolUpdateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 412, kind: "error412", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
