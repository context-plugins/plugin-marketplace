import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { signupProblemInternalSchema, type SignupProblem } from "../models/signup-problem.js";
import {
  signupRequestCreateInternalSchema,
  signupRequestCreateSchema,
  type SignupRequestCreate,
} from "../models/signup-request-create.js";
import { signupRequestInternalSchema, type SignupRequest } from "../models/signup-request.js";
import { signupSessionRequestSchema, type SignupSessionRequest } from "../models/signup-session-request.js";
import { signupSessionInternalSchema, type SignupSession } from "../models/signup-session.js";
import {
  signupVerificationCodeInternalSchema,
  signupVerificationCodeSchema,
  type SignupVerificationCode,
} from "../models/signup-verification-code.js";
import type { Servers } from "../servers.js";

/**
 * Start a Cloud Intelligence trial for an organization that is not yet a DoiT customer. These
 * operations require no API key: they are rate limited, idempotent, and provision nothing until the
 * organization's admin verifies the request. Agents create a request and hand the returned
 * consentUrl to the admin; the admin verifies by entering the emailed code (or signing the request
 * on the console), after which the tenant is provisioned and the request reports its customer id.
 */
export class Signup {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create a signup request
   *
   * @remarks
   * Starts a Cloud Intelligence trial signup for the organization owning the email domain.
   * Idempotent per Idempotency-Key: a retried create returns the same request. Nothing is
   * provisioned until the admin verifies the request. Human channels (console, web) additionally
   * require a Cloudflare Turnstile token and an accepted Terms of Service version; the emailed
   * 6-digit verification code is then the consent act. Agents should present consentUrl to the
   * organization's admin and poll getSignupRequest.
   *
   * @returns Created - the signup request awaits the admin's verification.
   *
   * @throws {@link Signup.CreateSignupRequestError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSignupRequest(
    request: Signup.CreateSignupRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<SignupRequest, Signup.CreateSignupRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signup/v1/requests"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: signupRequestCreateInternalSchema },
      },
      {
        success: { kind: "json", schema: signupRequestInternalSchema },
        errorFactory: Signup.CreateSignupRequestError,
      },
      options,
    );
  }

  /**
   * Sign the verified prospect in
   *
   * @remarks
   * Exchanges the one-time activationToken returned by verifySignupRequest for a Firebase custom
   * token once the request is completed, so the browser that entered the code lands in the new
   * tenant without a second email. The token is bound to the request, single-use and valid for 10
   * minutes. Sign in with signInWithCustomToken against tenantId, then open consoleUrl.
   *
   * @returns OK - a session for the tenant admin.
   *
   * @throws {@link Signup.CreateSignupSessionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSignupSession(
    request: Signup.CreateSignupSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<SignupSession, Signup.CreateSignupSessionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signup/v1/requests/{signupRequestId}/session"),
        auth: noneAuth,
        pathParams: [{ name: "signupRequestId", value: request.signupRequestId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: signupSessionRequestSchema },
      },
      {
        success: { kind: "json", schema: signupSessionInternalSchema },
        errorFactory: Signup.CreateSignupSessionError,
      },
      options,
    );
  }

  /**
   * Get a signup request
   *
   * @remarks
   * Returns the current state of a signup request. Poll at the returned pollAfterSeconds cadence;
   * once status is completed the response carries customerId, consoleUrl and signInUrl. The
   * response never includes the requester's email or the verification code.
   *
   * @returns OK
   *
   * @throws {@link Signup.GetSignupRequestError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSignupRequest(
    request: Signup.GetSignupRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<SignupRequest, Signup.GetSignupRequestError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/signup/v1/requests/{signupRequestId}"),
        auth: noneAuth,
        pathParams: [{ name: "signupRequestId", value: request.signupRequestId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: signupRequestInternalSchema },
        errorFactory: Signup.GetSignupRequestError,
      },
      options,
    );
  }

  /**
   * Resend the verification code
   *
   * @remarks
   * Emails a fresh 6-digit code to the requester. At most three codes per request, at least 60
   * seconds apart.
   *
   * @returns OK - a new code was sent; verification.sendsRemaining tells how many resends are left.
   *
   * @throws {@link Signup.ResendSignupVerificationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resendSignupVerification(
    request: Signup.ResendSignupVerificationRequest,
    options?: RequestOptions,
  ): ApiPromise<SignupRequest, Signup.ResendSignupVerificationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signup/v1/requests/{signupRequestId}/verification"),
        auth: noneAuth,
        pathParams: [{ name: "signupRequestId", value: request.signupRequestId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: signupRequestInternalSchema },
        errorFactory: Signup.ResendSignupVerificationError,
      },
      options,
    );
  }

  /**
   * Verify a signup request with the emailed code
   *
   * @remarks
   * Confirms ownership of the admin email by entering the 6-digit code that was emailed when the
   * request was created (or resent). Success records consent and starts provisioning; the request
   * moves to consented and then completed. Five wrong codes lock the current code; request a new
   * one with resendSignupVerification.
   *
   * @returns OK - the request is consented (or already past that point).
   *
   * @throws {@link Signup.VerifySignupRequestError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  verifySignupRequest(
    request: Signup.VerifySignupRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<SignupRequest, Signup.VerifySignupRequestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signup/v1/requests/{signupRequestId}/verify"),
        auth: noneAuth,
        pathParams: [{ name: "signupRequestId", value: request.signupRequestId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: signupVerificationCodeInternalSchema },
      },
      {
        success: { kind: "json", schema: signupRequestInternalSchema },
        errorFactory: Signup.VerifySignupRequestError,
      },
      options,
    );
  }
}

export namespace Signup {
  export type CreateSignupRequestRequest = {
    /**
     * Caller-chosen key (1-256 characters) that makes retries safe; the same key returns the same
     * request.
     */
    idempotencyKey: string;
    body: SignupRequestCreate;
  };

  export const createSignupRequestRequestSchema: Schema<CreateSignupRequestRequest> = s.lazySchema(() =>
    s.object<CreateSignupRequestRequest>({
      idempotencyKey: s.string().check(s.minLength(1), s.maxLength(256)),
      body: signupRequestCreateSchema,
    }),
  );

  export class CreateSignupRequestError extends ApiError {
    declare readonly payload:
      | Declared<"signupProblem", SignupProblem>
      | Declared<"signupProblem2", SignupProblem>
      | Declared<"signupProblem3", SignupProblem>
      | Declared<"signupProblem4", SignupProblem>
      | Declared<"signupProblem5", SignupProblem>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSignupRequestError> = [
      { on: 400, kind: "signupProblem", decode: { kind: "json", schema: signupProblemInternalSchema } },
      { on: 403, kind: "signupProblem2", decode: { kind: "json", schema: signupProblemInternalSchema } },
      { on: 409, kind: "signupProblem3", decode: { kind: "json", schema: signupProblemInternalSchema } },
      { on: 429, kind: "signupProblem4", decode: { kind: "json", schema: signupProblemInternalSchema } },
      { on: 503, kind: "signupProblem5", decode: { kind: "json", schema: signupProblemInternalSchema } },
    ];
  }

  export type CreateSignupSessionRequest = {
    /** Public signup request id (sr_ prefix). */
    signupRequestId: string;
    body: SignupSessionRequest;
  };

  export const createSignupSessionRequestSchema: Schema<CreateSignupSessionRequest> = s.lazySchema(() =>
    s.object<CreateSignupSessionRequest>({
      signupRequestId: s.string().check(s.pattern("^sr_[0-9a-f]{32}$")),
      body: signupSessionRequestSchema,
    }),
  );

  export class CreateSignupSessionError extends ApiError {
    declare readonly payload:
      | Declared<"signupProblem", SignupProblem>
      | Declared<"signupProblem2", SignupProblem>
      | Declared<"signupProblem3", SignupProblem>
      | Declared<"signupProblem4", SignupProblem>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSignupSessionError> = [
      { on: 400, kind: "signupProblem", decode: { kind: "json", schema: signupProblemInternalSchema } },
      { on: 404, kind: "signupProblem2", decode: { kind: "json", schema: signupProblemInternalSchema } },
      { on: 409, kind: "signupProblem3", decode: { kind: "json", schema: signupProblemInternalSchema } },
      { on: 410, kind: "signupProblem4", decode: { kind: "json", schema: signupProblemInternalSchema } },
    ];
  }

  export type GetSignupRequestRequest = {
    /** Public signup request id (sr_ prefix). */
    signupRequestId: string;
  };

  export const getSignupRequestRequestSchema: Schema<GetSignupRequestRequest> = s.lazySchema(() =>
    s.object<GetSignupRequestRequest>({
      signupRequestId: s.string().check(s.pattern("^sr_[0-9a-f]{32}$")),
    }),
  );

  export class GetSignupRequestError extends ApiError {
    declare readonly payload:
      | Declared<"signupProblem", SignupProblem>
      | Declared<"signupProblem2", SignupProblem>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSignupRequestError> = [
      { on: 404, kind: "signupProblem", decode: { kind: "json", schema: signupProblemInternalSchema } },
      { on: 429, kind: "signupProblem2", decode: { kind: "json", schema: signupProblemInternalSchema } },
    ];
  }

  export type ResendSignupVerificationRequest = {
    /** Public signup request id (sr_ prefix). */
    signupRequestId: string;
  };

  export const resendSignupVerificationRequestSchema: Schema<ResendSignupVerificationRequest> = s.lazySchema(
    () =>
      s.object<ResendSignupVerificationRequest>({
        signupRequestId: s.string().check(s.pattern("^sr_[0-9a-f]{32}$")),
      }),
  );

  export class ResendSignupVerificationError extends ApiError {
    declare readonly payload:
      | Declared<"signupProblem", SignupProblem>
      | Declared<"signupProblem2", SignupProblem>
      | Declared<"signupProblem3", SignupProblem>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResendSignupVerificationError> = [
      { on: 404, kind: "signupProblem", decode: { kind: "json", schema: signupProblemInternalSchema } },
      { on: 409, kind: "signupProblem2", decode: { kind: "json", schema: signupProblemInternalSchema } },
      { on: 429, kind: "signupProblem3", decode: { kind: "json", schema: signupProblemInternalSchema } },
    ];
  }

  export type VerifySignupRequestRequest = {
    /** Public signup request id (sr_ prefix). */
    signupRequestId: string;
    body: SignupVerificationCode;
  };

  export const verifySignupRequestRequestSchema: Schema<VerifySignupRequestRequest> = s.lazySchema(() =>
    s.object<VerifySignupRequestRequest>({
      signupRequestId: s.string().check(s.pattern("^sr_[0-9a-f]{32}$")),
      body: signupVerificationCodeSchema,
    }),
  );

  export class VerifySignupRequestError extends ApiError {
    declare readonly payload:
      | Declared<"signupProblem", SignupProblem>
      | Declared<"signupProblem2", SignupProblem>
      | Declared<"signupProblem3", SignupProblem>
      | Declared<"signupProblem4", SignupProblem>
      | Undeclared;

    static readonly errors: ErrorDecoders<VerifySignupRequestError> = [
      { on: 400, kind: "signupProblem", decode: { kind: "json", schema: signupProblemInternalSchema } },
      { on: 404, kind: "signupProblem2", decode: { kind: "json", schema: signupProblemInternalSchema } },
      { on: 409, kind: "signupProblem3", decode: { kind: "json", schema: signupProblemInternalSchema } },
      { on: 429, kind: "signupProblem4", decode: { kind: "json", schema: signupProblemInternalSchema } },
    ];
  }
}
