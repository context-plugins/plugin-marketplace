import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  journeyDeviceConnectRequestSchema,
  type JourneyDeviceConnectRequest,
} from "../models/journey-device-connect-request.js";
import {
  journeyDeviceConnectResponseSchema,
  type JourneyDeviceConnectResponse,
} from "../models/journey-device-connect-response.js";
import {
  journeyDeviceStartRequestSchema,
  type JourneyDeviceStartRequest,
} from "../models/journey-device-start-request.js";
import {
  journeyDeviceStartResponseSchema,
  type JourneyDeviceStartResponse,
} from "../models/journey-device-start-response.js";
import type { Servers } from "../servers.js";

export class OneTimeTokenService {
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
   * @throws {@link OneTimeTokenService.AddDeviceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GbgGoNextGenFlowCaptainApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  addDevice(
    request: OneTimeTokenService.AddDeviceRequest,
    options?: RequestOptions,
  ): ApiPromise<JourneyDeviceStartResponse, OneTimeTokenService.AddDeviceError> {
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
        errorFactory: OneTimeTokenService.AddDeviceError,
      },
      options,
    );
  }

  /**
   * Connect or Refresh End User Device
   *
   * @remarks
   * Connect or Refresh End User Device
   *
   * @returns Success
   *
   * @throws {@link OneTimeTokenService.DeviceConnectError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GbgGoNextGenFlowCaptainApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  deviceConnect(
    request: OneTimeTokenService.DeviceConnectRequest,
    options?: RequestOptions,
  ): ApiPromise<JourneyDeviceConnectResponse, OneTimeTokenService.DeviceConnectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/journey/device/connect"),
        auth: this.#auth.deviceConnect,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => journeyDeviceConnectRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: journeyDeviceConnectResponseSchema },
        errorFactory: OneTimeTokenService.DeviceConnectError,
      },
      options,
    );
  }
}

export namespace OneTimeTokenService {
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

  export type DeviceConnectRequest = {
    body?: JourneyDeviceConnectRequest;
  };

  export class DeviceConnectError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error405", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeviceConnectError> = [
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
