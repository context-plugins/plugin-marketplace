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
  describeTestSetGenerationResponseSchema,
  type DescribeTestSetGenerationResponse,
} from "../models/describe-test-set-generation-response.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import {
  serviceQuotaExceededExceptionSchema,
  type ServiceQuotaExceededException,
} from "../models/service-quota-exceeded-exception.js";
import {
  startTestSetGenerationRequestSchema,
  type StartTestSetGenerationRequest,
} from "../models/start-test-set-generation-request.js";
import {
  startTestSetGenerationResponseSchema,
  type StartTestSetGenerationResponse,
} from "../models/start-test-set-generation-response.js";
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class Testsetgenerations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Describe Test Set Generation
   *
   * @remarks
   * Gets metadata information about the test set generation.
   *
   * @returns Success
   *
   * @throws {@link Testsetgenerations.DescribeTestSetGenerationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeTestSetGeneration(
    request: Testsetgenerations.DescribeTestSetGenerationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DescribeTestSetGenerationResponse, Testsetgenerations.DescribeTestSetGenerationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/testsetgenerations/{testSetGenerationId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "testSetGenerationId", value: request.testSetGenerationId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeTestSetGenerationResponseSchema },
        errorFactory: Testsetgenerations.DescribeTestSetGenerationError,
      },
      options,
    );
  }

  /**
   * Start Test Set Generation
   *
   * @remarks
   * The action to start the generation of test set.
   *
   * @returns Success
   *
   * @throws {@link Testsetgenerations.StartTestSetGenerationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startTestSetGeneration(
    request: Testsetgenerations.StartTestSetGenerationRequestParams = {},
    options?: RequestOptions,
  ): ApiPromise<StartTestSetGenerationResponse, Testsetgenerations.StartTestSetGenerationError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/testsetgenerations"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => startTestSetGenerationRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: startTestSetGenerationResponseSchema },
        errorFactory: Testsetgenerations.StartTestSetGenerationError,
      },
      options,
    );
  }
}

export namespace Testsetgenerations {
  export type DescribeTestSetGenerationRequestParams = {
    testSetGenerationId: string;
  };

  export class DescribeTestSetGenerationError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeTestSetGenerationError> = [
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

  export type StartTestSetGenerationRequestParams = {
    body?: StartTestSetGenerationRequest;
  };

  export class StartTestSetGenerationError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartTestSetGenerationError> = [
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
