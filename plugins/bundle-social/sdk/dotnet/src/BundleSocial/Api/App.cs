using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using BundleSocial.Core;
using BundleSocial.Core.Exceptions;
using BundleSocial.Core.Request;
using BundleSocial.Core.Response;
using BundleSocial.Errors;
using BundleSocial.Models;

namespace BundleSocial.Api;

public sealed class App
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal App(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get health
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1Response"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AppGetHealthError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check whether the bundle.social API is reachable and see the current operational status of every supported social platform. Use this endpoint for uptime monitoring and to detect platform-side outages before publishing.
    /// </remarks>
    public Task<ApiV1Response> AppGetHealth(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1Response>(),
            AppGetHealthError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
