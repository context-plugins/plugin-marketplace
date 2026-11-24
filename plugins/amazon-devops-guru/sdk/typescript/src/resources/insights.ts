import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  accessDeniedExceptionSchema,
  type AccessDeniedException,
} from "../models/access-denied-exception.js";
import { conflictExceptionSchema, type ConflictException } from "../models/conflict-exception.js";
import {
  describeInsightResponseSchema,
  type DescribeInsightResponse,
} from "../models/describe-insight-response.js";
import { insightsRequestSchema, type InsightsRequest } from "../models/insights-request.js";
import {
  insightsSearchRequestSchema,
  type InsightsSearchRequest,
} from "../models/insights-search-request.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import { listInsightsResponseSchema, type ListInsightsResponse } from "../models/list-insights-response.js";
import {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import {
  searchInsightsResponseSchema,
  type SearchInsightsResponse,
} from "../models/search-insights-response.js";
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class Insights {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete Insight
   *
   * @remarks
   * Deletes the insight along with the associated anomalies, events and recommendations.
   *
   * @returns Success
   *
   * @throws {@link Insights.DeleteInsightError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteInsight(
    request: Insights.DeleteInsightRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Insights.DeleteInsightError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/insights/{Id}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "Id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Insights.DeleteInsightError,
      },
      options,
    );
  }

  /**
   * Describe Insight
   *
   * @remarks
   * Returns details about an insight that you specify using its ID.
   *
   * @returns Success
   *
   * @throws {@link Insights.DescribeInsightError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeInsight(
    request: Insights.DescribeInsightRequest,
    options?: RequestOptions,
  ): ApiPromise<DescribeInsightResponse, Insights.DescribeInsightError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/insights/{Id}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "Id", value: request.id, schema: s.string() }],
        query: [{ name: "AccountId", value: request.accountId, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeInsightResponseSchema },
        errorFactory: Insights.DescribeInsightError,
      },
      options,
    );
  }

  /**
   * List Insights
   *
   * @remarks
   * Returns a list of insights in your Amazon Web Services account. You can specify which insights
   * are returned by their start time and status (ONGOING, CLOSED, or ANY).
   *
   * @returns Success
   *
   * @throws {@link Insights.ListInsightsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listInsights(
    request: Insights.ListInsightsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListInsightsResponse, Insights.ListInsightsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/insights"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => insightsRequestSchema)) },
      },
      {
        success: { kind: "json", schema: listInsightsResponseSchema },
        errorFactory: Insights.ListInsightsError,
      },
      options,
    );
  }

  /**
   * Search Insights
   *
   * @remarks
   * Returns a list of insights in your Amazon Web Services account. You can specify which insights
   * are returned by their start time, one or more statuses (ONGOING or CLOSED), one or more
   * severities (LOW, MEDIUM, and HIGH), and type (REACTIVE or PROACTIVE). Use the Filters parameter
   * to specify status and severity search parameters. Use the Type parameter to specify REACTIVE or
   * PROACTIVE in your search.
   *
   * @returns Success
   *
   * @throws {@link Insights.SearchInsightsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  searchInsights(
    request: Insights.SearchInsightsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SearchInsightsResponse, Insights.SearchInsightsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/insights/search"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => insightsSearchRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: searchInsightsResponseSchema },
        errorFactory: Insights.SearchInsightsError,
      },
      options,
    );
  }
}

export namespace Insights {
  export type DeleteInsightRequest = {
    /** The ID of the insight. */
    id: string;
  };

  export class DeleteInsightError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteInsightError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DescribeInsightRequest = {
    /** The ID of the insight. */
    id: string;
    /** The ID of the member account in the organization. */
    accountId?: string;
  };

  export class DescribeInsightError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeInsightError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListInsightsRequest = {
    body?: InsightsRequest;
  };

  export class ListInsightsError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListInsightsError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type SearchInsightsRequest = {
    body?: InsightsSearchRequest;
  };

  export class SearchInsightsError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchInsightsError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }
}
