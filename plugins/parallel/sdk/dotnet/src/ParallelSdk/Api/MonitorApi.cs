using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using ParallelSdk.Core;
using ParallelSdk.Core.Exceptions;
using ParallelSdk.Core.Models;
using ParallelSdk.Core.Request;
using ParallelSdk.Core.Response;
using ParallelSdk.Errors;
using ParallelSdk.Models;
using ParallelSdk.Requests.MonitorApi;

namespace ParallelSdk.Api;

/// <summary>
/// The Monitor API watches the web for material changes on a fixed frequency. Each monitor runs once on creation and then on its configured schedule, emitting events when meaningful changes are detected.
/// - <c>event_stream</c> monitors track a search query and emit an event for each new material change.
/// - <c>snapshot</c> monitors track a specific task run's output and emit an event when the output changes.
/// <para>
/// Results can be polled via the events endpoint or delivered via webhooks.
/// </para>
/// </summary>
public sealed class MonitorApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal MonitorApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel Monitor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MonitorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelMonitorV1MonitorsMonitorIdCancelPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancel a monitor.
    /// <para>
    /// Permanently stops the monitor from running. Cancellation is irreversible —
    /// create a new monitor to resume monitoring. Cancelling an already-cancelled
    /// monitor is a no-op.
    /// </para>
    /// </remarks>
    public Task<MonitorResponse> CancelMonitorV1MonitorsMonitorIdCancelPost(CancelMonitorV1MonitorsMonitorIdCancelPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/monitors/{monitor_id}/cancel"),
            [new TemplateParam("monitor_id", request.MonitorId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<MonitorResponse>(),
            CancelMonitorV1MonitorsMonitorIdCancelPostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Monitor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MonitorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateMonitorV1MonitorsPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a monitor.
    /// <para>
    /// Monitors run on a fixed frequency to detect material changes in web content.
    /// Set <c>type=event_stream</c> to monitor a search query, or <c>type=snapshot</c> to
    /// monitor a specific task run's output. The monitor runs once immediately at
    /// creation, then continues on the configured schedule.
    /// </para>
    /// </remarks>
    public Task<MonitorResponse> CreateMonitorV1MonitorsPost(CreateMonitorV1MonitorsPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/monitors"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MonitorResponse>(),
            CreateMonitorV1MonitorsPostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Monitor Events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedMonitorEvents"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMonitorEventsV1MonitorsMonitorIdEventsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List events for a monitor, newest first.
    /// <para>
    /// Pass <c>event_group_id</c> to narrow results to a single execution. Otherwise
    /// returns all executions newest-first; use <c>next_cursor</c> to paginate.
    /// Set <c>include_completions=true</c> to also include no-change executions.
    /// </para>
    /// </remarks>
    public Task<PaginatedMonitorEvents> ListMonitorEventsV1MonitorsMonitorIdEventsGet(ListMonitorEventsV1MonitorsMonitorIdEventsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/monitors/{monitor_id}/events"),
            [new TemplateParam("monitor_id", request.MonitorId)],
            [
                new Param("event_group_id", request.EventGroupId),
                new Param("cursor", request.Cursor),
                new Param("limit", request.Limit),
                new Param("include_completions", request.IncludeCompletions),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedMonitorEvents>(),
            ListMonitorEventsV1MonitorsMonitorIdEventsGetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Monitors
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginatedMonitorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMonitorsV1MonitorsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List monitors ordered by creation time, newest first.
    /// <para>
    /// Monitors are sorted by <c>created_at</c> descending. <c>limit</c> defaults to 100.
    /// Use <c>next_cursor</c> from the response and pass it as <c>cursor</c> to fetch the
    /// next page. Pagination ends when <c>next_cursor</c> is absent.
    /// </para>
    /// <para>
    /// By default only <c>active</c> monitors are returned. Pass <c>status=cancelled</c>
    /// or both values to include cancelled monitors.
    /// </para>
    /// <para>
    /// The legacy Monitor API (<c>/v1alpha/monitors</c> endpoints) is documented under
    /// the <c>Monitor (Alpha)</c> tag.
    /// </para>
    /// </remarks>
    public Task<PaginatedMonitorResponse> ListMonitorsV1MonitorsGet(ListMonitorsV1MonitorsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/monitors"),
            [],
            [
                new Param("cursor", request.Cursor),
                new Param("limit", request.Limit),
                new Param("type", request.Type),
                new Param("status", request.Status),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginatedMonitorResponse>(),
            ListMonitorsV1MonitorsGetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Monitor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MonitorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RetrieveMonitorV1MonitorsMonitorIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a monitor.
    /// <para>
    /// Retrieves a specific monitor by <c>monitor_id</c>. Returns the monitor
    /// configuration including status, frequency, query, and webhook settings.
    /// </para>
    /// </remarks>
    public Task<MonitorResponse> RetrieveMonitorV1MonitorsMonitorIdGet(RetrieveMonitorV1MonitorsMonitorIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/monitors/{monitor_id}"),
            [new TemplateParam("monitor_id", request.MonitorId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MonitorResponse>(),
            RetrieveMonitorV1MonitorsMonitorIdGetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trigger Monitor Run
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TriggerMonitorRunV1MonitorsMonitorIdTriggerPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Trigger an immediate monitor run.
    /// <para>
    /// Enqueues a one-off execution of the monitor outside its normal schedule.
    /// The monitor's regular schedule is not affected. An event is only emitted
    /// if the execution detects a material change. Cancelled monitors cannot be
    /// triggered.
    /// </para>
    /// </remarks>
    public Task TriggerMonitorRunV1MonitorsMonitorIdTriggerPost(TriggerMonitorRunV1MonitorsMonitorIdTriggerPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/monitors/{monitor_id}/trigger"),
            [new TemplateParam("monitor_id", request.MonitorId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            TriggerMonitorRunV1MonitorsMonitorIdTriggerPostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Monitor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MonitorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateMonitorV1MonitorsMonitorIdUpdatePostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a monitor.
    /// <para>
    /// Only fields explicitly included in the request body are changed. Pass
    /// <c>null</c> for <c>webhook</c> or <c>metadata</c> to clear those fields. Pass <c>type</c> and
    /// <c>settings</c> to update type-specific settings on an <c>event_stream</c> monitor.
    /// At least one field must be provided. Cancelled monitors cannot be updated.
    /// </para>
    /// </remarks>
    public Task<MonitorResponse> UpdateMonitorV1MonitorsMonitorIdUpdatePost(UpdateMonitorV1MonitorsMonitorIdUpdatePostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/monitors/{monitor_id}/update"),
            [new TemplateParam("monitor_id", request.MonitorId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MonitorResponse>(),
            UpdateMonitorV1MonitorsMonitorIdUpdatePostError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
