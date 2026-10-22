import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Organizations API
 */
export class OrganizationsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get current organization
   *
   * @remarks
   * Retrieve the currently authenticated organization. A convenient alias of the [Get
   * organization](get-organization) endpoint.
   *
   * For a complete reference of the organization object, refer to the [Get
   * organization](get-organization) endpoint documentation.
   *
   * @returns The current organization object.
   *
   * @throws {@link OrganizationsApi.GetCurrentOrganizationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCurrentOrganization(
    request: OrganizationsApi.GetCurrentOrganizationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OrganizationsApi.GetCurrentOrganizationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/organizations/me"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: OrganizationsApi.GetCurrentOrganizationError,
      },
      options,
    );
  }

  /**
   * Get organization
   *
   * @remarks
   * Retrieve a single organization by its ID.
   *
   * You can normally only retrieve the currently authenticated organization with this endpoint.
   * This is primarily useful for OAuth apps. See also [Get current
   * organization](get-current-organization).
   *
   * If you have a *partner account*', you can retrieve organization details of connected
   * organizations.
   *
   * @returns The organization object.
   *
   * @throws {@link OrganizationsApi.GetOrganizationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrganization(
    request: OrganizationsApi.GetOrganizationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OrganizationsApi.GetOrganizationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/organizations/{organizationId}"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "organizationId", value: request.organizationId, schema: s.string() }],
        query: [{ name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: OrganizationsApi.GetOrganizationError,
      },
      options,
    );
  }

  /**
   * Get partner status
   *
   * @remarks
   * Retrieve partnership details about the currently authenticated organization. Only relevant for
   * so-called *partner accounts*.
   *
   * @returns The partner status object.
   *
   * @throws {@link OrganizationsApi.GetPartnerStatusError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPartnerStatus(
    request: OrganizationsApi.GetPartnerStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, OrganizationsApi.GetPartnerStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/organizations/me/partner"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: OrganizationsApi.GetPartnerStatusError,
      },
      options,
    );
  }
}

export namespace OrganizationsApi {
  export type GetCurrentOrganizationRequest = {
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetCurrentOrganizationError extends ApiError {
    declare readonly payload: Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetCurrentOrganizationError> = [
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetOrganizationRequest = {
    /** Provide the ID of the related organization. */
    organizationId: string;
    /**
     * You can enable test mode by setting the `testmode` query parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetOrganizationError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetOrganizationError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetPartnerStatusRequest = {
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetPartnerStatusError extends ApiError {
    declare readonly payload: Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetPartnerStatusError> = [
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
