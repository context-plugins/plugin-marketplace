import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiV1AgentsResponseSchema, type ApiV1AgentsResponse } from "../models/api-v1-agents-response.js";
import { apiV1AgentsResponse1Schema, type ApiV1AgentsResponse1 } from "../models/api-v1-agents-response1.js";
import type { Servers } from "../servers.js";

export class Agents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List agents
   *
   * @remarks
   * The organisation's agents and the platforms they run on. Registering one is an administrator's
   * act in the app.
   *
   * @returns Agents, newest first. `nextCursor` is null on the last page
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Agents(
    request: Agents.GetApiV1AgentsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1AgentsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/agents"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AgentsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * One agent, with its recent gates
   *
   * @returns The agent
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1AgentsById(
    request: Agents.GetApiV1AgentsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AgentsResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/agents/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AgentsResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Agents {
  export type GetApiV1AgentsRequest = {
    limit?: number;
    cursor?: string;
  };

  export const getApiV1AgentsRequestSchema: Schema<GetApiV1AgentsRequest> = s.lazySchema(() =>
    s.object<GetApiV1AgentsRequest>({
      limit: s.optional(s.int().check(s.gte(1), s.lte(100))),
      cursor: s.optional(s.string()),
    }),
  );

  export type GetApiV1AgentsByIdRequest = {
    id: string;
  };
}
