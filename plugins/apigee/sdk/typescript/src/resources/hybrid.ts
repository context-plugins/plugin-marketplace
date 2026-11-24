import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import {
  googleCloudApigeeV1ListHybridIssuersResponseSchema,
  type GoogleCloudApigeeV1ListHybridIssuersResponse,
} from "../models/google-cloud-apigee-v1-list-hybrid-issuers-response.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "../models/google-rpc-error.js";
import type { Servers } from "../servers.js";

export class Hybrid {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List issuers
   *
   * @remarks
   * Lists hybrid services and its trusted issuers service account ids. This api is authenticated
   * and unauthorized(allow all the users) and used by runtime authn-authz service to query control
   * plane's issuer service account ids.
   *
   * @returns Successful response
   *
   * @throws {@link Hybrid.ApigeeHybridIssuersListError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApigeeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apigeeHybridIssuersList(
    options?: RequestOptions,
  ): ApiPromise<GoogleCloudApigeeV1ListHybridIssuersResponse, Hybrid.ApigeeHybridIssuersListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/hybrid/issuers"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: googleCloudApigeeV1ListHybridIssuersResponseSchema },
        errorFactory: Hybrid.ApigeeHybridIssuersListError,
      },
      options,
    );
  }
}

export namespace Hybrid {
  export class ApigeeHybridIssuersListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<ApigeeHybridIssuersListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
