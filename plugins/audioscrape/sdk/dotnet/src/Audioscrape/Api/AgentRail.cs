using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Audioscrape.Core;
using Audioscrape.Core.Authentication;
using Audioscrape.Core.ErrorResponse;
using Audioscrape.Core.Exceptions;
using Audioscrape.Core.Models;
using Audioscrape.Core.Request;
using Audioscrape.Core.Response;
using Audioscrape.Errors;
using Audioscrape.Requests.AgentRail;

namespace Audioscrape.Api;

/// <summary>
/// Pay-as-you-go answers for AI agents over HTTP 402: a pay-as-you-go workspace balance topped up by card or Link through the Machine Payments Protocol (Stripe), and x402 (USDC per call) where the 402 offers it. A first top-up opens the workspace and returns its API key and a claim link. Subscribers' keys are served within the plan. Price list: GET /api/agent/v1
/// </summary>
public sealed class AgentRail
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AgentRail(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Tops up a pay-as-you-go balance (MPP or x402); without a key, opens the…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BuyCreditError"/> when the server returns an error response.</exception>
    public Task BuyCredit(BuyCreditOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/agent/v1/credits"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            BuyCreditError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The workspace's balance and recent movements (free)
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreditBalanceError"/> when the server returns an error response.</exception>
    public Task CreditBalance(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/agent/v1/credits"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CreditBalanceError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Paid transcript excerpt around a moment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExcerptError"/> when the server returns an error response.</exception>
    public Task Excerpt(ExcerptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/agent/v1/excerpt"),
            [],
            [
                new Param("episode_id", request.EpisodeId),
                new Param("t", request.T),
                new Param("seconds", request.Seconds),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ExcerptError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The free, machine-readable price list
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task Manifest(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/agent/v1"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Paid overview of one recording
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OverviewError"/> when the server returns an error response.</exception>
    public Task Overview(OverviewRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/agent/v1/overview"),
            [],
            [new Param("episode_id", request.EpisodeId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            OverviewError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Paid search
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchError"/> when the server returns an error response.</exception>
    public Task Search(SearchOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/agent/v1/search"),
            [],
            [new Param("scope", request.Scope)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            SearchError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Transcribes a recording into the key's workspace
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranscribeError"/> when the server returns an error response.</exception>
    public Task Transcribe(TranscribeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/agent/v1/transcribe"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            TranscribeError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The state of a transcription job in the key's workspace (free)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TranscriptionStatusError"/> when the server returns an error response.</exception>
    public Task TranscriptionStatus(TranscriptionStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/agent/v1/transcriptions/{job_id}"),
            [new TemplateParam("job_id", request.JobId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            TranscriptionStatusError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
