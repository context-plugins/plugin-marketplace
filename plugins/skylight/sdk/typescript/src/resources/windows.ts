import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  activeOperationResponseSchema,
  type ActiveOperationResponse,
} from "../models/active-operation-response.js";
import { errorResponse1Schema, type ErrorResponse1 } from "../models/error-response1.js";
import {
  forbiddenErrorResponseSchema,
  type ForbiddenErrorResponse,
} from "../models/forbidden-error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  inactiveOperationResponseSchema,
  type InactiveOperationResponse,
} from "../models/inactive-operation-response.js";
import { instanceRequestSchema, type InstanceRequest } from "../models/instance-request.js";
import {
  instanceStartResponseSchema,
  type InstanceStartResponse,
} from "../models/instance-start-response.js";
import {
  instanceStatusResponseSchema,
  type InstanceStatusResponse,
} from "../models/instance-status-response.js";
import {
  instancesListResponseSchema,
  type InstancesListResponse,
} from "../models/instances-list-response.js";
import type { Servers } from "../servers.js";

export class Windows {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get All Instances
   *
   * @remarks
   * Requires API key authentication.
   *
   * @returns List of instances retrieved successfully
   *
   * @throws {@link Windows.InstancesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkylightApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  instances(options?: RequestOptions): ApiPromise<InstancesListResponse, Windows.InstancesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/windows/instances"),
        auth: this.#auth.apikey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: instancesListResponseSchema },
        errorFactory: Windows.InstancesError,
      },
      options,
    );
  }

  /**
   * Pause Instance
   *
   * @remarks
   * Requires API key authentication.
   *
   * @returns Instance hibernated successfully
   *
   * @throws {@link Windows.PauseError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkylightApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  pause(
    request: Windows.PauseRequest,
    options?: RequestOptions,
  ): ApiPromise<InactiveOperationResponse, Windows.PauseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/windows/pause/{instance_id}"),
        auth: this.#auth.apikey,
        pathParams: [{ name: "instance_id", value: request.instanceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: inactiveOperationResponseSchema },
        errorFactory: Windows.PauseError,
      },
      options,
    );
  }

  /**
   * Resume Instance
   *
   * @remarks
   * Requires API key authentication.
   *
   * @returns Instance resumed successfully
   *
   * @throws {@link Windows.ResumeError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkylightApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resume(
    request: Windows.ResumeRequest,
    options?: RequestOptions,
  ): ApiPromise<ActiveOperationResponse, Windows.ResumeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/windows/resume/{instance_id}"),
        auth: this.#auth.apikey,
        pathParams: [{ name: "instance_id", value: request.instanceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: activeOperationResponseSchema },
        errorFactory: Windows.ResumeError,
      },
      options,
    );
  }

  /**
   * Start Instance
   *
   * @remarks
   * Start a new Windows instance.
   *
   * - timeout_minutes: Optional timeout in minutes (default: 60)
   *
   * Requires API key authentication.
   *
   * @returns Instance started successfully
   *
   * @throws {@link Windows.StartError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkylightApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  start(
    request: Windows.StartRequest,
    options?: RequestOptions,
  ): ApiPromise<InstanceStartResponse, Windows.StartError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/windows/start"),
        auth: this.#auth.apikey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: instanceRequestSchema },
      },
      {
        success: { kind: "json", schema: instanceStartResponseSchema },
        errorFactory: Windows.StartError,
      },
      options,
    );
  }

  /**
   * Get Instance State
   *
   * @remarks
   * Requires API key authentication.
   *
   * @returns Instance status retrieved successfully
   *
   * @throws {@link Windows.StateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkylightApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  state(
    request: Windows.StateRequest,
    options?: RequestOptions,
  ): ApiPromise<InstanceStatusResponse, Windows.StateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/windows/state/{instance_id}"),
        auth: this.#auth.apikey,
        pathParams: [{ name: "instance_id", value: request.instanceId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: instanceStatusResponseSchema },
        errorFactory: Windows.StateError,
      },
      options,
    );
  }

  /**
   * Terminate Instance
   *
   * @remarks
   * Requires API key authentication.
   *
   * @returns Instance terminated successfully
   *
   * @throws {@link Windows.TerminateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkylightApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  terminate(
    request: Windows.TerminateRequest,
    options?: RequestOptions,
  ): ApiPromise<InactiveOperationResponse, Windows.TerminateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/windows/terminate/{instance_id}"),
        auth: this.#auth.apikey,
        pathParams: [{ name: "instance_id", value: request.instanceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: inactiveOperationResponseSchema },
        errorFactory: Windows.TerminateError,
      },
      options,
    );
  }
}

export namespace Windows {
  export class InstancesError extends ApiError {
    declare readonly payload:
      | Declared<"forbiddenErrorResponse", ForbiddenErrorResponse>
      | Declared<"errorResponse1", ErrorResponse1>
      | Undeclared;

    static readonly errors: ErrorDecoders<InstancesError> = [
      {
        on: 403,
        kind: "forbiddenErrorResponse",
        decode: { kind: "json", schema: forbiddenErrorResponseSchema },
      },
      { on: 500, kind: "errorResponse1", decode: { kind: "json", schema: errorResponse1Schema } },
    ];
  }

  export type PauseRequest = {
    instanceId: string;
  };

  export class PauseError extends ApiError {
    declare readonly payload:
      | Declared<"forbiddenErrorResponse", ForbiddenErrorResponse>
      | Declared<"errorResponse1", ErrorResponse1>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<PauseError> = [
      {
        on: 403,
        kind: "forbiddenErrorResponse",
        decode: { kind: "json", schema: forbiddenErrorResponseSchema },
      },
      { on: 500, kind: "errorResponse1", decode: { kind: "json", schema: errorResponse1Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ResumeRequest = {
    instanceId: string;
  };

  export class ResumeError extends ApiError {
    declare readonly payload:
      | Declared<"forbiddenErrorResponse", ForbiddenErrorResponse>
      | Declared<"errorResponse1", ErrorResponse1>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResumeError> = [
      {
        on: 403,
        kind: "forbiddenErrorResponse",
        decode: { kind: "json", schema: forbiddenErrorResponseSchema },
      },
      { on: 500, kind: "errorResponse1", decode: { kind: "json", schema: errorResponse1Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type StartRequest = {
    body: InstanceRequest;
  };

  export class StartError extends ApiError {
    declare readonly payload:
      | Declared<"forbiddenErrorResponse", ForbiddenErrorResponse>
      | Declared<"errorResponse1", ErrorResponse1>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartError> = [
      {
        on: 403,
        kind: "forbiddenErrorResponse",
        decode: { kind: "json", schema: forbiddenErrorResponseSchema },
      },
      { on: 500, kind: "errorResponse1", decode: { kind: "json", schema: errorResponse1Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type StateRequest = {
    instanceId: string;
  };

  export class StateError extends ApiError {
    declare readonly payload:
      | Declared<"forbiddenErrorResponse", ForbiddenErrorResponse>
      | Declared<"errorResponse1", ErrorResponse1>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<StateError> = [
      {
        on: 403,
        kind: "forbiddenErrorResponse",
        decode: { kind: "json", schema: forbiddenErrorResponseSchema },
      },
      { on: 500, kind: "errorResponse1", decode: { kind: "json", schema: errorResponse1Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type TerminateRequest = {
    instanceId: string;
  };

  export class TerminateError extends ApiError {
    declare readonly payload:
      | Declared<"forbiddenErrorResponse", ForbiddenErrorResponse>
      | Declared<"errorResponse1", ErrorResponse1>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<TerminateError> = [
      {
        on: 403,
        kind: "forbiddenErrorResponse",
        decode: { kind: "json", schema: forbiddenErrorResponseSchema },
      },
      { on: 500, kind: "errorResponse1", decode: { kind: "json", schema: errorResponse1Schema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
