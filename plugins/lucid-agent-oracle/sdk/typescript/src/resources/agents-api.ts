import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { problemDetailSchema, type ProblemDetail } from "../models/problem-detail.js";
import { period3Schema, type Period3 } from "../models/unions/period3.js";
import { sort4Schema, type Sort4 } from "../models/unions/sort4.js";
import {
  v1OracleAgentsActivityResponseSchema,
  type V1OracleAgentsActivityResponse,
} from "../models/v1-oracle-agents-activity-response.js";
import {
  v1OracleAgentsLeaderboardResponseSchema,
  type V1OracleAgentsLeaderboardResponse,
} from "../models/v1-oracle-agents-leaderboard-response.js";
import {
  v1OracleAgentsMetricsResponseSchema,
  type V1OracleAgentsMetricsResponse,
} from "../models/v1-oracle-agents-metrics-response.js";
import {
  v1OracleAgentsModelUsageResponseSchema,
  type V1OracleAgentsModelUsageResponse,
} from "../models/v1-oracle-agents-model-usage-response.js";
import {
  v1OracleAgentsResponseSchema,
  type V1OracleAgentsResponse,
} from "../models/v1-oracle-agents-response.js";
import {
  v1OracleAgentsSearchResponseSchema,
  type V1OracleAgentsSearchResponse,
} from "../models/v1-oracle-agents-search-response.js";
import type { Servers } from "../servers.js";

/**
 * Agent identity, metrics, and activity
 */
export class AgentsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Agent leaderboard
   *
   * @remarks
   * Ranked list of agents by wallet count, protocol count, evidence count, or newest.
   *
   * @returns Default Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link LucidAgentOracleApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  agentLeaderboard(
    request: AgentsApi.AgentLeaderboardRequest,
    options?: RequestOptions,
  ): ApiPromise<V1OracleAgentsLeaderboardResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/oracle/agents/leaderboard"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.lazy(() => sort4Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1OracleAgentsLeaderboardResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get agent activity
   *
   * @remarks
   * Chronological activity feed for an agent (wallet links, evidence, conflicts). Requires pro
   * tier.
   *
   * @returns Default Response
   *
   * @throws {@link AgentsApi.GetAgentActivityError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LucidAgentOracleApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAgentActivity(
    request: AgentsApi.GetAgentActivityRequest,
    options?: RequestOptions,
  ): ApiPromise<V1OracleAgentsActivityResponse, AgentsApi.GetAgentActivityError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/oracle/agents/{id}/activity"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1OracleAgentsActivityResponseSchema },
        errorFactory: AgentsApi.GetAgentActivityError,
      },
      options,
    );
  }

  /**
   * Get agent metrics
   *
   * @remarks
   * Detailed wallet, evidence, protocol, and conflict metrics for an agent. Requires pro tier.
   *
   * @returns Default Response
   *
   * @throws {@link AgentsApi.GetAgentMetricsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LucidAgentOracleApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAgentMetrics(
    request: AgentsApi.GetAgentMetricsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1OracleAgentsMetricsResponse, AgentsApi.GetAgentMetricsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/oracle/agents/{id}/metrics"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1OracleAgentsMetricsResponseSchema },
        errorFactory: AgentsApi.GetAgentMetricsError,
      },
      options,
    );
  }

  /**
   * Get agent profile
   *
   * @remarks
   * Retrieve an agent entity profile including wallets, protocols, and reputation.
   *
   * @returns Default Response
   *
   * @throws {@link AgentsApi.GetAgentProfileError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LucidAgentOracleApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAgentProfile(
    request: AgentsApi.GetAgentProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<V1OracleAgentsResponse, AgentsApi.GetAgentProfileError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/oracle/agents/{id}"),
        auth: noneAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1OracleAgentsResponseSchema },
        errorFactory: AgentsApi.GetAgentProfileError,
      },
      options,
    );
  }

  /**
   * Get model usage distribution
   *
   * @remarks
   * LLM model/provider distribution across the agent economy. Requires pro tier.
   *
   * @returns Default Response
   *
   * @throws {@link AgentsApi.GetModelUsageDistributionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LucidAgentOracleApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getModelUsageDistribution(
    request: AgentsApi.GetModelUsageDistributionRequest,
    options?: RequestOptions,
  ): ApiPromise<V1OracleAgentsModelUsageResponse, AgentsApi.GetModelUsageDistributionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/oracle/agents/model-usage"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "period", value: request.period, schema: s.optional(s.lazy(() => period3Schema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1OracleAgentsModelUsageResponseSchema },
        errorFactory: AgentsApi.GetModelUsageDistributionError,
      },
      options,
    );
  }

  /**
   * Search agents
   *
   * @remarks
   * Search for agent entities by wallet, protocol, ERC-8004 ID, or free-text query.
   *
   * @returns Default Response
   *
   * @throws {@link AgentsApi.SearchAgentsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LucidAgentOracleApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  searchAgents(
    request: AgentsApi.SearchAgentsRequest,
    options?: RequestOptions,
  ): ApiPromise<V1OracleAgentsSearchResponse, AgentsApi.SearchAgentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/oracle/agents/search"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "wallet", value: request.wallet, schema: s.optional(s.string()) },
          { name: "chain", value: request.chain, schema: s.optional(s.string()) },
          { name: "protocol", value: request.protocol, schema: s.optional(s.string()) },
          { name: "protocol_id", value: request.protocolId, schema: s.optional(s.string()) },
          { name: "erc8004_id", value: request.erc8004Id, schema: s.optional(s.string()) },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1OracleAgentsSearchResponseSchema },
        errorFactory: AgentsApi.SearchAgentsError,
      },
      options,
    );
  }
}

export namespace AgentsApi {
  export type AgentLeaderboardRequest = {
    /** @default 20 */
    limit?: number;
    cursor?: string;
    sort?: Sort4;
  };

  export type GetAgentActivityRequest = {
    id: string;
    /** @default 20 */
    limit?: number;
    cursor?: string;
  };

  export class GetAgentActivityError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetail", ProblemDetail>
      | Declared<"problemDetail2", ProblemDetail>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAgentActivityError> = [
      { on: 403, kind: "problemDetail", decode: { kind: "json", schema: problemDetailSchema } },
      { on: 404, kind: "problemDetail2", decode: { kind: "json", schema: problemDetailSchema } },
    ];
  }

  export type GetAgentMetricsRequest = {
    id: string;
  };

  export class GetAgentMetricsError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetail", ProblemDetail>
      | Declared<"problemDetail2", ProblemDetail>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAgentMetricsError> = [
      { on: 403, kind: "problemDetail", decode: { kind: "json", schema: problemDetailSchema } },
      { on: 404, kind: "problemDetail2", decode: { kind: "json", schema: problemDetailSchema } },
    ];
  }

  export type GetAgentProfileRequest = {
    id: string;
  };

  export class GetAgentProfileError extends ApiError {
    declare readonly payload: Declared<"problemDetail", ProblemDetail> | Undeclared;

    static readonly errors: ErrorDecoders<GetAgentProfileError> = [
      { on: 404, kind: "problemDetail", decode: { kind: "json", schema: problemDetailSchema } },
    ];
  }

  export type GetModelUsageDistributionRequest = {
    period?: Period3;
    /** @default 20 */
    limit?: number;
  };

  export class GetModelUsageDistributionError extends ApiError {
    declare readonly payload: Declared<"problemDetail", ProblemDetail> | Undeclared;

    static readonly errors: ErrorDecoders<GetModelUsageDistributionError> = [
      { on: 403, kind: "problemDetail", decode: { kind: "json", schema: problemDetailSchema } },
    ];
  }

  export type SearchAgentsRequest = {
    /** @default 20 */
    limit?: number;
    cursor?: string;
    wallet?: string;
    chain?: string;
    protocol?: string;
    protocolId?: string;
    erc8004Id?: string;
    q?: string;
  };

  export class SearchAgentsError extends ApiError {
    declare readonly payload: Declared<"problemDetail", ProblemDetail> | Undeclared;

    static readonly errors: ErrorDecoders<SearchAgentsError> = [
      { on: 400, kind: "problemDetail", decode: { kind: "json", schema: problemDetailSchema } },
    ];
  }
}
