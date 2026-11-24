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
using DynamicFeed.Requests.China;

namespace DynamicFeed.Api;

public sealed class China
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal China(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// China Ep
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ChinaEpChinaGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// China markets &amp; macro AIs lack: Shanghai Composite + Hang Seng, A-share/China ETF proxies
    /// (CSI 300, MSCI China, internet, tech, consumer...), CNY/HKD &amp; cross FX, and 12 World Bank macro
    /// series + a derived trade balance. <c>metric</c> narrows the slice. (Requires API key.)
    /// </remarks>
    public Task<object> ChinaEpChinaGet(ChinaEpChinaGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/china"),
            [],
            [new Param("metric", request.Metric)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ChinaEpChinaGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
