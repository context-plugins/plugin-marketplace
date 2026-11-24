using System;
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
using Instacart.Requests.Delivery;

namespace Instacart.Api;

/// <summary>
/// Endpoints for finding delivery stores, previewing time slots, reserving time slots, and creating delivery orders.
/// </summary>
public sealed class Delivery
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Delivery(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel an order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancels a delivery, pickup, or last mile delivery order. To successfully cancel, the order status must be brand_new. Once a shopper is assigned and the status moves to acknowledged, the order can no longer be canceled through this endpoint.
    /// </remarks>
    public Task<OrderResponse> CancelOrder(CancelOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/fulfillment/users/{user_id}/orders/{order_id}/cancel"),
            [new TemplateParam("user_id", request.UserId), new TemplateParam("order_id", request.OrderId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<OrderResponse>(),
            CancelOrderError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a delivery order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateDeliveryOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a delivery order for a previously reserved time slot. The order includes the cart items and delivery details. Orders should be created as soon as possible after the time slot is reserved.
    /// </remarks>
    public Task<OrderResponse> CreateDeliveryOrder(CreateDeliveryOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/fulfillment/users/{user_id}/orders/delivery"),
            [new TemplateParam("user_id", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<OrderResponse>(),
            CreateDeliveryOrderError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Find stores offering delivery
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StoresResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FindDeliveryStoresError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns an array of stores that offer delivery for the customer's location, sorted by distance with the closest store first. Accepts location data such as latitude and longitude or a postal code.
    /// </remarks>
    public Task<StoresResponse> FindDeliveryStores(FindDeliveryStoresRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/fulfillment/stores/delivery"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StoresResponse>(),
            FindDeliveryStoresError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves details for a specific order, including its current status, items, and delivery or pickup information.
    /// </remarks>
    public Task<OrderResponse> GetOrder(GetOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/fulfillment/users/{user_id}/orders/{order_id}"),
            [new TemplateParam("user_id", request.UserId), new TemplateParam("order_id", request.OrderId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<OrderResponse>(),
            GetOrderError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Preview time slots for delivery
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ServiceOptionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PreviewDeliveryTimeSlotsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Previews possible service options and available time slots for delivery fulfillments. Useful for displaying delivery time options to customers before they complete checkout.
    /// </remarks>
    public Task<ServiceOptionsResponse> PreviewDeliveryTimeSlots(PreviewDeliveryTimeSlotsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/fulfillment/users/{user_id}/service_options/delivery"),
            [new TemplateParam("user_id", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ServiceOptionsResponse>(),
            PreviewDeliveryTimeSlotsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reserve a previewed delivery time slot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ServiceOptionHoldResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReserveDeliveryTimeSlotError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Reserves a selected delivery time slot for the specified user and their cart items. The hold is temporary and must be followed by order creation before it expires.
    /// </remarks>
    public Task<ServiceOptionHoldResponse> ReserveDeliveryTimeSlot(ReserveDeliveryTimeSlotRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/fulfillment/users/{user_id}/service_options/delivery/hold"),
            [new TemplateParam("user_id", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ServiceOptionHoldResponse>(),
            ReserveDeliveryTimeSlotError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
