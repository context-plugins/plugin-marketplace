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
using DynamicFeed.Requests.WaterLevels;

namespace DynamicFeed.Api;

public sealed class WaterLevels
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal WaterLevels(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Water Levels
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WaterLevelsWaterLevelsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Real-time US river levels — gage height + streamflow from USGS (a keyless public-domain source):
    /// by state, USGS site number(s), or a curated set of major rivers. Rising gage = flood risk; unusually
    /// low flow = drought. Each reading carries its USGS observation time. (Requires API key.)
    /// </remarks>
    public Task<object> WaterLevelsWaterLevelsGet(WaterLevelsWaterLevelsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/water-levels"),
            [],
            [new Param("state", request.State), new Param("site", request.Site), new Param("limit", request.Limit)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            WaterLevelsWaterLevelsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
