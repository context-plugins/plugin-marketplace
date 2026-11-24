using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DynamicFeed.Core;
using DynamicFeed.Core.Authentication;
using DynamicFeed.Core.ErrorResponse;
using DynamicFeed.Core.Exceptions;
using DynamicFeed.Core.Models;
using DynamicFeed.Core.Request;
using DynamicFeed.Core.Response;
using DynamicFeed.Errors;
using DynamicFeed.Requests.VerifiedFacts;

namespace DynamicFeed.Api;

public sealed class VerifiedFacts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal VerifiedFacts(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// V1 Answer
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// ANSWERS WITH RECEIPTS (answer/v1) — submit factual premises (structured checks) or a
    /// question, get ONE Ed25519-signed answer object carrying the complete evidence chain: the exact
    /// calls made, the exact source readings (fact/v1), per-premise verdicts computed by the published
    /// deterministic rule answer-eval/1, and a confidence whose formula ships inside the payload
    /// (answer-conf/1) so anyone can recompute it. No model in the loop: unroutable input gets a
    /// SIGNED refusal that states exactly what IS covered. Signed proves integrity, not truth;
    /// everything is advisory evidence. Keyless; GET returns usage + coverage.
    /// </remarks>
    public Task<object> PostV1Answer(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/answer"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Facts
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Verified-fact layer: any tool, returned in ONE canonical fact shape with an HONEST
    /// verification block. Cardinal rule: signed != verified. An Ed25519 signature proves Dynamic Feed
    /// reported this exact value at this time, unaltered (integrity); 'verified' is reserved for facts
    /// independently corroborated by 2+ sources AND still fresh. confidence is a transparent composite
    /// of the exposed signals, never decorative; a single-source reading is honestly verified:false.
    /// Keyless, read-only. GET /v1/facts?tool=current_weather&amp;city=Sydney , or
    /// POST {"calls":[{"tool":...,"args":{...}}]}. The whole envelope is Ed25519-signed.
    /// </remarks>
    public Task<object> PostV1Facts(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/facts"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Answer
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// ANSWERS WITH RECEIPTS (answer/v1) — submit factual premises (structured checks) or a
    /// question, get ONE Ed25519-signed answer object carrying the complete evidence chain: the exact
    /// calls made, the exact source readings (fact/v1), per-premise verdicts computed by the published
    /// deterministic rule answer-eval/1, and a confidence whose formula ships inside the payload
    /// (answer-conf/1) so anyone can recompute it. No model in the loop: unroutable input gets a
    /// SIGNED refusal that states exactly what IS covered. Signed proves integrity, not truth;
    /// everything is advisory evidence. Keyless; GET returns usage + coverage.
    /// </remarks>
    public Task<object> V1AnswerV1AnswerGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/answer"),
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
    /// V1 Facts
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Verified-fact layer: any tool, returned in ONE canonical fact shape with an HONEST
    /// verification block. Cardinal rule: signed != verified. An Ed25519 signature proves Dynamic Feed
    /// reported this exact value at this time, unaltered (integrity); 'verified' is reserved for facts
    /// independently corroborated by 2+ sources AND still fresh. confidence is a transparent composite
    /// of the exposed signals, never decorative; a single-source reading is honestly verified:false.
    /// Keyless, read-only. GET /v1/facts?tool=current_weather&amp;city=Sydney , or
    /// POST {"calls":[{"tool":...,"args":{...}}]}. The whole envelope is Ed25519-signed.
    /// </remarks>
    public Task<object> V1FactsV1FactsGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/facts"),
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
    /// V1 State Of Mcp Trend
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1StateOfMcpTrendV1StateOfMcpTrendGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Growth over time: the headline State of MCP numbers, one point per daily snapshot, oldest
    /// first. The trend IS the value (server count, remote share, keyless share drifting over time).
    /// </remarks>
    public Task<object> V1StateOfMcpTrendV1StateOfMcpTrendGet(V1StateOfMcpTrendV1StateOfMcpTrendGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/state-of-mcp/trend"),
            [],
            [new Param("days", request.Days)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1StateOfMcpTrendV1StateOfMcpTrendGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 State Of Mcp
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// STATE OF MCP — a signed census of the Model Context Protocol ecosystem, measured from the
    /// official registry: how many servers exist, how many are remote, and how many are keyless. One
    /// Ed25519-signed envelope you can verify against /.well-known/keys; a primary-source figure, not
    /// a claim. Served from the latest daily snapshot (the crawl runs off the request path). Keyless.
    /// </remarks>
    public Task<object> V1StateOfMcpV1StateOfMcpGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/state-of-mcp"),
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
}
