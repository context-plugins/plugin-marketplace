import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { EventStream } from "../core/event-stream.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cloudFlowBuildRequestSchema,
  type CloudFlowBuildRequest,
} from "../models/cloud-flow-build-request.js";
import {
  cloudFlowRefineRequestSchema,
  type CloudFlowRefineRequest,
} from "../models/cloud-flow-refine-request.js";
import {
  cloudflowFlowBundleInternalSchema,
  type CloudflowFlowBundle,
} from "../models/cloudflow-flow-bundle.js";
import {
  cloudflowImportFlowsRequestInternalSchema,
  cloudflowImportFlowsRequestSchema,
  type CloudflowImportFlowsRequest,
} from "../models/cloudflow-import-flows-request.js";
import { cloudflowImportPlanSchema, type CloudflowImportPlan } from "../models/cloudflow-import-plan.js";
import {
  cloudflowListResponseSchema,
  type CloudflowListResponse,
} from "../models/cloudflow-list-response.js";
import { cloudflowRunListSchema, type CloudflowRunList } from "../models/cloudflow-run-list.js";
import { cloudflowRunSummarySchema, type CloudflowRunSummary } from "../models/cloudflow-run-summary.js";
import { cloudflowRunSchema, type CloudflowRun } from "../models/cloudflow-run.js";
import {
  cloudflowTemplateListResponseSchema,
  type CloudflowTemplateListResponse,
} from "../models/cloudflow-template-list-response.js";
import { cloudflowTemplateSchema, type CloudflowTemplate } from "../models/cloudflow-template.js";
import {
  cloudflowTestRunValidationSchema,
  type CloudflowTestRunValidation,
} from "../models/cloudflow-test-run-validation.js";
import {
  cloudflowV1FlowsActionsTrigger409Error1InternalSchema,
  type CloudflowV1FlowsActionsTrigger409Error1,
} from "../models/cloudflow-v1-flows-actions-trigger409-error1.js";
import {
  cloudflowV1TriggerResponseSchema,
  type CloudflowV1TriggerResponse,
} from "../models/cloudflow-v1-trigger-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { modeDoiTCloudFlowApiSchema, type ModeDoiTCloudFlowApi } from "../models/mode-doi-tcloud-flow-api.js";
import { problemDetailsInternalSchema, type ProblemDetails } from "../models/problem-details.js";
import type { Servers } from "../servers.js";

/**
 * Manage CloudFlow.
 */
export class CloudFlowApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Build a new CloudFlow from scratch
   *
   * @remarks
   * Creates a new CloudFlow and generates its nodes and connections based on the provided natural
   * language intent. The operation streams incremental build events, including the ID of the newly
   * created flow, as they are produced.
   *
   * @returns OK - Build event stream.
   *
   * @throws {@link CloudFlowApi.BuildCloudFlowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  buildCloudFlow(
    request: CloudFlowApi.BuildCloudFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<EventStream<string>, CloudFlowApi.BuildCloudFlowError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cloudflow/v1/flows/actions/build"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cloudFlowBuildRequestSchema },
      },
      {
        success: { kind: "eventStreamText", dataSchema: s.string() },
        errorFactory: CloudFlowApi.BuildCloudFlowError,
      },
      options,
    );
  }

  /**
   * Export a flow as a portable bundle
   *
   * @remarks
   * Serializes the flow — plus every flow it references through subflow nodes — into a
   * tenant-neutral, credential-free JSON bundle that can be imported into any tenant with the
   * import operation. Tenant-scoped references (connections, Datastore tables, global variables)
   * are declared as named requirements and rebound at import time; policy and Slack-channel
   * references cannot travel and are recorded as unsupported references. The bundle never contains
   * credentials, tenant identifiers, schedules, or execution state.
   *
   * @returns The flow bundle.
   *
   * @throws {@link CloudFlowApi.ExportCloudflowFlowError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  exportCloudflowFlow(
    request: CloudFlowApi.ExportCloudflowFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<CloudflowFlowBundle, CloudFlowApi.ExportCloudflowFlowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/cloudflow/v1/flows/{flowId}/export"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "flowId", value: request.flowId, schema: s.string() }],
        query: [
          {
            name: "includeVariableValues",
            value: request.includeVariableValues,
            schema: s.defaulted(s.boolean(), true),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cloudflowFlowBundleInternalSchema },
        errorFactory: CloudFlowApi.ExportCloudflowFlowError,
      },
      options,
    );
  }

  /**
   * Read a flow run, node by node
   *
   * @remarks
   * Returns a run's status and, for each node, the JSON it consumed and produced. This is how you
   * find out *why* a run failed, or that it "succeeded" while producing the wrong data.
   *
   * **`input` is null for most node types, and that is not an error.** Only action nodes — the AWS,
   * GCP, Azure, Oracle, DoiT and admin operations — record their inputs. Transform, code, branch,
   * switch, datastore, subflow and trigger nodes record none, so their `input` is always null.
   * `output` is recorded by every node that finishes, so read a transform's behaviour from its
   * `output`.
   *
   * Payloads appear as soon as a node reports a terminal status, so a poll loop can read results
   * while later nodes are still running.
   *
   * Any value the node's schema marks sensitive is replaced with a redaction marker; credentials
   * and connection configuration never appear.
   *
   * Each `input` and `output` is capped at 64KB. When a payload exceeds that, whole entries are
   * dropped from the end, `truncated` is true, and `totalBytes` reports the untruncated size —
   * nothing is silently cut, and what you receive is always valid JSON.
   *
   * Runs belonging to another tenant, or to a different flow, return `404`. Nodes inside a fan-out
   * currently report only the last path to finish.
   *
   * @returns The run and its per-node detail.
   *
   * @throws {@link CloudFlowApi.GetCloudflowFlowRunError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCloudflowFlowRun(
    request: CloudFlowApi.GetCloudflowFlowRunRequest,
    options?: RequestOptions,
  ): ApiPromise<CloudflowRun, CloudFlowApi.GetCloudflowFlowRunError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/cloudflow/v1/flows/{flowId}/runs/{runId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "flowId", value: request.flowId, schema: s.string() },
          { name: "runId", value: request.runId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cloudflowRunSchema },
        errorFactory: CloudFlowApi.GetCloudflowFlowRunError,
      },
      options,
    );
  }

  /**
   * Retrieve a template
   *
   * @remarks
   * Returns a single CloudFlow template by ID.
   *
   * @returns OK
   *
   * @throws {@link CloudFlowApi.GetCloudflowTemplateError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCloudflowTemplate(
    request: CloudFlowApi.GetCloudflowTemplateRequest,
    options?: RequestOptions,
  ): ApiPromise<CloudflowTemplate, CloudFlowApi.GetCloudflowTemplateError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/cloudflow/v1/templates/{templateId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "templateId", value: request.templateId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cloudflowTemplateSchema },
        errorFactory: CloudFlowApi.GetCloudflowTemplateError,
      },
      options,
    );
  }

  /**
   * Import a flow bundle
   *
   * @remarks
   * Creates every flow of a previously exported bundle in the authenticated tenant. Imports are
   * create-only: each call creates new draft flows with new IDs — nothing is published and no
   * schedule is activated until the target tenant publishes.
   *
   * Requirements declared by the bundle are resolved through `bindings` (requirement key →
   * target-tenant resource ID). Unbound connections and Datastore tables leave the referencing
   * nodes flagged incomplete; unbound global variables are auto-created. Pass
   * `options.createMissingTables: true` to create missing Datastore tables from the schemas
   * embedded in the bundle (structure only, never row data).
   *
   * **Dry-run**: pass `?dryRun=true` to validate without writing. The response is an import plan:
   * per-requirement resolutions with candidate bindings in the target tenant, the flows that would
   * be created, and every validation issue at once.
   *
   * @returns Dry-run import plan (no writes performed).
   *
   * @throws {@link CloudFlowApi.ImportCloudflowFlowError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  importCloudflowFlow(
    request: CloudFlowApi.ImportCloudflowFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<CloudflowImportPlan, CloudFlowApi.ImportCloudflowFlowError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cloudflow/v1/flows/actions/import"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [{ name: "dryRun", value: request.dryRun, schema: s.defaulted(s.boolean(), false) }],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cloudflowImportFlowsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: cloudflowImportPlanSchema },
        errorFactory: CloudFlowApi.ImportCloudflowFlowError,
      },
      options,
    );
  }

  /**
   * List a flow's runs
   *
   * @remarks
   * Returns a flow's runs, newest first. Use `mode` to separate test runs from production ones —
   * test runs are included by default.
   *
   * Per-node detail is not included here; fetch a single run to read what each node consumed and
   * produced.
   *
   * @returns A page of runs.
   *
   * @throws {@link CloudFlowApi.ListCloudflowFlowRunsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCloudflowFlowRuns(
    request: CloudFlowApi.ListCloudflowFlowRunsRequest,
    options?: RequestOptions,
  ): ApiPromise<CloudflowRunList, CloudFlowApi.ListCloudflowFlowRunsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/cloudflow/v1/flows/{flowId}/runs"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "flowId", value: request.flowId, schema: s.string() }],
        query: [
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "mode", value: request.mode, schema: s.optional(s.lazy(() => modeDoiTCloudFlowApiSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cloudflowRunListSchema },
        errorFactory: CloudFlowApi.ListCloudflowFlowRunsError,
      },
      options,
    );
  }

  /**
   * List templates
   *
   * @remarks
   * Returns the catalogue of available CloudFlow templates (blueprints). Templates are read-only.
   * To create a flow from a template, use `POST /flows` with a `templateId`.
   *
   * @returns OK
   *
   * @throws {@link CloudFlowApi.ListCloudflowTemplatesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCloudflowTemplates(
    request: CloudFlowApi.ListCloudflowTemplatesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CloudflowTemplateListResponse, CloudFlowApi.ListCloudflowTemplatesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/cloudflow/v1/templates"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cloudflowTemplateListResponseSchema },
        errorFactory: CloudFlowApi.ListCloudflowTemplatesError,
      },
      options,
    );
  }

  /**
   * List CloudFlows
   *
   * @remarks
   * Returns a cursor-paginated list of CloudFlows.
   *
   * @returns Paginated list of CloudFlows.
   *
   * @throws {@link CloudFlowApi.ListCloudflowsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCloudflows(
    request: CloudFlowApi.ListCloudflowsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CloudflowListResponse, CloudFlowApi.ListCloudflowsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/cloudflow/v1/flows"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cloudflowListResponseSchema },
        errorFactory: CloudFlowApi.ListCloudflowsError,
      },
      options,
    );
  }

  /**
   * Refine a CloudFlow from natural language intent
   *
   * @remarks
   * Refines the specified CloudFlow by generating and updating nodes and connections based on the
   * provided natural language intent. The operation streams incremental build events as they are
   * produced.
   *
   * @returns OK - Refine event stream.
   *
   * @throws {@link CloudFlowApi.RefineCloudFlowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  refineCloudFlow(
    request: CloudFlowApi.RefineCloudFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<EventStream<string>, CloudFlowApi.RefineCloudFlowError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cloudflow/v1/flows/{flowId}/actions/refine"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "flowId", value: request.flowId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cloudFlowRefineRequestSchema },
      },
      {
        success: { kind: "eventStreamText", dataSchema: s.string() },
        errorFactory: CloudFlowApi.RefineCloudFlowError,
      },
      options,
    );
  }

  /**
   * Stop a flow run
   *
   * @remarks
   * Stops the run currently in progress for the given flow. The run is identified from the flow
   * alone — no run ID is needed, since a flow can only have one run active at a time.
   *
   * No `Idempotency-Key` is required. This is a state transition, not a resource creation.
   *
   * Returns `409` when the flow has no run in progress, which includes a run that reached a
   * terminal state between this request and the stop attempt.
   *
   * @returns The run was stopped. The body is the run as it stands after stopping.
   *
   * @throws {@link CloudFlowApi.StopCloudflowFlowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stopCloudflowFlow(
    request: CloudFlowApi.StopCloudflowFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<CloudflowRunSummary, CloudFlowApi.StopCloudflowFlowError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cloudflow/v1/flows/{flowId}/actions/stop"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "flowId", value: request.flowId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cloudflowRunSummarySchema },
        errorFactory: CloudFlowApi.StopCloudflowFlowError,
      },
      options,
    );
  }

  /**
   * Test-run a flow
   *
   * @remarks
   * Runs a flow once as a test, and **accepts an unpublished (draft) flow** — unlike
   * `actions/trigger`, which requires the flow to be published. Use this to verify a newly authored
   * or edited flow before publishing it.
   *
   * Execution is identical to a production run: the same graph, the same bound connections, the
   * same credentials, and the same approval behaviour. An approval-gated node still parks the run
   * and its side effect still waits for a real approval — there is no request that skips one.
   *
   * The run is recorded as a test, so it does not appear in run history, does not count towards
   * dashboard statistics, does not become a dashboard widget's data source, and does not consume a
   * scheduled-run budget. It does hold the flow's concurrency lock, so a `409` is returned while
   * the flow is already running.
   *
   * The flow's first node must be a webhook, scheduled, or manual trigger.
   *
   * Before dispatching, the flow is validated with the same checks publish applies — a draft has
   * never been through them. A flow that fails returns `422` listing every offending node at once,
   * so all of them can be fixed in one pass.
   *
   * Poll the `Location` URL to follow the run and read what each node produced.
   *
   * Pass `?dryRun=true` to validate the flow without starting a run.
   *
   * @returns Test run accepted. The response is a snapshot taken at dispatch, so `status` is
   * `pending`; follow the `Location` header to read the run as it progresses.
   *
   * @throws {@link CloudFlowApi.TestRunCloudflowFlowError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  testRunCloudflowFlow(
    request: CloudFlowApi.TestRunCloudflowFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<CloudflowRunSummary, CloudFlowApi.TestRunCloudflowFlowError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cloudflow/v1/flows/{flowId}/actions/test-run"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "flowId", value: request.flowId, schema: s.string() }],
        query: [{ name: "dryRun", value: request.dryRun, schema: s.optional(s.boolean()) }],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: cloudflowRunSummarySchema },
        errorFactory: CloudFlowApi.TestRunCloudflowFlowError,
      },
      options,
    );
  }

  /**
   * Trigger a flow run
   *
   * @remarks
   * Starts a run of a **published** flow whose first node is a webhook, scheduled, or manual
   * trigger. A draft flow is rejected with `422` — use `actions/test-run` to run one.
   *
   * No `Idempotency-Key` is required. This is a state transition, not a resource creation.
   *
   * The response is a snapshot taken at dispatch, so `status` is always `pending` and the timing
   * fields are not yet populated. Read the run back through `GET
   * /cloudflow/v1/flows/{flowId}/runs/{runId}` to follow its progress.
   *
   * A flow holds a concurrency lock while it runs, so triggering one that is already running
   * returns `409` with the active run embedded in the problem body — no second lookup needed.
   *
   * @returns The run was started. The snapshot is taken at dispatch, so `status` is `pending`.
   *
   * @throws {@link CloudFlowApi.TriggerCloudflowFlowError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  triggerCloudflowFlow(
    request: CloudFlowApi.TriggerCloudflowFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<CloudflowRunSummary, CloudFlowApi.TriggerCloudflowFlowError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cloudflow/v1/flows/{flowId}/actions/trigger"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "flowId", value: request.flowId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: cloudflowRunSummarySchema },
        errorFactory: CloudFlowApi.TriggerCloudflowFlowError,
      },
      options,
    );
  }

  /**
   * Trigger a webhook flow
   *
   * @remarks
   * Triggers execution of a published CloudFlow whose first node is a webhook trigger. The request
   * body must be valid JSON and is passed to the flow as webhook payload data.
   *
   * @returns Accepted - CloudFlow execution started.
   *
   * @throws {@link CloudFlowApi.TriggerCloudflowWebhookError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  triggerCloudflowWebhook(
    request: CloudFlowApi.TriggerCloudflowWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<CloudflowV1TriggerResponse, CloudFlowApi.TriggerCloudflowWebhookError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/cloudflow/v1/trigger/{flowId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "flowId", value: request.flowId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: cloudflowV1TriggerResponseSchema },
        errorFactory: CloudFlowApi.TriggerCloudflowWebhookError,
      },
      options,
    );
  }
}

export namespace CloudFlowApi {
  export type BuildCloudFlowRequest = {
    body: CloudFlowBuildRequest;
  };

  export class BuildCloudFlowError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<BuildCloudFlowError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 406, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ExportCloudflowFlowRequest = {
    /** The ID of the flow to export. */
    flowId: string;
    /**
     * When `false`, local and global variable values are stripped from the bundle; names, types,
     * and required-ness always travel. Connection-typed variable values are references, not values,
     * and always travel as requirement tokens.
     *
     * @default true
     */
    includeVariableValues?: boolean;
  };

  export class ExportCloudflowFlowError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"error", Error>
      | Declared<"problemDetails5", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExportCloudflowFlowError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 422, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type GetCloudflowFlowRunRequest = {
    /** The ID of the flow the run belongs to. */
    flowId: string;
    /** The run identifier, as returned when the run was started. */
    runId: string;
  };

  export class GetCloudflowFlowRunError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"error", Error>
      | Declared<"problemDetails5", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCloudflowFlowRunError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 429, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type GetCloudflowTemplateRequest = {
    templateId: string;
  };

  export class GetCloudflowTemplateError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCloudflowTemplateError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ImportCloudflowFlowRequest = {
    /**
     * If `true`, validates the bundle and resolves its requirements against the tenant without
     * committing changes, returning the import plan.
     *
     * @default false
     */
    dryRun?: boolean;
    /**
     * Client-generated idempotency key (UUID v4 or ULID recommended, max 255 characters).
     * Re-submitting the same key with the same request returns the cached response without
     * re-executing side effects. The server retains the key for at least 24 hours.
     */
    idempotencyKey: string;
    body: CloudflowImportFlowsRequest;
  };

  export const importCloudflowFlowRequestSchema: Schema<ImportCloudflowFlowRequest> = s.lazySchema(() =>
    s.object<ImportCloudflowFlowRequest>({
      dryRun: s.defaulted(s.boolean(), false),
      idempotencyKey: s.string().check(s.maxLength(255)),
      body: cloudflowImportFlowsRequestSchema,
    }),
  );

  export class ImportCloudflowFlowError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"error", Error>
      | Declared<"problemDetails4", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ImportCloudflowFlowError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 422, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListCloudflowFlowRunsRequest = {
    /** The ID of the flow whose runs to list. */
    flowId: string;
    /** Maximum runs to return. @default 50 */
    maxResults?: number;
    /** Continuation token from a previous response. */
    pageToken?: string;
    /** Restrict the listing to one kind of run. Omit for both. */
    mode?: ModeDoiTCloudFlowApi;
  };

  export const listCloudflowFlowRunsRequestSchema: Schema<ListCloudflowFlowRunsRequest> = s.lazySchema(() =>
    s.object<ListCloudflowFlowRunsRequest>({
      flowId: s.string(),
      maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
      pageToken: s.optional(s.string()),
      mode: s.optional(s.lazy(() => modeDoiTCloudFlowApiSchema)),
    }),
  );

  export class ListCloudflowFlowRunsError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"error", Error>
      | Declared<"problemDetails5", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCloudflowFlowRunsError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 429, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type ListCloudflowTemplatesRequest = {
    /** Maximum number of templates to return (1–500). Defaults to 50. @default 50 */
    maxResults?: number;
    /**
     * Opaque cursor for the next page, taken from `pageToken` in the previous response. Omit to
     * start from the beginning.
     */
    pageToken?: string;
  };

  export const listCloudflowTemplatesRequestSchema: Schema<ListCloudflowTemplatesRequest> = s.lazySchema(() =>
    s.object<ListCloudflowTemplatesRequest>({
      maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
      pageToken: s.optional(s.string()),
    }),
  );

  export class ListCloudflowTemplatesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCloudflowTemplatesError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListCloudflowsRequest = {
    /** Maximum number of flows to return (1–500). Defaults to 50. @default 50 */
    maxResults?: number;
    /**
     * Opaque cursor for the next page, taken from `pageToken` in the previous response. Omit to
     * start from the beginning.
     */
    pageToken?: string;
  };

  export const listCloudflowsRequestSchema: Schema<ListCloudflowsRequest> = s.lazySchema(() =>
    s.object<ListCloudflowsRequest>({
      maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
      pageToken: s.optional(s.string()),
    }),
  );

  export class ListCloudflowsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCloudflowsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RefineCloudFlowRequest = {
    flowId: string;
    body: CloudFlowRefineRequest;
  };

  export class RefineCloudFlowError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RefineCloudFlowError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 406, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 502, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type StopCloudflowFlowRequest = {
    /** The ID of the flow whose in-progress run should be stopped. */
    flowId: string;
  };

  export class StopCloudflowFlowError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"error", Error>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<StopCloudflowFlowError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 409, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 429, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type TestRunCloudflowFlowRequest = {
    /** The ID of the flow to test-run. */
    flowId: string;
    /** Validate the flow and return the outcome without starting a run. */
    dryRun?: boolean;
    /** Unique key so a retried request cannot start a second run. */
    idempotencyKey: string;
    body?: Record<string, unknown>;
  };

  export class TestRunCloudflowFlowError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"cloudflowTestRunValidation", CloudflowTestRunValidation>
      | Declared<"error", Error>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<TestRunCloudflowFlowError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 409, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      {
        on: 422,
        kind: "cloudflowTestRunValidation",
        decode: { kind: "json", schema: cloudflowTestRunValidationSchema },
      },
      { on: 429, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type TriggerCloudflowFlowRequest = {
    /** The ID of the flow to trigger. */
    flowId: string;
    body?: Record<string, unknown>;
  };

  export class TriggerCloudflowFlowError extends ApiError {
    declare readonly payload:
      | Declared<"problemDetails", ProblemDetails>
      | Declared<"problemDetails2", ProblemDetails>
      | Declared<"problemDetails3", ProblemDetails>
      | Declared<"problemDetails4", ProblemDetails>
      | Declared<"cloudflowV1FlowsActionsTrigger409Error1", CloudflowV1FlowsActionsTrigger409Error1>
      | Declared<"problemDetails5", ProblemDetails>
      | Declared<"error", Error>
      | Declared<"problemDetails6", ProblemDetails>
      | Undeclared;

    static readonly errors: ErrorDecoders<TriggerCloudflowFlowError> = [
      { on: 400, kind: "problemDetails", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 401, kind: "problemDetails2", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 403, kind: "problemDetails3", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 404, kind: "problemDetails4", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      {
        on: 409,
        kind: "cloudflowV1FlowsActionsTrigger409Error1",
        decode: { kind: "json", schema: cloudflowV1FlowsActionsTrigger409Error1InternalSchema },
      },
      { on: 422, kind: "problemDetails5", decode: { kind: "json", schema: problemDetailsInternalSchema } },
      { on: 429, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "problemDetails6", decode: { kind: "json", schema: problemDetailsInternalSchema } },
    ];
  }

  export type TriggerCloudflowWebhookRequest = {
    /** The unique ID of the published CloudFlow to trigger. */
    flowId: string;
    body: Record<string, unknown>;
  };

  export class TriggerCloudflowWebhookError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<TriggerCloudflowWebhookError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
