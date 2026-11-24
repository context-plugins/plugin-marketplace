using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using BrowserUse.Core;
using BrowserUse.Core.Exceptions;
using BrowserUse.Core.Models;
using BrowserUse.Core.Request;
using BrowserUse.Core.Response;
using BrowserUse.Errors;
using BrowserUse.Models;
using BrowserUse.Requests.Runs;

namespace BrowserUse.Api;

public sealed class Runs
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Runs(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel Run
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RunSummary"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelRunRunsRunIdCancelPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancel an in-flight run.
    /// <para>
    /// Idempotent: a run already in a terminal state (completed / failed /
    /// cancelled) is returned as-is. Once cancelled, the gateway refuses
    /// every subsequent <c>chat_completions</c> call from the worker — so the
    /// project cannot be billed further regardless of whether the worker
    /// subprocess notices the cancel itself.
    /// </para>
    /// <para>
    /// The worker keeps running for at most one more bcode step
    /// (consuming no LLM tokens because CP 409s them) and then exits when
    /// bcode realizes the next tool call has no model behind it.
    /// </para>
    /// </remarks>
    public Task<RunSummary> CancelRunRunsRunIdCancelPost(CancelRunRunsRunIdCancelPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/runs/{run_id}/cancel"),
            [new TemplateParam("run_id", request.RunId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<RunSummary>(),
            CancelRunRunsRunIdCancelPostError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Run
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RunCreateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateRunRunsPostError"/> when the server returns an error response.</exception>
    public Task<RunCreateResponse> CreateRunRunsPost(CreateRunRunsPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/runs"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RunCreateResponse>(),
            CreateRunRunsPostError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Run Events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RunEventsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRunEventsRunsRunIdEventsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Paginated event read. <c>after</c> is the event id cursor — clients
    /// doing periodic polls pass back the highest id they've seen to get only
    /// the delta. Default 0 returns from the start.
    /// </remarks>
    public Task<RunEventsResponse> GetRunEventsRunsRunIdEventsGet(GetRunEventsRunsRunIdEventsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/runs/{run_id}/events"),
            [new TemplateParam("run_id", request.RunId)],
            [
                new Param("limit", request.Limit),
                new Param("after", request.After),
                new Param("include_output", request.IncludeOutput),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RunEventsResponse>(),
            GetRunEventsRunsRunIdEventsGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Run
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RunSummary"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRunRunsRunIdGetError"/> when the server returns an error response.</exception>
    public Task<RunSummary> GetRunRunsRunIdGet(GetRunRunsRunIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/runs/{run_id}"),
            [new TemplateParam("run_id", request.RunId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RunSummary>(),
            GetRunRunsRunIdGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Run Status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RunStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRunStatusRunsRunIdStatusGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Minimal status poll (see RunStatusResponse). POLL rate bucket: selects
    /// ONLY the status/project columns — a 2s poll never drags the task/result
    /// text (TOAST reads) that GET /runs/{id} pays. Poll until terminal, then
    /// fetch the full summary once.
    /// </remarks>
    public Task<RunStatusResponse> GetRunStatusRunsRunIdStatusGet(GetRunStatusRunsRunIdStatusGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/runs/{run_id}/status"),
            [new TemplateParam("run_id", request.RunId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RunStatusResponse>(),
            GetRunStatusRunsRunIdStatusGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Run Attachments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RunAttachmentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRunAttachmentsRunsRunIdAttachmentsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The upload files attached to a run, for rendering attachment chips.
    /// Ordered to match the run's attached_file_ids.
    /// </remarks>
    public Task<RunAttachmentsResponse> ListRunAttachmentsRunsRunIdAttachmentsGet(ListRunAttachmentsRunsRunIdAttachmentsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/runs/{run_id}/attachments"),
            [new TemplateParam("run_id", request.RunId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RunAttachmentsResponse>(),
            ListRunAttachmentsRunsRunIdAttachmentsGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Runs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RunListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRunsRunsGetError"/> when the server returns an error response.</exception>
    public Task<RunListResponse> ListRunsRunsGet(ListRunsRunsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/runs"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("sessionId", request.SessionId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RunListResponse>(),
            ListRunsRunsGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);
}
