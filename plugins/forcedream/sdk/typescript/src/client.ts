import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { ApiError, type Declared, type Undeclared } from "./core/api-error.js";
import type { ApiPromise } from "./core/api-promise.js";
import type { RequestOptions } from "./core/api-request.js";
import { noneAuth } from "./core/auth/schemes.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import type { ErrorDecoders } from "./core/response-decoder.js";
import * as host from "./core/runtime-environment.js";
import { uuid } from "./core/uuid.js";
import * as s from "./core/validation/index.js";
import { agentListResultSchema, type AgentListResult } from "./models/agent-list-result.js";
import { apiSignupRequestInternalSchema, type ApiSignupRequest } from "./models/api-signup-request.js";
import { balanceResultSchema, type BalanceResult } from "./models/balance-result.js";
import { invokeResultSchema, type InvokeResult } from "./models/invoke-result.js";
import { reliabilityListResultSchema, type ReliabilityListResult } from "./models/reliability-list-result.js";
import { signupResultSchema, type SignupResult } from "./models/signup-result.js";
import { unauthorized1Schema, type Unauthorized1 } from "./models/unauthorized1.js";
import {
  v1AgentsInvokeRequestSchema,
  type V1AgentsInvokeRequest,
} from "./models/v1-agents-invoke-request.js";
import {
  v1AgentsInvokeResponseSchema,
  type V1AgentsInvokeResponse,
} from "./models/v1-agents-invoke-response.js";
import {
  v1WorkforceProofPublicKeyResponseSchema,
  type V1WorkforceProofPublicKeyResponse,
} from "./models/v1-workforce-proof-public-key-response.js";
import {
  v1WorkforceProofPublicResponseSchema,
  type V1WorkforceProofPublicResponse,
} from "./models/v1-workforce-proof-public-response.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * This specification covers exactly the real, verified API surface used by the official ForceDream
 * SDKs (JavaScript/TypeScript, Python, and Go) as of 2026-07-12 -- not the full platform. Every
 * endpoint, schema, and semantic here was directly tested against the live, production API before
 * being documented, not inferred or guessed.
 *
 * **Scope is deliberate, not incomplete.** Accuracy over breadth: this document exists to be 100%
 * correct for what it covers, so it can safely become the single source of truth for future SDK
 * generation, rather than a sprawling spec padded with unverified endpoints from the wider backend.
 * Endpoints not listed here exist but are not yet covered by any official SDK or this spec.
 *
 * ## Canonicalization and proof verification
 *
 * Every proof is verified by reconstructing a specific "signable" object from the real proof
 * fields, canonicalizing it, hashing it, and checking an Ed25519 signature -- entirely client-side.
 * ForceDream is never asked whether a proof is valid.
 *
 * **Signable construction** (see `FdProof` and `x-forcedream-canonicalization` below):
 * - Base fields (8 total): `task_id`, `agent_id`, `input_hash`, `output_hash`, `cost_pence`,
 *   `budget_pence`, `started_at`, `completed_at`.
 * - If `external_cost_hash` is present, two more fields are added (`external_cost_hash`,
 *   `retrieved_count`), making 10 total.
 * - Type coercion matters: `cost_pence`, `budget_pence`, `started_at`, and `retrieved_count` are
 *   coerced to numbers exactly as JavaScript's `Number(x)` would (whole values serialize without a
 *   decimal point, fractional values keep their precision). `completed_at` is coerced to a string
 *   exactly as JavaScript's `String(x)` would. Getting this wrong produces a different canonical
 *   string and a different hash, and verification fails.
 *
 * **Canonicalization**: the signable object's keys are sorted alphabetically, then serialized as
 * compact JSON with no extra whitespace -- equivalent to JavaScript's `JSON.stringify(obj,
 * Object.keys(obj).sort())`. This exact behavior was cross-tested byte-for-byte across JavaScript,
 * Python, and Go before any SDK trusted it.
 *
 * **Digest and verification**: SHA-256 hash the canonical string (as hex), then verify the proof's
 * `signature` (base64-encoded) against that digest's raw bytes, using the Ed25519 public key
 * fetched from `/v1/workforce/proof/public-key`.
 *
 * ## Invoke lifecycle
 *
 * `POST /v1/agents/{slug}/invoke` enqueues a task and returns immediately with a `task_id`. It does
 * not wait for completion. Poll `GET /v1/agents/{slug}/result/{taskId}` to check status. All three
 * official SDKs use the same real polling behavior: starting at a 2500ms interval, increasing by
 * 1000ms after each attempt, capped at 6000ms, for a caller-bounded total wait (default 60s,
 * minimum 5s, maximum 120s). On timeout, the task is **not** re-invoked (that would risk
 * double-charging) -- the caller receives the `task_id` back to poll again later.
 *
 * ## A genuine gap, stated honestly rather than guessed at
 *
 * The exact behavior of `GET /v1/workforce/proof/{task_id}/public` for a task that has not yet
 * completed (whether it returns `404`, a `200` with a null proof, or something else) has not been
 * directly tested tonight -- every real verification performed used a task that had already
 * completed. This spec does not assert a specific behavior for that case; see the endpoint's own
 * description for what's actually confirmed versus open.
 */
export class ForceDreamClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "FORCE_DREAM_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "ForceDreamClient/0.1.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.1.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  /**
   * Real, system-measured reliability per agent
   *
   * @remarks
   * Keyless. Used by all three SDKs to merge live `health` data into agent search results. A
   * reliability-fetch failure never blocks the core agent listing.
   *
   * @returns Reliability data for all agents
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAgentReliability(options?: RequestOptions): ApiPromise<ReliabilityListResult, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/agents/reliability"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reliabilityListResultSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get the real, current account balance
   *
   * @returns Current balance
   *
   * @throws {@link ForceDreamClient.GetBalanceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalance(options?: RequestOptions): ApiPromise<BalanceResult, ForceDreamClient.GetBalanceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/account/balance"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: balanceResultSchema },
        errorFactory: ForceDreamClient.GetBalanceError,
      },
      options,
    );
  }

  /**
   * Poll for the real result of an enqueued invocation
   *
   * @remarks
   * Real polling contract used identically by all three official SDKs: start polling at a 2500ms
   * interval, add 1000ms after each attempt, cap at 6000ms, bounded by a caller-set total wait
   * (default 60s, min 5s, max 120s). The response's `status` (or `outcome`) field distinguishes
   * `completed`/`succeeded`, `insufficient` (agent honestly declined -- charged nothing),
   * `charge_failed`, `failed`/`dead_letter`, or still-pending (any other value, including the field
   * being absent).
   *
   * @returns Current task state (may still be pending)
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInvokeResult(
    request: ForceDreamClient.GetInvokeResultRequest,
    options?: RequestOptions,
  ): ApiPromise<InvokeResult, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/agents/{slug}/result/{taskId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "slug", value: request.slug, schema: s.string() },
          { name: "taskId", value: request.taskId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: invokeResultSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch a real, signed proof for a completed task
   *
   * @remarks
   * Keyless. Returns the real proof object needed for client-side Ed25519 verification. **Honest
   * gap**: the exact behavior for a task_id that has not yet completed (404, a 200 with a null
   * proof, or otherwise) is not directly confirmed by tonight's testing -- every real verification
   * tested used an already-completed task. Documented as `200` below for the confirmed case only;
   * do not assume the shape of an unconfirmed case.
   *
   * @returns Proof found (confirmed only for already-completed tasks)
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProof(
    request: ForceDreamClient.GetProofRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WorkforceProofPublicResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/workforce/proof/{task_id}/public"),
        auth: noneAuth,
        pathParams: [{ name: "task_id", value: request.taskId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WorkforceProofPublicResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch the real Ed25519 public key used to sign all proofs
   *
   * @remarks
   * Keyless. Required to verify any proof's signature.
   *
   * @returns Public key
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProofPublicKey(options?: RequestOptions): ApiPromise<V1WorkforceProofPublicKeyResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/workforce/proof/public-key"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1WorkforceProofPublicKeyResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Invoke a real agent to do real work (enqueues only)
   *
   * @remarks
   * Spends your balance -- requires an `fd_live_` key. Enqueues the task and returns immediately;
   * it does not wait for completion. Poll `/v1/agents/{slug}/result/{taskId}` for the outcome.
   * Never call this again for the same logical task after a timeout -- re-invoking would
   * double-charge.
   *
   * @returns Task enqueued
   *
   * @throws {@link ForceDreamClient.InvokeAgentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  invokeAgent(
    request: ForceDreamClient.InvokeAgentRequest,
    options?: RequestOptions,
  ): ApiPromise<V1AgentsInvokeResponse, ForceDreamClient.InvokeAgentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/agents/{slug}/invoke"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "slug", value: request.slug, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1AgentsInvokeRequestSchema },
      },
      {
        success: { kind: "json", schema: v1AgentsInvokeResponseSchema },
        errorFactory: ForceDreamClient.InvokeAgentError,
      },
      options,
    );
  }

  /**
   * Discover real ForceDream agents
   *
   * @remarks
   * Keyless -- no account needed. Real, load-bearing fact confirmed directly from the source, not
   * assumed: **this endpoint has no working server-side capability or query filter.** All three
   * official SDKs fetch the full list and filter client-side. A prior draft of the OpenAPI scope
   * for this spec listed a nonexistent `/v1/agents/search` endpoint; it does not exist. Filter
   * client-side against this endpoint's full response instead, exactly as the official SDKs do.
   *
   * @returns Full agent registry
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAgents(options?: RequestOptions): ApiPromise<AgentListResult, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/agents/list"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentListResultSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create a new ForceDream account
   *
   * @remarks
   * No API key required -- this is how you get one. Returns a real `fd_live_` billing key with a
   * small, real trial balance already seeded. Verified live, repeatedly, across all three SDKs
   * tonight.
   *
   * @returns Account created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ForceDreamError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  signup(
    request: ForceDreamClient.SignupRequest,
    options?: RequestOptions,
  ): ApiPromise<SignupResult, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/signup"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiSignupRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: signupResultSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ForceDreamClient {
  export class GetBalanceError extends ApiError {
    declare readonly payload: Declared<"unauthorized1", Unauthorized1> | Undeclared;

    static readonly errors: ErrorDecoders<GetBalanceError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
    ];
  }

  export type GetInvokeResultRequest = {
    slug: string;
    taskId: string;
  };

  export type GetProofRequest = {
    taskId: string;
  };

  export type InvokeAgentRequest = {
    slug: string;
    body: V1AgentsInvokeRequest;
  };

  export class InvokeAgentError extends ApiError {
    declare readonly payload: Declared<"unauthorized1", Unauthorized1> | Undeclared;

    static readonly errors: ErrorDecoders<InvokeAgentError> = [
      { on: 401, kind: "unauthorized1", decode: { kind: "json", schema: unauthorized1Schema } },
    ];
  }

  export type SignupRequest = {
    body: ApiSignupRequest;
  };
}
