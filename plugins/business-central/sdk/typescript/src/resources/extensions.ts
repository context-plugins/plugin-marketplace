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
  companiesApiExtensionsResponseSchema,
  type CompaniesApiExtensionsResponse,
} from "../models/companies-api-extensions-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage installed extensions
 */
export class Extensions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Install an Extension
   *
   * @remarks
   * Installs a published extension on the tenant.
   *
   * @returns Extension installation initiated
   *
   * @throws {@link Extensions.InstallExtensionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  installExtension(
    request: Extensions.InstallExtensionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Extensions.InstallExtensionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/extensions({extension_id})/Microsoft.NAV.install",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "extension_id", value: request.extensionId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Extensions.InstallExtensionError,
      },
      options,
    );
  }

  /**
   * List Extensions
   *
   * @remarks
   * Returns a list of extensions published to the tenant.
   *
   * @returns Successfully retrieved extensions
   *
   * @throws {@link Extensions.ListExtensionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listExtensions(
    request: Extensions.ListExtensionsRequest,
    options?: RequestOptions,
  ): ApiPromise<CompaniesApiExtensionsResponse, Extensions.ListExtensionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/extensions",
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
        success: { kind: "json", schema: companiesApiExtensionsResponseSchema },
        errorFactory: Extensions.ListExtensionsError,
      },
      options,
    );
  }

  /**
   * Uninstall and Delete Extension Data
   *
   * @remarks
   * Uninstalls an extension and deletes all data owned by the extension. This action cannot be
   * undone.
   *
   * @returns Extension uninstallation and data deletion initiated
   *
   * @throws {@link Extensions.UninstallAndDeleteExtensionDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  uninstallAndDeleteExtensionData(
    request: Extensions.UninstallAndDeleteExtensionDataRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Extensions.UninstallAndDeleteExtensionDataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/extensions({extension_id})/Microsoft.NAV.uninstallAndDeleteExtensionData",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "extension_id", value: request.extensionId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Extensions.UninstallAndDeleteExtensionDataError,
      },
      options,
    );
  }

  /**
   * Uninstall an Extension
   *
   * @remarks
   * Uninstalls an extension from the tenant.
   *
   * @returns Extension uninstallation initiated
   *
   * @throws {@link Extensions.UninstallExtensionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  uninstallExtension(
    request: Extensions.UninstallExtensionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Extensions.UninstallExtensionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/extensions({extension_id})/Microsoft.NAV.uninstall",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "extension_id", value: request.extensionId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Extensions.UninstallExtensionError,
      },
      options,
    );
  }

  /**
   * Unpublish an Extension
   *
   * @remarks
   * Unpublishes an uninstalled extension from the tenant.
   *
   * @returns Extension unpublished
   *
   * @throws {@link Extensions.UnpublishExtensionError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  unpublishExtension(
    request: Extensions.UnpublishExtensionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Extensions.UnpublishExtensionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/extensions({extension_id})/Microsoft.NAV.unpublish",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "extension_id", value: request.extensionId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Extensions.UnpublishExtensionError,
      },
      options,
    );
  }
}

export namespace Extensions {
  export type InstallExtensionRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The package ID of the extension */
    extensionId: string;
  };

  export class InstallExtensionError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<InstallExtensionError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListExtensionsRequest = {
    /** The unique identifier of the company */
    companyId: string;
  };

  export class ListExtensionsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListExtensionsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UninstallAndDeleteExtensionDataRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The package ID of the extension */
    extensionId: string;
  };

  export class UninstallAndDeleteExtensionDataError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<UninstallAndDeleteExtensionDataError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UninstallExtensionRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The package ID of the extension */
    extensionId: string;
  };

  export class UninstallExtensionError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<UninstallExtensionError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UnpublishExtensionRequest = {
    /** The unique identifier of the company */
    companyId: string;
    /** The package ID of the extension */
    extensionId: string;
  };

  export class UnpublishExtensionError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<UnpublishExtensionError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
