import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { authConfigSchema, type AuthConfig } from "../models/auth-config.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  orgAuthConfigCreateRequestSchema,
  type OrgAuthConfigCreateRequest,
} from "../models/org-auth-config-create-request.js";
import {
  orgAuthConfigSetupResponseSchema,
  type OrgAuthConfigSetupResponse,
} from "../models/org-auth-config-setup-response.js";
import {
  orgAuthConfigUpdateAuthMethodRequestSchema,
  type OrgAuthConfigUpdateAuthMethodRequest,
} from "../models/org-auth-config-update-auth-method-request.js";
import {
  updateAuthMethodResponseSchema,
  type UpdateAuthMethodResponse,
} from "../models/update-auth-method-response.js";
import type { Servers } from "../servers.js";

/**
 * Admin configuration of authentication methods including MFA steps and allowed providers
 */
export class OrganizationAuthConfig {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get organization authentication methods
   *
   * @remarks
   * Retrieve the configured authentication methods for the organization.
   *
   * **Response Structure:**
   *
   * Returns an array of authentication steps, each containing:
   * - `order`: Step number (1-3)
   * - `allowedMethods`: Array of methods allowed for that step
   *
   * **Example Response:**
   *
   * ```json
   * {
   *   "authMethods": [
   *     { "order": 1, "allowedMethods": [{ "type": "password" }, { "type": "google" }] },
   *     { "order": 2, "allowedMethods": [{ "type": "otp" }] }
   *   ]
   * }
   * ```
   *
   * **Admin Access Required:** Only organization admins can view auth configuration.
   *
   * @returns Authentication methods retrieved successfully
   *
   * @throws {@link OrganizationAuthConfig.GetAuthMethodsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAuthMethods(
    options?: RequestOptions,
  ): ApiPromise<AuthConfig, OrganizationAuthConfig.GetAuthMethodsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/orgAuthConfig/authMethods"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: authConfigSchema },
        errorFactory: OrganizationAuthConfig.GetAuthMethodsError,
      },
      options,
    );
  }

  /**
   * Set up auth configuration
   *
   * @remarks
   * Set up or initialize the organization's authentication configuration.
   *
   * @returns Auth configuration already exists for this deployment
   *
   * @throws {@link OrganizationAuthConfig.SetUpAuthConfigError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setUpAuthConfig(
    request: OrganizationAuthConfig.SetUpAuthConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<OrgAuthConfigSetupResponse, OrganizationAuthConfig.SetUpAuthConfigError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/orgAuthConfig"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: orgAuthConfigCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: orgAuthConfigSetupResponseSchema },
        errorFactory: OrganizationAuthConfig.SetUpAuthConfigError,
      },
      options,
    );
  }

  /**
   * Update organization authentication methods
   *
   * @remarks
   * Update the authentication methods configuration for an organization. This allows admins to
   * configure single or multi-factor authentication.
   *
   * **Validation Rules:**
   * - Minimum 1 step, maximum 3 steps
   * - Each step must have a unique order (1, 2, or 3)
   * - No duplicate methods within the same step
   * - No method can appear in multiple steps
   * - Each step must have at least one allowed method
   * - `samlSso` is only allowed in a single-step policy; it can't be combined with other steps
   *
   * **Available Methods:**
   * - `password`: Email/password authentication
   * - `otp`: One-time password via email
   * - `google`: Google OAuth 2.0
   * - `microsoft`: Microsoft OAuth 2.0
   * - `azureAd`: Azure Active Directory
   * - `samlSso`: SAML 2.0 Single Sign-On
   * - `oauth`: Generic OAuth 2.0 provider
   *
   * **Example - Single Factor (Password or Google):**
   *
   * ```json
   * {
   *   "authMethod": [
   *     { "order": 1, "allowedMethods": [{ "type": "password" }, { "type": "google" }] }
   *   ]
   * }
   * ```
   *
   * **Example - Two Factor (Password + OTP):**
   *
   * ```json
   * {
   *   "authMethod": [
   *     { "order": 1, "allowedMethods": [{ "type": "password" }] },
   *     { "order": 2, "allowedMethods": [{ "type": "otp" }] }
   *   ]
   * }
   * ```
   *
   * **Admin Access Required:** Only organization admins can update auth configuration.
   *
   * @returns Authentication methods updated successfully
   *
   * @throws {@link OrganizationAuthConfig.UpdateAuthMethodError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAuthMethod(
    request: OrganizationAuthConfig.UpdateAuthMethodRequest,
    options?: RequestOptions,
  ): ApiPromise<UpdateAuthMethodResponse, OrganizationAuthConfig.UpdateAuthMethodError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/orgAuthConfig/updateAuthMethod"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: orgAuthConfigUpdateAuthMethodRequestSchema },
      },
      {
        success: { kind: "json", schema: updateAuthMethodResponseSchema },
        errorFactory: OrganizationAuthConfig.UpdateAuthMethodError,
      },
      options,
    );
  }
}

export namespace OrganizationAuthConfig {
  export class GetAuthMethodsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAuthMethodsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SetUpAuthConfigRequest = {
    /** Organization setup details */
    body: OrgAuthConfigCreateRequest;
  };

  export class SetUpAuthConfigError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SetUpAuthConfigError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateAuthMethodRequest = {
    /** Request payload */
    body: OrgAuthConfigUpdateAuthMethodRequest;
  };

  export class UpdateAuthMethodError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateAuthMethodError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
