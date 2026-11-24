using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Perigon.Core;
using Perigon.Core.Exceptions;
using Perigon.Core.Extensions;
using Perigon.Core.Models;
using Perigon.Core.Request;
using Perigon.Core.Response;
using Perigon.Errors;
using Perigon.Models;
using Perigon.Requests.Monitors;

namespace Perigon.Api;

/// <summary>
/// Manage AI Monitors — configurable monitors that continuously scan news content for topics, entities, and events of interest. Monitors run asynchronously and emit structured events and AI-generated summaries that can be delivered to contact points.
/// </summary>
public sealed class Monitors
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Monitors(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Activate monitor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MonitorResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ActivateMonitorApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Activate a monitor, starting its processing pipeline.
    /// </remarks>
    public Task<MonitorResult> ActivateMonitorApi(ActivateMonitorApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/monitors/{uuid}/activate"),
            [new TemplateParam("uuid", request.Uuid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<MonitorResult>(),
            ActivateMonitorApiError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive monitor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MonitorResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ArchiveMonitorApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive a monitor. Archived monitors are excluded from list results by default.
    /// </remarks>
    public Task<MonitorResult> ArchiveMonitorApi(ArchiveMonitorApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/monitors/{uuid}"),
            [new TemplateParam("uuid", request.Uuid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<MonitorResult>(),
            ArchiveMonitorApiError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create monitor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MonitorResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateMonitorApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new AI monitor. Only AI_SIGNAL type is supported; status is required and accepts ACTIVE or DRAFT.
    /// </remarks>
    public Task<MonitorResult> CreateMonitorApi(CreateMonitorApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/monitors"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MonitorResult>(),
            CreateMonitorApiError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get monitor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MonitorResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMonitorApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a monitor by UUID for the organization associated with the API key.
    /// </remarks>
    public Task<MonitorResult> GetMonitorApi(GetMonitorApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/monitors/{uuid}"),
            [new TemplateParam("uuid", request.Uuid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MonitorResult>(),
            GetMonitorApiError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List monitor events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MonitorEventListResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMonitorEventsApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List structured events emitted by a monitor. Events represent individual matches detected by the monitor (e.g. a news article matching the monitor's criteria) and are produced asynchronously as new content is ingested.
    /// </remarks>
    public Task<MonitorEventListResult> ListMonitorEventsApi(ListMonitorEventsApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/monitors/{uuid}/events"),
            [new TemplateParam("uuid", request.Uuid)],
            [
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("eventType", request.EventType),
                new Param("from", request.From?.ToIso8601()),
                new Param("to", request.To?.ToIso8601()),
                new Param("page", request.Page),
                new Param("size", request.Size),
                new Param("nulls", request.Nulls),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MonitorEventListResult>(),
            ListMonitorEventsApiError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List monitor newsletters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MonitorNewsletterListResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMonitorNewslettersApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List newsletters generated for a monitor. Newsletters bundle a monitor's recent events into a human-readable digest and are produced on the monitor's configured schedule.
    /// </remarks>
    public Task<MonitorNewsletterListResult> ListMonitorNewslettersApi(ListMonitorNewslettersApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/monitors/{uuid}/newsletters"),
            [new TemplateParam("uuid", request.Uuid)],
            [
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("title", request.Title),
                new Param("from", request.From?.ToIso8601()),
                new Param("to", request.To?.ToIso8601()),
                new Param("page", request.Page),
                new Param("size", request.Size),
                new Param("nulls", request.Nulls),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MonitorNewsletterListResult>(),
            ListMonitorNewslettersApiError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List monitor summaries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MonitorSummaryListResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMonitorSummariesApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List AI-generated summaries produced for a monitor as matching content is processed.
    /// </remarks>
    public Task<MonitorSummaryListResult> ListMonitorSummariesApi(ListMonitorSummariesApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/monitors/{uuid}/summary"),
            [new TemplateParam("uuid", request.Uuid)],
            [
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("from", request.From?.ToIso8601()),
                new Param("to", request.To?.ToIso8601()),
                new Param("page", request.Page),
                new Param("size", request.Size),
                new Param("nulls", request.Nulls),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MonitorSummaryListResult>(),
            ListMonitorSummariesApiError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List monitors
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MonitorListResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMonitorsApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List AI monitors for the organization associated with the API key. Excludes archived monitors by default. Use the status parameter to filter.
    /// </remarks>
    public Task<MonitorListResult> ListMonitorsApi(ListMonitorsApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/monitors"),
            [],
            [
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("uuid", request.Uuid),
                new Param("name", request.Name),
                new Param("status", request.Status),
                new Param("classificationType", request.ClassificationType),
                new Param("page", request.Page),
                new Param("size", request.Size),
                new Param("nulls", request.Nulls),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MonitorListResult>(),
            ListMonitorsApiError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Pause monitor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MonitorResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PauseMonitorApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Pause a monitor, stopping its processing pipeline.
    /// </remarks>
    public Task<MonitorResult> PauseMonitorApi(PauseMonitorApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/monitors/{uuid}/pause"),
            [new TemplateParam("uuid", request.Uuid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<MonitorResult>(),
            PauseMonitorApiError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update monitor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MonitorResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateMonitorApiError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Partially update a monitor. Only provided fields are modified. Use /activate, /pause, or DELETE to change monitor status.
    /// </remarks>
    public Task<MonitorResult> UpdateMonitorApi(UpdateMonitorApiRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/api/monitors/{uuid}"),
            [new TemplateParam("uuid", request.Uuid)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MonitorResult>(),
            UpdateMonitorApiError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
