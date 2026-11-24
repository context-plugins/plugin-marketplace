using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AtlassianCompass.Core;
using AtlassianCompass.Core.Exceptions;
using AtlassianCompass.Core.Models;
using AtlassianCompass.Core.Request;
using AtlassianCompass.Core.Response;
using AtlassianCompass.Errors;
using AtlassianCompass.Models;
using AtlassianCompass.Requests.Metrics;

namespace AtlassianCompass.Api;

/// <summary>
/// This resource represents metrics. Use this resource to send metric values into a component's metric source.
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
    /// Send metric value
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InsertMetricResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InsertMetricValueError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sends a metric value into a metric source for a component. This API is rate limited. Only 100 requests per user per minute are allowed.
    /// </remarks>
    public Task<InsertMetricResponseDto> InsertMetricValue(InsertMetricValueRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/compass/v1/metrics"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<InsertMetricResponseDto>(),
            InsertMetricValueError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
