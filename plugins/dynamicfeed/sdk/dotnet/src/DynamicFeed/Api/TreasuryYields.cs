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
using DynamicFeed.Requests.TreasuryYields;

namespace DynamicFeed.Api;

public sealed class TreasuryYields
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal TreasuryYields(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Treasury Yields
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TreasuryYieldsTreasuryYieldsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// US Treasury daily par yield curve + 10Y-2Y / 10Y-3M spreads (the recession signal). Keyless
    /// source, US public domain. (Requires API key.)
    /// </remarks>
    public Task<object> TreasuryYieldsTreasuryYieldsGet(TreasuryYieldsTreasuryYieldsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/treasury-yields"),
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
            TreasuryYieldsTreasuryYieldsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
