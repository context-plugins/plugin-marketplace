using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.CloudFlowApi;

namespace DoiT.Api;

/// <summary>
/// Manage CloudFlow.
/// </summary>
public sealed class CloudFlowApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CloudFlowApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Build a new CloudFlow from scratch
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IAsyncEnumerable{T}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BuildCloudFlowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new CloudFlow and generates its nodes and connections based on the provided natural language intent. The operation streams incremental build events, including the ID of the newly created flow, as they are produced.
    ///
    /// The returned sequence is single-shot and lazy: enumerate it (or dispose the enumerator) to
    /// release the underlying connection — a sequence that is never enumerated never releases it.
    /// Enumeration can throw <see cref="SdkTimeoutException"/> if the server stalls between frames,
    /// or <see cref="SdkConnectionException"/> if the connection drops mid-stream.
    /// </remarks>
    public Task<IAsyncEnumerable<string>> BuildCloudFlow(BuildCloudFlowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cloudflow/v1/flows/actions/build"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            PlainTextSseResponse.CreateString(),
            BuildCloudFlowError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Export a flow as a portable bundle
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudflowFlowBundle"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExportCloudflowFlowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Serializes the flow — plus every flow it references through subflow nodes — into a
    /// tenant-neutral, credential-free JSON bundle that can be imported into any tenant with
    /// the import operation. Tenant-scoped references (connections, Datastore tables, global
    /// variables) are declared as named requirements and rebound at import time; policy and
    /// Slack-channel references cannot travel and are recorded as unsupported references.
    /// The bundle never contains credentials, tenant identifiers, schedules, or execution state.
    /// </remarks>
    public Task<CloudflowFlowBundle> ExportCloudflowFlow(ExportCloudflowFlowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cloudflow/v1/flows/{flowId}/export"),
            [new TemplateParam("flowId", request.FlowId)],
            [new Param("includeVariableValues", request.IncludeVariableValues)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CloudflowFlowBundle>(),
            ExportCloudflowFlowError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Read a flow run, node by node
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudflowRun"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCloudflowFlowRunError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a run's status and, for each node, the JSON it consumed and produced. This is how
    /// you find out *why* a run failed, or that it "succeeded" while producing the wrong data.
    /// <para>
    /// <b><c>input</c> is null for most node types, and that is not an error.</b> Only action nodes — the
    /// AWS, GCP, Azure, Oracle, DoiT and admin operations — record their inputs. Transform, code,
    /// branch, switch, datastore, subflow and trigger nodes record none, so their <c>input</c> is
    /// always null. <c>output</c> is recorded by every node that finishes, so read a transform's
    /// behaviour from its <c>output</c>.
    /// </para>
    /// <para>
    /// Payloads appear as soon as a node reports a terminal status, so a poll loop can read
    /// results while later nodes are still running.
    /// </para>
    /// <para>
    /// Any value the node's schema marks sensitive is replaced with a redaction marker;
    /// credentials and connection configuration never appear.
    /// </para>
    /// <para>
    /// Each <c>input</c> and <c>output</c> is capped at 64KB. When a payload exceeds that, whole entries
    /// are dropped from the end, <c>truncated</c> is true, and <c>totalBytes</c> reports the untruncated
    /// size — nothing is silently cut, and what you receive is always valid JSON.
    /// </para>
    /// <para>
    /// Runs belonging to another tenant, or to a different flow, return <c>404</c>. Nodes inside a
    /// fan-out currently report only the last path to finish.
    /// </para>
    /// </remarks>
    public Task<CloudflowRun> GetCloudflowFlowRun(GetCloudflowFlowRunRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cloudflow/v1/flows/{flowId}/runs/{runId}"),
            [new TemplateParam("flowId", request.FlowId), new TemplateParam("runId", request.RunId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CloudflowRun>(),
            GetCloudflowFlowRunError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a template
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudflowTemplate"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCloudflowTemplateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a single CloudFlow template by ID.
    /// </remarks>
    public Task<CloudflowTemplate> GetCloudflowTemplate(GetCloudflowTemplateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cloudflow/v1/templates/{templateId}"),
            [new TemplateParam("templateId", request.TemplateId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CloudflowTemplate>(),
            GetCloudflowTemplateError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Import a flow bundle
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudflowImportPlan"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ImportCloudflowFlowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates every flow of a previously exported bundle in the authenticated tenant.
    /// Imports are create-only: each call creates new draft flows with new IDs — nothing is
    /// published and no schedule is activated until the target tenant publishes.
    /// <para>
    /// Requirements declared by the bundle are resolved through <c>bindings</c> (requirement key →
    /// target-tenant resource ID). Unbound connections and Datastore tables leave the
    /// referencing nodes flagged incomplete; unbound global variables are auto-created. Pass
    /// <c>options.createMissingTables: true</c> to create missing Datastore tables from the schemas
    /// embedded in the bundle (structure only, never row data).
    /// </para>
    /// <para>
    /// <b>Dry-run</b>: pass <c>?dryRun=true</c> to validate without writing. The response is an import
    /// plan: per-requirement resolutions with candidate bindings in the target tenant, the
    /// flows that would be created, and every validation issue at once.
    /// </para>
    /// </remarks>
    public Task<CloudflowImportPlan> ImportCloudflowFlow(ImportCloudflowFlowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cloudflow/v1/flows/actions/import"),
            [],
            [new Param("dryRun", request.DryRun)],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CloudflowImportPlan>(),
            ImportCloudflowFlowError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List a flow's runs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudflowRunList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCloudflowFlowRunsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a flow's runs, newest first. Use <c>mode</c> to separate test runs from production
    /// ones — test runs are included by default.
    /// <para>
    /// Per-node detail is not included here; fetch a single run to read what each node consumed
    /// and produced.
    /// </para>
    /// </remarks>
    public Task<CloudflowRunList> ListCloudflowFlowRuns(ListCloudflowFlowRunsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cloudflow/v1/flows/{flowId}/runs"),
            [new TemplateParam("flowId", request.FlowId)],
            [
                new Param("maxResults", request.MaxResults),
                new Param("pageToken", request.PageToken),
                new Param("mode", request.Mode),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CloudflowRunList>(),
            ListCloudflowFlowRunsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List templates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudflowTemplateListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCloudflowTemplatesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the catalogue of available CloudFlow templates (blueprints). Templates are
    /// read-only. To create a flow from a template, use <c>POST /flows</c> with a <c>templateId</c>.
    /// </remarks>
    public Task<CloudflowTemplateListResponse> ListCloudflowTemplates(ListCloudflowTemplatesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cloudflow/v1/templates"),
            [],
            [new Param("maxResults", request.MaxResults), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CloudflowTemplateListResponse>(),
            ListCloudflowTemplatesError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List CloudFlows
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudflowListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCloudflowsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a cursor-paginated list of CloudFlows.
    /// </remarks>
    public Task<CloudflowListResponse> ListCloudflows(ListCloudflowsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cloudflow/v1/flows"),
            [],
            [new Param("maxResults", request.MaxResults), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CloudflowListResponse>(),
            ListCloudflowsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Refine a CloudFlow from natural language intent
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IAsyncEnumerable{T}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RefineCloudFlowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Refines the specified CloudFlow by generating and updating nodes and connections based on the provided natural language intent. The operation streams incremental build events as they are produced.
    ///
    /// The returned sequence is single-shot and lazy: enumerate it (or dispose the enumerator) to
    /// release the underlying connection — a sequence that is never enumerated never releases it.
    /// Enumeration can throw <see cref="SdkTimeoutException"/> if the server stalls between frames,
    /// or <see cref="SdkConnectionException"/> if the connection drops mid-stream.
    /// </remarks>
    public Task<IAsyncEnumerable<string>> RefineCloudFlow(RefineCloudFlowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cloudflow/v1/flows/{flowId}/actions/refine"),
            [new TemplateParam("flowId", request.FlowId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            PlainTextSseResponse.CreateString(),
            RefineCloudFlowError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stop a flow run
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudflowRunSummary"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StopCloudflowFlowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stops the run currently in progress for the given flow. The run is identified from the
    /// flow alone — no run ID is needed, since a flow can only have one run active at a time.
    /// <para>
    /// No <c>Idempotency-Key</c> is required. This is a state transition, not a resource creation.
    /// </para>
    /// <para>
    /// Returns <c>409</c> when the flow has no run in progress, which includes a run that reached a
    /// terminal state between this request and the stop attempt.
    /// </para>
    /// </remarks>
    public Task<CloudflowRunSummary> StopCloudflowFlow(StopCloudflowFlowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cloudflow/v1/flows/{flowId}/actions/stop"),
            [new TemplateParam("flowId", request.FlowId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<CloudflowRunSummary>(),
            StopCloudflowFlowError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test-run a flow
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudflowRunSummary"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TestRunCloudflowFlowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Runs a flow once as a test, and <b>accepts an unpublished (draft) flow</b> — unlike
    /// <c>actions/trigger</c>, which requires the flow to be published. Use this to verify a newly
    /// authored or edited flow before publishing it.
    /// <para>
    /// Execution is identical to a production run: the same graph, the same bound connections,
    /// the same credentials, and the same approval behaviour. An approval-gated node still parks
    /// the run and its side effect still waits for a real approval — there is no request that
    /// skips one.
    /// </para>
    /// <para>
    /// The run is recorded as a test, so it does not appear in run history, does not count
    /// towards dashboard statistics, does not become a dashboard widget's data source, and does
    /// not consume a scheduled-run budget. It does hold the flow's concurrency lock, so a <c>409</c>
    /// is returned while the flow is already running.
    /// </para>
    /// <para>
    /// The flow's first node must be a webhook, scheduled, or manual trigger.
    /// </para>
    /// <para>
    /// Before dispatching, the flow is validated with the same checks publish applies — a draft
    /// has never been through them. A flow that fails returns <c>422</c> listing every offending node
    /// at once, so all of them can be fixed in one pass.
    /// </para>
    /// <para>
    /// Poll the <c>Location</c> URL to follow the run and read what each node produced.
    /// </para>
    /// <para>
    /// Pass <c>?dryRun=true</c> to validate the flow without starting a run.
    /// </para>
    /// </remarks>
    public Task<CloudflowRunSummary> TestRunCloudflowFlow(TestRunCloudflowFlowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cloudflow/v1/flows/{flowId}/actions/test-run"),
            [new TemplateParam("flowId", request.FlowId)],
            [new Param("dryRun", request.DryRun)],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CloudflowRunSummary>(),
            TestRunCloudflowFlowError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trigger a flow run
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudflowRunSummary"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TriggerCloudflowFlowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts a run of a <b>published</b> flow whose first node is a webhook, scheduled, or manual
    /// trigger. A draft flow is rejected with <c>422</c> — use <c>actions/test-run</c> to run one.
    /// <para>
    /// No <c>Idempotency-Key</c> is required. This is a state transition, not a resource creation.
    /// </para>
    /// <para>
    /// The response is a snapshot taken at dispatch, so <c>status</c> is always <c>pending</c> and the
    /// timing fields are not yet populated. Read the run back through
    /// <c>GET /cloudflow/v1/flows/{flowId}/runs/{runId}</c> to follow its progress.
    /// </para>
    /// <para>
    /// A flow holds a concurrency lock while it runs, so triggering one that is already running
    /// returns <c>409</c> with the active run embedded in the problem body — no second lookup needed.
    /// </para>
    /// </remarks>
    public Task<CloudflowRunSummary> TriggerCloudflowFlow(TriggerCloudflowFlowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cloudflow/v1/flows/{flowId}/actions/trigger"),
            [new TemplateParam("flowId", request.FlowId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CloudflowRunSummary>(),
            TriggerCloudflowFlowError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trigger a webhook flow
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CloudflowV1TriggerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TriggerCloudflowWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Triggers execution of a published CloudFlow whose first node is a webhook trigger.
    /// The request body must be valid JSON and is passed to the flow as webhook payload data.
    /// </remarks>
    public Task<CloudflowV1TriggerResponse> TriggerCloudflowWebhook(TriggerCloudflowWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/cloudflow/v1/trigger/{flowId}"),
            [new TemplateParam("flowId", request.FlowId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CloudflowV1TriggerResponse>(),
            TriggerCloudflowWebhookError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
