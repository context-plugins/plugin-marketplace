import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { xAmzTargetSchema, type XAmzTarget } from "../models/xamz-target.js";
import { xAmzTarget1Schema, type XAmzTarget1 } from "../models/xamz-target1.js";
import { xAmzTarget2Schema, type XAmzTarget2 } from "../models/xamz-target2.js";
import type { Servers } from "../servers.js";

export class AwsCodebuildApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Start Sandbox
   *
   * @remarks
   * Starts a sandbox.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildApi.StartSandboxError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startSandbox(
    request: AwsCodebuildApi.StartSandboxRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildApi.StartSandboxError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartSandbox"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTargetSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildApi.StartSandboxError,
      },
      options,
    );
  }

  /**
   * Start Sandbox Connection
   *
   * @remarks
   * Starts a sandbox connection.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildApi.StartSandboxConnectionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startSandboxConnection(
    request: AwsCodebuildApi.StartSandboxConnectionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildApi.StartSandboxConnectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartSandboxConnection"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget2Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildApi.StartSandboxConnectionError,
      },
      options,
    );
  }

  /**
   * Stop Sandbox
   *
   * @remarks
   * Stops a sandbox.
   *
   * @returns Success
   *
   * @throws {@link AwsCodebuildApi.StopSandboxError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsCodeBuildError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stopSandbox(
    request: AwsCodebuildApi.StopSandboxRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsCodebuildApi.StopSandboxError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StopSandbox"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget1Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsCodebuildApi.StopSandboxError,
      },
      options,
    );
  }
}

export namespace AwsCodebuildApi {
  export type StartSandboxRequest = {
    xAmzTarget: XAmzTarget;
  };

  export class StartSandboxError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartSandboxError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type StartSandboxConnectionRequest = {
    xAmzTarget: XAmzTarget2;
  };

  export class StartSandboxConnectionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartSandboxConnectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type StopSandboxRequest = {
    xAmzTarget: XAmzTarget1;
  };

  export class StopSandboxError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StopSandboxError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
