using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Divvy.Core;
using Divvy.Core.Authentication;
using Divvy.Core.ErrorResponse;
using Divvy.Core.Exceptions;
using Divvy.Core.Models;
using Divvy.Core.Request;
using Divvy.Core.Response;
using Divvy.Models;
using Divvy.Requests.Subscriptions;

namespace Divvy.Api;

public sealed class Subscriptions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Subscriptions(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create a security key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SecurityKeyDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new security key for your subscription.
    /// <para>
    /// When you create a new subscription, a one-time <c>securityKey</c> is one of the generated values in the response. All event notifications sent to your <c>notificationUrl</c> are signed with this key using the HMAC-SHA256 algorithm. The key is sent as the <c>x-bill-sha-signature</c> header value in the notification.
    /// </para>
    /// <para>
    /// You can use the security key to verify all notifications sent to you. It is good practice to keep the security key for your subscription updated in a timely manner. You can use this endpoint to generate a new security key based on your desired frequency.
    /// </para>
    /// <para>
    /// See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.
    /// </para>
    /// </remarks>
    public Task<SecurityKeyDto> CreateNewSecurityKey(CreateNewSecurityKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultConnectEventsApi("/v3/subscriptions/{subscriptionId}/security_key"),
            [new TemplateParam("subscriptionId", request.SubscriptionId)],
            [],
            [
                new HeaderParam("X-Idempotent-Key", request.XIdempotentKey),
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("apiToken", request.ApiToken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<SecurityKeyDto>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionWithSecurityKeyResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new event subscription. You can subscribe to multiple events with a single request. You can create up to 10 webhook subscriptions per organization.
    /// <para>
    /// BILL provides a full catalog of all the events that you can subscribe to with <c>GET /v3/events/catalog</c>. See Get events catalog in the API reference for more information.
    /// </para>
    /// <para>
    /// See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.
    /// </para>
    /// </remarks>
    public Task<SubscriptionWithSecurityKeyResponseDto> CreateSubscription(CreateSubscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultConnectEventsApi("/v3/subscriptions"),
            [],
            [],
            [
                new HeaderParam("X-Idempotent-Key", request.XIdempotentKey),
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("apiToken", request.ApiToken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SubscriptionWithSecurityKeyResponseDto>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an existing subscription.
    /// </remarks>
    public Task DeleteSubscription(DeleteSubscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultConnectEventsApi("/v3/subscriptions/{subscriptionId}"),
            [new TemplateParam("subscriptionId", request.SubscriptionId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("apiToken", request.ApiToken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of subscriptions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginationDtoSubscriptionResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of all your created subscriptions.
    /// <para>
    /// By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// </para>
    /// <para>
    /// <b>Note</b>: In this list operation, pagination is available only in one direction. The <c>nextPage</c> value is available in the response for you to retrieve the next page of results. However, you cannot retrieve the previous page of results.
    /// </para>
    /// <para>
    /// See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.
    /// </para>
    /// </remarks>
    public Task<PaginationDtoSubscriptionResponseDto> GetAllSubscriptions(GetAllSubscriptionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultConnectEventsApi("/v3/subscriptions"),
            [],
            [new Param("max", request.Max), new Param("page", request.Page)],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("apiToken", request.ApiToken),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginationDtoSubscriptionResponseDto>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get subscription details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get details about an existing subscription.
    /// </remarks>
    public Task<SubscriptionResponseDto> GetSubscription(GetSubscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultConnectEventsApi("/v3/subscriptions/{subscriptionId}"),
            [new TemplateParam("subscriptionId", request.SubscriptionId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("apiToken", request.ApiToken),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SubscriptionResponseDto>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace a subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the events that you are subscribed to.
    /// <para>
    /// You can use the PUT operation to add, remove, or replace events in a subscription. For example, you can replace the <c>bill.created</c> event with <c>bill.updated</c> in your subscription.
    /// </para>
    /// </remarks>
    public Task<SubscriptionResponseDto> ReplaceSubscription(ReplaceSubscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultConnectEventsApi("/v3/subscriptions/{subscriptionId}"),
            [new TemplateParam("subscriptionId", request.SubscriptionId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("apiToken", request.ApiToken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SubscriptionResponseDto>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Generate a test event notification
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EventDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a new test event notification. After you create a subscription, use this endpoint for BILL to send a test event notification to your specified notification URL.
    /// <para>
    /// In your request, all the fields are optional. To see specific information in the test event notification, you can set <c>eventType</c>, <c>version</c>, and any details. You can get the BILL events catalog with <c>GET /v3/events/catalog</c>.
    /// </para>
    /// <para>
    /// <b>Note</b>: All the fields in the test event notification are test values. You cannot use any of the test values for any other operation.
    /// </para>
    /// <para>
    /// See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.
    /// </para>
    /// </remarks>
    public Task<EventDto> SendTestEvent(SendTestEventRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultConnectEventsApi("/v3/subscriptions/{subscriptionId}/test"),
            [new TemplateParam("subscriptionId", request.SubscriptionId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("apiToken", request.ApiToken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EventDto>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a subscription
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update details about a subscription.
    /// <para>
    /// You can use the PATCH operation to modify existing subscription details, such as <c>name</c>, <c>status</c>, and <c>notificationUrl</c>.
    /// </para>
    /// </remarks>
    public Task<SubscriptionResponseDto> UpdateSubscription(UpdateSubscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultConnectEventsApi("/v3/subscriptions/{subscriptionId}"),
            [new TemplateParam("subscriptionId", request.SubscriptionId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("apiToken", request.ApiToken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SubscriptionResponseDto>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
