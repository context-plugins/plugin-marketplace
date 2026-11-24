using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CompSniper.Core;
using CompSniper.Core.Exceptions;
using CompSniper.Core.Extensions;
using CompSniper.Core.Models;
using CompSniper.Core.Request;
using CompSniper.Core.Response;
using CompSniper.Errors;
using CompSniper.Models;
using CompSniper.Requests.TcGplayer;

namespace CompSniper.Api;

public sealed class TcGplayer
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal TcGplayer(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// TCGplayer active listings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TcgplayerListingsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetV1TcgplayerListingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Active TCGplayer listings for a product with price, shipping, condition and seller details. One successful call uses one request.
    /// </remarks>
    public Task<V1TcgplayerListingsResponse> GetV1TcgplayerListings(GetV1TcgplayerListingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/tcgplayer/listings"),
            [],
            [
                new Param("keyword", request.Keyword),
                new Param("productId", request.ProductId),
                new Param("page", request.Page),
                new Param("count", request.Count),
                new Param("condition", request.Condition),
                new Param("variant", request.Variant),
                new Param("language", request.Language),
            ],
            [new HeaderParam("X-Credit-Source", request.XCreditSource)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1TcgplayerListingsResponse>(),
            GetV1TcgplayerListingsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// TCGplayer completed sales and price history
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TcgplayerSoldResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetV1TcgplayerSoldError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Full TCGplayer completed-sale history for a product, with optional market price history. One successful call uses one request; repeat calls can return instantly from a short-lived saved copy; send fresh=true for a live fetch.
    /// </remarks>
    public Task<V1TcgplayerSoldResponse> GetV1TcgplayerSold(GetV1TcgplayerSoldRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/tcgplayer/sold"),
            [],
            [
                new Param("keyword", request.Keyword),
                new Param("productId", request.ProductId),
                new Param("count", request.Count),
                new Param("condition", request.Condition),
                new Param("variant", request.Variant),
                new Param("language", request.Language),
                new Param("history", request.History),
                new Param("soldAfter", request.SoldAfter?.ToDate()),
                new Param("soldBefore", request.SoldBefore?.ToDate()),
                new Param("fresh", request.Fresh),
            ],
            [new HeaderParam("X-Credit-Source", request.XCreditSource)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1TcgplayerSoldResponse>(),
            GetV1TcgplayerSoldError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
