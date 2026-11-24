import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { oAuthAppSchema, type OAuthApp } from "../models/oauth-app.js";
import type { Servers } from "../servers.js";

export class Apps {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve OAuth App
   *
   * @remarks
   * Retrieve the details for the provided OAuth App client ID
   *
   * @returns SUCCESS
   *
   * @throws {@link Apps.GetOAuthAppError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BitlyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOAuthApp(
    request: Apps.GetOAuthAppRequest,
    options?: RequestOptions,
  ): ApiPromise<OAuthApp, Apps.GetOAuthAppError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/apps/{client_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "client_id", value: request.clientId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oAuthAppSchema },
        errorFactory: Apps.GetOAuthAppError,
      },
      options,
    );
  }
}

export namespace Apps {
  export type GetOAuthAppRequest = {
    /** The client ID of an OAuth app */
    clientId: string;
  };

  export class GetOAuthAppError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOAuthAppError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 503, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
