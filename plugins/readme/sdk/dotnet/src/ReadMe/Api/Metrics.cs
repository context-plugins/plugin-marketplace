using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using ReadMe.Core;
using ReadMe.Core.Exceptions;
using ReadMe.Core.Models;
using ReadMe.Core.Request;
using ReadMe.Core.Response;
using ReadMe.Errors;
using ReadMe.Requests.Metrics;

namespace ReadMe.Api;

/// <summary>
/// Send API request metrics from server-side SDKs
/// </summary>
public sealed class Metrics
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Metrics(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Submit API Request Logs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRequestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send API request and response metadata (HAR-formatted) to ReadMe Metrics for analysis in the Developer Dashboard.
    /// </remarks>
    public Task PostRequest(PostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/request"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            PostRequestError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
