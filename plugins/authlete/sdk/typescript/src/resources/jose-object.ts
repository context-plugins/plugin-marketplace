import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { joseVerifyResponseSchema, type JoseVerifyResponse } from "../models/jose-verify-response.js";
import { resultSchema, type Result } from "../models/result.js";
import type { Servers } from "../servers.js";

/**
 * API endpoints for JOSE objects.
 */
export class JoseObject {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Verify JOSE
   *
   * @remarks
   * This API verifies a JOSE object.
   *
   * @throws {@link JoseObject.JoseVerifyApiError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  joseVerifyApi(
    request: JoseObject.JoseVerifyApiRequest,
    options?: RequestOptions,
  ): ApiPromise<JoseVerifyResponse, JoseObject.JoseVerifyApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/jose/verify"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "jose", value: request.jose, schema: s.string() },
            {
              name: "mandatoryClaims",
              value: request.mandatoryClaims,
              schema: s.optional(s.array(s.string())),
            },
            { name: "clockSkew", value: request.clockSkew, schema: s.optional(s.int()) },
            { name: "clientIdentifier", value: request.clientIdentifier, schema: s.optional(s.string()) },
            { name: "signedByClient", value: request.signedByClient, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: joseVerifyResponseSchema },
        errorFactory: JoseObject.JoseVerifyApiError,
      },
      options,
    );
  }
}

export namespace JoseObject {
  export type JoseVerifyApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** A JOSE object. */
    jose: string;
    /** Mandatory claims that are required to be included in the JOSE object. */
    mandatoryClaims?: string[];
    /** Allowable clock skew in seconds. */
    clockSkew?: number;
    /**
     * The identifier of the client application whose keys are required for verification of the JOSE
     * object.
     */
    clientIdentifier?: string;
    /**
     * The flag which indicates whether the signature of the JOSE object has been signed by a client
     * application with the client's private key or a shared symmetric key.
     */
    signedByClient?: boolean;
  };

  export class JoseVerifyApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<JoseVerifyApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }
}
