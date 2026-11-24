using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Contentstack.Core;
using Contentstack.Core.Authentication;
using Contentstack.Core.Exceptions;
using Contentstack.Core.Models;
using Contentstack.Core.Request;
using Contentstack.Core.Response;
using Contentstack.Errors;
using Contentstack.Models;
using Contentstack.Requests.Events;

namespace Contentstack.Api;

/// <summary>
/// The events endpoint allows applications to track user actions and behavioral events for experience analytics and audience rule evaluation.
/// </summary>
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
    /// Get all events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EventList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAllEventsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves all custom event definitions in the Personalize project. Events are used to track user interactions and trigger audience membership updates.
    /// </remarks>
    public Task<EventList> GetAllEvents(GetAllEventsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEventsApi("/events"),
            [],
            [],
            [new HeaderParam("x-project-uid", request.XProjectUid)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EventList>(),
            GetAllEventsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Track user events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TrackEventsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Records one or more user behavior events for experience analytics and audience evaluation. Supports both impression events (automatic tracking when experiences are shown) and custom events (defined in the Personalize Management API and triggered by specific user actions).
    /// </remarks>
    public Task TrackEvents(TrackEventsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackEventsApi("/events"),
            [],
            [],
            [
                new HeaderParam("x-project-uid", request.XProjectUid),
                new HeaderParam("x-cs-personalize-user-uid", request.XCsPersonalizeUserUid),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            TrackEventsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
