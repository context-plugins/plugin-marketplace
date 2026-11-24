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
  describeFeedbackResponseSchema,
  type DescribeFeedbackResponse,
} from "../models/describe-feedback-response.js";
import { feedbackRequestSchema, type FeedbackRequest } from "../models/feedback-request.js";
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

export class FeedbackApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Describe Feedback
   *
   * @remarks
   * Returns the most recent feedback submitted in the current Amazon Web Services account and
   * Region.
   *
   * @returns Success
   *
   * @throws {@link FeedbackApi.DescribeFeedbackError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeFeedback(
    request: FeedbackApi.DescribeFeedbackRequest = {},
    options?: RequestOptions,
  ): ApiPromise<DescribeFeedbackResponse, FeedbackApi.DescribeFeedbackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/feedback"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => feedbackRequestSchema)) },
      },
      {
        success: { kind: "json", schema: describeFeedbackResponseSchema },
        errorFactory: FeedbackApi.DescribeFeedbackError,
      },
      options,
    );
  }

  /**
   * Put Feedback
   *
   * @remarks
   * Collects customer feedback about the specified insight.
   *
   * @returns Success
   *
   * @throws {@link FeedbackApi.PutFeedbackError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  putFeedback(
    request: FeedbackApi.PutFeedbackRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, FeedbackApi.PutFeedbackError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/feedback"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => describeFeedbackResponseSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: FeedbackApi.PutFeedbackError,
      },
      options,
    );
  }
}

export namespace FeedbackApi {
  export type DescribeFeedbackRequest = {
    body?: FeedbackRequest;
  };

  export class DescribeFeedbackError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeFeedbackError> = [
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

  export type PutFeedbackRequest = {
    body?: DescribeFeedbackResponse;
  };

  export class PutFeedbackError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutFeedbackError> = [
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
