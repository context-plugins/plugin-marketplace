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
using BrowserUse.Requests.Browsers;

namespace BrowserUse.Api;

public sealed class Browsers
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Browsers(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Browser Session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BrowserSessionItemView"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateBrowserSessionBrowsersPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new browser session.
    /// <para>
    /// <b>Pricing:</b> Browser sessions are charged at $0.02/hour for all users.
    /// </para>
    /// <para>
    /// The full rate is charged upfront when the session starts.
    /// When you stop the session, any unused time is automatically refunded proportionally.
    /// </para>
    /// <para>
    /// Billing is rounded up to the minute (minimum 1 minute).
    /// For example, if you stop a session after 30 minutes, you'll be refunded half the charged amount.
    /// </para>
    /// <para>
    /// <b>Session Limits:</b>
    /// - All users: Up to 4 hours per session
    /// </para>
    /// </remarks>
    public Task<BrowserSessionItemView> CreateBrowserSessionBrowsersPost(CreateBrowserSessionBrowsersPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/browsers"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BrowserSessionItemView>(),
            CreateBrowserSessionBrowsersPostError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Browser Session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BrowserSessionView"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBrowserSessionBrowsersSessionIdGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get detailed browser session information including status and URLs.
    /// </remarks>
    public Task<BrowserSessionView> GetBrowserSessionBrowsersSessionIdGet(GetBrowserSessionBrowsersSessionIdGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/browsers/{session_id}"),
            [new TemplateParam("session_id", request.SessionId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BrowserSessionView>(),
            GetBrowserSessionBrowsersSessionIdGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Browser Session Downloads
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BrowserDownloadListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List files the browser downloaded to S3 during the session.
    /// <para>
    /// Pass ``includeUrls=true`` to receive presigned download URLs (15 min expiry) inline.
    /// Files are stored at ``downloads/projects/{project_id}/sessions/{session_id}/`` in
    /// the private bucket.
    /// </para>
    /// </remarks>
    public Task<BrowserDownloadListResponse> ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGet(ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/browsers/{session_id}/downloads"),
            [new TemplateParam("session_id", request.SessionId)],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("includeUrls", request.IncludeUrls),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BrowserDownloadListResponse>(),
            ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Browser Sessions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BrowserSessionListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBrowserSessionsBrowsersGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get paginated list of browser sessions with optional status filtering.
    /// <para>
    /// List responses intentionally omit per-session presigned recording URLs
    /// (<c>recording_url</c> is always <c>null</c> here). Each recording URL requires a
    /// synchronous boto3 SigV4 signing call (plus an S3 HEAD) that holds the GIL
    /// and blocks the event loop. With page_size up to the max this CPU-pegs the
    /// worker and starves the DB pool, cascading into pool exhaustion across the
    /// fleet. Clients should fetch the recording URL on demand via
    /// <c>GET /api/v2/browsers/{id}</c>, which signs exactly one URL for a single
    /// session. Mirrors the v3 sessions list fix (ENG-4904, PR #4621).
    /// </para>
    /// </remarks>
    public Task<BrowserSessionListResponse> ListBrowserSessionsBrowsersGet(ListBrowserSessionsBrowsersGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/browsers"),
            [],
            [
                new Param("metadata", request.Metadata),
                new Param("pageSize", request.PageSize),
                new Param("pageNumber", request.PageNumber),
                new Param("filterBy", request.FilterBy),
                new Param("agentSessionId", request.AgentSessionId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BrowserSessionListResponse>(),
            ListBrowserSessionsBrowsersGetError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Browser Session
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BrowserSessionView"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateBrowserSessionBrowsersSessionIdPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stop a browser session.
    /// <para>
    /// <b>Refund:</b> When you stop a session, unused time is automatically refunded.
    /// If the session ran for less than 1 hour, you'll receive a proportional refund.
    /// Billing is ceil to the nearest minute (minimum 1 minute).
    /// </para>
    /// </remarks>
    public Task<BrowserSessionView> UpdateBrowserSessionBrowsersSessionIdPatch(UpdateBrowserSessionBrowsersSessionIdPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/browsers/{session_id}"),
            [new TemplateParam("session_id", request.SessionId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BrowserSessionView>(),
            UpdateBrowserSessionBrowsersSessionIdPatchError.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);
}
