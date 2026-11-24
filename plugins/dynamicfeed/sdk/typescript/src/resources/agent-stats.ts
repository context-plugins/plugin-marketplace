import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import type { Servers } from "../servers.js";

export class AgentStats {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Agent Stats
   *
   * @remarks
   * Public, no-PII view of the agent/machine traffic Dynamic Feed serves: tool calls (today / 7d /
   * 30d / all-time) and the distinct agent client types seen (Claude, ChatGPT, Cursor, LangChain,
   * MCP clients, ...). Counts only — no IPs, no identities. Powers the public 'agents tapping us'
   * counter on /agents. The response itself is Ed25519-signed.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  agentStatsV1AgentStatsGet(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/agent-stats"),
        auth: noneAuth,
        pathParams: [],
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
}
