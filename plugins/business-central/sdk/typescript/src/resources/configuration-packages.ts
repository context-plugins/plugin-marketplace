import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  companiesApiConfigurationPackagesRequestSchema,
  type CompaniesApiConfigurationPackagesRequest,
} from "../models/companies-api-configuration-packages-request.js";
import {
  companiesApiConfigurationPackagesResponseSchema,
  type CompaniesApiConfigurationPackagesResponse,
} from "../models/companies-api-configuration-packages-response.js";
import { configurationPackageSchema, type ConfigurationPackage } from "../models/configuration-package.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage RapidStart configuration packages
 */
export class ConfigurationPackages {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Apply a Configuration Package
   *
   * @remarks
   * Applies the imported RapidStart configuration package.
   *
   * @returns Apply initiated
   *
   * @throws {@link ConfigurationPackages.ApplyConfigurationPackageError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  applyConfigurationPackage(
    request: ConfigurationPackages.ApplyConfigurationPackageRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ConfigurationPackages.ApplyConfigurationPackageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/configurationPackages({package_id})/Microsoft.NAV.apply",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "package_id", value: request.packageId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ConfigurationPackages.ApplyConfigurationPackageError,
      },
      options,
    );
  }

  /**
   * Create a Configuration Package
   *
   * @remarks
   * Creates a new RapidStart configuration package record.
   *
   * @returns Configuration package created
   *
   * @throws {@link ConfigurationPackages.CreateConfigurationPackageError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  createConfigurationPackage(
    request: ConfigurationPackages.CreateConfigurationPackageRequest,
    options?: RequestOptions,
  ): ApiPromise<ConfigurationPackage, ConfigurationPackages.CreateConfigurationPackageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/configurationPackages",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [{ name: "company_id", value: request.companyId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: companiesApiConfigurationPackagesRequestSchema },
      },
      {
        success: { kind: "json", schema: configurationPackageSchema },
        errorFactory: ConfigurationPackages.CreateConfigurationPackageError,
      },
      options,
    );
  }

  /**
   * Import a Configuration Package
   *
   * @remarks
   * Imports the uploaded RapidStart configuration package.
   *
   * @returns Import initiated
   *
   * @throws {@link ConfigurationPackages.ImportConfigurationPackageError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  importConfigurationPackage(
    request: ConfigurationPackages.ImportConfigurationPackageRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ConfigurationPackages.ImportConfigurationPackageError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/configurationPackages({package_id})/Microsoft.NAV.import",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "package_id", value: request.packageId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ConfigurationPackages.ImportConfigurationPackageError,
      },
      options,
    );
  }

  /**
   * List Configuration Packages
   *
   * @remarks
   * Returns a list of RapidStart configuration packages.
   *
   * @returns Successfully retrieved configuration packages
   *
   * @throws {@link ConfigurationPackages.ListConfigurationPackagesError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  listConfigurationPackages(
    request: ConfigurationPackages.ListConfigurationPackagesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    CompaniesApiConfigurationPackagesResponse,
    ConfigurationPackages.ListConfigurationPackagesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/configurationPackages",
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
        success: { kind: "json", schema: companiesApiConfigurationPackagesResponseSchema },
        errorFactory: ConfigurationPackages.ListConfigurationPackagesError,
      },
      options,
    );
  }

  /**
   * Upload Rapidstart Package File
   *
   * @remarks
   * Uploads the RapidStart package file content.
   *
   * @returns Package file uploaded
   *
   * @throws {@link ConfigurationPackages.UploadConfigurationPackageFileError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  uploadConfigurationPackageFile(
    request: ConfigurationPackages.UploadConfigurationPackageFileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ConfigurationPackages.UploadConfigurationPackageFileError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.defaultBusinessCentralAutomationApiV20CompaniesApi(
          "/companies({company_id})/configurationPackages({package_id})/file('{code}')/content",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          { name: "company_id", value: request.companyId, schema: s.string() },
          { name: "package_id", value: request.packageId, schema: s.string() },
          { name: "code", value: request.code, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "If-Match", value: request.ifMatch, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "binary", value: request.body, contentType: "application/octet-stream" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ConfigurationPackages.UploadConfigurationPackageFileError,
      },
      options,
    );
  }
}

export namespace ConfigurationPackages {
  export type ApplyConfigurationPackageRequest = {
    /** The unique identifier of the company */
    companyId: string;
    packageId: string;
  };

  export class ApplyConfigurationPackageError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ApplyConfigurationPackageError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreateConfigurationPackageRequest = {
    /** The unique identifier of the company */
    companyId: string;
    body: CompaniesApiConfigurationPackagesRequest;
  };

  export class CreateConfigurationPackageError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<CreateConfigurationPackageError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ImportConfigurationPackageRequest = {
    /** The unique identifier of the company */
    companyId: string;
    packageId: string;
  };

  export class ImportConfigurationPackageError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ImportConfigurationPackageError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListConfigurationPackagesRequest = {
    /** The unique identifier of the company */
    companyId: string;
  };

  export class ListConfigurationPackagesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListConfigurationPackagesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UploadConfigurationPackageFileRequest = {
    /** The unique identifier of the company */
    companyId: string;
    packageId: string;
    code: string;
    /** ETag value for optimistic concurrency control */
    ifMatch: string;
    body: FileInput;
  };

  export class UploadConfigurationPackageFileError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<UploadConfigurationPackageFileError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
