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
using DynamicFeed.Requests.Consensus;

namespace DynamicFeed.Api;

public sealed class Consensus
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Consensus(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Consensus
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ConsensusConsensusGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// PROPRIETARY: real-time cross-exchange price consensus — the median price across
    /// several independent venues plus how tightly they agree (spread in basis points), the
    /// min/max, and the per-venue breakdown. Tells an AI tool the real price AND whether to
    /// trust it. Measured by Dynamic Feed; available nowhere else. (Requires API key.)
    /// </remarks>
    public Task<object> ConsensusConsensusGet(ConsensusConsensusGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/consensus"),
            [],
            [new Param("symbol", request.Symbol), new Param("limit", request.Limit)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ConsensusConsensusGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
