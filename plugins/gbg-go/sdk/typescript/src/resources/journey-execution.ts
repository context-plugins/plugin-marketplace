import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  asTokenOauth2ResponseSchema,
  type AsTokenOauth2Response,
} from "../models/as-token-oauth2-response.js";
import type { Servers } from "../servers.js";

export class JourneyExecution {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Generate access token
   *
   * @remarks
   * Get an access token to authenticate API requests. If you're unfamiliar with the authentication
   * process, check out the [authentication
   * guide](/docs/go-v2/developer-integration/execute-customer-journeys/authenticate) for more
   * details.
   *
   * @returns Successfully retrieved access token.
   *
   * @throws {@link JourneyExecution.GenerateAccessTokenError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GbgGoNextGenFlowCaptainApiError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  generateAccessToken(
    request: JourneyExecution.GenerateAccessTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<AsTokenOauth2Response, JourneyExecution.GenerateAccessTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/as/token.oauth2"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: asTokenOauth2ResponseSchema },
        errorFactory: JourneyExecution.GenerateAccessTokenError,
      },
      options,
    );
  }
}

export namespace JourneyExecution {
  export type GenerateAccessTokenRequest = {
    body?: Record<string, unknown>;
  };

  export class GenerateAccessTokenError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error401", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GenerateAccessTokenError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
    ];
  }
}
