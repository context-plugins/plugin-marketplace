import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { keyResultSchema, type KeyResult } from "../models/key-result.js";
import { updateKeyResultInternalSchema, type UpdateKeyResult } from "../models/update-key-result.js";
import type { Servers } from "../servers.js";

export class KeyResults {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Key Result
   *
   * @remarks
   * Get Key Result returns information about a chosen Key Result.
   *
   * @returns Resource
   *
   * @throws {@link KeyResults.GetKeyResultError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getKeyResult(
    request: KeyResults.GetKeyResultRequest,
    options?: RequestOptions,
  ): ApiPromise<KeyResult, KeyResults.GetKeyResultError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/key-results/{key-result-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "key-result-public-id", value: request.keyResultPublicId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: keyResultSchema },
        errorFactory: KeyResults.GetKeyResultError,
      },
      options,
    );
  }

  /**
   * Update Key Result
   *
   * @remarks
   * Update Key Result allows updating a Key Result's name or initial, observed, or target values.
   *
   * @returns Resource
   *
   * @throws {@link KeyResults.UpdateKeyResultError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateKeyResult(
    request: KeyResults.UpdateKeyResultRequest,
    options?: RequestOptions,
  ): ApiPromise<KeyResult, KeyResults.UpdateKeyResultError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/key-results/{key-result-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "key-result-public-id", value: request.keyResultPublicId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateKeyResultInternalSchema },
      },
      {
        success: { kind: "json", schema: keyResultSchema },
        errorFactory: KeyResults.UpdateKeyResultError,
      },
      options,
    );
  }
}

export namespace KeyResults {
  export type GetKeyResultRequest = {
    /** The ID of the Key Result. */
    keyResultPublicId: string;
  };

  export class GetKeyResultError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetKeyResultError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type UpdateKeyResultRequest = {
    /** The ID of the Key Result. */
    keyResultPublicId: string;
    body: UpdateKeyResult;
  };

  export class UpdateKeyResultError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateKeyResultError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
