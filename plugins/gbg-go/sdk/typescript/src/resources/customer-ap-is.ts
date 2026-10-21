import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  journeyDeviceStartRequestSchema,
  type JourneyDeviceStartRequest,
} from "../models/journey-device-start-request.js";
import {
  journeyDeviceStartResponseSchema,
  type JourneyDeviceStartResponse,
} from "../models/journey-device-start-response.js";
import { journeyStartRequestSchema, type JourneyStartRequest } from "../models/journey-start-request.js";
import { journeyStartResponseSchema, type JourneyStartResponse } from "../models/journey-start-response.js";
import {
  journeyStateDeleteRequestSchema,
  type JourneyStateDeleteRequest,
} from "../models/journey-state-delete-request.js";
import {
  journeyStateDeleteResponseSchema,
  type JourneyStateDeleteResponse,
} from "../models/journey-state-delete-response.js";
import {
  journeyStateFetchRequestSchema,
  type JourneyStateFetchRequest,
} from "../models/journey-state-fetch-request.js";
import {
  journeyStateFetchResponseSchema,
  type JourneyStateFetchResponse,
} from "../models/journey-state-fetch-response.js";
import {
  journeyTaskListSchemaRequestSchema,
  type JourneyTaskListSchemaRequest,
} from "../models/journey-task-list-schema-request.js";
import {
  journeyTaskListSchemaResponseSchema,
  type JourneyTaskListSchemaResponse,
} from "../models/journey-task-list-schema-response.js";
import {
  journeyTaskSchemaRequestSchema,
  type JourneyTaskSchemaRequest,
} from "../models/journey-task-schema-request.js";
import {
  journeyTaskSchemaResponseSchema,
  type JourneyTaskSchemaResponse,
} from "../models/journey-task-schema-response.js";
import type { Servers } from "../servers.js";

export class CustomerApIs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Connect Secret
   *
   * @remarks
   * Create Connect Secret
   *
   * @returns Success
   *
   * @throws {@link CustomerApIs.AddDeviceError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GbgGoNextGenFlowCaptainApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  addDevice(
    request: CustomerApIs.AddDeviceRequest,
    options?: RequestOptions,
  ): ApiPromise<JourneyDeviceStartResponse, CustomerApIs.AddDeviceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/journey/device/start"),
        auth: this.#auth.customerAccess,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => journeyDeviceStartRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: journeyDeviceStartResponseSchema },
        errorFactory: CustomerApIs.AddDeviceError,
      },
      options,
    );
  }

  /**
   * Delete instance
   *
   * @remarks
   * Delete instance
   *
   * @returns Delete instance response contains the Journey Instance Id
   *
   * @throws {@link CustomerApIs.DeleteInstanceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GbgGoNextGenFlowCaptainApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  deleteInstance(
    request: CustomerApIs.DeleteInstanceRequest,
    options?: RequestOptions,
  ): ApiPromise<JourneyStateDeleteResponse, CustomerApIs.DeleteInstanceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/journey/state/delete"),
        auth: this.#auth.customerAccess,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => journeyStateDeleteRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: journeyStateDeleteResponseSchema },
        errorFactory: CustomerApIs.DeleteInstanceError,
      },
      options,
    );
  }

  /**
   * Get State Data
   *
   * @remarks
   * Get State Data
   *
   * @returns Success
   *
   * @throws {@link CustomerApIs.GetJourneyStateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GbgGoNextGenFlowCaptainApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getJourneyState(
    request: CustomerApIs.GetJourneyStateRequest,
    options?: RequestOptions,
  ): ApiPromise<JourneyStateFetchResponse, CustomerApIs.GetJourneyStateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/journey/state/fetch"),
        auth: this.#auth.customerAccess,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => journeyStateFetchRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: journeyStateFetchResponseSchema },
        errorFactory: CustomerApIs.GetJourneyStateError,
      },
      options,
    );
  }

  /**
   * Get Task Schema
   *
   * @remarks
   * Get Task Schema
   *
   * @returns Success
   *
   * @throws {@link CustomerApIs.GetTaskSchemaError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GbgGoNextGenFlowCaptainApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getTaskSchema(
    request: CustomerApIs.GetTaskSchemaRequest,
    options?: RequestOptions,
  ): ApiPromise<JourneyTaskSchemaResponse, CustomerApIs.GetTaskSchemaError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/journey/task/schema"),
        auth: this.#auth.customerAccess,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => journeyTaskSchemaRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: journeyTaskSchemaResponseSchema },
        errorFactory: CustomerApIs.GetTaskSchemaError,
      },
      options,
    );
  }

  /**
   * Get Tasks Schema
   *
   * @remarks
   * Get Tasks Schema
   *
   * @returns Success
   *
   * @throws {@link CustomerApIs.GetTasksSchemaError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GbgGoNextGenFlowCaptainApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getTasksSchema(
    request: CustomerApIs.GetTasksSchemaRequest,
    options?: RequestOptions,
  ): ApiPromise<JourneyTaskListSchemaResponse, CustomerApIs.GetTasksSchemaError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/journey/task/list/schema"),
        auth: this.#auth.customerAccess,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => journeyTaskListSchemaRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: journeyTaskListSchemaResponseSchema },
        errorFactory: CustomerApIs.GetTasksSchemaError,
      },
      options,
    );
  }

  /**
   * Start Journey
   *
   * @remarks
   * Start Journey
   *
   * @returns Start Response contains the Journey Instance Id
   *
   * @throws {@link CustomerApIs.StartJourneyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GbgGoNextGenFlowCaptainApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  startJourney(
    request: CustomerApIs.StartJourneyRequest,
    options?: RequestOptions,
  ): ApiPromise<JourneyStartResponse, CustomerApIs.StartJourneyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/journey/start"),
        auth: this.#auth.customerAccess,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => journeyStartRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: journeyStartResponseSchema },
        errorFactory: CustomerApIs.StartJourneyError,
      },
      options,
    );
  }
}

export namespace CustomerApIs {
  export type AddDeviceRequest = {
    body?: JourneyDeviceStartRequest;
  };

  export class AddDeviceError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error405", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddDeviceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 405, kind: "error405", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type DeleteInstanceRequest = {
    body?: JourneyStateDeleteRequest;
  };

  export class DeleteInstanceError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error405", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteInstanceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 405, kind: "error405", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type GetJourneyStateRequest = {
    body?: JourneyStateFetchRequest;
  };

  export class GetJourneyStateError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error405", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetJourneyStateError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 405, kind: "error405", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type GetTaskSchemaRequest = {
    body?: JourneyTaskSchemaRequest;
  };

  export class GetTaskSchemaError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error405", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTaskSchemaError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 405, kind: "error405", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type GetTasksSchemaRequest = {
    body?: JourneyTaskListSchemaRequest;
  };

  export class GetTasksSchemaError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error405", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTasksSchemaError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 405, kind: "error405", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type StartJourneyRequest = {
    body?: JourneyStartRequest;
  };

  export class StartJourneyError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error405", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartJourneyError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 405, kind: "error405", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
