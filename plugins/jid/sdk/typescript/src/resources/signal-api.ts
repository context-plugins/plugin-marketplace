import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { v1SignalResponseSchema, type V1SignalResponse } from "../models/v1-signal-response.js";
import type { Servers } from "../servers.js";

export class SignalApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Jid Signals: a 30-minute signed location token for the visitor (call from the…
   *
   * @remarks
   * Called from the visitor's browser by https://jid.com/s/1.js. Jid reads the connection's
   * country, region, city and network type itself and returns an HMAC-signed token (never the IP)
   * for the form to forward to /v1/qualify or /v1/screen as `signal`. No key, CORS open, never
   * cached, rate-limited per IP. See https://jid.com/signals.
   *
   * @returns Token
   *
   * @throws {@link SignalApi.SignalError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link JidError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  signal(
    request: SignalApi.SignalRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1SignalResponse, SignalApi.SignalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/signal"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "tz", value: request.tz, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1SignalResponseSchema },
        errorFactory: SignalApi.SignalError,
      },
      options,
    );
  }
}

export namespace SignalApi {
  export type SignalRequest = {
    /** Browser IANA time zone */
    tz?: string;
  };

  export class SignalError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<SignalError> = [
      { on: 429, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
