using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Upstox.Core;
using Upstox.Core.Exceptions;
using Upstox.Core.Models;
using Upstox.Core.Request;
using Upstox.Core.Response;
using Upstox.Errors;
using Upstox.Models;
using Upstox.Requests.Websocket;

namespace Upstox.Api;

public sealed class Websocket
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Websocket(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Market Data Feed
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMarketDataFeedError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API redirects the client to the respective socket endpoint to receive Market updates.
    /// </remarks>
    public Task GetMarketDataFeed(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/feed/market-data-feed"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetMarketDataFeedError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Market Data Feed Authorize
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebsocketAuthRedirectResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMarketDataFeedAuthorizeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the functionality to retrieve the socket endpoint URI for Market updates.
    /// </remarks>
    public Task<WebsocketAuthRedirectResponse> GetMarketDataFeedAuthorize(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/feed/market-data-feed/authorize"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebsocketAuthRedirectResponse>(),
            GetMarketDataFeedAuthorizeError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Portfolio Stream Feed
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPortfolioStreamFeedError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API redirects the client to the respective socket endpoint to receive Portfolio updates.
    /// </remarks>
    public Task GetPortfolioStreamFeed(GetPortfolioStreamFeedRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/feed/portfolio-stream-feed"),
            [],
            [new Param("update_types", request.UpdateTypes)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetPortfolioStreamFeedError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Portfolio Stream Feed Authorize
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebsocketAuthRedirectResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPortfolioStreamFeedAuthorizeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the functionality to retrieve the socket endpoint URI for Portfolio updates.
    /// </remarks>
    public Task<WebsocketAuthRedirectResponse> GetPortfolioStreamFeedAuthorize(GetPortfolioStreamFeedAuthorizeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/feed/portfolio-stream-feed/authorize"),
            [],
            [new Param("update_types", request.UpdateTypes)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebsocketAuthRedirectResponse>(),
            GetPortfolioStreamFeedAuthorizeError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);
}
