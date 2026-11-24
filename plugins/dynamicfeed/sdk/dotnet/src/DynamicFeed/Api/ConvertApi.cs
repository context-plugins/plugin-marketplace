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
using DynamicFeed.Requests.ConvertApi;

namespace DynamicFeed.Api;

public sealed class ConvertApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal ConvertApi(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Convert Ep
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ConvertEpConvertGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert money between fiat currencies at the LIVE ECB reference rate. Crypto &amp; precious-metal
    /// conversion is coming in a future release. (Requires API key; keyless over MCP.)
    /// </remarks>
    public Task<object> ConvertEpConvertGet(ConvertEpConvertGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/convert"),
            [],
            [
                new Param("amount", request.Amount),
                new Param("from_currency", request.FromCurrency),
                new Param("to_currency", request.ToCurrency),
            ],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ConvertEpConvertGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
