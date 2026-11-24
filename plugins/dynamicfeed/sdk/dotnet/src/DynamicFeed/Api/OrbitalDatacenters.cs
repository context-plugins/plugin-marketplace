using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DynamicFeed.Core;
using DynamicFeed.Core.Authentication;
using DynamicFeed.Core.Exceptions;
using DynamicFeed.Core.Models;
using DynamicFeed.Core.Request;
using DynamicFeed.Core.Response;
using DynamicFeed.Errors;
using DynamicFeed.Requests.OrbitalDatacenters;

namespace DynamicFeed.Api;

public sealed class OrbitalDatacenters
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal OrbitalDatacenters(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Orbital Datacenters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OrbitalDatacentersOrbitalDatacentersGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// DATA CENTERS IN SPACE — a curated registry of compute/AI spacecraft in orbit (Starcloud's
    /// NVIDIA H100, ESA Φsat-2 AI edge, D-Orbit in-orbit cloud), each enriched with live orbital data
    /// and the speed-of-light latency floor for ground links. Data nowhere else. (Requires API key.)
    /// </remarks>
    public Task<object> OrbitalDatacentersOrbitalDatacentersGet(OrbitalDatacentersOrbitalDatacentersGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/orbital-datacenters"),
            [],
            [],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            OrbitalDatacentersOrbitalDatacentersGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
