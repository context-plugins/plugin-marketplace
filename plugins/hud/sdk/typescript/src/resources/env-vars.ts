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
  registryEnvVarBatchRequestSchema,
  type RegistryEnvVarBatchRequest,
} from "../models/registry-env-var-batch-request.js";
import {
  registryEnvVarBatchResponseSchema,
  type RegistryEnvVarBatchResponse,
} from "../models/registry-env-var-batch-response.js";
import {
  registryEnvVarCheckRequestSchema,
  type RegistryEnvVarCheckRequest,
} from "../models/registry-env-var-check-request.js";
import {
  registryEnvVarCheckResponseSchema,
  type RegistryEnvVarCheckResponse,
} from "../models/registry-env-var-check-response.js";
import {
  registryEnvVarCreateRequestSchema,
  type RegistryEnvVarCreateRequest,
} from "../models/registry-env-var-create-request.js";
import { registryEnvVarItemSchema, type RegistryEnvVarItem } from "../models/registry-env-var-item.js";
import {
  registryEnvVarUpdateRequestSchema,
  type RegistryEnvVarUpdateRequest,
} from "../models/registry-env-var-update-request.js";
import {
  registryEnvVarsListResponseSchema,
  type RegistryEnvVarsListResponse,
} from "../models/registry-env-vars-list-response.js";
import type { Servers } from "../servers.js";

export class EnvVars {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Batch Replace Env Vars
   *
   * @remarks
   * Replace a registry's full env var set with the given variables.
   *
   * @returns Successful Response
   *
   * @throws {@link EnvVars.BatchReplaceEnvVarsV2EnvVarsBatchPutError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  batchReplaceEnvVarsV2EnvVarsBatchPut(
    request: EnvVars.BatchReplaceEnvVarsV2EnvVarsBatchPutRequest,
    options?: RequestOptions,
  ): ApiPromise<RegistryEnvVarBatchResponse, EnvVars.BatchReplaceEnvVarsV2EnvVarsBatchPutError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/env-vars/batch"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: registryEnvVarBatchRequestSchema },
      },
      {
        success: { kind: "json", schema: registryEnvVarBatchResponseSchema },
        errorFactory: EnvVars.BatchReplaceEnvVarsV2EnvVarsBatchPutError,
      },
      options,
    );
  }

  /**
   * Check Env Var Completeness
   *
   * @remarks
   * Check whether each registry has all env vars its manifest requires.
   *
   * @returns Successful Response
   *
   * @throws {@link EnvVars.CheckEnvVarCompletenessV2EnvVarsCheckPostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  checkEnvVarCompletenessV2EnvVarsCheckPost(
    request: EnvVars.CheckEnvVarCompletenessV2EnvVarsCheckPostRequest,
    options?: RequestOptions,
  ): ApiPromise<RegistryEnvVarCheckResponse, EnvVars.CheckEnvVarCompletenessV2EnvVarsCheckPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/env-vars/check"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: registryEnvVarCheckRequestSchema },
      },
      {
        success: { kind: "json", schema: registryEnvVarCheckResponseSchema },
        errorFactory: EnvVars.CheckEnvVarCompletenessV2EnvVarsCheckPostError,
      },
      options,
    );
  }

  /**
   * Create Env Var
   *
   * @remarks
   * Set a registry env var, creating it or updating an existing one by name.
   *
   * @returns Successful Response
   *
   * @throws {@link EnvVars.CreateEnvVarV2EnvVarsPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  createEnvVarV2EnvVarsPost(
    request: EnvVars.CreateEnvVarV2EnvVarsPostRequest,
    options?: RequestOptions,
  ): ApiPromise<RegistryEnvVarItem, EnvVars.CreateEnvVarV2EnvVarsPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/env-vars"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: registryEnvVarCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: registryEnvVarItemSchema },
        errorFactory: EnvVars.CreateEnvVarV2EnvVarsPostError,
      },
      options,
    );
  }

  /**
   * Delete Env Var
   *
   * @remarks
   * Delete a registry env var.
   *
   * @returns Successful Response
   *
   * @throws {@link EnvVars.DeleteEnvVarV2EnvVarsVarIdDeleteError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  deleteEnvVarV2EnvVarsVarIdDelete(
    request: EnvVars.DeleteEnvVarV2EnvVarsVarIdDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, EnvVars.DeleteEnvVarV2EnvVarsVarIdDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/env-vars/{var_id}"),
        auth: noneAuth,
        pathParams: [{ name: "var_id", value: request.varId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: EnvVars.DeleteEnvVarV2EnvVarsVarIdDeleteError,
      },
      options,
    );
  }

  /**
   * List Env Vars
   *
   * @remarks
   * List a registry's runtime env vars with masked values.
   *
   * @returns Successful Response
   *
   * @throws {@link EnvVars.ListEnvVarsV2EnvVarsGetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  listEnvVarsV2EnvVarsGet(
    request: EnvVars.ListEnvVarsV2EnvVarsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<RegistryEnvVarsListResponse, EnvVars.ListEnvVarsV2EnvVarsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/env-vars"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "registry_id", value: request.registryId, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: registryEnvVarsListResponseSchema },
        errorFactory: EnvVars.ListEnvVarsV2EnvVarsGetError,
      },
      options,
    );
  }

  /**
   * Update Env Var
   *
   * @remarks
   * Update a registry env var's value.
   *
   * @returns Successful Response
   *
   * @throws {@link EnvVars.UpdateEnvVarV2EnvVarsVarIdPatchError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link HudError} when no usable response was produced: a connection failure, a timeout,
   * a body that would not decode, a value that would not encode, or a credential that could not be
   * obtained
   */
  updateEnvVarV2EnvVarsVarIdPatch(
    request: EnvVars.UpdateEnvVarV2EnvVarsVarIdPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<RegistryEnvVarItem, EnvVars.UpdateEnvVarV2EnvVarsVarIdPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/env-vars/{var_id}"),
        auth: noneAuth,
        pathParams: [{ name: "var_id", value: request.varId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: registryEnvVarUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: registryEnvVarItemSchema },
        errorFactory: EnvVars.UpdateEnvVarV2EnvVarsVarIdPatchError,
      },
      options,
    );
  }
}

export namespace EnvVars {
  export type BatchReplaceEnvVarsV2EnvVarsBatchPutRequest = {
    body: RegistryEnvVarBatchRequest;
  };

  export class BatchReplaceEnvVarsV2EnvVarsBatchPutError extends ApiError {
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

    static readonly errors: ErrorDecoders<BatchReplaceEnvVarsV2EnvVarsBatchPutError> = [
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

  export type CheckEnvVarCompletenessV2EnvVarsCheckPostRequest = {
    body: RegistryEnvVarCheckRequest;
  };

  export class CheckEnvVarCompletenessV2EnvVarsCheckPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<CheckEnvVarCompletenessV2EnvVarsCheckPostError> = [
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

  export type CreateEnvVarV2EnvVarsPostRequest = {
    body: RegistryEnvVarCreateRequest;
  };

  export class CreateEnvVarV2EnvVarsPostError extends ApiError {
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

    static readonly errors: ErrorDecoders<CreateEnvVarV2EnvVarsPostError> = [
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

  export type DeleteEnvVarV2EnvVarsVarIdDeleteRequest = {
    varId: string;
  };

  export class DeleteEnvVarV2EnvVarsVarIdDeleteError extends ApiError {
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

    static readonly errors: ErrorDecoders<DeleteEnvVarV2EnvVarsVarIdDeleteError> = [
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

  export type ListEnvVarsV2EnvVarsGetRequest = {
    /** Registry to list env vars for. */
    registryId: string;
  };

  export class ListEnvVarsV2EnvVarsGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListEnvVarsV2EnvVarsGetError> = [
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

  export type UpdateEnvVarV2EnvVarsVarIdPatchRequest = {
    varId: string;
    body: RegistryEnvVarUpdateRequest;
  };

  export class UpdateEnvVarV2EnvVarsVarIdPatchError extends ApiError {
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

    static readonly errors: ErrorDecoders<UpdateEnvVarV2EnvVarsVarIdPatchError> = [
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
