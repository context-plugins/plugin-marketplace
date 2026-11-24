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
using DynamicFeed.Requests.Signals;

namespace DynamicFeed.Api;

public sealed class Signals
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Signals(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Signals
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SignalsSignalsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// DERIVED proprietary signals computed from Dynamic Feed's recorded history — realized
    /// volatility, price range, and how the cross-exchange spread is trending (widening/narrowing).
    /// Branded numbers only we have; richer as history accumulates. (Requires API key.)
    /// </remarks>
    public Task<object> SignalsSignalsGet(SignalsSignalsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/signals"),
            [],
            [new Param("symbol", request.Symbol), new Param("hours", request.Hours)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            SignalsSignalsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
