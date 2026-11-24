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
using DynamicFeed.Requests.Tides;

namespace DynamicFeed.Api;

public sealed class Tides
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Tides(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Tides Ep
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TidesEpTidesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Current water level + next high/low tides for a US coastal station (NOAA CO-OPS, public domain).
    /// SCOPE: US stations only. Not for navigation — confirm against official NOAA tide tables. (Requires API key.)
    /// </remarks>
    public Task<object> TidesEpTidesGet(TidesEpTidesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/tides"),
            [],
            [
                new Param("station", request.Station),
                new Param("location", request.Location),
                new Param("units", request.Units),
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
            TidesEpTidesGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
