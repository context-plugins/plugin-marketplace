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
using DynamicFeed.Requests.Countdown;

namespace DynamicFeed.Api;

public sealed class Countdown
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Countdown(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Countdown Ep
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CountdownEpCountdownGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Time until a live event (market open/close or next rocket launch). (Key on REST; keyless on MCP.)
    /// </remarks>
    public Task<object> CountdownEpCountdownGet(CountdownEpCountdownGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/countdown"),
            [],
            [new Param("event", request.Event)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            CountdownEpCountdownGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
