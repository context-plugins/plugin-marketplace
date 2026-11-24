import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  companiesApiFeaturesApiMicrosoftNavActivateRequestSchema,
  type CompaniesApiFeaturesApiMicrosoftNavActivateRequest,
} from "../models/companies-api-features-api-microsoft-nav-activate-request.js";
import {
  companiesApiFeaturesResponseInternalSchema,
  type CompaniesApiFeaturesResponse,
} from "../models/companies-api-features-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage feature flags
 */
export class Features {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Activate a Feature
   *
   * @remarks
   * Activates the specified feature.
   *
   * @returns Feature activated
   *
   * @throws {@link Features.ActivateFeatureError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  activateFeature(
    request: Features.ActivateFeatureRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Features.ActivateFeatureError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/features({feature_id})/Microsoft.NAV.activate",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "feature_id", value: request.featureId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => companiesApiFeaturesApiMicrosoftNavActivateRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: Features.ActivateFeatureError,
      },
      options,
    );
  }

  /**
   * Deactivate a Feature
   *
   * @remarks
   * Deactivates the specified feature.
   *
   * @returns Feature deactivated
   *
   * @throws {@link Features.DeactivateFeatureError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deactivateFeature(
    request: Features.DeactivateFeatureRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Features.DeactivateFeatureError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/features({feature_id})/Microsoft.NAV.deactivate",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "feature_id", value: request.featureId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Features.DeactivateFeatureError,
      },
      options,
    );
  }

  /**
   * List Features
   *
   * @remarks
   * Returns a list of features available in feature management.
   *
   * @returns Successfully retrieved features
   *
   * @throws {@link Features.ListFeaturesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link MicrosoftDynamicsNavError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listFeatures(
    request: Features.ListFeaturesRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesApiFeaturesResponse, Features.ListFeaturesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/features",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companiesApiFeaturesResponseInternalSchema },
        errorFactory: Features.ListFeaturesError,
      },
      options,
    );
  }
}

export namespace Features {
  export type ActivateFeatureRequest = {
    /** The unique identifier of the company */
    companyId: string;
    featureId: string;
    body?: CompaniesApiFeaturesApiMicrosoftNavActivateRequest;
  };

  export class ActivateFeatureError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ActivateFeatureError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeactivateFeatureRequest = {
    /** The unique identifier of the company */
    companyId: string;
    featureId: string;
  };

  export class DeactivateFeatureError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DeactivateFeatureError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListFeaturesRequest = {
    /** The unique identifier of the company */
    companyId: string;
  };

  export class ListFeaturesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListFeaturesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
