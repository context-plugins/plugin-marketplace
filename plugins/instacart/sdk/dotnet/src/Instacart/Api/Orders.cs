using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Instacart.Core;
using Instacart.Core.Exceptions;
using Instacart.Core.Models;
using Instacart.Core.Request;
using Instacart.Core.Response;
using Instacart.Errors;
using Instacart.Models;
using Instacart.Requests.Orders;

namespace Instacart.Api;

/// <summary>
/// Endpoints for retrieving order status, handling details, and item information after checkout.
/// </summary>
public sealed class Orders
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Orders(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get order handling information
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrderHandlingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOrderHandlingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves handling information for a specific order, including the delivery or pickup address, the coordinates of the delivery or pickup address, information about the current shopper, and any notes or instructions included with the order.
    /// </remarks>
    public Task<OrderHandlingResponse> GetOrderHandling(GetOrderHandlingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/post_checkout/orders/{order_id}/handling"),
            [new TemplateParam("order_id", request.OrderId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<OrderHandlingResponse>(),
            GetOrderHandlingError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get order items
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrderItemsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOrderItemsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the list of items for a specific order. Each item includes item details of the ordered item, the current status of that item, and the current replacement for that item if one exists. Poll this endpoint while a shopper is picking the order to get real-time item status updates.
    /// </remarks>
    public Task<OrderItemsResponse> GetOrderItems(GetOrderItemsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/post_checkout/orders/{order_id}/items"),
            [new TemplateParam("order_id", request.OrderId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<OrderItemsResponse>(),
            GetOrderItemsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
