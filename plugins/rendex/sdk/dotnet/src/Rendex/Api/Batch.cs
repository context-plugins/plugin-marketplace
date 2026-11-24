using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Rendex.Core;
using Rendex.Core.Exceptions;
using Rendex.Core.Models;
using Rendex.Core.Request;
using Rendex.Core.Response;
using Rendex.Errors;
using Rendex.Models;
using Rendex.Requests.Batch;

namespace Rendex.Api;

/// <summary>
/// Multi-URL batch capture
/// </summary>
public sealed class Batch
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Batch(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Batch capture multiple URLs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BatchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostScreenshotBatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submit up to 500 URLs for capture in a single request. Each URL is processed
    /// asynchronously. Returns a <c>batchId</c> that can be polled via <c>GET /v1/batches/{batchId}</c>.
    /// Shared defaults apply to all URLs unless overridden per-item.
    /// </remarks>
    public Task<BatchResponse> PostScreenshotBatch(PostScreenshotBatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/screenshot/batch"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BatchResponse>(),
            PostScreenshotBatchError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
