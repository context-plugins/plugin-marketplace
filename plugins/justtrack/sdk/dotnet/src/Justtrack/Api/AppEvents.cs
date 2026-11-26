using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Justtrack.Core;
using Justtrack.Core.Exceptions;
using Justtrack.Core.Models;
using Justtrack.Core.Request;
using Justtrack.Core.Response;
using Justtrack.Errors;
using Justtrack.Models;
using Justtrack.Requests.AppEvents;

namespace Justtrack.Api;

public sealed class AppEvents
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AppEvents(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Send a batch of app events to justtrack
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="BatchErrorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostAppEventBatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sends batches of batches of events where each inner batch is for a single app and user.
    /// Follows a bulk processing paradigm where individual AppEventBatches in the InputBatch are processed
    /// independently from each other. If an AppEventBatch fails to be processed, this does not affect the processing
    /// of the other AppEventBatches in the InputBatch. For all AppEventBatches that fail an individual error status is
    /// set for its batchId for the "207" status code. An individual AppEventBatch is processed "all or nothing".
    /// After acceptance of a batch, there is delayed processing of it in subsequent components where additional validation happens.
    /// This means that even though a batch was successfully accepted, not necessarily all events will pass processing.
    /// This subsequent processing includes but is not limited to:
    /// - deduplication
    /// - additional semantic validation
    /// - user identity resolution
    /// User Identity is determined once for the whole batch for an app user combination, using the newest information which predates the newest event in the batch.
    /// </remarks>
    public Task<IReadOnlyList<BatchErrorResponse>> PostAppEventBatch(PostAppEventBatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/appevents/v1"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyList<BatchErrorResponse>>(),
            PostAppEventBatchError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
