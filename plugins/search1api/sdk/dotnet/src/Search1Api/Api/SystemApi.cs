using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Search1Api.Core;
using Search1Api.Core.Authentication;
using Search1Api.Core.Exceptions;
using Search1Api.Core.Request;
using Search1Api.Core.Response;
using Search1Api.Errors;
using Search1Api.Models;

namespace Search1Api.Api;

public sealed class SystemApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal SystemApi(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Health check
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="HealthResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HealthError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Report whether the API is serving traffic. Takes no credentials, so use it for uptime and readiness checks — it will not tell you whether an API key is valid; call GET /usage for that. Free to call.
    /// </remarks>
    public Task<HealthResponse> Health(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/health"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<HealthResponse>(),
            HealthError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
