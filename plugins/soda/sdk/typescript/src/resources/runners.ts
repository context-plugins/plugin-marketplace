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
  publicApiCreateRunnerResponseSchema,
  type PublicApiCreateRunnerResponse,
} from "../models/public-api-create-runner-response.js";
import {
  publicApiGetRunnerResponseSchema,
  type PublicApiGetRunnerResponse,
} from "../models/public-api-get-runner-response.js";
import {
  publicApiListRunnersResponseSchema,
  type PublicApiListRunnersResponse,
} from "../models/public-api-list-runners-response.js";
import type { Servers } from "../servers.js";

/**
 * Soda Cloud API Runner Endpoints
 */
export class Runners {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a runner
   *
   * @remarks
   * This endpoint allows you to delete a specific self-hosted runner by its ID. If the runner is
   * still in use, the request will fail with a `400 Bad Request` response.
   *
   * Soda-hosted and virtual runners cannot be deleted through this endpoint.
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
   * `Runners`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Runners.DeleteApiV1RunnersRunnerIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiV1RunnersRunnerId(
    request: Runners.DeleteApiV1RunnersRunnerIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Runners.DeleteApiV1RunnersRunnerIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/runners/{runnerId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "runnerId", value: request.runnerId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Runners.DeleteApiV1RunnersRunnerIdError,
      },
      options,
    );
  }

  /**
   * List runners
   *
   * @remarks
   * This endpoint allows you to list runners in your organization.
   *
   * This GET is a paginated API that uses the following parameters to request specific details:
   *
   * - `size`: Supply an integer value between 10 and 1000, inclusive. The default value is 10.
   *
   * - `page`: Supply an integer value. The default value is 0.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Runners`
   *
   * ## Rate limiting
   *
   * 60 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Runners.GetApiV1RunnersError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Runners(
    request: Runners.GetApiV1RunnersRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PublicApiListRunnersResponse, Runners.GetApiV1RunnersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/runners"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "size", value: request.size, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiListRunnersResponseSchema },
        errorFactory: Runners.GetApiV1RunnersError,
      },
      options,
    );
  }

  /**
   * Get a runner
   *
   * @remarks
   * This endpoint allows you to retrieve a specific runner by its ID.
   *
   * ## Authentication
   *
   * User authentication required: `true`
   *
   * This endpoint accepts authentication via API keys in the `Basic` authentication header, or a
   * pre-authenticated token in HTTP cookie `token`. Cookie sessions extend automatically on each
   * request.
   *
   * ## Tags
   *
   * `Runners`
   *
   * ## Rate limiting
   *
   * 1000 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Runners.GetApiV1RunnersRunnerIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1RunnersRunnerId(
    request: Runners.GetApiV1RunnersRunnerIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicApiGetRunnerResponse, Runners.GetApiV1RunnersRunnerIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/runners/{runnerId}"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [{ name: "runnerId", value: request.runnerId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiGetRunnerResponseSchema },
        errorFactory: Runners.GetApiV1RunnersRunnerIdError,
      },
      options,
    );
  }

  /**
   * Create a soda runner
   *
   * @remarks
   * Creates an API key for a new self-hosted runner deployment.
   *
   * Returns the API key credentials (id and secret) to configure the runner. The credentials are
   * only returned at creation time and cannot be retrieved later, so make sure to store them
   * securely.
   *
   * After creation the runner does not immediately become visible in Soda Cloud. The runner needs
   * to registers itself using the API key credentials before it becomes available.
   *
   * See deployment instructions for setting up the runner.
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
   * `Runners`
   *
   * ## Rate limiting
   *
   * 10 requests/60 seconds
   *
   * @returns Successful response
   *
   * @throws {@link Runners.PostApiV1RunnersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SodaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1Runners(
    options?: RequestOptions,
  ): ApiPromise<PublicApiCreateRunnerResponse, Runners.PostApiV1RunnersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/runners"),
        auth: anyAuth(this.#auth.basicAuthApiKey, this.#auth.cookieToken),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicApiCreateRunnerResponseSchema },
        errorFactory: Runners.PostApiV1RunnersError,
      },
      options,
    );
  }
}

export namespace Runners {
  export type DeleteApiV1RunnersRunnerIdRequest = {
    runnerId: string;
  };

  export class DeleteApiV1RunnersRunnerIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApiV1RunnersRunnerIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1RunnersRequest = {
    page?: number;
    size?: number;
  };

  export class GetApiV1RunnersError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1RunnersError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetApiV1RunnersRunnerIdRequest = {
    runnerId: string;
  };

  export class GetApiV1RunnersRunnerIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1RunnersRunnerIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class PostApiV1RunnersError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1RunnersError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
