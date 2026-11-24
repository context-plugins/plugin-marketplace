using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Audioscrape.Core;
using Audioscrape.Core.Authentication;
using Audioscrape.Core.ErrorResponse;
using Audioscrape.Core.Exceptions;
using Audioscrape.Core.Request;
using Audioscrape.Core.Response;
using Audioscrape.Models;

namespace Audioscrape.Api;

/// <summary>
/// Service health and version
/// </summary>
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
    /// Service health check
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="HealthResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns <c>200 OK</c> with a small JSON payload as long as the API is responding. Useful as a liveness probe; does not check downstream dependencies.
    /// </remarks>
    public Task<HealthResponse> GetHealthOpenapi(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/health"),
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
