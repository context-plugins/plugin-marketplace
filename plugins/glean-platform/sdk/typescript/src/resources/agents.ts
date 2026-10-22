import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  platformAgentGetResponseSchema,
  type PlatformAgentGetResponse,
} from "../models/platform-agent-get-response.js";
import {
  platformAgentRunCancellationRequestSchema,
  type PlatformAgentRunCancellationRequest,
} from "../models/platform-agent-run-cancellation-request.js";
import {
  platformAgentRunCreateRequestSchema,
  type PlatformAgentRunCreateRequest,
} from "../models/platform-agent-run-create-request.js";
import {
  platformAgentRunResponseSchema,
  type PlatformAgentRunResponse,
} from "../models/platform-agent-run-response.js";
import {
  platformAgentRunResponsesRequestSchema,
  type PlatformAgentRunResponsesRequest,
} from "../models/platform-agent-run-responses-request.js";
import {
  platformAgentRunWaitResponseSchema,
  type PlatformAgentRunWaitResponse,
} from "../models/platform-agent-run-wait-response.js";
import {
  platformAgentSchemasResponseSchema,
  type PlatformAgentSchemasResponse,
} from "../models/platform-agent-schemas-response.js";
import {
  platformAgentsSearchRequestSchema,
  type PlatformAgentsSearchRequest,
} from "../models/platform-agents-search-request.js";
import {
  platformAgentsSearchResponseSchema,
  type PlatformAgentsSearchResponse,
} from "../models/platform-agents-search-response.js";
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
   * Cancel an agent run
   *
   * @remarks
   * Request cooperative cancellation of the durable agent run identified by `run_id` in the JSON
   * body. Requires ownership, current agent access, and the agents.run scope. Sending a
   * cancellation signal does not itself change an active run from RUNNING; poll GET run for the
   * final state. Paused runs become CANCELLED without resuming execution. Repeated requests and
   * requests for terminal runs return the current snapshot. Completion may win a race with
   * cancellation. Completed tool side effects cannot be undone, and external work may continue if a
   * tool does not support cancellation. Cancellation targets this run, not separate
   * background-subagent executions. An active run without a cancellation registration returns 409.
   * Cancellation signaling requires Redis. An interrupted active run can instead become FAILED
   * through deadline cleanup; this does not verify that external tool work has stopped.
   *
   * @returns Current run snapshot after requesting cancellation, or an unchanged terminal run.
   *
   * @throws {@link Agents.PlatformAgentsCancelRunError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformAgentsCancelRun(
    request: Agents.PlatformAgentsCancelRunRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformAgentRunResponse, Agents.PlatformAgentsCancelRunError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/agents/{agent_id}/cancellations"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "agent_id", value: request.agentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: platformAgentRunCancellationRequestSchema },
      },
      {
        success: { kind: "json", schema: platformAgentRunResponseSchema },
        errorFactory: Agents.PlatformAgentsCancelRunError,
      },
      options,
    );
  }

  /**
   * Create agent run
   *
   * @remarks
   * Execute an agent run. By default, set `stream` to true to receive server-sent events; otherwise
   * the response contains the final agent messages. Set `execution_mode` to `DURABLE` to persist a
   * new run and return its initial snapshot with HTTP 201 without waiting for execution. Poll the
   * agent-scoped GET run endpoint for progress. Durable execution continues after an HTTP
   * disconnect, but is not automatically resumed after a QE restart or crash. An active turn
   * becomes overdue more than 40 minutes after acceptance (a 30-minute execution timeout plus 10
   * minutes of grace). The next GET of the run marks the overdue turn FAILED without replay; there
   * is no periodic sweep. Without a GET, the stored run can remain RUNNING. Failure does not prove
   * that external tool work has stopped. Paused runs are not expired; an accepted approval
   * continuation starts a fresh deadline. Each POST creates a new run; retrying a POST can create
   * another execution. Submit pending approval decisions through the run responses endpoint, and
   * cancellation can be requested through the run cancellations endpoint. A run tracks one workflow
   * execution; automatic background-subagent wake turns are separate executions, not continuations
   * tracked by this run ID.
   *
   * @returns Successful response.
   *
   * @throws {@link Agents.PlatformAgentsCreateRunError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformAgentsCreateRun(
    request: Agents.PlatformAgentsCreateRunRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformAgentRunWaitResponse, Agents.PlatformAgentsCreateRunError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/agents/{agent_id}/runs"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "agent_id", value: request.agentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: platformAgentRunCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: platformAgentRunWaitResponseSchema },
        errorFactory: Agents.PlatformAgentsCreateRunError,
      },
      options,
    );
  }

  /**
   * Respond to agent run approvals
   *
   * @remarks
   * Submit decisions for every pending tool approval in the paused run's current batch. The run is
   * identified by `run_id` in the JSON body. Decisions apply only to the stored invocations and
   * arguments; argument edits, authentication responses, and session-wide grants are not supported.
   * The caller must own the run, still have agent access, and have the agents.run scope. Acceptance
   * persists the decisions before resuming the same run and chat session. Identical accepted
   * decisions return the current snapshot without another continuation. Conflicting, stale,
   * incomplete, or non-pending decisions return 409. Cancellation registration failure returns 503
   * without accepting the decisions; retry the same approval batch. This retry guarantee does not
   * cover an indeterminate database commit outcome. Go workflow approval resumes currently support
   * one tool invocation and one approval response. Unsupported multi-tool or multi-decision Go
   * resumes fail without executing tools. The resumed action must resolve to the tool identified by
   * the stored approval request and paused checkpoint. Missing or inconsistent identity fails
   * without executing tools. Execution continues after HTTP disconnects, but is not automatically
   * resumed after a QE crash. Each accepted continuation starts a fresh 30-minute execution timeout
   * and 40-minute cleanup deadline. Identical retries do not extend that deadline. Waiting for
   * approval does not expire a run. The next GET marks an overdue active turn FAILED without
   * replaying execution.
   *
   * @returns Decisions accepted, or an identical retry. Poll GET run for continued execution.
   *
   * @throws {@link Agents.PlatformAgentsCreateRunResponsesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformAgentsCreateRunResponses(
    request: Agents.PlatformAgentsCreateRunResponsesRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformAgentRunResponse, Agents.PlatformAgentsCreateRunResponsesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/agents/{agent_id}/responses"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "agent_id", value: request.agentId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: platformAgentRunResponsesRequestSchema },
      },
      {
        success: { kind: "json", schema: platformAgentRunResponseSchema },
        errorFactory: Agents.PlatformAgentsCreateRunResponsesError,
      },
      options,
    );
  }

  /**
   * Get agent
   *
   * @remarks
   * Retrieve details for an agent available to the authenticated user.
   *
   * @returns Successful response.
   *
   * @throws {@link Agents.PlatformAgentsGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformAgentsGet(
    request: Agents.PlatformAgentsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformAgentGetResponse, Agents.PlatformAgentsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/agents/{agent_id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "agent_id", value: request.agentId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformAgentGetResponseSchema },
        errorFactory: Agents.PlatformAgentsGetError,
      },
      options,
    );
  }

  /**
   * Get agent run
   *
   * @remarks
   * Retrieve a persisted workflow execution owned by the authenticated user. The run must belong to
   * the specified agent, and the user must still have access to that agent. Unknown runs, runs
   * owned by another user, and mismatched agent/run identifiers return 404. Requires the agents.run
   * scope. Executions without a persisted workflow record are not available through this endpoint.
   *
   * @returns Current persisted run snapshot. A failed execution is still a successful retrieval.
   *
   * @throws {@link Agents.PlatformAgentsGetRunError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformAgentsGetRun(
    request: Agents.PlatformAgentsGetRunRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformAgentRunResponse, Agents.PlatformAgentsGetRunError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/agents/{agent_id}/runs/{run_id}"),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "agent_id", value: request.agentId, schema: s.string() },
          { name: "run_id", value: request.runId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformAgentRunResponseSchema },
        errorFactory: Agents.PlatformAgentsGetRunError,
      },
      options,
    );
  }

  /**
   * Get agent schemas
   *
   * @remarks
   * Retrieve an agent's input and output JSON schemas.
   *
   * @returns Successful response.
   *
   * @throws {@link Agents.PlatformAgentsGetSchemasError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformAgentsGetSchemas(
    request: Agents.PlatformAgentsGetSchemasRequest,
    options?: RequestOptions,
  ): ApiPromise<PlatformAgentSchemasResponse, Agents.PlatformAgentsGetSchemasError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/agents/{agent_id}/schemas"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "agent_id", value: request.agentId, schema: s.string() }],
        query: [
          { name: "include_tools", value: request.includeTools, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: platformAgentSchemasResponseSchema },
        errorFactory: Agents.PlatformAgentsGetSchemasError,
      },
      options,
    );
  }

  /**
   * Search agents
   *
   * @remarks
   * Search agents available to the authenticated user by agent name.
   *
   * @returns Successful response.
   *
   * @throws {@link Agents.PlatformAgentsSearchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanPlatformApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  platformAgentsSearch(
    request: Agents.PlatformAgentsSearchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PlatformAgentsSearchResponse, Agents.PlatformAgentsSearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/agents/search"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: platformAgentsSearchRequestSchema },
      },
      {
        success: { kind: "json", schema: platformAgentsSearchResponseSchema },
        errorFactory: Agents.PlatformAgentsSearchError,
      },
      options,
    );
  }
}

export namespace Agents {
  export type PlatformAgentsCancelRunRequest = {
    /** ID of the agent that owns the run. */
    agentId: string;
    body: PlatformAgentRunCancellationRequest;
  };

  export class PlatformAgentsCancelRunError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error409", undefined>
      | Declared<"error413", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformAgentsCancelRunError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformAgentsCreateRunRequest = {
    /** ID of the agent to run. */
    agentId: string;
    body: PlatformAgentRunCreateRequest;
  };

  export class PlatformAgentsCreateRunError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error409", undefined>
      | Declared<"error413", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformAgentsCreateRunError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformAgentsCreateRunResponsesRequest = {
    /** ID of the agent that owns the run. */
    agentId: string;
    body: PlatformAgentRunResponsesRequest;
  };

  export class PlatformAgentsCreateRunResponsesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error409", undefined>
      | Declared<"error413", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformAgentsCreateRunResponsesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }

  export type PlatformAgentsGetRequest = {
    /** ID of the agent to retrieve. */
    agentId: string;
  };

  export class PlatformAgentsGetError extends ApiError {
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

    static readonly errors: ErrorDecoders<PlatformAgentsGetError> = [
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

  export type PlatformAgentsGetRunRequest = {
    /** ID of the agent that owns the run. */
    agentId: string;
    /** ID of the durable run to retrieve. */
    runId: string;
  };

  export class PlatformAgentsGetRunError extends ApiError {
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

    static readonly errors: ErrorDecoders<PlatformAgentsGetRunError> = [
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

  export type PlatformAgentsGetSchemasRequest = {
    /** ID of the agent whose schemas should be retrieved. */
    agentId: string;
    /** Whether to include tool metadata in the response. @default false */
    includeTools?: boolean;
  };

  export class PlatformAgentsGetSchemasError extends ApiError {
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

    static readonly errors: ErrorDecoders<PlatformAgentsGetSchemasError> = [
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

  export type PlatformAgentsSearchRequestParams = {
    body: PlatformAgentsSearchRequest;
  };

  export class PlatformAgentsSearchError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error408", undefined>
      | Declared<"error413", undefined>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PlatformAgentsSearchError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 408, kind: "error408", decode: { kind: "empty" } },
      { on: 413, kind: "error413", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
