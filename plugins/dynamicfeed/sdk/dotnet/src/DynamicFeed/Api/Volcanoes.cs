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
using DynamicFeed.Requests.Volcanoes;

namespace DynamicFeed.Api;

public sealed class Volcanoes
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Volcanoes(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Volcanoes Ep
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VolcanoesEpVolcanoesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Current US volcano alert levels (USGS Volcano Hazards Program, public domain). 'elevated' = only
    /// volcanoes at YELLOW/ORANGE/RED or ADVISORY/WATCH/WARNING; 'all' = every USGS-monitored volcano. Each
    /// carries the ground alert level, aviation colour code and the official notice URL. SCOPE: US volcanoes
    /// only — the global Smithsonian GVP dataset is licensed non-commercial. (Requires API key.)
    /// </remarks>
    public Task<object> VolcanoesEpVolcanoesGet(VolcanoesEpVolcanoesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/volcanoes"),
            [],
            [new Param("status", request.Status), new Param("limit", request.Limit)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            VolcanoesEpVolcanoesGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
