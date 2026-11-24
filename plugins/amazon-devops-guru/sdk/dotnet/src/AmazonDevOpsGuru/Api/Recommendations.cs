using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonDevOpsGuru.Core;
using AmazonDevOpsGuru.Core.Exceptions;
using AmazonDevOpsGuru.Core.Models;
using AmazonDevOpsGuru.Core.Request;
using AmazonDevOpsGuru.Core.Response;
using AmazonDevOpsGuru.Errors;
using AmazonDevOpsGuru.Models;
using AmazonDevOpsGuru.Requests.Recommendations;

namespace AmazonDevOpsGuru.Api;

public sealed class Recommendations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Recommendations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Recommendations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListRecommendationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRecommendationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events.
    /// </remarks>
    public Task<ListRecommendationsResponse> ListRecommendations(ListRecommendationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/recommendations"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListRecommendationsResponse>(),
            ListRecommendationsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
