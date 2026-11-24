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
using DynamicFeed.Requests.SecFilings;

namespace DynamicFeed.Api;

public sealed class SecFilings
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal SecFilings(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Sec Filings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SecFilingsSecFilingsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Recent SEC EDGAR filings for a US public company (8-K / 10-K / S-1 / Form 4). US public domain.
    /// (Requires API key.)
    /// </remarks>
    public Task<object> SecFilingsSecFilingsGet(SecFilingsSecFilingsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/sec-filings"),
            [],
            [new Param("ticker", request.Ticker), new Param("form", request.Form), new Param("limit", request.Limit)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            SecFilingsSecFilingsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
