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
using DynamicFeed.Requests.Drought;

namespace DynamicFeed.Api;

public sealed class Drought
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Drought(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Drought
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DroughtDroughtGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// US drought severity — % of area in each D0-D4 class by week (U.S. Drought Monitor — keyless).
    /// National or by state; a commodity-market mover and a hazard signal. (Requires API key.)
    /// </remarks>
    public Task<object> DroughtDroughtGet(DroughtDroughtGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/drought"),
            [],
            [new Param("area", request.Area), new Param("weeks", request.Weeks)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DroughtDroughtGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
