import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { conflictExceptionSchema, type ConflictException } from "../models/conflict-exception.js";
import {
  describeTestExecutionResponseSchema,
  type DescribeTestExecutionResponse,
} from "../models/describe-test-execution-response.js";
import {
  getTestExecutionArtifactsUrlResponseSchema,
  type GetTestExecutionArtifactsUrlResponse,
} from "../models/get-test-execution-artifacts-url-response.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import {
  listTestExecutionResultItemsRequestSchema,
  type ListTestExecutionResultItemsRequest,
} from "../models/list-test-execution-result-items-request.js";
import {
  listTestExecutionResultItemsResponseSchema,
  type ListTestExecutionResultItemsResponse,
} from "../models/list-test-execution-result-items-response.js";
import {
  listTestExecutionsRequestSchema,
  type ListTestExecutionsRequest,
} from "../models/list-test-executions-request.js";
import {
  listTestExecutionsResponseSchema,
  type ListTestExecutionsResponse,
} from "../models/list-test-executions-response.js";
import {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import {
  serviceQuotaExceededExceptionSchema,
  type ServiceQuotaExceededException,
} from "../models/service-quota-exceeded-exception.js";
import {
  startTestExecutionRequestSchema,
  type StartTestExecutionRequest,
} from "../models/start-test-execution-request.js";
import {
  startTestExecutionResponseSchema,
  type StartTestExecutionResponse,
} from "../models/start-test-execution-response.js";
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class Testexecutions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Describe Test Execution
   *
   * @remarks
   * Gets metadata information about the test execution.
   *
   * @returns Success
   *
   * @throws {@link Testexecutions.DescribeTestExecutionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeTestExecution(
    request: Testexecutions.DescribeTestExecutionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DescribeTestExecutionResponse, Testexecutions.DescribeTestExecutionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/testexecutions/{testExecutionId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "testExecutionId", value: request.testExecutionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeTestExecutionResponseSchema },
        errorFactory: Testexecutions.DescribeTestExecutionError,
      },
      options,
    );
  }

  /**
   * Get Test Execution Artifacts Url
   *
   * @remarks
   * The pre-signed Amazon S3 URL to download the test execution result artifacts.
   *
   * @returns Success
   *
   * @throws {@link Testexecutions.GetTestExecutionArtifactsUrlError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTestExecutionArtifactsUrl(
    request: Testexecutions.GetTestExecutionArtifactsUrlRequestParams,
    options?: RequestOptions,
  ): ApiPromise<GetTestExecutionArtifactsUrlResponse, Testexecutions.GetTestExecutionArtifactsUrlError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/testexecutions/{testExecutionId}/artifacturl",
        ),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "testExecutionId", value: request.testExecutionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getTestExecutionArtifactsUrlResponseSchema },
        errorFactory: Testexecutions.GetTestExecutionArtifactsUrlError,
      },
      options,
    );
  }

  /**
   * List Test Execution Result Items
   *
   * @remarks
   * Gets a list of test execution result items.
   *
   * @returns Success
   *
   * @throws {@link Testexecutions.ListTestExecutionResultItemsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTestExecutionResultItems(
    request: Testexecutions.ListTestExecutionResultItemsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ListTestExecutionResultItemsResponse, Testexecutions.ListTestExecutionResultItemsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/testexecutions/{testExecutionId}/results",
        ),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "testExecutionId", value: request.testExecutionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listTestExecutionResultItemsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listTestExecutionResultItemsResponseSchema },
        errorFactory: Testexecutions.ListTestExecutionResultItemsError,
      },
      options,
    );
  }

  /**
   * List Test Executions
   *
   * @remarks
   * The list of test set executions.
   *
   * @returns Success
   *
   * @throws {@link Testexecutions.ListTestExecutionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTestExecutions(
    request: Testexecutions.ListTestExecutionsRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<ListTestExecutionsResponse, Testexecutions.ListTestExecutionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/testexecutions"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listTestExecutionsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: listTestExecutionsResponseSchema },
        errorFactory: Testexecutions.ListTestExecutionsError,
      },
      options,
    );
  }

  /**
   * Start Test Execution
   *
   * @remarks
   * The action to start test set execution.
   *
   * @returns Success
   *
   * @throws {@link Testexecutions.StartTestExecutionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startTestExecution(
    request: Testexecutions.StartTestExecutionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<StartTestExecutionResponse, Testexecutions.StartTestExecutionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/testsets/{testSetId}/testexecutions",
        ),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "testSetId", value: request.testSetId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => startTestExecutionRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: startTestExecutionResponseSchema },
        errorFactory: Testexecutions.StartTestExecutionError,
      },
      options,
    );
  }
}

export namespace Testexecutions {
  export type DescribeTestExecutionRequestParams = {
    testExecutionId: string;
  };

  export class DescribeTestExecutionError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeTestExecutionError> = [
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
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type GetTestExecutionArtifactsUrlRequestParams = {
    testExecutionId: string;
  };

  export class GetTestExecutionArtifactsUrlError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTestExecutionArtifactsUrlError> = [
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
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListTestExecutionResultItemsRequestParams = {
    testExecutionId: string;
    body?: ListTestExecutionResultItemsRequest;
  };

  export class ListTestExecutionResultItemsError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTestExecutionResultItemsError> = [
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
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type ListTestExecutionsRequestParams = {
    body?: ListTestExecutionsRequest;
  };

  export class ListTestExecutionsError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListTestExecutionsError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type StartTestExecutionRequestParams = {
    testSetId: string;
    body?: StartTestExecutionRequest;
  };

  export class StartTestExecutionError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartTestExecutionError> = [
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
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }
}
