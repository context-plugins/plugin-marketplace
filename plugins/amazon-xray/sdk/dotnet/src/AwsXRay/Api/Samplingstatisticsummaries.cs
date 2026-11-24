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
using AwsXRay.Requests.Samplingstatisticsummaries;

namespace AwsXRay.Api;

public sealed class Samplingstatisticsummaries
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Samplingstatisticsummaries(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Sampling Statistic Summaries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetSamplingStatisticSummariesResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSamplingStatisticSummariesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves information about recent sampling results for all sampling rules.
    /// </remarks>
    public Task<GetSamplingStatisticSummariesResult> GetSamplingStatisticSummaries(GetSamplingStatisticSummariesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/SamplingStatisticSummaries"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GetSamplingStatisticSummariesResult>(),
            GetSamplingStatisticSummariesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
