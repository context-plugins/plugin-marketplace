import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  countedSystemRestartResponseSchema,
  type CountedSystemRestartResponse,
} from "../models/counted-system-restart-response.js";
import {
  countedSystemSettingsConfResponseSchema,
  type CountedSystemSettingsConfResponse,
} from "../models/counted-system-settings-conf-response.js";
import {
  countedSystemSettingsConfSchema,
  type CountedSystemSettingsConf,
} from "../models/counted-system-settings-conf.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  systemSettingsConfUpdateSchema,
  type SystemSettingsConfUpdate,
} from "../models/system-settings-conf-update.js";
import type { Servers } from "../servers.js";

/**
 * Actions related to system settings
 */
export class SystemApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Restart the Cribl server
   *
   * @remarks
   * Restart the Cribl server.<br/><br/>This operation requires <code>system.restart</code> to be
   * set to <code>api</code> in <code>cribl.yml</code>. If this setting is not configured, the
   * request returns a <code>403</code> error.<br/><br/>Restarting the server causes a brief period
   * of downtime while the process stops and restarts. All in-flight events are drained before the
   * process exits. Use <code>POST /system/settings/reload</code> to apply configuration changes
   * without a full restart.
   *
   * @returns Result of the restart operation.
   *
   * @throws {@link SystemApi.CreateSystemSettingsRestartError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createSystemSettingsRestart(
    options?: RequestOptions,
  ): ApiPromise<CountedSystemRestartResponse, SystemApi.CreateSystemSettingsRestartError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/system/settings/restart"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedSystemRestartResponseSchema },
        errorFactory: SystemApi.CreateSystemSettingsRestartError,
      },
      options,
    );
  }

  /**
   * Get system settings
   *
   * @remarks
   * Get the current Cribl system settings.
   *
   * @returns The current system settings.
   *
   * @throws {@link SystemApi.GetSystemSettingsConfError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getSystemSettingsConf(
    options?: RequestOptions,
  ): ApiPromise<CountedSystemSettingsConf, SystemApi.GetSystemSettingsConfError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/system/settings/conf"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedSystemSettingsConfSchema },
        errorFactory: SystemApi.GetSystemSettingsConfError,
      },
      options,
    );
  }

  /**
   * Update system settings
   *
   * @remarks
   * Update the specified Cribl system settings.<br/><br/>Provide only the top-level sections
   * (<code>api</code>, <code>workers</code>, <code>tls</code>, <code>proxy</code>, etc.) you want
   * to change. Omitted sections stay unchanged. Each provided section fully replaces the existing
   * one — send the complete section object, not only the changed
   * fields.<br/><br/><code>api.loginRateLimit</code> and <code>api.ssoRateLimit</code> are
   * deprecated. A new value is still applied, but it is stored as <code>rateLimits</code> in the
   * API limits configuration. Use <code>PATCH /system/api-limits</code> instead.
   *
   * @returns The updated system settings.
   *
   * @throws {@link SystemApi.UpdateSystemSettingsConfError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateSystemSettingsConf(
    request: SystemApi.UpdateSystemSettingsConfRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedSystemSettingsConfResponse, SystemApi.UpdateSystemSettingsConfError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/system/settings/conf"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: systemSettingsConfUpdateSchema },
      },
      {
        success: { kind: "json", schema: countedSystemSettingsConfResponseSchema },
        errorFactory: SystemApi.UpdateSystemSettingsConfError,
      },
      options,
    );
  }
}

export namespace SystemApi {
  export class CreateSystemSettingsRestartError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error403", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSystemSettingsRestartError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class GetSystemSettingsConfError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetSystemSettingsConfError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateSystemSettingsConfRequest = {
    /** SystemSettingsConfUpdate object. */
    body: SystemSettingsConfUpdate;
  };

  export class UpdateSystemSettingsConfError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error403", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSystemSettingsConfError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
