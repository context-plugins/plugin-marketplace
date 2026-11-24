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
using DynamicFeed.Requests.RealityCheck;

namespace DynamicFeed.Api;

public sealed class RealityCheck
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal RealityCheck(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Reality Check Ep
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RealityCheckEpRealityCheckGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fact-check a statement against LIVE data — verdict (accurate / stale_or_wrong / current_value /
    /// outside_coverage) + the live value + source. The anti-hallucination check; covers prices, market hours,
    /// software versions, service status. (Key on REST; same tool keyless over MCP.)
    /// </remarks>
    public Task<object> RealityCheckEpRealityCheckGet(RealityCheckEpRealityCheckGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/reality-check"),
            [],
            [new Param("claim", request.Claim)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            RealityCheckEpRealityCheckGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
