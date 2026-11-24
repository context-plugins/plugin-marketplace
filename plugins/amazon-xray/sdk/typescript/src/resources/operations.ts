import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  cancelTraceRetrievalRequestSchema,
  type CancelTraceRetrievalRequest,
} from "../models/cancel-trace-retrieval-request.js";
import {
  getIndexingRulesRequestSchema,
  type GetIndexingRulesRequest,
} from "../models/get-indexing-rules-request.js";
import {
  getIndexingRulesResultSchema,
  type GetIndexingRulesResult,
} from "../models/get-indexing-rules-result.js";
import {
  getRetrievedTracesGraphRequestSchema,
  type GetRetrievedTracesGraphRequest,
} from "../models/get-retrieved-traces-graph-request.js";
import {
  getRetrievedTracesGraphResultSchema,
  type GetRetrievedTracesGraphResult,
} from "../models/get-retrieved-traces-graph-result.js";
import {
  getTraceSegmentDestinationResultSchema,
  type GetTraceSegmentDestinationResult,
} from "../models/get-trace-segment-destination-result.js";
import {
  invalidRequestExceptionSchema,
  type InvalidRequestException,
} from "../models/invalid-request-exception.js";
import {
  listRetrievedTracesRequestSchema,
  type ListRetrievedTracesRequest,
} from "../models/list-retrieved-traces-request.js";
import {
  listRetrievedTracesResultSchema,
  type ListRetrievedTracesResult,
} from "../models/list-retrieved-traces-result.js";
import {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import {
  startTraceRetrievalRequestSchema,
  type StartTraceRetrievalRequest,
} from "../models/start-trace-retrieval-request.js";
import {
  startTraceRetrievalResultSchema,
  type StartTraceRetrievalResult,
} from "../models/start-trace-retrieval-result.js";
import { throttledExceptionSchema, type ThrottledException } from "../models/throttled-exception.js";
import {
  updateIndexingRuleRequestSchema,
  type UpdateIndexingRuleRequest,
} from "../models/update-indexing-rule-request.js";
import {
  updateIndexingRuleResultSchema,
  type UpdateIndexingRuleResult,
} from "../models/update-indexing-rule-result.js";
import {
  updateTraceSegmentDestinationRequestSchema,
  type UpdateTraceSegmentDestinationRequest,
} from "../models/update-trace-segment-destination-request.js";
import {
  updateTraceSegmentDestinationResultSchema,
  type UpdateTraceSegmentDestinationResult,
} from "../models/update-trace-segment-destination-result.js";
import type { Servers } from "../servers.js";

export class Operations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel Trace Retrieval
   *
   * @remarks
   * Cancels an ongoing trace retrieval job initiated by StartTraceRetrieval using the provided
   * RetrievalToken. A successful cancellation will return an HTTP 200 response.
   *
   * @returns Success
   *
   * @throws {@link Operations.CancelTraceRetrievalError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelTraceRetrieval(
    request: Operations.CancelTraceRetrievalRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Operations.CancelTraceRetrievalError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/CancelTraceRetrieval"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => cancelTraceRetrievalRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Operations.CancelTraceRetrievalError,
      },
      options,
    );
  }

  /**
   * Get Indexing Rules
   *
   * @remarks
   * Retrieves all indexing rules. Indexing rules are used to determine the server-side sampling
   * rate for spans ingested through the CloudWatchLogs destination and indexed by X-Ray. For more
   * information, see Transaction Search.
   *
   * @returns Success
   *
   * @throws {@link Operations.GetIndexingRulesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIndexingRules(
    request: Operations.GetIndexingRulesRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<GetIndexingRulesResult, Operations.GetIndexingRulesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/GetIndexingRules"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => getIndexingRulesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getIndexingRulesResultSchema },
        errorFactory: Operations.GetIndexingRulesError,
      },
      options,
    );
  }

  /**
   * Get Retrieved Traces Graph
   *
   * @remarks
   * Retrieves a service graph for traces based on the specified RetrievalToken from the CloudWatch
   * log group generated by Transaction Search. This API does not initiate a retrieval job. You must
   * first execute StartTraceRetrieval to obtain the required RetrievalToken. The trace graph
   * describes services that process incoming requests and any downstream services they call, which
   * may include Amazon Web Services resources, external APIs, or databases. The response is empty
   * until the RetrievalStatus is COMPLETE. Retry the request after the status changes from RUNNING
   * or SCHEDULED to COMPLETE to access the full service graph. When CloudWatch log is the
   * destination, this API can support cross-account observability and service graph retrieval
   * across linked accounts. For retrieving graphs from X-Ray directly as opposed to the
   * Transaction-Search Log group, see GetTraceGraph.
   *
   * @returns Success
   *
   * @throws {@link Operations.GetRetrievedTracesGraphError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRetrievedTracesGraph(
    request: Operations.GetRetrievedTracesGraphRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<GetRetrievedTracesGraphResult, Operations.GetRetrievedTracesGraphError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/GetRetrievedTracesGraph"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => getRetrievedTracesGraphRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: getRetrievedTracesGraphResultSchema },
        errorFactory: Operations.GetRetrievedTracesGraphError,
      },
      options,
    );
  }

  /**
   * Get Trace Segment Destination
   *
   * @remarks
   * Retrieves the current destination of data sent to PutTraceSegments and OpenTelemetry protocol
   * (OTLP) endpoint. The Transaction Search feature requires a CloudWatchLogs destination. For more
   * information, see Transaction Search and OpenTelemetry.
   *
   * @returns Success
   *
   * @throws {@link Operations.GetTraceSegmentDestinationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTraceSegmentDestination(
    options?: RequestOptions,
  ): ApiPromise<GetTraceSegmentDestinationResult, Operations.GetTraceSegmentDestinationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/GetTraceSegmentDestination"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getTraceSegmentDestinationResultSchema },
        errorFactory: Operations.GetTraceSegmentDestinationError,
      },
      options,
    );
  }

  /**
   * List Retrieved Traces
   *
   * @remarks
   * Retrieves a list of traces for a given RetrievalToken from the CloudWatch log group generated
   * by Transaction Search. For information on what each trace returns, see BatchGetTraces. This API
   * does not initiate a retrieval process. To start a trace retrieval, use StartTraceRetrieval,
   * which generates the required RetrievalToken. When the RetrievalStatus is not COMPLETE, the API
   * will return an empty response. Retry the request once the retrieval has completed to access the
   * full list of traces. For cross-account observability, this API can retrieve traces from linked
   * accounts when CloudWatch log is set as the destination across relevant accounts. For more
   * details, see CloudWatch cross-account observability. For retrieving data from X-Ray directly as
   * opposed to the Transaction Search generated log group, see BatchGetTraces.
   *
   * @returns Success
   *
   * @throws {@link Operations.ListRetrievedTracesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRetrievedTraces(
    request: Operations.ListRetrievedTracesRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<ListRetrievedTracesResult, Operations.ListRetrievedTracesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ListRetrievedTraces"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listRetrievedTracesRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listRetrievedTracesResultSchema },
        errorFactory: Operations.ListRetrievedTracesError,
      },
      options,
    );
  }

  /**
   * Start Trace Retrieval
   *
   * @remarks
   * Initiates a trace retrieval process using the specified time range and for the given trace IDs
   * in the Transaction Search generated CloudWatch log group. For more information, see Transaction
   * Search. API returns a RetrievalToken, which can be used with ListRetrievedTraces or
   * GetRetrievedTracesGraph to fetch results. Retrievals will time out after 60 minutes. To execute
   * long time ranges, consider segmenting into multiple retrievals. If you are using CloudWatch
   * cross-account observability, you can use this operation in a monitoring account to retrieve
   * data from a linked source account, as long as both accounts have transaction search enabled.
   * For retrieving data from X-Ray directly as opposed to the Transaction-Search Log group, see
   * BatchGetTraces.
   *
   * @returns Success
   *
   * @throws {@link Operations.StartTraceRetrievalError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startTraceRetrieval(
    request: Operations.StartTraceRetrievalRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<StartTraceRetrievalResult, Operations.StartTraceRetrievalError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/StartTraceRetrieval"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => startTraceRetrievalRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: startTraceRetrievalResultSchema },
        errorFactory: Operations.StartTraceRetrievalError,
      },
      options,
    );
  }

  /**
   * Update Indexing Rule
   *
   * @remarks
   * Modifies an indexing rule’s configuration. Indexing rules are used for determining the sampling
   * rate for spans indexed from CloudWatch Logs. For more information, see Transaction Search.
   *
   * @returns Success
   *
   * @throws {@link Operations.UpdateIndexingRuleError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateIndexingRule(
    request: Operations.UpdateIndexingRuleRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<UpdateIndexingRuleResult, Operations.UpdateIndexingRuleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/UpdateIndexingRule"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateIndexingRuleRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: updateIndexingRuleResultSchema },
        errorFactory: Operations.UpdateIndexingRuleError,
      },
      options,
    );
  }

  /**
   * Update Trace Segment Destination
   *
   * @remarks
   * Modifies the destination of data sent to PutTraceSegments. The Transaction Search feature
   * requires the CloudWatchLogs destination. For more information, see Transaction Search.
   *
   * @returns Success
   *
   * @throws {@link Operations.UpdateTraceSegmentDestinationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsXRayError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTraceSegmentDestination(
    request: Operations.UpdateTraceSegmentDestinationRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<UpdateTraceSegmentDestinationResult, Operations.UpdateTraceSegmentDestinationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/UpdateTraceSegmentDestination"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateTraceSegmentDestinationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: updateTraceSegmentDestinationResultSchema },
        errorFactory: Operations.UpdateTraceSegmentDestinationError,
      },
      options,
    );
  }
}

export namespace Operations {
  export type CancelTraceRetrievalRequestParams = {
    body?: CancelTraceRetrievalRequest;
  };

  export class CancelTraceRetrievalError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelTraceRetrievalError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }

  export type GetIndexingRulesRequestParams = {
    body?: GetIndexingRulesRequest;
  };

  export class GetIndexingRulesError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIndexingRulesError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }

  export type GetRetrievedTracesGraphRequestParams = {
    body?: GetRetrievedTracesGraphRequest;
  };

  export class GetRetrievedTracesGraphError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRetrievedTracesGraphError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }

  export class GetTraceSegmentDestinationError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTraceSegmentDestinationError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }

  export type ListRetrievedTracesRequestParams = {
    body?: ListRetrievedTracesRequest;
  };

  export class ListRetrievedTracesError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListRetrievedTracesError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }

  export type StartTraceRetrievalRequestParams = {
    body?: StartTraceRetrievalRequest;
  };

  export class StartTraceRetrievalError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartTraceRetrievalError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }

  export type UpdateIndexingRuleRequestParams = {
    body?: UpdateIndexingRuleRequest;
  };

  export class UpdateIndexingRuleError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateIndexingRuleError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }

  export type UpdateTraceSegmentDestinationRequestParams = {
    body?: UpdateTraceSegmentDestinationRequest;
  };

  export class UpdateTraceSegmentDestinationError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestException", InvalidRequestException>
      | Declared<"throttledException", ThrottledException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateTraceSegmentDestinationError> = [
      {
        on: 400,
        kind: "invalidRequestException",
        decode: { kind: "json", schema: invalidRequestExceptionSchema },
      },
      { on: 429, kind: "throttledException", decode: { kind: "json", schema: throttledExceptionSchema } },
    ];
  }
}
