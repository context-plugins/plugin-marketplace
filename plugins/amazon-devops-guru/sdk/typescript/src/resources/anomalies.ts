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
import {
  anomaliesInsightRequestSchema,
  type AnomaliesInsightRequest,
} from "../models/anomalies-insight-request.js";
import {
  describeAnomalyResponseSchema,
  type DescribeAnomalyResponse,
} from "../models/describe-anomaly-response.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import {
  listAnomaliesForInsightResponseSchema,
  type ListAnomaliesForInsightResponse,
} from "../models/list-anomalies-for-insight-response.js";
import {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class Anomalies {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Describe Anomaly
   *
   * @remarks
   * Returns details about an anomaly that you specify using its ID.
   *
   * @returns Success
   *
   * @throws {@link Anomalies.DescribeAnomalyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeAnomaly(
    request: Anomalies.DescribeAnomalyRequest,
    options?: RequestOptions,
  ): ApiPromise<DescribeAnomalyResponse, Anomalies.DescribeAnomalyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/anomalies/{Id}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "Id", value: request.id, schema: s.string() }],
        query: [{ name: "AccountId", value: request.accountId, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeAnomalyResponseSchema },
        errorFactory: Anomalies.DescribeAnomalyError,
      },
      options,
    );
  }

  /**
   * List Anomalies For Insight
   *
   * @remarks
   * Returns a list of the anomalies that belong to an insight that you specify using its ID.
   *
   * @returns Success
   *
   * @throws {@link Anomalies.ListAnomaliesForInsightError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listAnomaliesForInsight(
    request: Anomalies.ListAnomaliesForInsightRequest,
    options?: RequestOptions,
  ): ApiPromise<ListAnomaliesForInsightResponse, Anomalies.ListAnomaliesForInsightError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/anomalies/insight/{InsightId}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "InsightId", value: request.insightId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => anomaliesInsightRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listAnomaliesForInsightResponseSchema },
        errorFactory: Anomalies.ListAnomaliesForInsightError,
      },
      options,
    );
  }
}

export namespace Anomalies {
  export type DescribeAnomalyRequest = {
    /** The ID of the anomaly. */
    id: string;
    /** The ID of the member account. */
    accountId?: string;
  };

  export class DescribeAnomalyError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeAnomalyError> = [
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

  export type ListAnomaliesForInsightRequest = {
    /** The ID of the insight. The returned anomalies belong to this insight. */
    insightId: string;
    body?: AnomaliesInsightRequest;
  };

  export class ListAnomaliesForInsightError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAnomaliesForInsightError> = [
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
}
