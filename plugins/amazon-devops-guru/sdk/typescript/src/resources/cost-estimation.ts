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
  costEstimationRequestSchema,
  type CostEstimationRequest,
} from "../models/cost-estimation-request.js";
import {
  getCostEstimationResponseSchema,
  type GetCostEstimationResponse,
} from "../models/get-cost-estimation-response.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class CostEstimation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Cost Estimation
   *
   * @remarks
   * Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services
   * resources. For more information, see Estimate your Amazon DevOps Guru costs and Amazon DevOps
   * Guru pricing.
   *
   * @returns Success
   *
   * @throws {@link CostEstimation.GetCostEstimationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getCostEstimation(
    request: CostEstimation.GetCostEstimationRequest = {},
    options?: RequestOptions,
  ): ApiPromise<GetCostEstimationResponse, CostEstimation.GetCostEstimationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/cost-estimation"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [{ name: "NextToken", value: request.nextToken, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getCostEstimationResponseSchema },
        errorFactory: CostEstimation.GetCostEstimationError,
      },
      options,
    );
  }

  /**
   * Start Cost Estimation
   *
   * @remarks
   * Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services
   * resources.
   *
   * @returns Success
   *
   * @throws {@link CostEstimation.StartCostEstimationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startCostEstimation(
    request: CostEstimation.StartCostEstimationRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, CostEstimation.StartCostEstimationError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/cost-estimation"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => costEstimationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: CostEstimation.StartCostEstimationError,
      },
      options,
    );
  }
}

export namespace CostEstimation {
  export type GetCostEstimationRequest = {
    /**
     * The pagination token to use to retrieve the next page of results for this operation. If this
     * value is null, it retrieves the first page.
     */
    nextToken?: string;
  };

  export class GetCostEstimationError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCostEstimationError> = [
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

  export type StartCostEstimationRequest = {
    body?: CostEstimationRequest;
  };

  export class StartCostEstimationError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartCostEstimationError> = [
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
}
