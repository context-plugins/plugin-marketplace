using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Surfe.Core;
using Surfe.Core.Exceptions;
using Surfe.Core.Models;
using Surfe.Core.Request;
using Surfe.Core.Response;
using Surfe.Errors;
using Surfe.Models;
using Surfe.Requests.Recommendations;

namespace Surfe.Api;

/// <summary>
/// ICP definition and lookalike account recommendations.
/// </summary>
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
    /// Fetch lookalike recommendations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecommendationsFetchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchRecommendationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch lookalike account recommendations resembling the best-fit companies defined by the ICP.
    /// </remarks>
    public Task<RecommendationsFetchResponse> FetchRecommendations(FetchRecommendationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/recommendations/fetch"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RecommendationsFetchResponse>(),
            FetchRecommendationsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create or update ICP
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IcpDefinition"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpsertIcpError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create or update the Ideal Customer Profile used to generate lookalike account recommendations.
    /// </remarks>
    public Task<IcpDefinition> UpsertIcp(UpsertIcpRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/recommendations/icp"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IcpDefinition>(),
            UpsertIcpError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
