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
using AwsXRay.Requests.Traces;

namespace AwsXRay.Api;

public sealed class Traces
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Traces(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Batch Get Traces
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BatchGetTracesResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BatchGetTracesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// You cannot find traces through this API if Transaction Search is enabled since trace is not indexed in X-Ray. Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use GetTraceSummaries to get a list of trace IDs.
    /// </remarks>
    public Task<BatchGetTracesResult> BatchGetTraces(BatchGetTracesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/Traces"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BatchGetTracesResult>(),
            BatchGetTracesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Trace Summaries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetTraceSummariesResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTraceSummariesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to BatchGetTraces. A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through api.example.com: service("api.example.com") This filter expression finds traces that have an annotation named account with the value 12345: annotation.account = "12345" For a full list of indexed fields and keywords that you can use in filter expressions, see Use filter expressions in the Amazon Web Services X-Ray Developer Guide.
    /// </remarks>
    public Task<GetTraceSummariesResult> GetTraceSummaries(GetTraceSummariesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/TraceSummaries"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GetTraceSummariesResult>(),
            GetTraceSummariesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
