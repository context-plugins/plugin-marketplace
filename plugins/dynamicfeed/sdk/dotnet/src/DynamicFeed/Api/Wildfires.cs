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
using DynamicFeed.Requests.Wildfires;

namespace DynamicFeed.Api;

public sealed class Wildfires
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Wildfires(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Wildfires
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WildfiresWildfiresGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Active US wildfires (NIFC WFIGS) — incident name, size in acres, % contained, cause, state and
    /// location. The 'how big / how contained' detail hotspot feeds can't give. Largest first. (Requires API key.)
    /// </remarks>
    public Task<object> WildfiresWildfiresGet(WildfiresWildfiresGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/wildfires"),
            [],
            [
                new Param("state", request.State),
                new Param("only_uncontained", request.OnlyUncontained),
                new Param("min_acres", request.MinAcres),
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
            WildfiresWildfiresGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
