import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Servers } from "../servers.js";

export class IntegrationsJira {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * [Deprecated] Remove Jira Integration Configuration
   *
   * @remarks
   * DEPRECATED - Not recommended to be used. Use /integrations/jira/organization/:token or
   * /integrations/jira/project/:token instead.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  jiraIntegrationControllerRemove(
    request: IntegrationsJira.JiraIntegrationControllerRemoveRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/integrations/jira/{token}"),
        auth: noneAuth,
        pathParams: [{ name: "token", value: request.token, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove Jira Organization Integration Configuration
   *
   * @remarks
   * Remove the Jira integration configuration for an organization. This will remove the integration
   * for an organization wide connection, but not project connections.
   *
   * @throws {@link IntegrationsJira.JiraIntegrationControllerRemoveOrganizationConnectionError}
   * when the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  jiraIntegrationControllerRemoveOrganizationConnection(
    request: IntegrationsJira.JiraIntegrationControllerRemoveOrganizationConnectionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, IntegrationsJira.JiraIntegrationControllerRemoveOrganizationConnectionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/integrations/jira/organization/{token}"),
        auth: noneAuth,
        pathParams: [{ name: "token", value: request.token, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: IntegrationsJira.JiraIntegrationControllerRemoveOrganizationConnectionError,
      },
      options,
    );
  }

  /**
   * Remove Jira Project Integration Configuration
   *
   * @remarks
   * Remove a specific project
   *
   * @returns Connection removed successfully
   *
   * @throws {@link IntegrationsJira.JiraIntegrationControllerRemoveProjectConnectionError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  jiraIntegrationControllerRemoveProjectConnection(
    request: IntegrationsJira.JiraIntegrationControllerRemoveProjectConnectionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, IntegrationsJira.JiraIntegrationControllerRemoveProjectConnectionError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/integrations/jira/project/{token}"),
        auth: noneAuth,
        pathParams: [{ name: "token", value: request.token, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: IntegrationsJira.JiraIntegrationControllerRemoveProjectConnectionError,
      },
      options,
    );
  }
}

export namespace IntegrationsJira {
  export type JiraIntegrationControllerRemoveRequest = {
    token: string;
  };

  export type JiraIntegrationControllerRemoveOrganizationConnectionRequest = {
    token: string;
  };

  export class JiraIntegrationControllerRemoveOrganizationConnectionError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<JiraIntegrationControllerRemoveOrganizationConnectionError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type JiraIntegrationControllerRemoveProjectConnectionRequest = {
    token: string;
  };

  export class JiraIntegrationControllerRemoveProjectConnectionError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<JiraIntegrationControllerRemoveProjectConnectionError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }
}
