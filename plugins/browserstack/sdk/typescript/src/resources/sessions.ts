import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  automateSessionsJsonRequestSchema,
  type AutomateSessionsJsonRequest,
} from "../models/automate-sessions-json-request.js";
import { sessionSchema, type Session } from "../models/session.js";
import { statusMessageSchema, type StatusMessage } from "../models/status-message.js";
import type { Servers } from "../servers.js";

/**
 * Operations on Automate sessions.
 */
export class Sessions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete session
   *
   * @returns Session deletion confirmation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BrowserStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSession(
    request: Sessions.DeleteSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<StatusMessage, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/automate/sessions/{sessionId}.json"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "sessionId", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: statusMessageSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get session details
   *
   * @returns Session details
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BrowserStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSession(request: Sessions.GetSessionRequest, options?: RequestOptions): ApiPromise<Session, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/automate/sessions/{sessionId}.json"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "sessionId", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sessionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Download console logs
   *
   * @returns Console log text
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BrowserStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSessionConsoleLogs(
    request: Sessions.GetSessionConsoleLogsRequest,
    options?: RequestOptions,
  ): ApiPromise<string, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/automate/sessions/{sessionId}/consolelogs"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "sessionId", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "text", schema: s.string() },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Download Selenium logs
   *
   * @returns Selenium log text
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BrowserStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSessionLogs(
    request: Sessions.GetSessionLogsRequest,
    options?: RequestOptions,
  ): ApiPromise<string, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/automate/sessions/{sessionId}/logs"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "sessionId", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "text", schema: s.string() },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Download network logs (HAR)
   *
   * @returns HAR file
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BrowserStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSessionNetworkLogs(
    request: Sessions.GetSessionNetworkLogsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/automate/sessions/{sessionId}/networklogs"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "sessionId", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List sessions in a build
   *
   * @returns Array of sessions
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BrowserStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBuildSessions(
    request: Sessions.ListBuildSessionsRequest,
    options?: RequestOptions,
  ): ApiPromise<Session[], ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/automate/builds/{buildId}/sessions.json"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "buildId", value: request.buildId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => sessionSchema)) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update session status / metadata
   *
   * @returns Updated session
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BrowserStackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSession(
    request: Sessions.UpdateSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<Session, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/automate/sessions/{sessionId}.json"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "sessionId", value: request.sessionId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: automateSessionsJsonRequestSchema },
      },
      {
        success: { kind: "json", schema: sessionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Sessions {
  export type DeleteSessionRequest = {
    sessionId: string;
  };

  export type GetSessionRequest = {
    sessionId: string;
  };

  export type GetSessionConsoleLogsRequest = {
    sessionId: string;
  };

  export type GetSessionLogsRequest = {
    sessionId: string;
  };

  export type GetSessionNetworkLogsRequest = {
    sessionId: string;
  };

  export type ListBuildSessionsRequest = {
    buildId: string;
  };

  export type UpdateSessionRequest = {
    sessionId: string;
    body: AutomateSessionsJsonRequest;
  };
}
