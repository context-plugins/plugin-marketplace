import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  actionDeliverdDevGovernanceApiSchema,
  type ActionDeliverdDevGovernanceApi,
} from "../models/action-deliverd-dev-governance-api.js";
import {
  apiV1TasksApplyRequestSchema,
  type ApiV1TasksApplyRequest,
} from "../models/api-v1-tasks-apply-request.js";
import {
  apiV1TasksCancelRequestInternalSchema,
  type ApiV1TasksCancelRequest,
} from "../models/api-v1-tasks-cancel-request.js";
import {
  apiV1TasksCancelResponseSchema,
  type ApiV1TasksCancelResponse,
} from "../models/api-v1-tasks-cancel-response.js";
import {
  apiV1TasksCompleteRequestInternalSchema,
  type ApiV1TasksCompleteRequest,
} from "../models/api-v1-tasks-complete-request.js";
import {
  apiV1TasksCompleteResponseSchema,
  type ApiV1TasksCompleteResponse,
} from "../models/api-v1-tasks-complete-response.js";
import {
  apiV1TasksFindingsApprovalRequestInternalSchema,
  type ApiV1TasksFindingsApprovalRequest,
} from "../models/api-v1-tasks-findings-approval-request.js";
import {
  apiV1TasksFindingsKnowledgeRequestInternalSchema,
  type ApiV1TasksFindingsKnowledgeRequest,
} from "../models/api-v1-tasks-findings-knowledge-request.js";
import {
  apiV1TasksFindingsRequestInternalSchema,
  type ApiV1TasksFindingsRequest,
} from "../models/api-v1-tasks-findings-request.js";
import {
  apiV1TasksGovernanceControlsApprovalRequestInternalSchema,
  type ApiV1TasksGovernanceControlsApprovalRequest,
} from "../models/api-v1-tasks-governance-controls-approval-request.js";
import {
  apiV1TasksGovernanceEvidenceRequestInternalSchema,
  type ApiV1TasksGovernanceEvidenceRequest,
} from "../models/api-v1-tasks-governance-evidence-request.js";
import {
  apiV1TasksGovernanceGateResponseSchema,
  type ApiV1TasksGovernanceGateResponse,
} from "../models/api-v1-tasks-governance-gate-response.js";
import {
  apiV1TasksGovernanceReassessmentsRequestInternalSchema,
  type ApiV1TasksGovernanceReassessmentsRequest,
} from "../models/api-v1-tasks-governance-reassessments-request.js";
import {
  apiV1TasksGovernanceRequestInternalSchema,
  type ApiV1TasksGovernanceRequest,
} from "../models/api-v1-tasks-governance-request.js";
import {
  apiV1TasksGovernanceRequest1InternalSchema,
  type ApiV1TasksGovernanceRequest1,
} from "../models/api-v1-tasks-governance-request1.js";
import {
  apiV1TasksGraphResponseSchema,
  type ApiV1TasksGraphResponse,
} from "../models/api-v1-tasks-graph-response.js";
import {
  apiV1TasksLinksRequestSchema,
  type ApiV1TasksLinksRequest,
} from "../models/api-v1-tasks-links-request.js";
import {
  apiV1TasksReopenResponseSchema,
  type ApiV1TasksReopenResponse,
} from "../models/api-v1-tasks-reopen-response.js";
import { apiV1TasksRequestInternalSchema, type ApiV1TasksRequest } from "../models/api-v1-tasks-request.js";
import {
  apiV1TasksRequest1InternalSchema,
  type ApiV1TasksRequest1,
} from "../models/api-v1-tasks-request1.js";
import { apiV1TasksResponseSchema, type ApiV1TasksResponse } from "../models/api-v1-tasks-response.js";
import { apiV1TasksResponse2Schema, type ApiV1TasksResponse2 } from "../models/api-v1-tasks-response2.js";
import {
  apiV1TasksSideTasksRequestInternalSchema,
  type ApiV1TasksSideTasksRequest,
} from "../models/api-v1-tasks-side-tasks-request.js";
import {
  apiV1TasksSideTasksResponseSchema,
  type ApiV1TasksSideTasksResponse,
} from "../models/api-v1-tasks-side-tasks-response.js";
import {
  status2DeliverdDevTasksApiSchema,
  type Status2DeliverdDevTasksApi,
} from "../models/status2-deliverd-dev-tasks-api.js";
import type { Servers } from "../servers.js";

export class Tasks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List objectives
   *
   * @remarks
   * Most recently active first. Side tasks are reached through the objective they belong to.
   *
   * @returns A page of objectives, each with side-task counts
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1Tasks(
    request: Tasks.GetApiV1TasksRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1TasksResponse2, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/tasks"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => status2DeliverdDevTasksApiSchema)),
          },
          { name: "externalId", value: request.externalId, schema: s.optional(s.string()) },
          { name: "q", value: request.q, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1TasksResponse2Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A task, its path, side tasks, findings and links
   *
   * @returns The task
   *
   * @throws {@link Tasks.GetApiV1TasksByIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1TasksById(
    request: Tasks.GetApiV1TasksByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1TasksResponse, Tasks.GetApiV1TasksByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1TasksResponseSchema },
        errorFactory: Tasks.GetApiV1TasksByIdError,
      },
      options,
    );
  }

  /**
   * The context an agent reads instead of the history
   *
   * @remarks
   * The objective, where the task stands, confirmed and suggested decisions, open questions,
   * constraints, side-task results, the next action, the reports published for the task (`reports`:
   * up to ten live ones, newest first, each `{ id, title, url, version, publishedAt }`), and a
   * paragraph to re-anchor on.
   *
   * @returns The context
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1TasksByIdContext(
    request: Tasks.GetApiV1TasksByIdContextRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}/context"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
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
   * What a task was given
   *
   * @remarks
   * Every time knowledge or a playbook was handed to the task or the tasks under it, newest first,
   * with who confirmed each entry.
   *
   * @returns `{ taskId, given }`
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1TasksByIdContextGiven(
    request: Tasks.GetApiV1TasksByIdContextGivenRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}/context-given"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
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
   * A governed task's governance
   *
   * @remarks
   * The profile, AI system, every control with its state and how it is met, the evidence, readiness
   * and the gate answer. A side task's id answers for its objective.
   *
   * @returns The governance
   *
   * @throws {@link Tasks.GetApiV1TasksByIdGovernanceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1TasksByIdGovernance(
    request: Tasks.GetApiV1TasksByIdGovernanceRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Tasks.GetApiV1TasksByIdGovernanceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}/governance"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Tasks.GetApiV1TasksByIdGovernanceError,
      },
      options,
    );
  }

  /**
   * May this governed work proceed?
   *
   * @remarks
   * `allowed`, `reason`, `missingControls` and `blockers` — an open reassessment, an overdue review
   * or a high or critical incident, which only a person clears. With `?action=` (Enterprise) it
   * also asks agent authority: `authority.mode` is allowed, approval or denied. Every check is
   * recorded.
   *
   * @returns The gate's answer
   *
   * @throws {@link Tasks.GetApiV1TasksByIdGovernanceGateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1TasksByIdGovernanceGate(
    request: Tasks.GetApiV1TasksByIdGovernanceGateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1TasksGovernanceGateResponse, Tasks.GetApiV1TasksByIdGovernanceGateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}/governance/gate"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          {
            name: "action",
            value: request.action,
            schema: s.optional(s.lazy(() => actionDeliverdDevGovernanceApiSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1TasksGovernanceGateResponseSchema },
        errorFactory: Tasks.GetApiV1TasksByIdGovernanceGateError,
      },
      options,
    );
  }

  /**
   * The AI governance evidence pack
   *
   * @remarks
   * Profile, AI system, controls, evidence, task graph, decisions, approvals and the audit
   * timeline, with a sha256 digest. `?format=html` to read and print. It assists audit; it does not
   * certify compliance with any law. Every export is audited.
   *
   * @returns The pack
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1TasksByIdGovernancePack(
    request: Tasks.GetApiV1TasksByIdGovernancePackRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}/governance/pack"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
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
   * Every node under the objective, and the links between them
   *
   * @returns Metadata only
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1TasksByIdGraph(
    request: Tasks.GetApiV1TasksByIdGraphRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1TasksGraphResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}/graph"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1TasksGraphResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a task's working state, title or status
   *
   * @remarks
   * State patches merge: fields left out stay. Changing the objective itself is refused to an
   * agent; only a person changes what the work is for.
   *
   * @returns The task
   *
   * @throws {@link Tasks.PatchApiV1TasksByIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchApiV1TasksById(
    request: Tasks.PatchApiV1TasksByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1TasksResponse, Tasks.PatchApiV1TasksByIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1TasksRequest1InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1TasksResponseSchema },
        errorFactory: Tasks.PatchApiV1TasksByIdError,
      },
      options,
    );
  }

  /**
   * Change a governed task's profile
   *
   * @remarks
   * Controls are recomputed. An agent may raise risk or add facts; only a person lowers risk,
   * weakens oversight or clears a fact (403 not_permitted).
   *
   * @returns The governance
   *
   * @throws {@link Tasks.PatchApiV1TasksByIdGovernanceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patchApiV1TasksByIdGovernance(
    request: Tasks.PatchApiV1TasksByIdGovernanceRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Tasks.PatchApiV1TasksByIdGovernanceError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}/governance"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1TasksGovernanceRequest1InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Tasks.PatchApiV1TasksByIdGovernanceError,
      },
      options,
    );
  }

  /**
   * Start an objective
   *
   * @remarks
   * What the work is ultimately for, kept apart from the conversation and returned at the top of
   * every context. With externalId, an open objective the caller already started under it is
   * returned instead (resumed: true, status 200).
   *
   * @returns An open objective already started under this externalId
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1Tasks(
    request: Tasks.PostApiV1TasksRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1TasksResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tasks"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1TasksRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1TasksResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Apply, keep or discard a side task's result
   *
   * @remarks
   * Applied carries decisions up as suggestions (confirmed only when a person applies in Deliverd),
   * adds a summary, merges open questions and takes the next action. Answers with the parent's
   * context and a message that returns to the objective.
   *
   * @returns The side task, the parent and its context
   *
   * @throws {@link Tasks.PostApiV1TasksByIdApplyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1TasksByIdApply(
    request: Tasks.PostApiV1TasksByIdApplyRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Tasks.PostApiV1TasksByIdApplyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}/apply"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1TasksApplyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Tasks.PostApiV1TasksByIdApplyError,
      },
      options,
    );
  }

  /**
   * Call a task off
   *
   * @remarks
   * Cancelling an objective cancels the side tasks still open under it.
   *
   * @returns The task, cancelled
   *
   * @throws {@link Tasks.PostApiV1TasksByIdCancelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1TasksByIdCancel(
    request: Tasks.PostApiV1TasksByIdCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1TasksCancelResponse, Tasks.PostApiV1TasksByIdCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}/cancel"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1TasksCancelRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1TasksCancelResponseSchema },
        errorFactory: Tasks.PostApiV1TasksByIdCancelError,
      },
      options,
    );
  }

  /**
   * Finish a task with a structured result
   *
   * @returns The task, complete
   *
   * @throws {@link Tasks.PostApiV1TasksByIdCompleteError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1TasksByIdComplete(
    request: Tasks.PostApiV1TasksByIdCompleteRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1TasksCompleteResponse, Tasks.PostApiV1TasksByIdCompleteError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}/complete"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1TasksCompleteRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1TasksCompleteResponseSchema },
        errorFactory: Tasks.PostApiV1TasksByIdCompleteError,
      },
      options,
    );
  }

  /**
   * Record a finding
   *
   * @remarks
   * A decision is stored as a suggestion until a person confirms it or an approval decides it.
   *
   * @returns The finding
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1TasksByIdFindings(
    request: Tasks.PostApiV1TasksByIdFindingsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}/findings"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1TasksFindingsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Put a suggested decision to approval
   *
   * @remarks
   * An ordinary approval request on the objective's flow. Approved confirms the decision; rejected
   * rejects it.
   *
   * @returns The decision and its approval
   *
   * @throws {@link Tasks.PostApiV1TasksByIdFindingsByFindingIdApprovalError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1TasksByIdFindingsByFindingIdApproval(
    request: Tasks.PostApiV1TasksByIdFindingsByFindingIdApprovalRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Tasks.PostApiV1TasksByIdFindingsByFindingIdApprovalError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}/findings/{findingId}/approval"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "findingId", value: request.findingId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1TasksFindingsApprovalRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Tasks.PostApiV1TasksByIdFindingsByFindingIdApprovalError,
      },
      options,
    );
  }

  /**
   * Propose a finding as knowledge
   *
   * @remarks
   * Keeps the finding and its task as the entry's source. Still a proposal until a person confirms
   * it.
   *
   * @returns `{ entry, resumed, screening }`
   *
   * @throws {@link Tasks.PostApiV1TasksByIdFindingsByFindingIdKnowledgeError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1TasksByIdFindingsByFindingIdKnowledge(
    request: Tasks.PostApiV1TasksByIdFindingsByFindingIdKnowledgeRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Tasks.PostApiV1TasksByIdFindingsByFindingIdKnowledgeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}/findings/{findingId}/knowledge"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "findingId", value: request.findingId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1TasksFindingsKnowledgeRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Tasks.PostApiV1TasksByIdFindingsByFindingIdKnowledgeError,
      },
      options,
    );
  }

  /**
   * Govern an objective
   *
   * @remarks
   * Put an objective under Compliance Mode with what is known of its profile. Idempotent.
   *
   * @returns The governance
   *
   * @throws {@link Tasks.PostApiV1TasksByIdGovernanceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1TasksByIdGovernance(
    request: Tasks.PostApiV1TasksByIdGovernanceRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Tasks.PostApiV1TasksByIdGovernanceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}/governance"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1TasksGovernanceRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Tasks.PostApiV1TasksByIdGovernanceError,
      },
      options,
    );
  }

  /**
   * Put an approval control to a person
   *
   * @remarks
   * An ordinary approval through the organisation's approval process. The control is satisfied when
   * it is approved. Needs approvals:write.
   *
   * @returns The governance and the approval
   *
   * @throws {@link Tasks.PostApiV1TasksByIdGovernanceControlsByKeyApprovalError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1TasksByIdGovernanceControlsByKeyApproval(
    request: Tasks.PostApiV1TasksByIdGovernanceControlsByKeyApprovalRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Tasks.PostApiV1TasksByIdGovernanceControlsByKeyApprovalError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}/governance/controls/{key}/approval"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1TasksGovernanceControlsApprovalRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Tasks.PostApiV1TasksByIdGovernanceControlsByKeyApprovalError,
      },
      options,
    );
  }

  /**
   * Record evidence for a governed task
   *
   * @remarks
   * Mapped to the controls it speaks to; one item may satisfy several. Approval controls are not
   * satisfied by evidence. Scored evidence carries `results` (what was measured), a tool's own
   * `report` (promptfoo, Inspect, garak, Weave, Braintrust, JUnit and more), turned into results
   * here, or a `pull` from the organisation's connected Langfuse, LangSmith, Braintrust or Weave:
   * the newest experiment or evaluation with the name, read with keys the caller never holds.
   * `release` names the release the results tested — `provider`, `model`, `modelVersion`,
   * `promptHash`, `guardrailsHash`, digests never the text — and is kept on the run: evidence
   * naming another release than the AI system now runs does not count, and says so
   * (`otherRelease`); evidence naming none counts as before. A control with thresholds is met only
   * when its newest scored evidence of this release meets them. A pull answers 404 when the tool is
   * not connected or has no such experiment, 409 `connection_refused` when the tool refuses the
   * stored key, and 502 `upstream_unavailable` when it cannot be read.
   *
   * @returns The governance
   *
   * @throws {@link Tasks.PostApiV1TasksByIdGovernanceEvidenceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1TasksByIdGovernanceEvidence(
    request: Tasks.PostApiV1TasksByIdGovernanceEvidenceRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Tasks.PostApiV1TasksByIdGovernanceEvidenceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}/governance/evidence"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1TasksGovernanceEvidenceRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Tasks.PostApiV1TasksByIdGovernanceEvidenceError,
      },
      options,
    );
  }

  /**
   * Ask for a governed task to be reassessed
   *
   * @remarks
   * Enterprise. The gate stays closed until a person completes the reassessment in Deliverd.
   *
   * @returns { reassessment, governance }
   *
   * @throws {@link Tasks.PostApiV1TasksByIdGovernanceReassessmentsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1TasksByIdGovernanceReassessments(
    request: Tasks.PostApiV1TasksByIdGovernanceReassessmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Tasks.PostApiV1TasksByIdGovernanceReassessmentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}/governance/reassessments"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1TasksGovernanceReassessmentsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Tasks.PostApiV1TasksByIdGovernanceReassessmentsError,
      },
      options,
    );
  }

  /**
   * Link two tasks
   *
   * @remarks
   * An edge beyond parent and child: depends_on, blocks, related_to, supersedes or resulted_in.
   *
   * @returns The link
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1TasksByIdLinks(
    request: Tasks.PostApiV1TasksByIdLinksRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}/links"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1TasksLinksRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Reopen a finished task
   *
   * @remarks
   * The earlier result is kept in previousResults.
   *
   * @returns The task, in progress again
   *
   * @throws {@link Tasks.PostApiV1TasksByIdReopenError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1TasksByIdReopen(
    request: Tasks.PostApiV1TasksByIdReopenRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1TasksReopenResponse, Tasks.PostApiV1TasksByIdReopenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}/reopen"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1TasksReopenResponseSchema },
        errorFactory: Tasks.PostApiV1TasksByIdReopenError,
      },
      options,
    );
  }

  /**
   * Branch a side task
   *
   * @remarks
   * It begins with a snapshot of the parent: objective, state, decisions and constraints.
   *
   * @returns The side task
   *
   * @throws {@link Tasks.PostApiV1TasksByIdSideTasksError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1TasksByIdSideTasks(
    request: Tasks.PostApiV1TasksByIdSideTasksRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1TasksSideTasksResponse, Tasks.PostApiV1TasksByIdSideTasksError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/tasks/{id}/side-tasks"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1TasksSideTasksRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1TasksSideTasksResponseSchema },
        errorFactory: Tasks.PostApiV1TasksByIdSideTasksError,
      },
      options,
    );
  }
}

export namespace Tasks {
  export type GetApiV1TasksRequest = {
    limit?: number;
    /** nextCursor from a previous response. One we did not issue is refused. */
    cursor?: string;
    status?: Status2DeliverdDevTasksApi;
    externalId?: string;
    q?: string;
  };

  export type GetApiV1TasksByIdRequest = {
    id: string;
  };

  export class GetApiV1TasksByIdError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1TasksByIdError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetApiV1TasksByIdContextRequest = {
    id: string;
  };

  export type GetApiV1TasksByIdContextGivenRequest = {
    id: string;
  };

  export type GetApiV1TasksByIdGovernanceRequest = {
    id: string;
  };

  export class GetApiV1TasksByIdGovernanceError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1TasksByIdGovernanceError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetApiV1TasksByIdGovernanceGateRequest = {
    id: string;
    action?: ActionDeliverdDevGovernanceApi;
  };

  export class GetApiV1TasksByIdGovernanceGateError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1TasksByIdGovernanceGateError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type GetApiV1TasksByIdGovernancePackRequest = {
    id: string;
  };

  export type GetApiV1TasksByIdGraphRequest = {
    id: string;
  };

  export type PatchApiV1TasksByIdRequest = {
    id: string;
    body?: ApiV1TasksRequest1;
  };

  export class PatchApiV1TasksByIdError extends ApiError {
    declare readonly payload: Declared<"error403", undefined> | Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PatchApiV1TasksByIdError> = [
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type PatchApiV1TasksByIdGovernanceRequest = {
    id: string;
    body?: ApiV1TasksGovernanceRequest1;
  };

  export class PatchApiV1TasksByIdGovernanceError extends ApiError {
    declare readonly payload:
      | Declared<"error402", undefined>
      | Declared<"error403", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchApiV1TasksByIdGovernanceError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1TasksRequest = {
    body?: ApiV1TasksRequest;
  };

  export type PostApiV1TasksByIdApplyRequest = {
    id: string;
    body?: ApiV1TasksApplyRequest;
  };

  export class PostApiV1TasksByIdApplyError extends ApiError {
    declare readonly payload: Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1TasksByIdApplyError> = [
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1TasksByIdCancelRequest = {
    id: string;
    body?: ApiV1TasksCancelRequest;
  };

  export class PostApiV1TasksByIdCancelError extends ApiError {
    declare readonly payload: Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1TasksByIdCancelError> = [
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1TasksByIdCompleteRequest = {
    id: string;
    body?: ApiV1TasksCompleteRequest;
  };

  export class PostApiV1TasksByIdCompleteError extends ApiError {
    declare readonly payload: Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1TasksByIdCompleteError> = [
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1TasksByIdFindingsRequest = {
    id: string;
    body?: ApiV1TasksFindingsRequest;
  };

  export type PostApiV1TasksByIdFindingsByFindingIdApprovalRequest = {
    id: string;
    findingId: string;
    body?: ApiV1TasksFindingsApprovalRequest;
  };

  export class PostApiV1TasksByIdFindingsByFindingIdApprovalError extends ApiError {
    declare readonly payload: Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1TasksByIdFindingsByFindingIdApprovalError> = [
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1TasksByIdFindingsByFindingIdKnowledgeRequest = {
    id: string;
    findingId: string;
    body?: ApiV1TasksFindingsKnowledgeRequest;
  };

  export class PostApiV1TasksByIdFindingsByFindingIdKnowledgeError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1TasksByIdFindingsByFindingIdKnowledgeError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1TasksByIdGovernanceRequest = {
    id: string;
    body?: ApiV1TasksGovernanceRequest;
  };

  export class PostApiV1TasksByIdGovernanceError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1TasksByIdGovernanceError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1TasksByIdGovernanceControlsByKeyApprovalRequest = {
    id: string;
    key: string;
    body?: ApiV1TasksGovernanceControlsApprovalRequest;
  };

  export class PostApiV1TasksByIdGovernanceControlsByKeyApprovalError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1TasksByIdGovernanceControlsByKeyApprovalError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1TasksByIdGovernanceEvidenceRequest = {
    id: string;
    body?: ApiV1TasksGovernanceEvidenceRequest;
  };

  export class PostApiV1TasksByIdGovernanceEvidenceError extends ApiError {
    declare readonly payload:
      | Declared<"error402", undefined>
      | Declared<"error409", undefined>
      | Declared<"error502", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1TasksByIdGovernanceEvidenceError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 502, kind: "error502", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1TasksByIdGovernanceReassessmentsRequest = {
    id: string;
    body?: ApiV1TasksGovernanceReassessmentsRequest;
  };

  export class PostApiV1TasksByIdGovernanceReassessmentsError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1TasksByIdGovernanceReassessmentsError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1TasksByIdLinksRequest = {
    id: string;
    body?: ApiV1TasksLinksRequest;
  };

  export type PostApiV1TasksByIdReopenRequest = {
    id: string;
  };

  export class PostApiV1TasksByIdReopenError extends ApiError {
    declare readonly payload: Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1TasksByIdReopenError> = [
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1TasksByIdSideTasksRequest = {
    id: string;
    body?: ApiV1TasksSideTasksRequest;
  };

  export class PostApiV1TasksByIdSideTasksError extends ApiError {
    declare readonly payload: Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1TasksByIdSideTasksError> = [
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }
}
