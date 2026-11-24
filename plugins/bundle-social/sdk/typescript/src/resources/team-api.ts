import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiV1TeamRequestInternalSchema, type ApiV1TeamRequest } from "../models/api-v1-team-request.js";
import { apiV1TeamRequest1InternalSchema, type ApiV1TeamRequest1 } from "../models/api-v1-team-request1.js";
import { apiV1TeamResponseInternalSchema, type ApiV1TeamResponse } from "../models/api-v1-team-response.js";
import { apiV1TeamResponse1Schema, type ApiV1TeamResponse1 } from "../models/api-v1-team-response1.js";
import {
  apiV1TeamResponse3InternalSchema,
  type ApiV1TeamResponse3,
} from "../models/api-v1-team-response3.js";
import { apiV1Team400Error1Schema, type ApiV1Team400Error1 } from "../models/api-v1-team400-error1.js";
import { apiV1Team401Error1Schema, type ApiV1Team401Error1 } from "../models/api-v1-team401-error1.js";
import { apiV1Team403Error1Schema, type ApiV1Team403Error1 } from "../models/api-v1-team403-error1.js";
import { apiV1Team404Error1Schema, type ApiV1Team404Error1 } from "../models/api-v1-team404-error1.js";
import { apiV1Team404Error21Schema, type ApiV1Team404Error21 } from "../models/api-v1-team404-error21.js";
import { apiV1Team429Error1Schema, type ApiV1Team429Error1 } from "../models/api-v1-team429-error1.js";
import { apiV1Team500Error1Schema, type ApiV1Team500Error1 } from "../models/api-v1-team500-error1.js";
import { apiV1Team502Error1Schema, type ApiV1Team502Error1 } from "../models/api-v1-team502-error1.js";
import { apiV1Team503Error1Schema, type ApiV1Team503Error1 } from "../models/api-v1-team503-error1.js";
import { apiV1Team504Error1Schema, type ApiV1Team504Error1 } from "../models/api-v1-team504-error1.js";
import type { Servers } from "../servers.js";

export class TeamApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create new team
   *
   * @remarks
   * Create a new team in your organization. Create one team per brand, client, or workspace you
   * want to keep separate, then connect social accounts to it.
   *
   * @returns 200
   *
   * @throws {@link TeamApi.TeamCreateTeamError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamCreateTeam(
    request: TeamApi.TeamCreateTeamRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1TeamResponse1, TeamApi.TeamCreateTeamError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/team/"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1TeamRequest1InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1TeamResponse1Schema },
        errorFactory: TeamApi.TeamCreateTeamError,
      },
      options,
    );
  }

  /**
   * Delete team
   *
   * @remarks
   * Permanently delete a team along with its connected social accounts, posts, and uploads. This
   * cannot be undone.
   *
   * @returns 200
   *
   * @throws {@link TeamApi.TeamDeleteTeamError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamDeleteTeam(
    request: TeamApi.TeamDeleteTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1TeamResponse1, TeamApi.TeamDeleteTeamError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/team/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1TeamResponse1Schema },
        errorFactory: TeamApi.TeamDeleteTeamError,
      },
      options,
    );
  }

  /**
   * Get list of teams
   *
   * @remarks
   * List the teams in your organization with pagination. Use this to discover team IDs, which are
   * required by most publishing and analytics endpoints.
   *
   * @returns 200
   *
   * @throws {@link TeamApi.TeamGetListError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamGetList(
    request: TeamApi.TeamGetListRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1TeamResponse3, TeamApi.TeamGetListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/team/"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "offset", value: request.offset, schema: s.defaulted(s.nullable(s.float64()), 0) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.nullable(s.float64()), 10) },
          { name: "search", value: request.search, schema: s.optionalNullable(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1TeamResponse3InternalSchema },
        errorFactory: TeamApi.TeamGetListError,
      },
      options,
    );
  }

  /**
   * Get team
   *
   * @remarks
   * Retrieve a single team with its connected social accounts and settings. Teams are the container
   * that social accounts, posts, and uploads belong to.
   *
   * @returns 200
   *
   * @throws {@link TeamApi.TeamGetTeamError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamGetTeam(
    request: TeamApi.TeamGetTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1TeamResponse, TeamApi.TeamGetTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/team/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1TeamResponseInternalSchema },
        errorFactory: TeamApi.TeamGetTeamError,
      },
      options,
    );
  }

  /**
   * Update team
   *
   * @remarks
   * Update a team's name, avatar, time zone, or other settings. Only the fields you send are
   * changed.
   *
   * @returns 200
   *
   * @throws {@link TeamApi.TeamUpdateTeamError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link BundleSocialError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  teamUpdateTeam(
    request: TeamApi.TeamUpdateTeamRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1TeamResponse1, TeamApi.TeamUpdateTeamError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/team/{id}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1TeamRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1TeamResponse1Schema },
        errorFactory: TeamApi.TeamUpdateTeamError,
      },
      options,
    );
  }
}

export namespace TeamApi {
  export type TeamCreateTeamRequest = {
    /** Body */
    body?: ApiV1TeamRequest1;
  };

  export class TeamCreateTeamError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Team400Error1", ApiV1Team400Error1>
      | Declared<"apiV1Team401Error1", ApiV1Team401Error1>
      | Declared<"apiV1Team403Error1", ApiV1Team403Error1>
      | Declared<"apiV1Team404Error21", ApiV1Team404Error21>
      | Declared<"apiV1Team429Error1", ApiV1Team429Error1>
      | Declared<"apiV1Team500Error1", ApiV1Team500Error1>
      | Declared<"apiV1Team502Error1", ApiV1Team502Error1>
      | Declared<"apiV1Team503Error1", ApiV1Team503Error1>
      | Declared<"apiV1Team504Error1", ApiV1Team504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<TeamCreateTeamError> = [
      { on: 400, kind: "apiV1Team400Error1", decode: { kind: "json", schema: apiV1Team400Error1Schema } },
      { on: 401, kind: "apiV1Team401Error1", decode: { kind: "json", schema: apiV1Team401Error1Schema } },
      { on: 403, kind: "apiV1Team403Error1", decode: { kind: "json", schema: apiV1Team403Error1Schema } },
      { on: 404, kind: "apiV1Team404Error21", decode: { kind: "json", schema: apiV1Team404Error21Schema } },
      { on: 429, kind: "apiV1Team429Error1", decode: { kind: "json", schema: apiV1Team429Error1Schema } },
      { on: 500, kind: "apiV1Team500Error1", decode: { kind: "json", schema: apiV1Team500Error1Schema } },
      { on: 502, kind: "apiV1Team502Error1", decode: { kind: "json", schema: apiV1Team502Error1Schema } },
      { on: 503, kind: "apiV1Team503Error1", decode: { kind: "json", schema: apiV1Team503Error1Schema } },
      { on: 504, kind: "apiV1Team504Error1", decode: { kind: "json", schema: apiV1Team504Error1Schema } },
    ];
  }

  export type TeamDeleteTeamRequest = {
    id: string;
  };

  export class TeamDeleteTeamError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Team400Error1", ApiV1Team400Error1>
      | Declared<"apiV1Team401Error1", ApiV1Team401Error1>
      | Declared<"apiV1Team403Error1", ApiV1Team403Error1>
      | Declared<"apiV1Team404Error21", ApiV1Team404Error21>
      | Declared<"apiV1Team429Error1", ApiV1Team429Error1>
      | Declared<"apiV1Team500Error1", ApiV1Team500Error1>
      | Declared<"apiV1Team502Error1", ApiV1Team502Error1>
      | Declared<"apiV1Team503Error1", ApiV1Team503Error1>
      | Declared<"apiV1Team504Error1", ApiV1Team504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<TeamDeleteTeamError> = [
      { on: 400, kind: "apiV1Team400Error1", decode: { kind: "json", schema: apiV1Team400Error1Schema } },
      { on: 401, kind: "apiV1Team401Error1", decode: { kind: "json", schema: apiV1Team401Error1Schema } },
      { on: 403, kind: "apiV1Team403Error1", decode: { kind: "json", schema: apiV1Team403Error1Schema } },
      { on: 404, kind: "apiV1Team404Error21", decode: { kind: "json", schema: apiV1Team404Error21Schema } },
      { on: 429, kind: "apiV1Team429Error1", decode: { kind: "json", schema: apiV1Team429Error1Schema } },
      { on: 500, kind: "apiV1Team500Error1", decode: { kind: "json", schema: apiV1Team500Error1Schema } },
      { on: 502, kind: "apiV1Team502Error1", decode: { kind: "json", schema: apiV1Team502Error1Schema } },
      { on: 503, kind: "apiV1Team503Error1", decode: { kind: "json", schema: apiV1Team503Error1Schema } },
      { on: 504, kind: "apiV1Team504Error1", decode: { kind: "json", schema: apiV1Team504Error1Schema } },
    ];
  }

  export type TeamGetListRequest = {
    /** @default 0 */
    offset?: number | null;
    /** @default 10 */
    limit?: number | null;
    search?: string | null;
  };

  export class TeamGetListError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Team400Error1", ApiV1Team400Error1>
      | Declared<"apiV1Team401Error1", ApiV1Team401Error1>
      | Declared<"apiV1Team403Error1", ApiV1Team403Error1>
      | Declared<"apiV1Team404Error21", ApiV1Team404Error21>
      | Declared<"apiV1Team429Error1", ApiV1Team429Error1>
      | Declared<"apiV1Team500Error1", ApiV1Team500Error1>
      | Declared<"apiV1Team502Error1", ApiV1Team502Error1>
      | Declared<"apiV1Team503Error1", ApiV1Team503Error1>
      | Declared<"apiV1Team504Error1", ApiV1Team504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<TeamGetListError> = [
      { on: 400, kind: "apiV1Team400Error1", decode: { kind: "json", schema: apiV1Team400Error1Schema } },
      { on: 401, kind: "apiV1Team401Error1", decode: { kind: "json", schema: apiV1Team401Error1Schema } },
      { on: 403, kind: "apiV1Team403Error1", decode: { kind: "json", schema: apiV1Team403Error1Schema } },
      { on: 404, kind: "apiV1Team404Error21", decode: { kind: "json", schema: apiV1Team404Error21Schema } },
      { on: 429, kind: "apiV1Team429Error1", decode: { kind: "json", schema: apiV1Team429Error1Schema } },
      { on: 500, kind: "apiV1Team500Error1", decode: { kind: "json", schema: apiV1Team500Error1Schema } },
      { on: 502, kind: "apiV1Team502Error1", decode: { kind: "json", schema: apiV1Team502Error1Schema } },
      { on: 503, kind: "apiV1Team503Error1", decode: { kind: "json", schema: apiV1Team503Error1Schema } },
      { on: 504, kind: "apiV1Team504Error1", decode: { kind: "json", schema: apiV1Team504Error1Schema } },
    ];
  }

  export type TeamGetTeamRequest = {
    id: string;
  };

  export class TeamGetTeamError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Team400Error1", ApiV1Team400Error1>
      | Declared<"apiV1Team401Error1", ApiV1Team401Error1>
      | Declared<"apiV1Team403Error1", ApiV1Team403Error1>
      | Declared<"apiV1Team404Error1", ApiV1Team404Error1>
      | Declared<"apiV1Team429Error1", ApiV1Team429Error1>
      | Declared<"apiV1Team500Error1", ApiV1Team500Error1>
      | Declared<"apiV1Team502Error1", ApiV1Team502Error1>
      | Declared<"apiV1Team503Error1", ApiV1Team503Error1>
      | Declared<"apiV1Team504Error1", ApiV1Team504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<TeamGetTeamError> = [
      { on: 400, kind: "apiV1Team400Error1", decode: { kind: "json", schema: apiV1Team400Error1Schema } },
      { on: 401, kind: "apiV1Team401Error1", decode: { kind: "json", schema: apiV1Team401Error1Schema } },
      { on: 403, kind: "apiV1Team403Error1", decode: { kind: "json", schema: apiV1Team403Error1Schema } },
      { on: 404, kind: "apiV1Team404Error1", decode: { kind: "json", schema: apiV1Team404Error1Schema } },
      { on: 429, kind: "apiV1Team429Error1", decode: { kind: "json", schema: apiV1Team429Error1Schema } },
      { on: 500, kind: "apiV1Team500Error1", decode: { kind: "json", schema: apiV1Team500Error1Schema } },
      { on: 502, kind: "apiV1Team502Error1", decode: { kind: "json", schema: apiV1Team502Error1Schema } },
      { on: 503, kind: "apiV1Team503Error1", decode: { kind: "json", schema: apiV1Team503Error1Schema } },
      { on: 504, kind: "apiV1Team504Error1", decode: { kind: "json", schema: apiV1Team504Error1Schema } },
    ];
  }

  export type TeamUpdateTeamRequest = {
    id: string;
    /** Body */
    body?: ApiV1TeamRequest;
  };

  export class TeamUpdateTeamError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1Team400Error1", ApiV1Team400Error1>
      | Declared<"apiV1Team401Error1", ApiV1Team401Error1>
      | Declared<"apiV1Team403Error1", ApiV1Team403Error1>
      | Declared<"apiV1Team404Error21", ApiV1Team404Error21>
      | Declared<"apiV1Team429Error1", ApiV1Team429Error1>
      | Declared<"apiV1Team500Error1", ApiV1Team500Error1>
      | Declared<"apiV1Team502Error1", ApiV1Team502Error1>
      | Declared<"apiV1Team503Error1", ApiV1Team503Error1>
      | Declared<"apiV1Team504Error1", ApiV1Team504Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<TeamUpdateTeamError> = [
      { on: 400, kind: "apiV1Team400Error1", decode: { kind: "json", schema: apiV1Team400Error1Schema } },
      { on: 401, kind: "apiV1Team401Error1", decode: { kind: "json", schema: apiV1Team401Error1Schema } },
      { on: 403, kind: "apiV1Team403Error1", decode: { kind: "json", schema: apiV1Team403Error1Schema } },
      { on: 404, kind: "apiV1Team404Error21", decode: { kind: "json", schema: apiV1Team404Error21Schema } },
      { on: 429, kind: "apiV1Team429Error1", decode: { kind: "json", schema: apiV1Team429Error1Schema } },
      { on: 500, kind: "apiV1Team500Error1", decode: { kind: "json", schema: apiV1Team500Error1Schema } },
      { on: 502, kind: "apiV1Team502Error1", decode: { kind: "json", schema: apiV1Team502Error1Schema } },
      { on: 503, kind: "apiV1Team503Error1", decode: { kind: "json", schema: apiV1Team503Error1Schema } },
      { on: 504, kind: "apiV1Team504Error1", decode: { kind: "json", schema: apiV1Team504Error1Schema } },
    ];
  }
}
