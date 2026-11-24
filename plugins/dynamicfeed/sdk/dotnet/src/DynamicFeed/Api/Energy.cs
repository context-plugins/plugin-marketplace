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
using DynamicFeed.Requests.Energy;

namespace DynamicFeed.Api;

public sealed class Energy
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Energy(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Energy Grid
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EnergyGridEnergyGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Live US electricity grid data (EIA v2, public domain): demand, net generation, or current fuel mix
    /// by region/operator. Hourly. (Requires API key.)
    /// </remarks>
    public Task<object> EnergyGridEnergyGet(EnergyGridEnergyGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/energy"),
            [],
            [new Param("region", request.Region), new Param("metric", request.Metric)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            EnergyGridEnergyGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
