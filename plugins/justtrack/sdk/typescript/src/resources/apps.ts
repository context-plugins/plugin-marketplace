import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { appOutputInternalSchema, type AppOutput } from "../models/app-output.js";
import { createAppRequestInternalSchema, type CreateAppRequest } from "../models/create-app-request.js";
import { errorResponseInternalSchema, type ErrorResponse } from "../models/error-response.js";
import { listAppsRequestInternalSchema, type ListAppsRequest } from "../models/list-apps-request.js";
import { listAppsResponseInternalSchema, type ListAppsResponse } from "../models/list-apps-response.js";
import type { Servers } from "../servers.js";

/**
 * With the App API, you can:
 *
 * - View your list of apps
 * - Create an app
 */
export class Apps {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create app
   *
   * @remarks
   * Create an app.
   *
   * :::info
   *
   * We validate the following constraints when creating an app:
   *
   * - The bundle ID must be unique to your organization, though multiple apps within your
   *   organization can have the same bundle ID if the platform is different.
   * - A (bundle ID, platform) pair must be unique within your organization.
   * - A (name, platform) pair must be unique within your organization.
   * - The store ID must be unique across all organizations.
   *
   * :::
   *
   * @returns OK
   *
   * @throws {@link Apps.PostManagementV1AppError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JusttrackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postManagementV1App(
    request: Apps.PostManagementV1AppRequest = {},
    options?: RequestOptions,
  ): ApiPromise<AppOutput, Apps.PostManagementV1AppError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultManagementAppPartnerConnectionApi("/management/v1/app"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createAppRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: appOutputInternalSchema },
        errorFactory: Apps.PostManagementV1AppError,
      },
      options,
    );
  }

  /**
   * List apps
   *
   * @remarks
   * Get a paginated list of your organization's apps.
   *
   * @returns OK
   *
   * @throws {@link Apps.PostManagementV1AppsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JusttrackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postManagementV1Apps(
    request: Apps.PostManagementV1AppsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListAppsResponse, Apps.PostManagementV1AppsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultManagementAppPartnerConnectionApi("/management/v1/apps"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => listAppsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: listAppsResponseInternalSchema },
        errorFactory: Apps.PostManagementV1AppsError,
      },
      options,
    );
  }
}

export namespace Apps {
  export type PostManagementV1AppRequest = {
    body?: CreateAppRequest;
  };

  export class PostManagementV1AppError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostManagementV1AppError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseInternalSchema } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseInternalSchema } },
    ];
  }

  export type PostManagementV1AppsRequest = {
    body?: ListAppsRequest;
  };

  export class PostManagementV1AppsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostManagementV1AppsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseInternalSchema } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseInternalSchema } },
    ];
  }
}
