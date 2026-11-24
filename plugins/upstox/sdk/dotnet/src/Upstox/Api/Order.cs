using System;
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
using Upstox.Requests.Order;

namespace Upstox.Api;

public sealed class Order
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Order(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel GTT order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GttTriggerOrderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelGttOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API allows you to cancel GTT orders.
    /// </remarks>
    public Task<GttTriggerOrderResponse> CancelGttOrder(CancelGttOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/order/gtt/cancel"),
            [],
            [],
            [new HeaderParam("Origin", request.Origin), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GttTriggerOrderResponse>(),
            CancelGttOrderError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel multi order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CancelOrExitMultiOrderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelMultiOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// API to cancel all the open or pending orders which can be applied to both AMO and regular orders.
    /// </remarks>
    public Task<CancelOrExitMultiOrderResponse> CancelMultiOrder(CancelMultiOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/order/multi/cancel"),
            [],
            [new Param("tag", request.Tag), new Param("segment", request.Segment)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<CancelOrExitMultiOrderResponse>(),
            CancelMultiOrderError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CancelOrderV3Response"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelOrderError"/> when the server returns an error response.</exception>
    public Task<CancelOrderV3Response> CancelOrder(CancelOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/order/cancel"),
            [],
            [new Param("order_id", request.OrderId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<CancelOrderV3Response>(),
            CancelOrderError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CancelOrderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelOrder1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancel order API can be used for two purposes:
    /// Cancelling an open order which could be an AMO or a normal order
    /// It is also used to EXIT a CO or OCO(bracket order)
    /// </remarks>
    public Task<CancelOrderResponse> CancelOrder1(CancelOrder1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/order/cancel"),
            [],
            [new Param("order_id", request.OrderId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<CancelOrderResponse>(),
            CancelOrder1Error.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Exit all positions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CancelOrExitMultiOrderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExitPositionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the functionality to exit all the positions
    /// </remarks>
    public Task<CancelOrExitMultiOrderResponse> ExitPositions(ExitPositionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/order/positions/exit"),
            [],
            [new Param("tag", request.Tag), new Param("segment", request.Segment)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<CancelOrExitMultiOrderResponse>(),
            ExitPositionsError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get GTT order details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetGttOrderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetGttOrderDetailsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// GTT_ORDER_DESCRIPTION
    /// </remarks>
    public Task<GetGttOrderResponse> GetGttOrderDetails(GetGttOrderDetailsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/order/gtt"),
            [],
            [new Param("gtt_order_id", request.GttOrderId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetGttOrderResponse>(),
            GetGttOrderDetailsError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get order book
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetOrderBookResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOrderBookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the list of orders placed by the user. The orders placed by the user is transient for a day and is cleared by the end of the trading session. This API returns all states of the orders, namely, open, pending, and filled ones.
    /// </remarks>
    public Task<GetOrderBookResponse> GetOrderBook(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/order/retrieve-all"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetOrderBookResponse>(),
            GetOrderBookError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get order history
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetOrderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOrderDetailsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the details of the particular order the user has placed. The orders placed by the user is transient for a day and are cleared by the end of the trading session. This API returns all states of the orders, namely, open, pending, and filled ones.
    /// <para>
    /// The order history can be requested either using order_id or tag.
    /// </para>
    /// <para>
    /// If both the options are passed, the history of the order which precisely matches both the order_id and tag will be returned in the response.
    /// </para>
    /// <para>
    /// If only the tag is passed, the history of all the associated orders which matches the tag will be shared in the response.
    /// </para>
    /// </remarks>
    public Task<GetOrderResponse> GetOrderDetails(GetOrderDetailsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/order/history"),
            [],
            [new Param("order_id", request.OrderId), new Param("tag", request.Tag)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetOrderResponse>(),
            GetOrderDetailsError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get order details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetOrderDetailsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOrderStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the recent detail of the particular order the user has placed. The orders placed by the user is transient for a day and are cleared by the end of the trading session.\n\nThe order details can be requested using order_id.
    /// </remarks>
    public Task<GetOrderDetailsResponse> GetOrderStatus(GetOrderStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/order/details"),
            [],
            [new Param("order_id", request.OrderId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetOrderDetailsResponse>(),
            GetOrderStatusError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get trades
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetTradeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTradeHistoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the trades executed for the day
    /// </remarks>
    public Task<GetTradeResponse> GetTradeHistory(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/order/trades/get-trades-for-day"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetTradeResponse>(),
            GetTradeHistoryError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get trades for order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetTradeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTradesByOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the trades executed for an order
    /// </remarks>
    public Task<GetTradeResponse> GetTradesByOrder(GetTradesByOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/order/trades"),
            [],
            [new Param("order_id", request.OrderId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetTradeResponse>(),
            GetTradesByOrderError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Modify GTT order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GttTriggerOrderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ModifyGttOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API allows you to modify GTT orders.
    /// </remarks>
    public Task<GttTriggerOrderResponse> ModifyGttOrder(ModifyGttOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/order/gtt/modify"),
            [],
            [],
            [new HeaderParam("Origin", request.Origin), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GttTriggerOrderResponse>(),
            ModifyGttOrderError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Modify order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ModifyOrderV3Response"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ModifyOrderError"/> when the server returns an error response.</exception>
    public Task<ModifyOrderV3Response> ModifyOrder(ModifyOrderOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/order/modify"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ModifyOrderV3Response>(),
            ModifyOrderError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Modify order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ModifyOrderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ModifyOrder1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API allows you to modify an order. For modification orderId is mandatory. With orderId you need to send the optional parameter which needs to be modified. In case the optional parameters aren't sent, the default will be considered from the original order
    /// </remarks>
    public Task<ModifyOrderResponse> ModifyOrder1(ModifyOrder1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/order/modify"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ModifyOrderResponse>(),
            ModifyOrder1Error.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Place GTT order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GttTriggerOrderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PlaceGttOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API allows you to place GTT orders.
    /// </remarks>
    public Task<GttTriggerOrderResponse> PlaceGttOrder(PlaceGttOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/order/gtt/place"),
            [],
            [],
            [new HeaderParam("Origin", request.Origin), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GttTriggerOrderResponse>(),
            PlaceGttOrderError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Place multi order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MultiOrderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PlaceMultiOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API allows you to place multiple orders to the exchange via Upstox.
    /// </remarks>
    public Task<MultiOrderResponse> PlaceMultiOrder(PlaceMultiOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/order/multi/place"),
            [],
            [],
            [new HeaderParam("Origin", request.Origin), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MultiOrderResponse>(),
            PlaceMultiOrderError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Place order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlaceOrderV3Response"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PlaceOrderError"/> when the server returns an error response.</exception>
    public Task<PlaceOrderV3Response> PlaceOrder(PlaceOrderOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/order/place"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PlaceOrderV3Response>(),
            PlaceOrderError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Place order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PlaceOrderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PlaceOrder1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API allows you to place an order to the exchange via Upstox.
    /// </remarks>
    public Task<PlaceOrderResponse> PlaceOrder1(PlaceOrder1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/order/place"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PlaceOrderResponse>(),
            PlaceOrder1Error.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);
}
