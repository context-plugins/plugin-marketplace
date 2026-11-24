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
using Instacart.Requests.Pickup;

namespace Instacart.Api;

/// <summary>
/// Endpoints for finding pickup stores, previewing time slots, reserving time slots, and creating pickup orders.
/// </summary>
public sealed class Pickup
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Pickup(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a pickup order
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="OrderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatePickupOrderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a pickup order for a previously reserved time slot. The response can take several seconds, so orders should be created as soon as possible after checkout to minimize wait time.
    /// </remarks>
    public Task<OrderResponse> CreatePickupOrder(CreatePickupOrderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/fulfillment/users/{user_id}/orders/pickup"),
            [new TemplateParam("user_id", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<OrderResponse>(),
            CreatePickupOrderError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Find stores offering pickup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StoresResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FindPickupStoresError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns an array of stores that offer pickup for the customer's location, sorted by distance with the closest store first.
    /// </remarks>
    public Task<StoresResponse> FindPickupStores(FindPickupStoresRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/fulfillment/stores/pickup"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StoresResponse>(),
            FindPickupStoresError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Preview time slots for pickup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ServiceOptionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PreviewPickupTimeSlotsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Previews possible service options and available time slots for pickup fulfillments. Useful for displaying pickup time options to customers before they complete checkout.
    /// </remarks>
    public Task<ServiceOptionsResponse> PreviewPickupTimeSlots(PreviewPickupTimeSlotsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/fulfillment/users/{user_id}/service_options/pickup"),
            [new TemplateParam("user_id", request.UserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ServiceOptionsResponse>(),
            PreviewPickupTimeSlotsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
