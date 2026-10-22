import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { gmRequestSchema, type GmRequest } from "../models/gm-request.js";
import { gmResponseSchema, type GmResponse } from "../models/gm-response.js";
import { resultSchema, type Result } from "../models/result.js";
import type { Servers } from "../servers.js";

/**
 * API endpoint for implementing OAuth 2.0 grants, including grant management actions like updating
 * and revoking grants.
 */
export class GrantManagementEndpoint {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Process Grant Management Request
   *
   * @remarks
   * The API is for the implementation of the grant management endpoint which is defined in "[Grant
   * Management for OAuth 2.0](https://openid.net/specs/fapi-grant-management.html)".
   *
   * @returns Grant management completed successfully
   *
   * @throws {@link GrantManagementEndpoint.GrantMApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  grantMApi(
    request: GrantManagementEndpoint.GrantMApiRequest,
    options?: RequestOptions,
  ): ApiPromise<GmResponse, GrantManagementEndpoint.GrantMApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/gm"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: gmRequestSchema },
      },
      {
        success: { kind: "json", schema: gmResponseSchema },
        errorFactory: GrantManagementEndpoint.GrantMApiError,
      },
      options,
    );
  }
}

export namespace GrantManagementEndpoint {
  export type GrantMApiRequest = {
    /** A service ID. */
    serviceId: string;
    body: GmRequest;
  };

  export class GrantMApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<GrantMApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }
}
