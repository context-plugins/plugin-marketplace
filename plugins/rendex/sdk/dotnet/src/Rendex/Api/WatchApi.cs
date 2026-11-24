using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Rendex.Core;
using Rendex.Core.ErrorResponse;
using Rendex.Core.Exceptions;
using Rendex.Core.Models;
using Rendex.Core.Request;
using Rendex.Core.Response;
using Rendex.Errors;
using Rendex.Models;
using Rendex.Requests.WatchApi;

namespace Rendex.Api;

/// <summary>
/// Website change monitoring — create watches, read run history, receive change webhooks.
/// Rendex renders each check in real Chrome, runs a before/after visual (and/or text) diff,
/// and alerts you by email (every plan) or signed webhook (Starter+). Shares your <c>rdx_</c>
/// key and credit pool with the rendering endpoints — one credit per check.
/// </summary>
public sealed class WatchApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal WatchApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a watch
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WatchesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateWatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Start monitoring a URL for changes. Rendex renders the page in real Chrome on your
    /// schedule, runs a before/after visual diff (and/or a text diff), and alerts you over a
    /// webhook and/or email when it changes. An active watch captures its baseline immediately,
    /// drawing 1 credit from your shared pool; a failed check is refunded. The same <c>rdx_</c> key
    /// and credit pool as the rendering endpoints.
    /// </remarks>
    public Task<V1WatchesResponse> CreateWatch(CreateWatchOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/watches"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1WatchesResponse>(),
            CreateWatchError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a watch and its run history
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteWatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a watch. Run rows cascade; stored images age out via the bucket lifecycle.
    /// </remarks>
    public Task DeleteWatch(DeleteWatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/watches/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteWatchError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch one watch
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WatchesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetWatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch a single watch by id, including its current status and configuration.
    /// </remarks>
    public Task<V1WatchesResponse> GetWatch(GetWatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/watches/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1WatchesResponse>(),
            GetWatchError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Read a watch's run history
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WatchesRunsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListWatchRunsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Newest first. Each run carries short-lived signed before/after/overlay image URLs.
    /// </remarks>
    public Task<V1WatchesRunsResponse> ListWatchRuns(ListWatchRunsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/watches/{id}/runs"),
            [new TemplateParam("id", request.Id)],
            [new Param("cursor", request.Cursor), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1WatchesRunsResponse>(),
            ListWatchRunsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List your watches
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WatchesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List your watches, newest first. Filter by state and page with the cursor.
    /// </remarks>
    public Task<V1WatchesResponse1> ListWatches(ListWatchesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/watches"),
            [],
            [
                new Param("status", request.Status),
                new Param("cursor", request.Cursor),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1WatchesResponse1>(),
            RawErrorResponse.Instance,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run a check now
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WatchesRunResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RunWatchNowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Enqueue an immediate check (draws 1 credit). The watch must be active.
    /// </remarks>
    public Task<V1WatchesRunResponse> RunWatchNow(RunWatchNowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/watches/{id}/run"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<V1WatchesRunResponse>(),
            RunWatchNowError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Dry-run a watch config (creates nothing)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WatchesTestResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TestWatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Render a proposed watch config exactly as a live check would (same self-identifying User-Agent, SSRF checks, geo + compatibility-mode behaviour, and block/error detection) and return what was captured — so you can validate a selector, scope, or fetch identity and confirm the page is reachable BEFORE committing to a schedule. Creates nothing (no watch, baseline, diff, or alerts). Draws 1 credit; refunded when the page can't be read. A blocked or errored page is a 200 result with reachable:false + an actionable reason, not an API error.
    /// </remarks>
    public Task<V1WatchesTestResponse> TestWatch(TestWatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/watches/test"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1WatchesTestResponse>(),
            TestWatchError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update, pause, resume, or re-point a watch
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WatchesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateWatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// All fields optional. Set <c>paused</c> true to pause or false to resume. <c>webhookUrl</c> and
    /// <c>notifyEmail</c> accept <c>null</c> to switch a channel off.
    /// <para>
    /// <b>renderParams is MERGED, not replaced.</b> A partial <c>renderParams</c> is deep-merged over the
    /// watch's existing render config, so you can change one knob (e.g. <c>{ "renderParams": { "darkMode": true } }</c>)
    /// without re-sending the whole object. To clear a knob, set it to its default explicitly.
    /// </para>
    /// <para>
    /// <b>Re-baselining.</b> Changing <c>url</c> clears the baseline so the next run re-baselines. A
    /// renderParams edit that changes WHAT is captured (a scope change — e.g. <c>selector</c>,
    /// <c>fullPage</c>, <c>width</c>/<c>height</c>, or <c>device</c>) likewise invalidates the baseline and
    /// re-baselines on the next run; a noise-only edit (e.g. <c>threshold</c>, <c>ignoreRegions</c>) does not.
    /// </para>
    /// </remarks>
    public Task<V1WatchesResponse> UpdateWatch(UpdateWatchOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/watches/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1WatchesResponse>(),
            UpdateWatchError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
