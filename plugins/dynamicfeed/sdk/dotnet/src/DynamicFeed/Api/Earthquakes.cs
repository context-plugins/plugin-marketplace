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
using DynamicFeed.Requests.Earthquakes;

namespace DynamicFeed.Api;

public sealed class Earthquakes
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Earthquakes(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Earthquakes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EarthquakesEarthquakesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Recent earthquakes worldwide (USGS) — magnitude, depth, location, PAGER impact alert, tsunami
    /// flag, felt reports and significance. Sorted by impact then magnitude. (Requires API key.)
    /// </remarks>
    public Task<object> EarthquakesEarthquakesGet(EarthquakesEarthquakesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/earthquakes"),
            [],
            [
                new Param("min_magnitude", request.MinMagnitude),
                new Param("period", request.Period),
                new Param("tsunami_only", request.TsunamiOnly),
                new Param("limit", request.Limit),
            ],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            EarthquakesEarthquakesGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
