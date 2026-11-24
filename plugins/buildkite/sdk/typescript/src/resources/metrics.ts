import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { metricsResponseSchema, type MetricsResponse } from "../models/metrics-response.js";
import type { Servers } from "../servers.js";

export class Metrics {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Cluster Agent Metrics
   *
   * @remarks
   * Returns current agent and job counts for the cluster associated with the agent token. Used by
   * autoscalers (Lambda scaler, agent-stack-k8s, custom controllers) to size agent pools.
   *
   * @returns Cluster metrics payload
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link BuildkiteError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMetrics(options?: RequestOptions): ApiPromise<MetricsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBuildkiteAgentMetricsApi("/metrics"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metricsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}
