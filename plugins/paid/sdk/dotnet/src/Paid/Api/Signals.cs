using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Paid.Core;
using Paid.Core.Authentication;
using Paid.Core.Exceptions;
using Paid.Core.Models;
using Paid.Core.Request;
using Paid.Core.Response;
using Paid.Errors;
using Paid.Models;
using Paid.Requests.Signals;

namespace Paid.Api;

public sealed class Signals
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Signals(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create signals in bulk
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkSignalsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSignalsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create multiple signals (usage events) in a single request. Each signal must include a customer attribution (either customerId or externalCustomerId) and a product attribution (either productId or externalProductId).
    /// </remarks>
    public Task<BulkSignalsResponse> CreateSignals(CreateSignalsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultReferenceAnalyticsExperimentalApi("/signals/bulk"),
            [],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BulkSignalsResponse>(),
            CreateSignalsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
