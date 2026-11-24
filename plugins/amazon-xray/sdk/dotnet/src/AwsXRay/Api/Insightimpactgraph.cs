using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AwsXRay.Core;
using AwsXRay.Core.Exceptions;
using AwsXRay.Core.Models;
using AwsXRay.Core.Request;
using AwsXRay.Core.Response;
using AwsXRay.Errors;
using AwsXRay.Models;
using AwsXRay.Requests.Insightimpactgraph;

namespace AwsXRay.Api;

public sealed class Insightimpactgraph
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Insightimpactgraph(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Insight Impact Graph
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetInsightImpactGraphResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetInsightImpactGraphError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only structural information. For a complete service graph, use this API with the GetServiceGraph API.
    /// </remarks>
    public Task<GetInsightImpactGraphResult> GetInsightImpactGraph(GetInsightImpactGraphRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/InsightImpactGraph"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GetInsightImpactGraphResult>(),
            GetInsightImpactGraphError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
