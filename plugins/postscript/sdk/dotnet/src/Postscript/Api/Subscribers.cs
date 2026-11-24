using System;
using System.Net.Http;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Postscript.Core;
using Postscript.Core.Exceptions;
using Postscript.Core.Extensions;
using Postscript.Core.Models;
using Postscript.Core.Request;
using Postscript.Core.Response;
using Postscript.Errors;
using Postscript.Requests.Subscribers;

namespace Postscript.Api;

/// <summary>
/// Read and update SMS subscribers for a shop.
/// </summary>
public sealed class Subscribers
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Subscribers(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Subscriber
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JsonElement"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSubscriberError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get an individual subscriber for a shop.
    /// </remarks>
    public Task<JsonElement> GetSubscriber(GetSubscriberRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/subscribers/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("X-Postscript-Shop-Token", request.XPostscriptShopToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<JsonElement>(),
            GetSubscriberError.Response,
            _auth.Sec0,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Subscribers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JsonElement"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSubscribersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of subscribers for a shop.
    /// </remarks>
    public Task<JsonElement> GetSubscribers(GetSubscribersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/subscribers"),
            [],
            [
                new Param("created_at__eq", request.CreatedAtEq?.ToIso8601()),
                new Param("created_at__gt", request.CreatedAtGt?.ToIso8601()),
                new Param("created_at__gte", request.CreatedAtGte?.ToIso8601()),
                new Param("created_at__lt", request.CreatedAtLt?.ToIso8601()),
                new Param("created_at__lte", request.CreatedAtLte?.ToIso8601()),
                new Param("email__contains", request.EmailContains),
                new Param("email__eq", request.EmailEq),
                new Param("email__in", request.EmailIn),
                new Param("page", request.Page),
                new Param("phone_number__contains", request.PhoneNumberContains),
                new Param("phone_number__eq", request.PhoneNumberEq),
                new Param("phone_number__in", request.PhoneNumberIn),
                new Param("shopify_customer_id__contains", request.ShopifyCustomerIdContains),
                new Param("shopify_customer_id__eq", request.ShopifyCustomerIdEq),
                new Param("shopify_customer_id__in", request.ShopifyCustomerIdIn),
                new Param("sort", request.Sort),
                new Param("updated_at__eq", request.UpdatedAtEq?.ToIso8601()),
                new Param("updated_at__gt", request.UpdatedAtGt?.ToDate()),
                new Param("updated_at__gte", request.UpdatedAtGte?.ToIso8601()),
                new Param("updated_at__lt", request.UpdatedAtLt?.ToIso8601()),
                new Param("updated_at__lte", request.UpdatedAtLte?.ToIso8601()),
                new Param("ps_id__eq", request.PsIdEq),
            ],
            [new HeaderParam("X-Postscript-Shop-Token", request.XPostscriptShopToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<JsonElement>(),
            GetSubscribersError.Response,
            _auth.Sec0,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Subscriber
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="JsonElement"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateSubscriberByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates data for a given subscriber.
    /// </remarks>
    public Task<JsonElement> UpdateSubscriberById(UpdateSubscriberByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/subscribers/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("X-Postscript-Shop-Token", request.XPostscriptShopToken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<JsonElement>(),
            UpdateSubscriberByIdError.Response,
            _auth.Sec0,
            requestOptions,
            cancellationToken);
}
