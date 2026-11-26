using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using EinsteinBots.Core;
using EinsteinBots.Core.Authentication;
using EinsteinBots.Core.ErrorResponse;
using EinsteinBots.Core.Exceptions;
using EinsteinBots.Core.Request;
using EinsteinBots.Core.Response;
using EinsteinBots.Models;

namespace EinsteinBots.Api;

public sealed class Versions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Versions(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get API versions
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SupportedVersions"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the list of supported Einstein Bots API versions.
    /// </remarks>
    public Task<SupportedVersions> GetApiVersions(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/versions"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SupportedVersions>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
