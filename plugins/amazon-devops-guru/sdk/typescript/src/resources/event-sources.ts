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
  describeEventSourcesConfigResponseSchema,
  type DescribeEventSourcesConfigResponse,
} from "../models/describe-event-sources-config-response.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class EventSources {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Describe Event Sources Config
   *
   * @remarks
   * Returns the integration status of services that are integrated with DevOps Guru as Consumer via
   * EventBridge. The one service that can be integrated with DevOps Guru is Amazon CodeGuru
   * Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps
   * Guru.
   *
   * @returns Success
   *
   * @throws {@link EventSources.DescribeEventSourcesConfigError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeEventSourcesConfig(
    options?: RequestOptions,
  ): ApiPromise<DescribeEventSourcesConfigResponse, EventSources.DescribeEventSourcesConfigError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/event-sources"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeEventSourcesConfigResponseSchema },
        errorFactory: EventSources.DescribeEventSourcesConfigError,
      },
      options,
    );
  }

  /**
   * Update Event Sources Config
   *
   * @remarks
   * Enables or disables integration with a service that can be integrated with DevOps Guru. The one
   * service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce
   * proactive recommendations which can be stored and viewed in DevOps Guru.
   *
   * @returns Success
   *
   * @throws {@link EventSources.UpdateEventSourcesConfigError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateEventSourcesConfig(
    request: EventSources.UpdateEventSourcesConfigRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, EventSources.UpdateEventSourcesConfigError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/event-sources"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => describeEventSourcesConfigResponseSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: EventSources.UpdateEventSourcesConfigError,
      },
      options,
    );
  }
}

export namespace EventSources {
  export class DescribeEventSourcesConfigError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeEventSourcesConfigError> = [
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

  export type UpdateEventSourcesConfigRequest = {
    body?: DescribeEventSourcesConfigResponse;
  };

  export class UpdateEventSourcesConfigError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateEventSourcesConfigError> = [
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
