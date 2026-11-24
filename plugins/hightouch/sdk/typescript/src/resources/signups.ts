import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { createSignupRequestSchema, type CreateSignupRequest } from "../models/create-signup-request.js";
import { internalServerErrorSchema, type InternalServerError } from "../models/internal-server-error.js";
import { signupErrorResponseSchema, type SignupErrorResponse } from "../models/signup-error-response.js";
import { signupsResponseSchema, type SignupsResponse } from "../models/unions/signups-response.js";
import { signupsResponse1Schema, type SignupsResponse1 } from "../models/unions/signups-response1.js";
import type { Servers } from "../servers.js";

export class Signups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Capture a signup
   *
   * @remarks
   * Record a signup: consent for a delivery handle, plus the fields the form collected.
   *
   * Whether consent settles immediately or waits for a double opt-in confirmation is the channel's
   * configuration, so one call covers both and the response says which happened.
   *
   * @returns Ok
   *
   * @throws {@link Signups.CreateSignupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link HightouchError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSignup(
    request: Signups.CreateSignupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SignupsResponse, Signups.CreateSignupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signups"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createSignupRequestSchema },
      },
      {
        success: { kind: "json", schema: signupsResponseSchema },
        errorFactory: Signups.CreateSignupError,
      },
      options,
    );
  }
}

export namespace Signups {
  export type CreateSignupRequestParams = {
    body: CreateSignupRequest;
  };

  export class CreateSignupError extends ApiError {
    declare readonly payload:
      | Declared<"signupErrorResponse", SignupErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"signupErrorResponse2", SignupErrorResponse>
      | Declared<"signupErrorResponse3", SignupErrorResponse>
      | Declared<"signupsResponse1", SignupsResponse1>
      | Declared<"internalServerError", InternalServerError>
      | Declared<"signupErrorResponse4", SignupErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSignupError> = [
      { on: 400, kind: "signupErrorResponse", decode: { kind: "json", schema: signupErrorResponseSchema } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "signupErrorResponse2", decode: { kind: "json", schema: signupErrorResponseSchema } },
      { on: 409, kind: "signupErrorResponse3", decode: { kind: "json", schema: signupErrorResponseSchema } },
      { on: 422, kind: "signupsResponse1", decode: { kind: "json", schema: signupsResponse1Schema } },
      { on: 500, kind: "internalServerError", decode: { kind: "json", schema: internalServerErrorSchema } },
      { on: 502, kind: "signupErrorResponse4", decode: { kind: "json", schema: signupErrorResponseSchema } },
    ];
  }
}
