using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using PlinthUsGrantsData.Core;
using PlinthUsGrantsData.Core.Exceptions;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Core.Request;
using PlinthUsGrantsData.Core.Response;
using PlinthUsGrantsData.Errors;
using PlinthUsGrantsData.Requests.Pulse;

namespace PlinthUsGrantsData.Api;

/// <summary>
/// Recurring monitoring over a set of EINs: compliance, filings, grants, government funding, governance, and web signals, delivered as a page, email, or PDF. Pro keys only.
/// </summary>
public sealed class Pulse
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Pulse(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a monitoring subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePulseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Watch up to 200 EINs on a schedule you choose (hourly to monthly). Each run diffs the organizations against the last run and reports what moved: compliance screen changes, new Form 990 data, new grants in and out of the graph, government funding movement, officer and trustee roster changes, and web press and job-posting signals. The digest is available as JSON, an HTML page, a PDF, and optionally by email.
    /// </remarks>
    public Task<object> CreatePulse(CreatePulseRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/pulse"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            CreatePulseError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a subscription and its stored runs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeletePulseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes the subscription, its check state and every stored digest. There is no undo; pausing with <c>active: false</c> is the reversible form.
    /// </remarks>
    public Task<object> DeletePulse(DeletePulseRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/pulse/{sub_id}"),
            [new TemplateParam("sub_id", request.SubId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeletePulseError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// One subscription, with its latest run summary
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPulseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The subscription's configuration plus the id, timestamp and severity totals of its most recent digest, if one has run.
    /// </remarks>
    public Task<object> GetPulse(GetPulseRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/pulse/{sub_id}"),
            [new TemplateParam("sub_id", request.SubId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetPulseError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The most recent digest (JSON, HTML, or PDF)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPulseLatestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The digest payload as JSON by default; <c>format=html</c> renders the self-contained page (the same document the email carries), <c>format=pdf</c> the retainable report. Every finding is dated and carries its source; the provenance footer states the filing lag and what was not checked.
    /// </remarks>
    public Task<object> GetPulseLatest(GetPulseLatestRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/pulse/{sub_id}/latest"),
            [new TemplateParam("sub_id", request.SubId)],
            [new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetPulseLatestError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// One stored digest (JSON, HTML, or PDF)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPulseRunError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A specific past digest, unchanged since it ran — the same three formats as /latest.
    /// </remarks>
    public Task<object> GetPulseRun(GetPulseRunRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/pulse/{sub_id}/runs/{run_id}"),
            [new TemplateParam("sub_id", request.SubId), new TemplateParam("run_id", request.RunId)],
            [new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetPulseRunError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List your monitoring subscriptions
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPulseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Every subscription created with this key, newest first. Subscriptions are scoped to the key that created them; another key's subscriptions are not listed and answer 404 by id.
    /// </remarks>
    public Task<object> ListPulse(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/pulse"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ListPulseError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run history for a subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPulseRunsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stored run ids, oldest first. Each loads via /pulse/{sub_id}/runs/{run_id}.
    /// </remarks>
    public Task<object> ListPulseRuns(ListPulseRunsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/pulse/{sub_id}/runs"),
            [new TemplateParam("sub_id", request.SubId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ListPulseRunsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run now and return the digest
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RunPulseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Runs the checks synchronously and returns the digest. The first run is a baseline: it records what is on file today and reports changes from the next run on. <c>checks</c> narrows the run; <c>format=html|pdf</c> renders it.
    /// </remarks>
    public Task<object> RunPulse(RunPulseRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/pulse/{sub_id}/run"),
            [new TemplateParam("sub_id", request.SubId)],
            [new Param("checks", request.Checks), new Param("format", request.Format)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RunPulseError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update EINs, frequency, checks, delivery, or pause
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdatePulseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Any field omitted is left as it is. Changing the frequency re-anchors the next run from now; <c>active: false</c> pauses scheduled runs without deleting state, so unpausing resumes the diff rather than re-baselining.
    /// </remarks>
    public Task<object> UpdatePulse(UpdatePulseRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/pulse/{sub_id}"),
            [new TemplateParam("sub_id", request.SubId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            UpdatePulseError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
