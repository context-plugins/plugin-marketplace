import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { healthSchema, type Health } from "../models/health.js";
import { updateHealthSchema, type UpdateHealth } from "../models/update-health.js";
import type { Servers } from "../servers.js";

export class HealthApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Update Health
   *
   * @remarks
   * Update an existing health status by its ID.
   *
   * @returns Resource
   *
   * @throws {@link HealthApi.UpdateHealthError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateHealth(
    request: HealthApi.UpdateHealthRequest,
    options?: RequestOptions,
  ): ApiPromise<Health, HealthApi.UpdateHealthError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/health/{health-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "health-public-id", value: request.healthPublicId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateHealthSchema },
      },
      {
        success: { kind: "json", schema: healthSchema },
        errorFactory: HealthApi.UpdateHealthError,
      },
      options,
    );
  }
}

export namespace HealthApi {
  export type UpdateHealthRequest = {
    /** The unique ID of the Health record. */
    healthPublicId: string;
    body: UpdateHealth;
  };

  export class UpdateHealthError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateHealthError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
