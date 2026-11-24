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
using AwsXRay.Requests.Insightsummaries;

namespace AwsXRay.Api;

public sealed class Insightsummaries
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Insightsummaries(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Insight Summaries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetInsightSummariesResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetInsightSummariesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the summaries of all insights in the specified group matching the provided filter values.
    /// </remarks>
    public Task<GetInsightSummariesResult> GetInsightSummaries(GetInsightSummariesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/InsightSummaries"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GetInsightSummariesResult>(),
            GetInsightSummariesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
