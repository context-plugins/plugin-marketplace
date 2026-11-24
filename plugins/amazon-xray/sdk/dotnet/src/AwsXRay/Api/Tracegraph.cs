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
using AwsXRay.Requests.Tracegraph;

namespace AwsXRay.Api;

public sealed class Tracegraph
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Tracegraph(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Trace Graph
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetTraceGraphResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTraceGraphError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a service graph for one or more specific trace IDs.
    /// </remarks>
    public Task<GetTraceGraphResult> GetTraceGraph(GetTraceGraphRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/TraceGraph"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GetTraceGraphResult>(),
            GetTraceGraphError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
