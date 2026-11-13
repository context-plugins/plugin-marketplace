import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { gristErrorSchema, type GristError } from "../models/grist-error.js";
import {
  sessionAccessActiveRequestSchema,
  type SessionAccessActiveRequest,
} from "../models/session-access-active-request.js";
import {
  sessionAccessActiveResponseSchema,
  type SessionAccessActiveResponse,
} from "../models/session-access-active-response.js";
import {
  sessionAccessActiveResponse1Schema,
  type SessionAccessActiveResponse1,
} from "../models/session-access-active-response1.js";
import {
  sessionAccessAllResponseSchema,
  type SessionAccessAllResponse,
} from "../models/session-access-all-response.js";
import type { Servers } from "../servers.js";

export class Session {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get active session information
   *
   * @remarks
   * Returns information about the active user and organization for the current session.
   *
   * @returns Active session info
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getActiveSession(options?: RequestOptions): ApiPromise<SessionAccessActiveResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/session/access/active"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sessionAccessActiveResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get all session users and organizations
   *
   * @remarks
   * Returns all user profiles logged into the current session and all organizations they can
   * access.
   *
   * @returns All session info
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllSessions(options?: RequestOptions): ApiPromise<SessionAccessAllResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/session/access/all"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sessionAccessAllResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Set active user for organization
   *
   * @remarks
   * Switch which user account is active for a given organization. Useful when a user has multiple
   * accounts logged in.
   *
   * @returns Active user changed
   *
   * @throws {@link Session.SetActiveUserError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  setActiveUser(
    request: Session.SetActiveUserRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SessionAccessActiveResponse1, Session.SetActiveUserError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/session/access/active"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => sessionAccessActiveRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: sessionAccessActiveResponse1Schema },
        errorFactory: Session.SetActiveUserError,
      },
      options,
    );
  }
}

export namespace Session {
  export type SetActiveUserRequest = {
    body?: SessionAccessActiveRequest;
  };

  export class SetActiveUserError extends ApiError {
    declare readonly payload: Declared<"gristError", GristError> | Undeclared;

    static readonly errors: ErrorDecoders<SetActiveUserError> = [
      { on: 403, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }
}
