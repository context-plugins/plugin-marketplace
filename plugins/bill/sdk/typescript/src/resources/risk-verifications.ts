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
  getPhoneStatusResponseDtoSchema,
  type GetPhoneStatusResponseDto,
} from "../models/get-phone-status-response-dto.js";
import {
  phoneVerificationRequestDtoInternalSchema,
  type PhoneVerificationRequestDto,
} from "../models/phone-verification-request-dto.js";
import {
  verificationResponseDtoSchema,
  type VerificationResponseDto,
} from "../models/verification-response-dto.js";
import type { Servers } from "../servers.js";

export class RiskVerifications {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Add phone for risk verification
   *
   * @remarks
   * Add a phone number for the currently signed-in user. BILL requires the signed-in user to have a
   * linked phone number for initiating risk verification for the organization.
   *
   * You can check whether a phone number has been added for the user with `GET
   * /v3/risk-verifications/phone`.
   *
   * After you add a phone number with this endpoint, you can initiate risk verification for the
   * organization with `POST /v3/risk-verifications`.
   *
   * @returns Add phone for risk verification response
   *
   * @throws {@link RiskVerifications.CreateRiskVerificationPhoneError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createRiskVerificationPhone(
    request: RiskVerifications.CreateRiskVerificationPhoneRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, RiskVerifications.CreateRiskVerificationPhoneError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/risk-verifications/phone"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: phoneVerificationRequestDtoInternalSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: RiskVerifications.CreateRiskVerificationPhoneError,
      },
      options,
    );
  }

  /**
   * Get phone status for risk verification
   *
   * @remarks
   * Check whether a phone number has been added for the currently signed-in user. BILL requires the
   * signed-in user to have a linked phone number for initiating risk verification for the
   * organization.
   *
   * In the response, if `hasPhone` is `false`, you can add a phone number for the user with `POST
   * /v3/risk-verifications/phone`.
   *
   * After you add a phone number, you can initiate risk verification for the organization with
   * `POST /v3/risk-verifications`.
   *
   * @returns Get phone status for risk verification response
   *
   * @throws {@link RiskVerifications.GetRiskVerificationPhoneError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRiskVerificationPhone(
    request: RiskVerifications.GetRiskVerificationPhoneRequest = {},
    options?: RequestOptions,
  ): ApiPromise<GetPhoneStatusResponseDto, RiskVerifications.GetRiskVerificationPhoneError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/risk-verifications/phone"),
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
        success: { kind: "json", schema: getPhoneStatusResponseDtoSchema },
        errorFactory: RiskVerifications.GetRiskVerificationPhoneError,
      },
      options,
    );
  }

  /**
   * Get risk verification details
   *
   * @remarks
   * Get risk verification details for an existing organization.
   *
   * @returns Get risk verification details response
   *
   * @throws {@link RiskVerifications.GetRiskVerificationsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRiskVerifications(
    request: RiskVerifications.GetRiskVerificationsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<VerificationResponseDto, RiskVerifications.GetRiskVerificationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/risk-verifications"),
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
        success: { kind: "json", schema: verificationResponseDtoSchema },
        errorFactory: RiskVerifications.GetRiskVerificationsError,
      },
      options,
    );
  }

  /**
   * Initiate risk verification for an organization
   *
   * @remarks
   * Initiate risk verification for an organization. The currently signed-in user must have the
   * `ADMINISTRATOR` user role in the BILL organization to perform this operation.
   *
   * **Note**: You must add a phone number for the signed-in user (with `POST
   * /v3/risk-verifications/phone`) before you can initiate risk verification. BILL partners must
   * add a phone number for a created user with `POST
   * /v3/partner/risk-verifications/{userId}/phone`.
   *
   * As a BILL partner, when you create an organization and then create a user for that
   * organization, it is important that you initiate risk verification with `POST
   * /v3/risk-verifications`.
   *
   * BILL performs a KYC/KYB (Know You Customer/Know Your Business) check based on the provided
   * organization information. BILL sends an email notification for risk verification. When the
   * check is complete, BILL approves the organization for BILL AP and AR operations.
   *
   * @returns Initiate risk verification for an organization response
   *
   * @throws {@link RiskVerifications.InitiateRiskVerificationsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  initiateRiskVerifications(
    request: RiskVerifications.InitiateRiskVerificationsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<VerificationResponseDto, RiskVerifications.InitiateRiskVerificationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/risk-verifications"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verificationResponseDtoSchema },
        errorFactory: RiskVerifications.InitiateRiskVerificationsError,
      },
      options,
    );
  }
}

export namespace RiskVerifications {
  export type CreateRiskVerificationPhoneRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: PhoneVerificationRequestDto;
  };

  export class CreateRiskVerificationPhoneError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateRiskVerificationPhoneError> = [
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

  export type GetRiskVerificationPhoneRequest = {
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class GetRiskVerificationPhoneError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRiskVerificationPhoneError> = [
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

  export type GetRiskVerificationsRequest = {
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class GetRiskVerificationsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRiskVerificationsError> = [
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

  export type InitiateRiskVerificationsRequest = {
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class InitiateRiskVerificationsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<InitiateRiskVerificationsError> = [
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
