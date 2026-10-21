import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { Accept, acceptSchema } from "../models/accept.js";
import { clientTokensRequestSchema, type ClientTokensRequest } from "../models/client-tokens-request.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to Client Tokens
 */
export class ClientTokens {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a client token
   *
   * @remarks
   * Create a client token for secure authentication within Dwolla Drop-in components. Requires a
   * granular permission action and a Customer link to define what operations the end user can
   * perform within the component. Returns a short-lived token for configuring client-side Drop-in
   * components including customer creation, verification, funding source management, and payment
   * processing. Essential for implementing secure, embeddable UI components without exposing
   * application credentials to the frontend.
   *
   * @returns Client token created successfully
   *
   * @throws {@link ClientTokens.CreateClientTokenError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DwollaApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createClientToken(
    request: ClientTokens.CreateClientTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ClientTokens.CreateClientTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/client-tokens"),
        auth: this.#auth.clientCredentials,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "Accept",
            value: request.accept,
            schema: s.defaulted(acceptSchema, Accept.ApplicationVndDwollaV1HalJson),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: clientTokensRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ClientTokens.CreateClientTokenError,
      },
      options,
    );
  }
}

export namespace ClientTokens {
  export type CreateClientTokenRequest = {
    /**
     * The media type of the response. Must be application/vnd.dwolla.v1.hal+json
     *
     * @default Accept.ApplicationVndDwollaV1HalJson
     */
    accept?: Accept;
    body: ClientTokensRequest;
  };

  export class CreateClientTokenError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateClientTokenError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }
}
