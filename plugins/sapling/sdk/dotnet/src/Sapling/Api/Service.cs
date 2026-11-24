using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Sapling.Core;
using Sapling.Core.Authentication;
using Sapling.Core.ErrorResponse;
using Sapling.Core.Exceptions;
using Sapling.Core.Request;
using Sapling.Core.Response;
using Sapling.Models;

namespace Sapling.Api;

/// <summary>
/// Health and version probes (no API key).
/// </summary>
public sealed class Service
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Service(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Liveness probe
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1LivenessResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Answers 200 while the API process is up.
    /// </remarks>
    public Task<ApiV1LivenessResponse> SaplingLiveness(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/liveness"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1LivenessResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Server version
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1VersionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Release and build identifiers of the serving deployment.
    /// </remarks>
    public Task<ApiV1VersionResponse> SaplingVersion(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/version"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1VersionResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
