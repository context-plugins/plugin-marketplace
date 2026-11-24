using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Cosmic.Core;
using Cosmic.Core.Authentication;
using Cosmic.Core.Exceptions;
using Cosmic.Core.Request;
using Cosmic.Core.Response;
using Cosmic.Errors;
using Cosmic.Models;

namespace Cosmic.Api;

/// <summary>
/// Service health.
/// </summary>
public sealed class StatusApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal StatusApi(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get this OpenAPI document
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OpenapiJsonResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOpenApiSpecError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the machine-readable description of this API. Requires no authentication. Also served from <c>https://www.cosmicjs.com/openapi.json</c>, which proxies this endpoint.
    /// </remarks>
    public Task<OpenapiJsonResponse> GetOpenApiSpec(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/openapi.json"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<OpenapiJsonResponse>(),
            GetOpenApiSpecError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Check API status
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Confirm the API is reachable and learn which AWS region served the request. Requires no authentication, so it is safe to use as a connectivity check before supplying keys.
    /// </remarks>
    public Task<StatusResponse> GetStatus(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/status"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StatusResponse>(),
            GetStatusError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
