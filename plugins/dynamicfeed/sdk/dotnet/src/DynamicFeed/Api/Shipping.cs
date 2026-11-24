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
using DynamicFeed.Requests.Shipping;

namespace DynamicFeed.Api;

public sealed class Shipping
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Shipping(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Shipping Ep
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ShippingEpShippingGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Global shipping &amp; maritime: daily ship transits through the world's 28 chokepoints (Suez, Panama,
    /// Hormuz, Malacca, Taiwan...) via IMF PortWatch, the ~2,065-port global registry, and LIVE Baltic vessel
    /// positions (AIS, Digitraffic) enriched with ship name/type/destination. (Requires API key.)
    /// </remarks>
    public Task<object> ShippingEpShippingGet(ShippingEpShippingGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/shipping"),
            [],
            [
                new Param("scope", request.Scope),
                new Param("query", request.Query),
                new Param("region", request.Region),
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
            ShippingEpShippingGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
