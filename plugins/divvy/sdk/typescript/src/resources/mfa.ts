import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { bdcErrorInternalSchema, type BdcError } from "../models/bdc-error.js";
import {
  listMfaPhoneResponseDtoSchema,
  type ListMfaPhoneResponseDto,
} from "../models/list-mfa-phone-response-dto.js";
import {
  mfaChallengeRequestDtoSchema,
  type MfaChallengeRequestDto,
} from "../models/mfa-challenge-request-dto.js";
import {
  mfaChallengeResponseDtoSchema,
  type MfaChallengeResponseDto,
} from "../models/mfa-challenge-response-dto.js";
import {
  mfaChallengeValidateRequestDtoSchema,
  type MfaChallengeValidateRequestDto,
} from "../models/mfa-challenge-validate-request-dto.js";
import {
  mfaChallengeValidateResponseDtoSchema,
  type MfaChallengeValidateResponseDto,
} from "../models/mfa-challenge-validate-response-dto.js";
import { mfaSetupRequestDtoSchema, type MfaSetupRequestDto } from "../models/mfa-setup-request-dto.js";
import { mfaSetupResponseDtoSchema, type MfaSetupResponseDto } from "../models/mfa-setup-response-dto.js";
import {
  mfaSetupValidateRequestDtoSchema,
  type MfaSetupValidateRequestDto,
} from "../models/mfa-setup-validate-request-dto.js";
import { mfaStepUpRequestDtoSchema, type MfaStepUpRequestDto } from "../models/mfa-step-up-request-dto.js";
import { mfaStepUpResponseDtoSchema, type MfaStepUpResponseDto } from "../models/mfa-step-up-response-dto.js";
import { statusDtoSchema, type StatusDto } from "../models/status-dto.js";
import type { Servers } from "../servers.js";

export class Mfa {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Generate MFA challenge
   *
   * @remarks
   * Generate an MFA challenge ID for creating an MFA-trusted API sign in session.
   *
   * In the response, a `challengeId` is generated and a six-digit `token` is sent to the phone
   * number that was registered with MFA setup.
   *
   * After you generate a challenge ID (with `POST /v3/mfa/challenge`), complete your MFA sign in by
   * validating the MFA challenge (with `POST /v3/mfa/challenge/validate`). At this point, your API
   * session is MFA trusted.
   *
   * There are two stages in the BILL MFA process.
   * 1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with `POST
   *    /v3/mfa/setup`), and then complete the setup by validating the entered phone number (with
   *    `POST /v3/mfa/validate`). At this point, the phone number is registered for the MFA sign in
   *    operation.
   * 2. **MFA sign in**: Generate an MFA challenge (with `POST /v3/mfa/challenge`), and then
   *    complete MFA sign in by validating the MFA challenge (with `POST
   *    /v3/mfa/challenge/validate`). At this point, your API session is MFA trusted.
   *
   * **Note**: In the production environment, BILL requires an MFA-trusted API session for a set of
   * API operations.
   * * Enable vendor `autoPay`
   * * Enable recurring bill `autoPayment`
   * * Create a payment or bulk payment
   * * Create a bank account in a BILL organization
   * * Reset MFA (Complete MFA setup and MFA sign-in again)
   *
   * @returns Generate MFA challenge response
   *
   * @throws {@link Mfa.GenerateChallengeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  generateChallenge(
    request: Mfa.GenerateChallengeRequest,
    options?: RequestOptions,
  ): ApiPromise<MfaChallengeResponseDto, Mfa.GenerateChallengeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/mfa/challenge"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: mfaChallengeRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: mfaChallengeResponseDtoSchema },
        errorFactory: Mfa.GenerateChallengeError,
      },
      options,
    );
  }

  /**
   * Get list of MFA phone numbers
   *
   * @remarks
   * Get a list of phone numbers that have been added for setting up MFA in the current
   * organization.
   *
   * @returns Get list of MFA phone numbers response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMfaPhones(
    request: Mfa.ListMfaPhonesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListMfaPhoneResponseDto, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/mfa/phones"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMfaPhoneResponseDtoSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Add phone for MFA setup
   *
   * @remarks
   * Add a valid phone number for setting up MFA in the current organization.
   *
   * In the response, a `setupId` is generated and a six-digit `token` is sent to the phone number.
   * After you add a phone number (with `POST /v3/mfa/setup`), complete the MFA setup by validating
   * the entered phone number (with `POST /v3/mfa/validate`). At this point, the phone number is
   * registered for the MFA sign in operation.
   *
   * There are two stages in the BILL MFA process.
   * 1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with `POST
   *    /v3/mfa/setup`), and then complete the setup by validating the entered phone number (with
   *    `POST /v3/mfa/validate`). At this point, the phone number is registered for the MFA sign in
   *    operation.
   * 2. **MFA sign in**: Generate an MFA challenge (with `POST /v3/mfa/challenge`), and then
   *    complete MFA sign in by validating the MFA challenge (with `POST
   *    /v3/mfa/challenge/validate`). At this point, your API session is MFA trusted.
   *
   * **Note**: In the production environment, BILL requires an MFA-trusted API session for a set of
   * API operations.
   * * Enable vendor `autoPay`
   * * Enable recurring bill `autoPayment`
   * * Create a payment or bulk payment
   * * Create a bank account in a BILL organization
   * * Reset MFA (Complete MFA setup and MFA sign-in again)
   *
   * @returns Add phone for MFA setup response
   *
   * @throws {@link Mfa.SetupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setup(
    request: Mfa.SetupRequest,
    options?: RequestOptions,
  ): ApiPromise<MfaSetupResponseDto, Mfa.SetupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/mfa/setup"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: mfaSetupRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: mfaSetupResponseDtoSchema },
        errorFactory: Mfa.SetupError,
      },
      options,
    );
  }

  /**
   * MFA step-up for API session
   *
   * @remarks
   * Set your current API session as MFA trusted.
   *
   * Ideally, when you sign in with `POST /v3/login`, set `rememberMeId` and `device` in your
   * request to generate an MFA-trusted API session.
   *
   * In case you sign in without `rememberMeId` and `device` in your request, you can use this `POST
   * /v3/mfa/step-up` endpoint to mark the current API session as MFA trusted.
   *
   * @returns MFA step-up for API session response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stepUpSession(
    request: Mfa.StepUpSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<MfaStepUpResponseDto, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/mfa/step-up"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: mfaStepUpRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: mfaStepUpResponseDtoSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Validate phone for MFA setup
   *
   * @remarks
   * Validate the phone number for setting up MFA in the current organization. This validation
   * requires the `setupId` and `token` from `POST /v3/mfa/setup`.
   *
   * After the validation is complete, the phone number is registered for the MFA sign in operation.
   *
   * There are two stages in the BILL MFA process.
   * 1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with `POST
   *    /v3/mfa/setup`), and then complete the setup by validating the entered phone number (with
   *    `POST /v3/mfa/validate`). At this point, the phone number is registered for the MFA sign in
   *    operation.
   * 2. **MFA sign in**: Generate an MFA challenge (with `POST /v3/mfa/challenge`), and then
   *    complete MFA sign in by validating the MFA challenge (with `POST
   *    /v3/mfa/challenge/validate`). At this point, your API session is MFA trusted.
   *
   * **Note**: In the production environment, BILL requires an MFA-trusted API session for a set of
   * API operations.
   * * Enable vendor `autoPay`
   * * Enable recurring bill `autoPayment`
   * * Create a payment or bulk payment
   * * Create a bank account in a BILL organization
   * * Reset MFA (Complete MFA setup and MFA sign-in again)
   *
   * @returns Validate phone for MFA setup response
   *
   * @throws {@link Mfa.ValidateError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  validate(request: Mfa.ValidateRequest, options?: RequestOptions): ApiPromise<StatusDto, Mfa.ValidateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/mfa/setup/validate"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: mfaSetupValidateRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: statusDtoSchema },
        errorFactory: Mfa.ValidateError,
      },
      options,
    );
  }

  /**
   * Validate MFA challenge
   *
   * @remarks
   * Validate the MFA challenge for creating an MFA-trusted API sign in session. This validation
   * requires the `challengeId` and `token` from `POST /v3/mfa/challenge`.
   *
   * After the validation is complete, your API session is MFA trusted.
   *
   * There are two stages in the BILL MFA process.
   * 1. **MFA setup**: Add a valid phone number for setting up MFA in the organization (with `POST
   *    /v3/mfa/setup`), and then complete the setup by validating the entered phone number (with
   *    `POST /v3/mfa/validate`). At this point, the phone number is registered for the MFA sign in
   *    operation.
   * 2. **MFA sign in**: Generate an MFA challenge (with `POST /v3/mfa/challenge`), and then
   *    complete MFA sign in by validating the MFA challenge (with `POST
   *    /v3/mfa/challenge/validate`). At this point, your API session is MFA trusted.
   *
   * **Note**: In the production environment, BILL requires an MFA-trusted API session for a set of
   * API operations.
   * * Enable vendor `autoPay`
   * * Enable recurring bill `autoPayment`
   * * Create a payment or bulk payment
   * * Create a bank account for a BILL organization
   * * Reset MFA (Complete MFA setup and MFA sign-in again)
   *
   * @returns Validate MFA challenge response
   *
   * @throws {@link Mfa.ValidateChallengeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  validateChallenge(
    request: Mfa.ValidateChallengeRequest,
    options?: RequestOptions,
  ): ApiPromise<MfaChallengeValidateResponseDto, Mfa.ValidateChallengeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/mfa/challenge/validate"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: mfaChallengeValidateRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: mfaChallengeValidateResponseDtoSchema },
        errorFactory: Mfa.ValidateChallengeError,
      },
      options,
    );
  }
}

export namespace Mfa {
  export type GenerateChallengeRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: MfaChallengeRequestDto;
  };

  export class GenerateChallengeError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GenerateChallengeError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListMfaPhonesRequest = {
    sessionId?: string | null;
    devKey?: string | null;
  };

  export type SetupRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: MfaSetupRequestDto;
  };

  export class SetupError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<SetupError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type StepUpSessionRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: MfaStepUpRequestDto;
  };

  export type ValidateRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: MfaSetupValidateRequestDto;
  };

  export class ValidateError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ValidateError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ValidateChallengeRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: MfaChallengeValidateRequestDto;
  };

  export class ValidateChallengeError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ValidateChallengeError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }
}
