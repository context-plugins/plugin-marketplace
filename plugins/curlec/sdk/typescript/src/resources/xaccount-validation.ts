import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  fundAccountValidationSchema,
  type FundAccountValidation,
} from "../models/fund-account-validation.js";
import {
  fundAccountsValidationsRequestSchema,
  type FundAccountsValidationsRequest,
} from "../models/fund-accounts-validations-request.js";
import {
  fundAccountsValidationsResponseSchema,
  type FundAccountsValidationsResponse,
} from "../models/fund-accounts-validations-response.js";
import type { Servers } from "../servers.js";

/**
 * Penny drop and reverse penny drop bank/VPA validation
 */
export class XAccountValidation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch a fund account validation
   *
   * @remarks
   * Fetch details of a specific fund account validation by its ID.
   *
   * @returns Validation details
   *
   * @throws {@link XAccountValidation.FetchFundAccountValidationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchFundAccountValidation(
    request: XAccountValidation.FetchFundAccountValidationRequest,
    options?: RequestOptions,
  ): ApiPromise<FundAccountValidation, XAccountValidation.FetchFundAccountValidationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/fund_accounts/validations/{validation_id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "validation_id", value: request.validationId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fundAccountValidationSchema },
        errorFactory: XAccountValidation.FetchFundAccountValidationError,
      },
      options,
    );
  }

  /**
   * List fund account validations
   *
   * @remarks
   * List all fund account validation records, optionally filtered by date range.
   *
   * @returns List of validations
   *
   * @throws {@link XAccountValidation.ListFundAccountValidationsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFundAccountValidations(
    request: XAccountValidation.ListFundAccountValidationsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<FundAccountsValidationsResponse, XAccountValidation.ListFundAccountValidationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/fund_accounts/validations"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optional(s.int()) },
          { name: "to", value: request.to, schema: s.optional(s.int()) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 10) },
          { name: "skip", value: request.skip, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fundAccountsValidationsResponseSchema },
        errorFactory: XAccountValidation.ListFundAccountValidationsError,
      },
      options,
    );
  }

  /**
   * Validate a bank account or VPA
   *
   * @remarks
   * Three validation methods: (1) penny drop for bank accounts — sends Re.1 to verify; (2) penny
   * drop for VPA — sends Re.1 to UPI address; (3) reverse penny drop — sends UPI intent URL to
   * customer who initiates payment. Live-mode only, RazorpayX Lite account required. Composite
   * validation (creates Contact + Fund Account inline) supported via validation_type field.
   *
   * @returns Validation created
   *
   * @throws {@link XAccountValidation.ValidateFundAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  validateFundAccount(
    request: XAccountValidation.ValidateFundAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<FundAccountValidation, XAccountValidation.ValidateFundAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/fund_accounts/validations"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: fundAccountsValidationsRequestSchema },
      },
      {
        success: { kind: "json", schema: fundAccountValidationSchema },
        errorFactory: XAccountValidation.ValidateFundAccountError,
      },
      options,
    );
  }
}

export namespace XAccountValidation {
  export type FetchFundAccountValidationRequest = {
    /** Unique identifier of the fund account validation (e.g. `fav_00000000000001`). */
    validationId: string;
  };

  export class FetchFundAccountValidationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchFundAccountValidationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListFundAccountValidationsRequest = {
    /** Unix timestamp. Only validations created from this timestamp onwards are returned. */
    from?: number;
    /** Unix timestamp. Only validations created before this timestamp are returned. */
    to?: number;
    /** Number of validation records to return. Default: 10. Maximum: 100. @default 10 */
    count?: number;
    /** Number of validation records to skip. Use for pagination. Default: 0. @default 0 */
    skip?: number;
  };

  export class ListFundAccountValidationsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListFundAccountValidationsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ValidateFundAccountRequest = {
    body: FundAccountsValidationsRequest;
  };

  export class ValidateFundAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ValidateFundAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
