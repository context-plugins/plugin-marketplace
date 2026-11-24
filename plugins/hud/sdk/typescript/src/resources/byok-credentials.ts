import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  byokCredentialCreateRequestSchema,
  type ByokCredentialCreateRequest,
} from "../models/byok-credential-create-request.js";
import { byokCredentialItemSchema, type ByokCredentialItem } from "../models/byok-credential-item.js";
import {
  byokCredentialUpdateRequestSchema,
  type ByokCredentialUpdateRequest,
} from "../models/byok-credential-update-request.js";
import {
  byokCredentialsListResponseSchema,
  type ByokCredentialsListResponse,
} from "../models/byok-credentials-list-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import type { Servers } from "../servers.js";

export class ByokCredentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create Byok Credential
   *
   * @remarks
   * Create or replace a provider credential for one ownership scope.
   *
   * @returns Successful Response
   *
   * @throws {@link ByokCredentials.CreateByokCredentialV2ByokCredentialsPostError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  createByokCredentialV2ByokCredentialsPost(
    request: ByokCredentials.CreateByokCredentialV2ByokCredentialsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<ByokCredentialItem, ByokCredentials.CreateByokCredentialV2ByokCredentialsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/byok-credentials"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: byokCredentialCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: byokCredentialItemSchema },
        errorFactory: ByokCredentials.CreateByokCredentialV2ByokCredentialsPostError,
      },
      options,
    );
  }

  /**
   * Delete Byok Credential
   *
   * @remarks
   * Disable a BYOK credential and erase its encrypted value.
   *
   * @returns Successful Response
   *
   * @throws {@link ByokCredentials.DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  deleteByokCredentialV2ByokCredentialsCredentialIdDelete(
    request: ByokCredentials.DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ByokCredentials.DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/byok-credentials/{credential_id}"),
        auth: noneAuth,
        pathParams: [{ name: "credential_id", value: request.credentialId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ByokCredentials.DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteError,
      },
      options,
    );
  }

  /**
   * List Byok Credentials
   *
   * @remarks
   * List the caller's personal and team BYOK credentials with masked values.
   *
   * @returns Successful Response
   *
   * @throws {@link ByokCredentials.ListByokCredentialsV2ByokCredentialsGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listByokCredentialsV2ByokCredentialsGet(
    options?: RequestOptions,
  ): ApiPromise<ByokCredentialsListResponse, ByokCredentials.ListByokCredentialsV2ByokCredentialsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/byok-credentials"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: byokCredentialsListResponseSchema },
        errorFactory: ByokCredentials.ListByokCredentialsV2ByokCredentialsGetError,
      },
      options,
    );
  }

  /**
   * Update Byok Credential
   *
   * @remarks
   * Rotate a BYOK credential without exposing its plaintext value.
   *
   * @returns Successful Response
   *
   * @throws {@link ByokCredentials.UpdateByokCredentialV2ByokCredentialsCredentialIdPatchError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  updateByokCredentialV2ByokCredentialsCredentialIdPatch(
    request: ByokCredentials.UpdateByokCredentialV2ByokCredentialsCredentialIdPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ByokCredentialItem,
    ByokCredentials.UpdateByokCredentialV2ByokCredentialsCredentialIdPatchError
  > {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/byok-credentials/{credential_id}"),
        auth: noneAuth,
        pathParams: [{ name: "credential_id", value: request.credentialId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: byokCredentialUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: byokCredentialItemSchema },
        errorFactory: ByokCredentials.UpdateByokCredentialV2ByokCredentialsCredentialIdPatchError,
      },
      options,
    );
  }
}

export namespace ByokCredentials {
  export type CreateByokCredentialV2ByokCredentialsPostRequest = {
    body: ByokCredentialCreateRequest;
  };

  export class CreateByokCredentialV2ByokCredentialsPostError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateByokCredentialV2ByokCredentialsPostError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteRequest = {
    credentialId: string;
  };

  export class DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class ListByokCredentialsV2ByokCredentialsGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListByokCredentialsV2ByokCredentialsGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateByokCredentialV2ByokCredentialsCredentialIdPatchRequest = {
    credentialId: string;
    body: ByokCredentialUpdateRequest;
  };

  export class UpdateByokCredentialV2ByokCredentialsCredentialIdPatchError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateByokCredentialV2ByokCredentialsCredentialIdPatchError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
