import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  platformAdminAgentFilter1Schema,
  type PlatformAdminAgentFilter1,
} from "../models/platform-admin-agent-filter1.js";
import {
  platformListAdminAgentsResponseSchema,
  type PlatformListAdminAgentsResponse,
} from "../models/platform-list-admin-agents-response.js";
import type { Servers } from "../servers.js";

export class AdminAgents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List all agents
   *
   * @remarks
   * List every agent in the workspace, ordered by display_name and then by agent_id. Unlike agent
   * search, the list does not depend on who an agent is shared with, so it includes private and
   * disabled agents. Deleted agents are inactive and are left out unless an is_active filter
   * includes the value "false". Use the agent_id of an active agent with other Platform APIs, for
   * example as a usage limit target. A deleted agent is not a valid usage limit target. The caller
   * must be able to read all agents, administer agents, or read workspace billing.
   *
   * @returns Successful response.
   *
   * @throws {@link AdminAgents.PlatformAdminAgentsListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformAdminAgentsList(
    request: AdminAgents.PlatformAdminAgentsListRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformListAdminAgentsResponse, AdminAgents.PlatformAdminAgentsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/admin/agents"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.int(), 50) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          {
            name: "filters",
            value: request.filters,
            schema: s.optional(s.array(s.lazy(() => platformAdminAgentFilter1Schema))),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformListAdminAgentsResponseSchema },
        errorFactory: AdminAgents.PlatformAdminAgentsListError,
      },
      options,
    );
  }
}

export namespace AdminAgents {
  export type PlatformAdminAgentsListRequest = {
    /** Maximum number of agents to return. Defaults to 50. Maximum is 100. @default 50 */
    pageSize?: number;
    /**
     * Opaque pagination cursor from a previous response. Send the same filters that the previous
     * request used.
     */
    cursor?: string;
    /**
     * JSON-encoded filters that choose which agents are returned. The only supported field is
     * is_active, with the values "true" and "false" and the operator EQUALS. Multiple values OR
     * within a filter. Multiple filters AND together. Without an is_active filter, only active
     * agents are returned. To return active and deleted agents, send
     * [{"field":"is_active","values":["true","false"]}].
     */
    filters?: PlatformAdminAgentFilter1[];
  };

  export class PlatformAdminAgentsListError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformAdminAgentsListError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
