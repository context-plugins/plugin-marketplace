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
using DynamicFeed.Requests.GlobalDisasters;

namespace DynamicFeed.Api;

public sealed class GlobalDisasters
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal GlobalDisasters(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Global Disasters Ep
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GlobalDisastersEpGlobalDisastersGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Worldwide multi-hazard disaster alerts (GDACS) — earthquakes, tropical cyclones, floods,
    /// droughts, volcanoes — with a Green/Orange/Red humanitarian-impact level + affected countries.
    /// The 'how bad, where, who's affected' severity layer. (Requires API key.)
    /// </remarks>
    public Task<object> GlobalDisastersEpGlobalDisastersGet(GlobalDisastersEpGlobalDisastersGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/global-disasters"),
            [],
            [
                new Param("alert_level", request.AlertLevel),
                new Param("event_type", request.EventType),
                new Param("country", request.Country),
                new Param("days", request.Days),
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
            GlobalDisastersEpGlobalDisastersGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
