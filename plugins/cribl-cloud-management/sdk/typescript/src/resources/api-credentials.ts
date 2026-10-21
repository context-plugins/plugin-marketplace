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
  apiCredentialCreateRequestDtoSchema,
  type ApiCredentialCreateRequestDto,
} from "../models/api-credential-create-request-dto.js";
import {
  apiCredentialCreateResponseSchemaSchema,
  type ApiCredentialCreateResponseSchema,
} from "../models/api-credential-create-response-schema.js";
import {
  apiCredentialResponseSchemaSchema,
  type ApiCredentialResponseSchema,
} from "../models/api-credential-response-schema.js";
import {
  apiCredentialUpdateRequestDtoSchema,
  type ApiCredentialUpdateRequestDto,
} from "../models/api-credential-update-request-dto.js";
import {
  apiCredentialsListResponseDtoSchema,
  type ApiCredentialsListResponseDto,
} from "../models/api-credentials-list-response-dto.js";
import { defaultErrorDtoSchema, type DefaultErrorDto } from "../models/default-error-dto.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to API credentials
 */
export class ApiCredentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an API Credential
   *
   * @remarks
   * Create a new API Credential for the specified Organization.
   *
   * @returns API Credential created
   *
   * @throws {@link ApiCredentials.V1ApiCredentialsCreateApiCredentialError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblCloudPublicApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  v1ApiCredentialsCreateApiCredential(
    request: ApiCredentials.V1ApiCredentialsCreateApiCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiCredentialCreateResponseSchema, ApiCredentials.V1ApiCredentialsCreateApiCredentialError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/organizations/{organizationId}/api-credentials"),
        auth: anyAuth(this.#auth.clientOauth, this.#auth.bearerAuth),
        pathParams: [{ name: "organizationId", value: request.organizationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiCredentialCreateRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: apiCredentialCreateResponseSchemaSchema },
        errorFactory: ApiCredentials.V1ApiCredentialsCreateApiCredentialError,
      },
      options,
    );
  }

  /**
   * Delete an API Credential
   *
   * @remarks
   * Delete the specified API Credential.
   *
   * @returns API Credential deleted
   *
   * @throws {@link ApiCredentials.V1ApiCredentialsDeleteApiCredentialError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblCloudPublicApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  v1ApiCredentialsDeleteApiCredential(
    request: ApiCredentials.V1ApiCredentialsDeleteApiCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiCredentials.V1ApiCredentialsDeleteApiCredentialError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/v1/organizations/{organizationId}/api-credentials/{apiCredentialId}",
        ),
        auth: anyAuth(this.#auth.clientOauth, this.#auth.bearerAuth),
        pathParams: [
          { name: "organizationId", value: request.organizationId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiCredentials.V1ApiCredentialsDeleteApiCredentialError,
      },
      options,
    );
  }

  /**
   * Get an API Credential
   *
   * @remarks
   * Get the specified API Credential.
   *
   * @returns API Credential retrieved
   *
   * @throws {@link ApiCredentials.V1ApiCredentialsGetApiCredentialError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblCloudPublicApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  v1ApiCredentialsGetApiCredential(
    request: ApiCredentials.V1ApiCredentialsGetApiCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiCredentialResponseSchema, ApiCredentials.V1ApiCredentialsGetApiCredentialError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v1/organizations/{organizationId}/api-credentials/{apiCredentialId}",
        ),
        auth: anyAuth(this.#auth.clientOauth, this.#auth.bearerAuth),
        pathParams: [
          { name: "organizationId", value: request.organizationId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiCredentialResponseSchemaSchema },
        errorFactory: ApiCredentials.V1ApiCredentialsGetApiCredentialError,
      },
      options,
    );
  }

  /**
   * List API Credentials for an Organization
   *
   * @remarks
   * Get a list of all API Credentials for the specified Organization.
   *
   * @returns API Credentials retrieved
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CriblCloudPublicApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  v1ApiCredentialsListApiCredentials(
    request: ApiCredentials.V1ApiCredentialsListApiCredentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiCredentialsListResponseDto, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/organizations/{organizationId}/api-credentials"),
        auth: anyAuth(this.#auth.clientOauth, this.#auth.bearerAuth),
        pathParams: [{ name: "organizationId", value: request.organizationId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiCredentialsListResponseDtoSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an API Credential
   *
   * @remarks
   * Update the specified API Credential.
   *
   * @returns API Credential updated
   *
   * @throws {@link ApiCredentials.V1ApiCredentialsUpdateApiCredentialError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblCloudPublicApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  v1ApiCredentialsUpdateApiCredential(
    request: ApiCredentials.V1ApiCredentialsUpdateApiCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiCredentials.V1ApiCredentialsUpdateApiCredentialError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/v1/organizations/{organizationId}/api-credentials/{apiCredentialId}",
        ),
        auth: anyAuth(this.#auth.clientOauth, this.#auth.bearerAuth),
        pathParams: [
          { name: "organizationId", value: request.organizationId, schema: s.string() },
          { name: "apiCredentialId", value: request.apiCredentialId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiCredentialUpdateRequestDtoSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiCredentials.V1ApiCredentialsUpdateApiCredentialError,
      },
      options,
    );
  }
}

export namespace ApiCredentials {
  export type V1ApiCredentialsCreateApiCredentialRequest = {
    /** The <code>id</code> of the Organization where you want to create the API Credential. */
    organizationId: string;
    body: ApiCredentialCreateRequestDto;
  };

  export class V1ApiCredentialsCreateApiCredentialError extends ApiError {
    declare readonly payload:
      | Declared<"error409", undefined>
      | Declared<"defaultErrorDto", DefaultErrorDto>
      | Undeclared;

    static readonly errors: ErrorDecoders<V1ApiCredentialsCreateApiCredentialError> = [
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 422, kind: "defaultErrorDto", decode: { kind: "json", schema: defaultErrorDtoSchema } },
    ];
  }

  export type V1ApiCredentialsDeleteApiCredentialRequest = {
    /** The <code>id</code> of the Organization whose API Credential you want to delete. */
    organizationId: string;
    /** The <code>clientId</code> of the API Credential to delete. */
    apiCredentialId: string;
  };

  export class V1ApiCredentialsDeleteApiCredentialError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<V1ApiCredentialsDeleteApiCredentialError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type V1ApiCredentialsGetApiCredentialRequest = {
    /** The <code>id</code> of the Organization whose API Credential you want to retrieve. */
    organizationId: string;
    /** The <code>clientId</code> of the API Credential to retrieve. */
    apiCredentialId: string;
  };

  export class V1ApiCredentialsGetApiCredentialError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<V1ApiCredentialsGetApiCredentialError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type V1ApiCredentialsListApiCredentialsRequest = {
    /** The <code>id</code> of the Organization whose API Credentials you want to list. */
    organizationId: string;
  };

  export type V1ApiCredentialsUpdateApiCredentialRequest = {
    /** The <code>id</code> of the Organization whose API Credential you want to update. */
    organizationId: string;
    /** The <code>clientId</code> of the API Credential to update. */
    apiCredentialId: string;
    body: ApiCredentialUpdateRequestDto;
  };

  export class V1ApiCredentialsUpdateApiCredentialError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<V1ApiCredentialsUpdateApiCredentialError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }
}
