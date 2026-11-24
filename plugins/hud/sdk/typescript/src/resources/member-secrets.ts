import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  memberSecretCreateRequestSchema,
  type MemberSecretCreateRequest,
} from "../models/member-secret-create-request.js";
import { memberSecretItemSchema, type MemberSecretItem } from "../models/member-secret-item.js";
import {
  memberSecretUpdateRequestSchema,
  type MemberSecretUpdateRequest,
} from "../models/member-secret-update-request.js";
import {
  memberSecretsListResponseSchema,
  type MemberSecretsListResponse,
} from "../models/member-secrets-list-response.js";
import type { Servers } from "../servers.js";

export class MemberSecrets {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create Member Secret
   *
   * @remarks
   * Set a personal secret, creating it or updating an existing one by name.
   *
   * @returns Successful Response
   *
   * @throws {@link MemberSecrets.CreateMemberSecretV2MemberSecretsPostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  createMemberSecretV2MemberSecretsPost(
    request: MemberSecrets.CreateMemberSecretV2MemberSecretsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<MemberSecretItem, MemberSecrets.CreateMemberSecretV2MemberSecretsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/member-secrets"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: memberSecretCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: memberSecretItemSchema },
        errorFactory: MemberSecrets.CreateMemberSecretV2MemberSecretsPostError,
      },
      options,
    );
  }

  /**
   * Delete Member Secret
   *
   * @remarks
   * Delete a personal secret.
   *
   * @returns Successful Response
   *
   * @throws {@link MemberSecrets.DeleteMemberSecretV2MemberSecretsSecretIdDeleteError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  deleteMemberSecretV2MemberSecretsSecretIdDelete(
    request: MemberSecrets.DeleteMemberSecretV2MemberSecretsSecretIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MemberSecrets.DeleteMemberSecretV2MemberSecretsSecretIdDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/member-secrets/{secret_id}"),
        auth: noneAuth,
        pathParams: [{ name: "secret_id", value: request.secretId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MemberSecrets.DeleteMemberSecretV2MemberSecretsSecretIdDeleteError,
      },
      options,
    );
  }

  /**
   * List Member Secrets
   *
   * @remarks
   * List the caller's personal secrets with masked values.
   *
   * @returns Successful Response
   *
   * @throws {@link MemberSecrets.ListMemberSecretsV2MemberSecretsGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listMemberSecretsV2MemberSecretsGet(
    options?: RequestOptions,
  ): ApiPromise<MemberSecretsListResponse, MemberSecrets.ListMemberSecretsV2MemberSecretsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/member-secrets"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: memberSecretsListResponseSchema },
        errorFactory: MemberSecrets.ListMemberSecretsV2MemberSecretsGetError,
      },
      options,
    );
  }

  /**
   * Update Member Secret
   *
   * @remarks
   * Update a personal secret's value.
   *
   * @returns Successful Response
   *
   * @throws {@link MemberSecrets.UpdateMemberSecretV2MemberSecretsSecretIdPatchError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  updateMemberSecretV2MemberSecretsSecretIdPatch(
    request: MemberSecrets.UpdateMemberSecretV2MemberSecretsSecretIdPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<MemberSecretItem, MemberSecrets.UpdateMemberSecretV2MemberSecretsSecretIdPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/member-secrets/{secret_id}"),
        auth: noneAuth,
        pathParams: [{ name: "secret_id", value: request.secretId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: memberSecretUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: memberSecretItemSchema },
        errorFactory: MemberSecrets.UpdateMemberSecretV2MemberSecretsSecretIdPatchError,
      },
      options,
    );
  }
}

export namespace MemberSecrets {
  export type CreateMemberSecretV2MemberSecretsPostRequest = {
    body: MemberSecretCreateRequest;
  };

  export class CreateMemberSecretV2MemberSecretsPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<CreateMemberSecretV2MemberSecretsPostError> = [
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

  export type DeleteMemberSecretV2MemberSecretsSecretIdDeleteRequest = {
    secretId: string;
  };

  export class DeleteMemberSecretV2MemberSecretsSecretIdDeleteError extends ApiError {
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

    static readonly errors: ErrorDecoders<DeleteMemberSecretV2MemberSecretsSecretIdDeleteError> = [
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

  export class ListMemberSecretsV2MemberSecretsGetError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListMemberSecretsV2MemberSecretsGetError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateMemberSecretV2MemberSecretsSecretIdPatchRequest = {
    secretId: string;
    body: MemberSecretUpdateRequest;
  };

  export class UpdateMemberSecretV2MemberSecretsSecretIdPatchError extends ApiError {
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

    static readonly errors: ErrorDecoders<UpdateMemberSecretV2MemberSecretsSecretIdPatchError> = [
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
