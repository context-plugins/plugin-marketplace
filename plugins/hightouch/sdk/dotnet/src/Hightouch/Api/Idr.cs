using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hightouch.Core;
using Hightouch.Core.Exceptions;
using Hightouch.Core.Extensions;
using Hightouch.Core.Models;
using Hightouch.Core.Request;
using Hightouch.Core.Response;
using Hightouch.Errors;
using Hightouch.Models;
using Hightouch.Requests.Idr;

namespace Hightouch.Api;

public sealed class Idr
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Idr(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List IDR runs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListIdrRunsOutput"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListIdrRunsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List runs for a given IDR graph
    /// </remarks>
    public Task<ListIdrRunsOutput> ListIdrRuns(ListIdrRunsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/idr/{graphId}/runs"),
            [new TemplateParam("graphId", request.GraphId)],
            [
                new Param("runId", request.RunId),
                new Param("after", request.After?.ToIso8601()),
                new Param("before", request.Before?.ToIso8601()),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("orderBy", request.OrderBy),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListIdrRunsOutput>(),
            ListIdrRunsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Queue identifier values for reprocessing
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IdrQueueForReprocessingOutput"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="QueueForReprocessingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Trigger an async job to queue identifier values for reprocessing, optionally adding them to the blocklist.
    /// If <c>block</c> is true (the default), identifier values will be added to the blocklist and ignored in future runs.
    /// Clusters containing these identifier values will be queued for reprocessing.
    /// </remarks>
    public Task<IdrQueueForReprocessingOutput> QueueForReprocessing(QueueForReprocessingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/idr/{graphId}/queue-for-reprocessing"),
            [new TemplateParam("graphId", request.GraphId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IdrQueueForReprocessingOutput>(),
            QueueForReprocessingError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reprocess status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IdrReprocessStatusOutput"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReprocessStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the status of a reprocessing request
    /// </remarks>
    public Task<IdrReprocessStatusOutput> ReprocessStatus(ReprocessStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/idr/{graphId}/reprocess-status/{requestId}"),
            [new TemplateParam("graphId", request.GraphId), new TemplateParam("requestId", request.RequestId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IdrReprocessStatusOutput>(),
            ReprocessStatusError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trigger IDR run
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TriggerRunIdrOutput"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TriggerIdrRunError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Trigger a new IDR run for a graph
    /// </remarks>
    public Task<TriggerRunIdrOutput> TriggerIdrRun(TriggerIdrRunRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/idr/{graphId}/trigger"),
            [new TemplateParam("graphId", request.GraphId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TriggerRunIdrOutput>(),
            TriggerIdrRunError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
