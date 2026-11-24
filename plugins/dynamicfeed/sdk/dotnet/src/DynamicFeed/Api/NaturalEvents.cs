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
using DynamicFeed.Requests.NaturalEvents;

namespace DynamicFeed.Api;

public sealed class NaturalEvents
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal NaturalEvents(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Natural Events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NaturalEventsNaturalEventsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Active natural events worldwide (NASA EONET) — wildfires, severe storms, volcanoes, floods,
    /// sea/lake ice. "What natural events are happening on Earth right now?". (Requires API key.)
    /// </remarks>
    public Task<object> NaturalEventsNaturalEventsGet(NaturalEventsNaturalEventsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/natural-events"),
            [],
            [
                new Param("category", request.Category),
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
            NaturalEventsNaturalEventsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
