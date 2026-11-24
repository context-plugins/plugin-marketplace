import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1GovernanceAuthorityEvaluateRequestSchema,
  type ApiV1GovernanceAuthorityEvaluateRequest,
} from "../models/api-v1-governance-authority-evaluate-request.js";
import {
  apiV1GovernanceFrameworksRequestInternalSchema,
  type ApiV1GovernanceFrameworksRequest,
} from "../models/api-v1-governance-frameworks-request.js";
import {
  apiV1GovernanceIncidentsReportsRequestInternalSchema,
  type ApiV1GovernanceIncidentsReportsRequest,
} from "../models/api-v1-governance-incidents-reports-request.js";
import {
  apiV1GovernanceIncidentsRequestInternalSchema,
  type ApiV1GovernanceIncidentsRequest,
} from "../models/api-v1-governance-incidents-request.js";
import {
  apiV1GovernanceIncidentsResponseSchema,
  type ApiV1GovernanceIncidentsResponse,
} from "../models/api-v1-governance-incidents-response.js";
import { formatSchema, type Format } from "../models/format.js";
import { riskSchema, type Risk } from "../models/risk.js";
import {
  statusDeliverdDevGovernanceApiSchema,
  type StatusDeliverdDevGovernanceApi,
} from "../models/status-deliverd-dev-governance-api.js";
import { templateSchema, type Template } from "../models/template.js";
import type { Servers } from "../servers.js";

export class GovernanceApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * The frameworks this organisation can see
   *
   * @remarks
   * The built-in packs (NIST AI RMF, ISO/IEC 42001, EU AI Act, UK AI principles, DORA, SR 26-2, PRA
   * SS1/23 and FCA AI good practice) with their requirements and versions, the organisation's own
   * frameworks, and which are applied at which version. A pack maps requirements onto controls for
   * review; it is not legal advice.
   *
   * @returns { frameworks, custom, customControls, canAdopt, canWriteCustom, statement }
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1GovernanceFrameworks(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/governance/frameworks"),
        auth: this.#auth.bearerAuth,
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

  /**
   * How framework requirements map onto controls
   *
   * @remarks
   * With `taskId`, how far that governed task's completed controls cover each requirement. A
   * mapping, never a compliance verdict.
   *
   * @returns { taskId, frameworks, statement }
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1GovernanceFrameworksMapping(
    request: GovernanceApi.GetApiV1GovernanceFrameworksMappingRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/governance/frameworks/mapping"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "taskId", value: request.taskId, schema: s.optional(s.string()) },
          { name: "framework", value: request.framework, schema: s.optional(s.string()) },
        ],
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
   * The ICT third-party register
   *
   * @remarks
   * DORA's register of information, for the providers behind the organisation's AI systems: who
   * keeps it (`entity`), the `providers`, the `arrangements` (contracts) with the AI systems that
   * run under each, what each entry still lacks (`gaps`), the `concentration` on each provider, and
   * the AI systems not yet in the register.
   *
   * @returns { entity, providers, arrangements, concentration, unregisteredSystems, rules }
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1GovernanceIctRegister(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/governance/ict-register"),
        auth: this.#auth.bearerAuth,
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

  /**
   * The register in the shape of the register-of-information templates
   *
   * @remarks
   * B_01.01, B_02.01, B_02.02, B_05.01, B_06.01 and B_07.01 of Implementing Regulation (EU)
   * 2024/2956, with the regulation's column codes. JSON is every template (or `template`) with its
   * columns and rows; `format=csv` is one template, headed by its column codes. Values nobody
   * recorded are empty. For the organisation's own register to take in, not the submission itself.
   *
   * @returns { statement, templates }, or CSV
   *
   * @throws {@link GovernanceApi.GetApiV1GovernanceIctRegisterExportError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1GovernanceIctRegisterExport(
    request: GovernanceApi.GetApiV1GovernanceIctRegisterExportRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, GovernanceApi.GetApiV1GovernanceIctRegisterExportError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/governance/ict-register/export"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "format", value: request.format, schema: s.optional(s.lazy(() => formatSchema)) },
          { name: "template", value: request.template, schema: s.optional(s.lazy(() => templateSchema)) },
          { name: "asOf", value: request.asOf, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GovernanceApi.GetApiV1GovernanceIctRegisterExportError,
      },
      options,
    );
  }

  /**
   * AI incidents, newest first
   *
   * @remarks
   * Paged with `limit` and `cursor`; `nextCursor` is null at the end. Incidents against a task you
   * cannot read are left out.
   *
   * @returns A page of incidents
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1GovernanceIncidents(
    request: GovernanceApi.GetApiV1GovernanceIncidentsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1GovernanceIncidentsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/governance/incidents"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusDeliverdDevGovernanceApiSchema)),
          },
          { name: "aiSystemId", value: request.aiSystemId, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1GovernanceIncidentsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * One AI incident, with its DORA reporting
   *
   * @remarks
   * The incident, its DORA classification (`dora`: the facts, `major`, each criterion and the
   * reason), its reports with their sign-off status, and `schedule`: which report is due next and
   * by when. Nothing is due unless it is classified major.
   *
   * @returns The incident
   *
   * @throws {@link GovernanceApi.GetApiV1GovernanceIncidentsByIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1GovernanceIncidentsById(
    request: GovernanceApi.GetApiV1GovernanceIncidentsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, GovernanceApi.GetApiV1GovernanceIncidentsByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/governance/incidents/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GovernanceApi.GetApiV1GovernanceIncidentsByIdError,
      },
      options,
    );
  }

  /**
   * The organisation's internal AI policies, every version
   *
   * @remarks
   * Governed tasks record the version they were evaluated against. Publishing a version is done by
   * a person in Deliverd.
   *
   * @returns { policies }
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1GovernancePolicies(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/governance/policies"),
        auth: this.#auth.bearerAuth,
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

  /**
   * The organisation's AI governance in counts
   *
   * @remarks
   * Systems, governed tasks, outstanding controls, pending approvals, expired exceptions, open
   * incidents and what needs review. `jurisdiction` and `framework` filters are Enterprise. Never a
   * compliance percentage.
   *
   * @returns The summary
   *
   * @throws {@link GovernanceApi.GetApiV1GovernanceSummaryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1GovernanceSummary(
    request: GovernanceApi.GetApiV1GovernanceSummaryRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, GovernanceApi.GetApiV1GovernanceSummaryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/governance/summary"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "aiSystemId", value: request.aiSystemId, schema: s.optional(s.string()) },
          { name: "risk", value: request.risk, schema: s.optional(s.lazy(() => riskSchema)) },
          { name: "owner", value: request.owner, schema: s.optional(s.string()) },
          { name: "provider", value: request.provider, schema: s.optional(s.string()) },
          { name: "dataClassification", value: request.dataClassification, schema: s.optional(s.string()) },
          { name: "jurisdiction", value: request.jurisdiction, schema: s.optional(s.string()) },
          { name: "framework", value: request.framework, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GovernanceApi.GetApiV1GovernanceSummaryError,
      },
      options,
    );
  }

  /**
   * May this agent take this kind of action?
   *
   * @remarks
   * Enterprise. By the organisation's authority policy and the agent's own, which can only be
   * stricter. `mode` is allowed, approval or denied. Records nothing.
   *
   * @returns { action, mode, source, reason, agentId, agentName }
   *
   * @throws {@link GovernanceApi.PostApiV1GovernanceAuthorityEvaluateError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1GovernanceAuthorityEvaluate(
    request: GovernanceApi.PostApiV1GovernanceAuthorityEvaluateRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, GovernanceApi.PostApiV1GovernanceAuthorityEvaluateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/governance/authority/evaluate"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1GovernanceAuthorityEvaluateRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GovernanceApi.PostApiV1GovernanceAuthorityEvaluateError,
      },
      options,
    );
  }

  /**
   * Draft the organisation's own framework
   *
   * @remarks
   * Enterprise. Saved as a draft; it applies only once a person publishes and adopts it. A
   * published version is never edited — a change is a new version.
   *
   * @returns The draft
   *
   * @throws {@link GovernanceApi.PostApiV1GovernanceFrameworksError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1GovernanceFrameworks(
    request: GovernanceApi.PostApiV1GovernanceFrameworksRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, GovernanceApi.PostApiV1GovernanceFrameworksError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/governance/frameworks"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1GovernanceFrameworksRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GovernanceApi.PostApiV1GovernanceFrameworksError,
      },
      options,
    );
  }

  /**
   * Report an AI incident
   *
   * @remarks
   * Against a governed task, an AI system, or both. High or critical closes the task's governance
   * gate until a person resolves it. Permanent: it cannot be edited or withdrawn.
   *
   * @returns The incident
   *
   * @throws {@link GovernanceApi.PostApiV1GovernanceIncidentsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1GovernanceIncidents(
    request: GovernanceApi.PostApiV1GovernanceIncidentsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, GovernanceApi.PostApiV1GovernanceIncidentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/governance/incidents"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1GovernanceIncidentsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GovernanceApi.PostApiV1GovernanceIncidentsError,
      },
      options,
    );
  }

  /**
   * Draft a DORA report and put it to sign-off
   *
   * @remarks
   * initial, intermediate or final on a major incident, in that order; or reclassification, for one
   * notified as major and now not. Creates an approval for a person to sign it off. Needs
   * approvals:write as well as tasks:write.
   *
   * @returns { incident, reportId, approvalId, approvalUrl }
   *
   * @throws {@link GovernanceApi.PostApiV1GovernanceIncidentsByIdReportsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1GovernanceIncidentsByIdReports(
    request: GovernanceApi.PostApiV1GovernanceIncidentsByIdReportsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, GovernanceApi.PostApiV1GovernanceIncidentsByIdReportsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/governance/incidents/{id}/reports"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1GovernanceIncidentsReportsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: GovernanceApi.PostApiV1GovernanceIncidentsByIdReportsError,
      },
      options,
    );
  }
}

export namespace GovernanceApi {
  export type GetApiV1GovernanceFrameworksMappingRequest = {
    taskId?: string;
    framework?: string;
  };

  export type GetApiV1GovernanceIctRegisterExportRequest = {
    format?: Format;
    template?: Template;
    /** The reporting date; today when omitted */
    asOf?: string;
  };

  export class GetApiV1GovernanceIctRegisterExportError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1GovernanceIctRegisterExportError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type GetApiV1GovernanceIncidentsRequest = {
    status?: StatusDeliverdDevGovernanceApi;
    aiSystemId?: string;
    limit?: number;
    cursor?: string;
  };

  export type GetApiV1GovernanceIncidentsByIdRequest = {
    id: string;
  };

  export class GetApiV1GovernanceIncidentsByIdError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1GovernanceIncidentsByIdError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export type GetApiV1GovernanceSummaryRequest = {
    aiSystemId?: string;
    risk?: Risk;
    owner?: string;
    provider?: string;
    dataClassification?: string;
    jurisdiction?: string;
    framework?: string;
  };

  export class GetApiV1GovernanceSummaryError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1GovernanceSummaryError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1GovernanceAuthorityEvaluateRequest = {
    body?: ApiV1GovernanceAuthorityEvaluateRequest;
  };

  export class PostApiV1GovernanceAuthorityEvaluateError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1GovernanceAuthorityEvaluateError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1GovernanceFrameworksRequest = {
    body?: ApiV1GovernanceFrameworksRequest;
  };

  export class PostApiV1GovernanceFrameworksError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1GovernanceFrameworksError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1GovernanceIncidentsRequest = {
    body?: ApiV1GovernanceIncidentsRequest;
  };

  export class PostApiV1GovernanceIncidentsError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1GovernanceIncidentsError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
    ];
  }

  export type PostApiV1GovernanceIncidentsByIdReportsRequest = {
    id: string;
    body?: ApiV1GovernanceIncidentsReportsRequest;
  };

  export class PostApiV1GovernanceIncidentsByIdReportsError extends ApiError {
    declare readonly payload: Declared<"error402", undefined> | Declared<"error409", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1GovernanceIncidentsByIdReportsError> = [
      { on: 402, kind: "error402", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }
}
