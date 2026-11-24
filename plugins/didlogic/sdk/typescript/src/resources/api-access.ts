import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import {
  apiV1CapabilitiesResponseSchema,
  type ApiV1CapabilitiesResponse,
} from "../models/api-v1-capabilities-response.js";
import {
  apiV1Capabilities401Error1Schema,
  type ApiV1Capabilities401Error1,
} from "../models/api-v1-capabilities401-error1.js";
import type { Servers } from "../servers.js";

export class ApiAccess {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List API capabilities
   *
   * @remarks
   * List the API operations your key may call, and the account it belongs to.
   *
   * Your account decides which parts of the API are open to it: API v1, buying and browsing
   * numbers, SIP accounts, Click2Call, call recordings, the ASR report, sending SMS, risk checks
   * and HLR lookups. This operation answers for any valid key, whatever is enabled, so it is also
   * the cheapest way to check that a key works.
   *
   * Each entry is an HTTP method and a path exactly as this reference spells it, path parameters
   * included (`/api/v1/sipaccounts/{id}`). An operation missing from the list is refused for your
   * account. Checks that depend on the request itself, such as the number you ask for or a rate
   * limit, are not reflected here.
   *
   * This operation does not list itself. An invalid key gets `401 Unauthorized`.
   *
   * @returns Returns the operations open to this key and the account it belongs to
   *
   * @throws {@link ApiAccess.CapabilitiesShowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  capabilitiesShow(
    options?: RequestOptions,
  ): ApiPromise<ApiV1CapabilitiesResponse, ApiAccess.CapabilitiesShowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/capabilities"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1CapabilitiesResponseSchema },
        errorFactory: ApiAccess.CapabilitiesShowError,
      },
      options,
    );
  }
}

export namespace ApiAccess {
  export class CapabilitiesShowError extends ApiError {
    declare readonly payload: Declared<"apiV1Capabilities401Error1", ApiV1Capabilities401Error1> | Undeclared;

    static readonly errors: ErrorDecoders<CapabilitiesShowError> = [
      {
        on: 401,
        kind: "apiV1Capabilities401Error1",
        decode: { kind: "json", schema: apiV1Capabilities401Error1Schema },
      },
    ];
  }
}
