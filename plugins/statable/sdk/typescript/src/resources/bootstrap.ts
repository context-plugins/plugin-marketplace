import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  bootstrapSendOtpRequestInternalSchema,
  type BootstrapSendOtpRequest,
} from "../models/bootstrap-send-otp-request.js";
import {
  bootstrapSendOtpResponseInternalSchema,
  type BootstrapSendOtpResponse,
} from "../models/bootstrap-send-otp-response.js";
import {
  bootstrapVerifyOtpRequestInternalSchema,
  type BootstrapVerifyOtpRequest,
} from "../models/bootstrap-verify-otp-request.js";
import {
  bootstrapVerifyOtpResponseInternalSchema,
  type BootstrapVerifyOtpResponse,
} from "../models/bootstrap-verify-otp-response.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Register an account and obtain its first API key without a browser. The only operations in this
 * spec that take NO bearer token. Behind the server-side `API_BOOTSTRAP_ENABLED` flag; while it is
 * off both routes answer 404 `write_disabled`. See docs/api-v1-write-surface.md §2.
 */
export class Bootstrap {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Email a one-time code
   *
   * @remarks
   * Sends a 6-digit code to the address, valid for a short window and usable once. Takes no
   * credential — this is the entry point for a client that has none. Rate limited per email
   * (2/minute), per IP (5/hour) and per IP across the whole bootstrap branch (20/hour). The
   * response is identical whether or not the address already has an account, so it cannot be used
   * to test for one.
   *
   * @returns The code was sent.
   *
   * @throws {@link Bootstrap.BootstrapSendOtpError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bootstrapSendOtp(
    request: Bootstrap.BootstrapSendOtpRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BootstrapSendOtpResponse, Bootstrap.BootstrapSendOtpError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/auth/send-otp"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bootstrapSendOtpRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: bootstrapSendOtpResponseInternalSchema },
        errorFactory: Bootstrap.BootstrapSendOtpError,
      },
      options,
    );
  }

  /**
   * Consume the code and receive the first API key
   *
   * @remarks
   * Verifies the code, creates the account if the address is new, records the terms acceptance, and
   * returns a freshly minted key — the raw token EXACTLY ONCE. `accept_terms` must be true.
   * Requested `scopes` must be within `API_BOOTSTRAP_SCOPES` (default `read,sites:write`); omitting
   * them yields that whole set, and `billing:write` is never obtainable here. Everything that can
   * be rejected without the code is validated first, so a bad field does not burn a valid code. The
   * key is always all-sites and always expires (90 days by default, 365 max).
   *
   * @returns The account and its first key, including the one-time token.
   *
   * @throws {@link Bootstrap.BootstrapVerifyOtpError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bootstrapVerifyOtp(
    request: Bootstrap.BootstrapVerifyOtpRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BootstrapVerifyOtpResponse, Bootstrap.BootstrapVerifyOtpError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/auth/verify-otp"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bootstrapVerifyOtpRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: bootstrapVerifyOtpResponseInternalSchema },
        errorFactory: Bootstrap.BootstrapVerifyOtpError,
      },
      options,
    );
  }
}

export namespace Bootstrap {
  export type BootstrapSendOtpRequestParams = {
    body: BootstrapSendOtpRequest;
  };

  export class BootstrapSendOtpError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<BootstrapSendOtpError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type BootstrapVerifyOtpRequestParams = {
    body: BootstrapVerifyOtpRequest;
  };

  export class BootstrapVerifyOtpError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<BootstrapVerifyOtpError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
