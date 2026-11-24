using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Rendex.Core;
using Rendex.Core.Authentication;
using Rendex.Core.ErrorResponse;
using Rendex.Core.Exceptions;
using Rendex.Core.Request;
using Rendex.Core.Response;
using Rendex.Errors;
using Rendex.Models;

namespace Rendex.Api;

/// <summary>
/// Service health checks
/// </summary>
public sealed class Health
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Health(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Deep dependency check
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DeepHealthResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeepHealthCheckError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Verifies connectivity to all external dependencies (database, billing).
    /// </remarks>
    public Task<DeepHealthResponse> DeepHealthCheck(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/health/deep"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DeepHealthResponse>(),
            DeepHealthCheckError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Liveness check
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="HealthResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns 200 if the API worker is running.
    /// </remarks>
    public Task<HealthResponse> HealthCheck(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/health"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<HealthResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
