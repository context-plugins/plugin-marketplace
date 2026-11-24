using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Divvy.Core;
using Divvy.Core.Authentication;
using Divvy.Core.ErrorResponse;
using Divvy.Core.Exceptions;
using Divvy.Core.Request;
using Divvy.Core.Response;
using Divvy.Models;

namespace Divvy.Api;

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
    /// Check app health
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="HealthCheckDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns application health status.
    /// </remarks>
    public Task<HealthCheckDto> GetHealthCheck(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/health"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<HealthCheckDto>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
