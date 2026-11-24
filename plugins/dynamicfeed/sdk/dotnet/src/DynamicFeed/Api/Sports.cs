using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DynamicFeed.Core;
using DynamicFeed.Core.Authentication;
using DynamicFeed.Core.ErrorResponse;
using DynamicFeed.Core.Exceptions;
using DynamicFeed.Core.Models;
using DynamicFeed.Core.Request;
using DynamicFeed.Core.Response;
using DynamicFeed.Errors;
using DynamicFeed.Requests.Sports;

namespace DynamicFeed.Api;

public sealed class Sports
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Sports(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Sports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SportsSportsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Global ATTENTION + official schedule for a sporting event/team/competition — e.g. the 2026 FIFA
    /// World Cup. Attention = daily Wikipedia article views by language edition, with 7-day momentum &amp; peak;
    /// plus hosts, start/end dates and sport from Wikidata. Source: Wikimedia Pageviews + Wikidata (CC0) —
    /// this is the neutral global-attention layer, NOT live scores, fixtures or odds. (Requires API key.)
    /// </remarks>
    public Task<object> SportsSportsGet(SportsSportsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sports"),
            [],
            [new Param("topic", request.Topic), new Param("days", request.Days), new Param("lang", request.Lang)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            SportsSportsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Worldcup Route
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// 2026 FIFA World Cup fixtures + final results (openfootball, public domain). Keyless — powers the
    /// homepage World Cup section and any agent. See also the keyless <c>world_cup</c> MCP tool.
    /// </remarks>
    public Task<object> WorldcupRouteWorldcupGet(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/worldcup"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
