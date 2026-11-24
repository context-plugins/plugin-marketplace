import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  appPartnerConnectionInternalSchema,
  type AppPartnerConnection,
} from "../models/app-partner-connection.js";
import { errorResponseInternalSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * With the App Partner Connection API, you can:
 *
 * - View details about an app partner connection
 * - Create a partner connection for an app (This is the API equivalent of connecting a partner in
 *   the dashboard)
 * - Update details about an app partner connection
 *
 * :::info
 *
 * Without an app partner connection, justtrack can't operate for most of its features, including
 * campaign creation, tracking, and more.
 *
 * :::
 */
export class AppPartnerConnectionApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get app partner connection
   *
   * @remarks
   * Get data for existing app partner connection.
   *
   * @returns OK
   *
   * @throws {@link AppPartnerConnectionApi.GetManagementV1AppByAppIdConnectionByPartnerIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApplikeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getManagementV1AppByAppIdConnectionByPartnerId(
    request: AppPartnerConnectionApi.GetManagementV1AppByAppIdConnectionByPartnerIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AppPartnerConnection,
    AppPartnerConnectionApi.GetManagementV1AppByAppIdConnectionByPartnerIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultManagementAppPartnerConnectionApi(
          "/management/v1/app/{appId}/connection/{partnerId}",
        ),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "appId", value: request.appId, schema: s.int() },
          { name: "partnerId", value: request.partnerId, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: appPartnerConnectionInternalSchema },
        errorFactory: AppPartnerConnectionApi.GetManagementV1AppByAppIdConnectionByPartnerIdError,
      },
      options,
    );
  }

  /**
   * Connect partner
   *
   * @remarks
   * Connect your app to a partner. If this app-partner connection already exists, update the
   * connection details.
   *
   * @returns OK
   *
   * @throws {@link AppPartnerConnectionApi.PutManagementV1AppByAppIdConnectionByPartnerIdError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link ApplikeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putManagementV1AppByAppIdConnectionByPartnerId(
    request: AppPartnerConnectionApi.PutManagementV1AppByAppIdConnectionByPartnerIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AppPartnerConnection,
    AppPartnerConnectionApi.PutManagementV1AppByAppIdConnectionByPartnerIdError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultManagementAppPartnerConnectionApi(
          "/management/v1/app/{appId}/connection/{partnerId}",
        ),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "appId", value: request.appId, schema: s.int() },
          { name: "partnerId", value: request.partnerId, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => appPartnerConnectionInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: appPartnerConnectionInternalSchema },
        errorFactory: AppPartnerConnectionApi.PutManagementV1AppByAppIdConnectionByPartnerIdError,
      },
      options,
    );
  }
}

export namespace AppPartnerConnectionApi {
  export type GetManagementV1AppByAppIdConnectionByPartnerIdRequest = {
    /** justtrack's identifier for the app */
    appId: number;
    /** justtrack's identifier for the advertising partner */
    partnerId: number;
  };

  export class GetManagementV1AppByAppIdConnectionByPartnerIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetManagementV1AppByAppIdConnectionByPartnerIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseInternalSchema } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseInternalSchema } },
    ];
  }

  export type PutManagementV1AppByAppIdConnectionByPartnerIdRequest = {
    /** justtrack's identifier for the app */
    appId: number;
    /** justtrack's identifier for the advertising partner */
    partnerId: number;
    body?: AppPartnerConnection;
  };

  export class PutManagementV1AppByAppIdConnectionByPartnerIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"error401", undefined>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutManagementV1AppByAppIdConnectionByPartnerIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseInternalSchema } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseInternalSchema } },
    ];
  }
}
