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
using Upstox.Requests.MutualFund;

namespace Upstox.Api;

public sealed class MutualFund
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal MutualFund(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get mutual fund holdings
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetMutualFundHoldingsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMutualFundHoldingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns mutual fund holdings for the authenticated user.
    /// </remarks>
    public Task<GetMutualFundHoldingsResponse> GetMutualFundHoldings(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/mf/holdings"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetMutualFundHoldingsResponse>(),
            GetMutualFundHoldingsError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get mutual fund order by id
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetMutualFundOrderDetailsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMutualFundOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a single mutual fund order by order id.
    /// </remarks>
    public Task<GetMutualFundOrderDetailsResponse> GetMutualFundOrder(GetMutualFundOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/mf/orders/{order_id}"),
            [new TemplateParam("order_id", request.OrderId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetMutualFundOrderDetailsResponse>(),
            GetMutualFundOrderError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get mutual fund orders
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetMutualFundOrdersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMutualFundOrdersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns mutual fund orders from the last 7 days for the authenticated user.
    /// </remarks>
    public Task<GetMutualFundOrdersResponse> GetMutualFundOrders(GetMutualFundOrdersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/mf/orders"),
            [],
            [
                new Param("status", request.Status),
                new Param("transaction_type", request.TransactionType),
                new Param("page_number", request.PageNumber),
                new Param("records", request.Records),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetMutualFundOrdersResponse>(),
            GetMutualFundOrdersError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get mutual fund SIPs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetMutualFundSipsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMutualFundSipsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns active and paused SIP orders for the authenticated user.
    /// </remarks>
    public Task<GetMutualFundSipsResponse> GetMutualFundSips(GetMutualFundSipsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/mf/sips"),
            [],
            [new Param("page_number", request.PageNumber), new Param("records", request.Records)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetMutualFundSipsResponse>(),
            GetMutualFundSipsError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);
}
