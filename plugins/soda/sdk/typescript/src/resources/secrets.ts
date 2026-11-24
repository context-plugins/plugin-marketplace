import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  publicApiCreateSecretRequestDtoSchema,
  type PublicApiCreateSecretRequestDto,
} from "../models/public-api-create-secret-request-dto.js";
import {
  publicApiCreateSecretResponseSchema,
  type PublicApiCreateSecretResponse,
} from "../models/public-api-create-secret-response.js";
import {
  publicApiDeleteSecretResponseSchema,
  type PublicApiDeleteSecretResponse,
} from "../models/public-api-delete-secret-response.js";
import {
  publicApiGetEncryptionKeyResponseSchema,
  type PublicApiGetEncryptionKeyResponse,
} from "../models/public-api-get-encryption-key-response.js";
import {
  publicApiListSecretsResponseSchema,
  type PublicApiListSecretsResponse,
} from "../models/public-api-list-secrets-response.js";
import {
  publicApiUpdateSecretRequestDtoSchema,
  type PublicApiUpdateSecretRequestDto,
} from "../models/public-api-update-secret-request-dto.js";
import {
  publicApiUpdateSecretResponseSchema,
  type PublicApiUpdateSecretResponse,
} from "../models/public-api-update-secret-response.js";
import type { Servers } from "../servers.js";

/**
 * Soda Cloud API Secret Endpoints
 */
export class Secrets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a secret
   *
   * @remarks
   * Deletes an existing secret.
   *
   * The secret cannot be deleted if it is referenced by a datasource configuration.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.
   *
   * ## Tags
   *
   * `Secrets`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Secrets.DeleteApiV1SecretsSecretIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiV1SecretsSecretId(
    request: Secrets.DeleteApiV1SecretsSecretIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiDeleteSecretResponse, Secrets.DeleteApiV1SecretsSecretIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/secrets/{secretId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "secretId", value: request.secretId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiDeleteSecretResponseSchema },
        errorFactory: Secrets.DeleteApiV1SecretsSecretIdError,
      },
      options,
    );
  }

  /**
   * List secrets
   *
   * @remarks
   * This endpoint allows you to list secrets in your organization.
   *
   * This GET is a paginated API that uses the following parameters to request specific details:
   *
   * - `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 10.
   *
   * - `page`: Supply an integer value. The default value is 0.
   *
   * - `search`: Supply a string value to filter secrets by name (case-insensitive partial match).
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.
   *
   * ## Tags
   *
   * `Secrets`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Secrets.GetApiV1SecretsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Secrets(
    request: Secrets.GetApiV1SecretsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PublicApiListSecretsResponse, Secrets.GetApiV1SecretsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/secrets"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiListSecretsResponseSchema },
        errorFactory: Secrets.GetApiV1SecretsError,
      },
      options,
    );
  }

  /**
   * Get the encryption public key
   *
   * @remarks
   * Returns the RSA public key in JWK (JSON Web Key) format, used for client-side encryption of
   * secret values.
   *
   * ## Usage
   *
   * When creating or updating a secret, the secret value must be encrypted client-side before
   * sending it to the API. This endpoint provides the RSA public key needed for that encryption.
   *
   * ## Encryption workflow
   *
   * 1. Fetch this public key.
   *
   * 2. Generate a random AES-256-GCM key (32 bytes) and initialization vector (IV, 12 bytes).
   *
   * 3. Encrypt the secret value using AES-256-GCM with the generated key and IV. Base64-encode the
   *    ciphertext and prefix it with `encrypted_`. This becomes the `encryptedValue` field.
   *
   * 4. Export the raw AES key and IV as base64 strings and concatenate them as
   *    `{base64_key}:::{base64_iv}`. Encrypt this string using RSA-OAEP (SHA-256) with this public
   *    key. Base64-encode the result. This becomes the `encryptionKey` field.
   *
   * 5. Use the `encryptedValue` and `encryptionKey` in the create or update secret request.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.
   *
   * ## Tags
   *
   * `Secrets`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Secrets.GetApiV1SecretsPublicKeyError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1SecretsPublicKey(
    options?: RequestOptions,
  ): ApiPromise<PublicApiGetEncryptionKeyResponse, Secrets.GetApiV1SecretsPublicKeyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/secretsPublicKey"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiGetEncryptionKeyResponseSchema },
        errorFactory: Secrets.GetApiV1SecretsPublicKeyError,
      },
      options,
    );
  }

  /**
   * Create a secret
   *
   * @remarks
   * Creates a new secret in your organization. Secrets store encrypted credentials that can be
   * referenced in datasource configurations using `${secret.NAME}` placeholders, keeping sensitive
   * values out of plain text.
   *
   * ## Encryption
   *
   * Secret values must be encrypted **client-side** before sending them to this endpoint. This
   * enables a zero-trust design, where Soda never decrypts the secret. Decryption happens only
   * during scan execution, within the runner.
   *
   * Use the `GET /api/v1/secretsPublicKey` endpoint to obtain the server's RSA public key. The
   * encryption uses a two-layer scheme:
   *
   * 1. Fetch the RSA public key from `GET /api/v1/secretsPublicKey`.
   *
   * 2. Generate a random AES-256-GCM key (32 bytes) and initialization vector (IV, 12 bytes).
   *
   * 3. Encrypt the secret value using AES-256-GCM with the generated key and IV. Base64-encode the
   *    ciphertext and prefix it with `encrypted_`. This becomes the `encryptedValue` field.
   *
   * 4. Export the raw AES key and IV as base64 strings and concatenate them as
   *    `{base64_key}:::{base64_iv}`. Encrypt this string using RSA-OAEP (SHA-256) with the public
   *    key from step 1. Base64-encode the result. This becomes the `encryptionKey` field.
   *
   * ## Constraints
   *
   * - The secret `name` must not contain whitespace and must be unique within the organization.
   *
   * - Both `encryptionKey` and `encryptedValue` are required.
   *
   * - The organization must have the contracts feature enabled and the secure store must not be
   *   disabled.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.
   *
   * ## Tags
   *
   * `Secrets`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Secrets.PostApiV1SecretsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1Secrets(
    request: Secrets.PostApiV1SecretsRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiCreateSecretResponse, Secrets.PostApiV1SecretsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/secrets"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiCreateSecretRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiCreateSecretResponseSchema },
        errorFactory: Secrets.PostApiV1SecretsError,
      },
      options,
    );
  }

  /**
   * Update a secret
   *
   * @remarks
   * Updates the encrypted value of an existing secret. The secret name cannot be changed.
   *
   * Both `encryptionKey` and `encryptedValue` must be provided together — you cannot update one
   * without the other.
   *
   * ## Encryption
   *
   * The new secret value must be encrypted **client-side** using the same two-layer encryption
   * scheme as creation. See the `POST /api/v1/secrets` (Create a secret) endpoint for the full
   * encryption workflow.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Authorization
   *
   * Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.
   *
   * ## Tags
   *
   * `Secrets`
   *
   * ## Rate limiting
   *
   * 100 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Secrets.PostApiV1SecretsSecretIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1SecretsSecretId(
    request: Secrets.PostApiV1SecretsSecretIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiUpdateSecretResponse, Secrets.PostApiV1SecretsSecretIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/secrets/{secretId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "secretId", value: request.secretId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publicApiUpdateSecretRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: publicApiUpdateSecretResponseSchema },
        errorFactory: Secrets.PostApiV1SecretsSecretIdError,
      },
      options,
    );
  }
}

export namespace Secrets {
  export type DeleteApiV1SecretsSecretIdRequest = {
    secretId: string;
  };

  export class DeleteApiV1SecretsSecretIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApiV1SecretsSecretIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1SecretsRequest = {
    page?: number;
    search?: string;
    size?: number;
  };

  export class GetApiV1SecretsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1SecretsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class GetApiV1SecretsPublicKeyError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1SecretsPublicKeyError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1SecretsRequest = {
    body: PublicApiCreateSecretRequestDto;
  };

  export class PostApiV1SecretsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1SecretsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostApiV1SecretsSecretIdRequest = {
    secretId: string;
    body: PublicApiUpdateSecretRequestDto;
  };

  export class PostApiV1SecretsSecretIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1SecretsSecretIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
