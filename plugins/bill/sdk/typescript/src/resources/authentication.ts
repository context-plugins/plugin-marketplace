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
  listAllResponseDtoAllOrganizationsResponseDtoSchema,
  type ListAllResponseDtoAllOrganizationsResponseDto,
} from "../models/list-all-response-dto-all-organizations-response-dto.js";
import { loginRequestDtoSchema, type LoginRequestDto } from "../models/login-request-dto.js";
import { loginResponseDtoSchema, type LoginResponseDto } from "../models/login-response-dto.js";
import {
  sessionInfoResponseDtoSchema,
  type SessionInfoResponseDto,
} from "../models/session-info-response-dto.js";
import type { Servers } from "../servers.js";

export class Authentication {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get API session details
   *
   * @remarks
   * Get details about your current API session. This includes information about the current
   * organization ID, user ID, and MFA status of the organization.
   *
   * @returns Get API session details response
   *
   * @throws {@link Authentication.GetSessionInfoError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSessionInfo(
    request: Authentication.GetSessionInfoRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SessionInfoResponseDto, Authentication.GetSessionInfoError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/login/session"),
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
        success: { kind: "json", schema: sessionInfoResponseDtoSchema },
        errorFactory: Authentication.GetSessionInfoError,
      },
      options,
    );
  }

  /**
   * Get list of login organizations
   *
   * @remarks
   * Get a list of organizations you can access with your current API session. You get 100 results
   * on one page of results.
   *
   * In the response, you get a list of organizations and console organizations. When a console
   * organization is available in the response, this indicates that the console organization is a
   * parent of the listed organization.
   *
   * @returns Get list of login organizations response
   *
   * @throws {@link Authentication.ListAllOrganizationsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAllOrganizations(
    request: Authentication.ListAllOrganizationsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListAllResponseDtoAllOrganizationsResponseDto, Authentication.ListAllOrganizationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/login/organizations"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "page", value: request.page, schema: s.optionalNullable(s.string()) }],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAllResponseDtoAllOrganizationsResponseDtoSchema },
        errorFactory: Authentication.ListAllOrganizationsError,
      },
      options,
    );
  }

  /**
   * API login
   *
   * @remarks
   * Sign in to your BILL developer account. In the response, your API session is created and a
   * BILL-generated `sessionId` is available. Use the `sessionId` in all subsequent API calls to
   * confirm that you are in a signed-in session.
   *
   * To create an MFA-trusted API session, set `rememberMeId` and `device` in addition to the
   * required fields. See MFA setup for information about the BILL MFA process.
   *
   * You can sign out with `POST /v3/logout`. If your API session is inactive for 35 minutes, the
   * session expires and you are automatically signed out.
   *
   * See API partner login for information about the additional permissions you get with the API
   * partner login.
   *
   * **Note**: This section is about authentication for working with the BILL v3 API. See
   * Authentication with Spend & Expense API token for information about authentication for the
   * Spend & Expense API endpoints.
   *
   * @returns API login response
   *
   * @throws {@link Authentication.LoginError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  login(
    request: Authentication.LoginRequest,
    options?: RequestOptions,
  ): ApiPromise<LoginResponseDto, Authentication.LoginError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/login"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: loginRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: loginResponseDtoSchema },
        errorFactory: Authentication.LoginError,
      },
      options,
    );
  }

  /**
   * API logout
   *
   * @remarks
   * Sign out of your BILL developer account. In response, the current `sessionId` expires and your
   * API session is terminated.
   *
   * You will be required to sign in again with `/v3/login` before you can make another API call.
   *
   * @returns API logout response
   *
   * @throws {@link Authentication.LogoutError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BillError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  logout(
    request: Authentication.LogoutRequest = {},
    options?: RequestOptions,
  ): ApiPromise<undefined, Authentication.LogoutError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/logout"),
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
        success: { kind: "empty" },
        errorFactory: Authentication.LogoutError,
      },
      options,
    );
  }
}

export namespace Authentication {
  export type GetSessionInfoRequest = {
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class GetSessionInfoError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSessionInfoError> = [
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

  export type ListAllOrganizationsRequest = {
    page?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class ListAllOrganizationsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAllOrganizationsError> = [
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

  export type LoginRequest = {
    body: LoginRequestDto;
  };

  export class LoginError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<LoginError> = [
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

  export type LogoutRequest = {
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class LogoutError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<LogoutError> = [
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
