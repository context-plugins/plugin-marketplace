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
using DynamicFeed.Requests.CarbonIntensity;

namespace DynamicFeed.Api;

public sealed class CarbonIntensity
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal CarbonIntensity(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Carbon Intensity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CarbonIntensityCarbonIntensityGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// GB grid carbon intensity now + fuel mix + cleanest upcoming half-hour (NESO, CC-BY, keyless
    /// source). (Requires API key.)
    /// </remarks>
    public Task<object> CarbonIntensityCarbonIntensityGet(CarbonIntensityCarbonIntensityGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/carbon-intensity"),
            [],
            [],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            CarbonIntensityCarbonIntensityGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
