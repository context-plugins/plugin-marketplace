using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using PlinthUsGrantsData.Core;
using PlinthUsGrantsData.Core.Authentication;
using PlinthUsGrantsData.Core.ErrorResponse;
using PlinthUsGrantsData.Core.Exceptions;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Core.Request;
using PlinthUsGrantsData.Core.Response;
using PlinthUsGrantsData.Errors;
using PlinthUsGrantsData.Models;
using PlinthUsGrantsData.Requests.Credentials;

namespace PlinthUsGrantsData.Api;

/// <summary>
/// Getting a key, including the one an agent can mint for itself.
/// </summary>
public sealed class Credentials
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Credentials(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Answer a challenge and unlock the key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UnlockResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnswerChallengeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send the values of the fields the questions named. We re-read those calls to check, so nothing is stored at issue time and nothing can drift from the data it described.
    /// </remarks>
    public Task<UnlockResult> AnswerChallenge(AnswerChallengeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/agent-key/answer"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UnlockResult>(),
            AnswerChallengeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// How to mint a trial key by signing a request
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the signing requirements, the tier ladder and a worked example request. No key, no account, no signature needed to read this.
    /// </remarks>
    public Task<object> DescribeAgentKey(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/agent-key"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// How the challenge loop works
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Readable without a key, so an agent that arrives here learns the shape rather than meeting a 401.
    /// </remarks>
    public Task<object> DescribeChallenge(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/agent-key/challenge"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Mint a trial API key — no account, no host, no signature
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TrialKey"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MintAgentKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Mints a short-lived, read-only evaluation key. No account, no card, no browser, and nothing created in anyone else's name.
    /// <para>
    /// <b>The ordinary route needs no credential of any kind.</b> POST here with <c>purpose</c> and <c>source</c> and you get a key immediately — but LOCKED: it may make only the calls its challenge names. Make them, read the fields the questions ask about, POST those values to <c>/api/v1/agent-key/answer</c>, and the key unlocks for general use. When that budget is spent, take another challenge. As often as you like, free.
    /// </para>
    /// <para>
    /// Every fiscal year in the corpus is readable; what is small is the row cap and the per-challenge budget, both announced in <c>x_plinth.warnings</c> at <c>caveat</c> severity.
    /// </para>
    /// <para>
    /// <b>Signing is the alternative, not the requirement.</b> A caller that can publish an Ed25519 key directory and sign per RFC 9421 (Web Bot Auth profile: cover <c>@authority</c> and <c>signature-agent</c>, tag <c>web-bot-auth</c>, with <c>created</c>, <c>expires</c>, a <c>nonce</c> and a <c>keyid</c> that is the base64url JWK SHA-256 thumbprint) is issued at a higher tier with a larger budget and no challenges. That allowance IS a total and never refills. GET this path for the full ladder.
    /// </para>
    /// </remarks>
    public Task<TrialKey> MintAgentKey(MintAgentKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/agent-key"),
            [],
            [],
            [
                new HeaderParam("Signature-Agent", request.SignatureAgent),
                new HeaderParam("Signature-Input", request.SignatureInput),
                new HeaderParam("Signature", request.Signature),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TrialKey>(),
            MintAgentKeyError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Take another challenge on a key you hold
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ChallengeIssued"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TakeChallengeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A trial key whose grant is spent asks for three new calls, is locked to them, answers, and is unlocked again — as often as needed. Replacing an outstanding challenge is allowed; it grants extra calls only if the previous questions turned out to be unanswerable from our side too.
    /// </remarks>
    public Task<ChallengeIssued> TakeChallenge(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/agent-key/challenge"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ChallengeIssued>(),
            TakeChallengeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
