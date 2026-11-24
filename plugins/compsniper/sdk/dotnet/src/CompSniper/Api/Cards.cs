using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CompSniper.Core;
using CompSniper.Core.Exceptions;
using CompSniper.Core.Models;
using CompSniper.Core.Request;
using CompSniper.Core.Response;
using CompSniper.Errors;
using CompSniper.Models;
using CompSniper.Requests.Cards;

namespace CompSniper.Api;

public sealed class Cards
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Cards(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel a queued or running card batch
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelCardBatchError"/> when the server returns an error response.</exception>
    public Task CancelCardBatch(CancelCardBatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/cards/batch/{jobId}"),
            [new TemplateParam("jobId", request.JobId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            CancelCardBatchError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get card batch progress and results
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CardBatchJob"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCardBatchError"/> when the server returns an error response.</exception>
    public Task<CardBatchJob> GetCardBatch(GetCardBatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/cards/batch/{jobId}"),
            [new TemplateParam("jobId", request.JobId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CardBatchJob>(),
            GetCardBatchError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Submit a sports or trading-card comps batch
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CardBatchAccepted"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SubmitCardBatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submit up to 100 cards in one HTTP request. Cards are processed asynchronously and sequentially. Each successfully processed card consumes one normal monthly request.
    /// </remarks>
    public Task<CardBatchAccepted> SubmitCardBatch(SubmitCardBatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/cards/batch"),
            [],
            [],
            [
                new HeaderParam("X-Credit-Source", request.XCreditSource),
                new HeaderParam("Idempotency-Key", request.IdempotencyKey),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CardBatchAccepted>(),
            SubmitCardBatchError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
