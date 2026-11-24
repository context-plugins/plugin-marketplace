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
using Instacart.Requests.LastMileDelivery;

namespace Instacart.Api;

/// <summary>
/// Endpoints for last mile delivery where items are pre-packed and only require delivery from the store to the customer.
/// </summary>
public sealed class LastMileDelivery
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal LastMileDelivery(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a last mile delivery order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateLastMileOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a last mile delivery order for a previously reserved time slot. Last mile orders are for pre-packed items that require only delivery from the store to the customer location.
    /// </remarks>
    public Task<OrderResponse> CreateLastMileOrder(CreateLastMileOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/fulfillment/lastmile/users/{user_id}/orders"),
            [new TemplateParam("user_id", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<OrderResponse>(),
            CreateLastMileOrderError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Find stores offering last mile delivery
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StoresResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FindLastMileStoresError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns an array of stores that offer last mile delivery for the customer's location. Last mile delivery is for pre-packed orders that only require transportation from the store to the customer.
    /// </remarks>
    public Task<StoresResponse> FindLastMileStores(FindLastMileStoresRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/fulfillment/stores/last_mile"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StoresResponse>(),
            FindLastMileStoresError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reserve a time slot for last mile delivery
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ServiceOptionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PreviewLastMileServiceOptionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Previews and reserves a time slot for a last mile delivery order. Used to secure a delivery window before creating the order.
    /// </remarks>
    public Task<ServiceOptionsResponse> PreviewLastMileServiceOptions(PreviewLastMileServiceOptionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/fulfillment/lastmile/users/{user_id}/service_options"),
            [new TemplateParam("user_id", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ServiceOptionsResponse>(),
            PreviewLastMileServiceOptionsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stage a last mile delivery order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StageLastMileOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Marks a last mile delivery order as staged and ready for pickup by the delivery driver. This should be called when the order items are packed and ready at the store.
    /// </remarks>
    public Task<OrderResponse> StageLastMileOrder(StageLastMileOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/fulfillment/lastmile/orders/{order_id}/staged"),
            [new TemplateParam("order_id", request.OrderId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<OrderResponse>(),
            StageLastMileOrderError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
