using System;
using System.Collections.Generic;
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
using Divvy.Requests.Events;

namespace Divvy.Api;

public sealed class Events
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Events(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get events catalog
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="EventCatalogDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the complete list of available events that you can subscribe to.
    /// <para>
    /// See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.
    /// </para>
    /// </remarks>
    public Task<IReadOnlyList<EventCatalogDto>> GetEventCatalog(GetEventCatalogRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultConnectEventsApi("/v3/events/catalog"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("apiToken", request.ApiToken),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<EventCatalogDto>>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get list of event notifications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PaginationDtoEventWithRetriesDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of event notifications sent to you for a subscription. You can use this endpoint to address any issues with notification retries.
    /// <para>
    /// In the request, set <c>createdTimeFrom</c> and <c>createdTimeTo</c> to get event notifications for the specified time range. If you do not set <c>createdTimeTo</c>, the current date and time is used. By default, you get 20 results on one page of results. Set <c>max</c> in your request to get up to 100 results on one page.
    /// </para>
    /// <para>
    /// <b>Note</b>: In this list operation, pagination is available only in one direction. The <c>nextPage</c> value is available in the response for you to retrieve the next page of results. However, you cannot retrieve the previous page of results.
    /// </para>
    /// <para>
    /// See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.
    /// </para>
    /// </remarks>
    public Task<PaginationDtoEventWithRetriesDto> GetEventsForSubscription(GetEventsForSubscriptionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultConnectEventsApi("/v3/events/subscription/{subscriptionId}"),
            [new TemplateParam("subscriptionId", request.SubscriptionId)],
            [
                new Param("entityId", request.EntityId),
                new Param("max", request.Max),
                new Param("createdTimeFrom", request.CreatedTimeFrom),
                new Param("createdTimeTo", request.CreatedTimeTo),
                new Param("ascending", request.Ascending),
                new Param("page", request.Page),
            ],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("apiToken", request.ApiToken),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PaginationDtoEventWithRetriesDto>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Resend an event
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EventDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resend an existing event notification.
    /// <para>
    /// <b>Note</b>: When an event notification fails, BILL tries to send the notification again with exponential backoff.
    /// </para>
    /// <para>
    /// See Webhooks in the Guides section for more information, sample requests, and notification payloads for BILL events.
    /// </para>
    /// </remarks>
    public Task<EventDto> ResendEvent(ResendEventRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultConnectEventsApi("/v3/events/subscription/{subscriptionId}/event/{eventId}"),
            [
                new TemplateParam("subscriptionId", request.SubscriptionId),
                new TemplateParam("eventId", request.EventId),
            ],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("appKey", request.AppKey),
                new HeaderParam("apiToken", request.ApiToken),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<EventDto>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
