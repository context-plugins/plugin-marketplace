using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Basiq.Core;
using Basiq.Core.Exceptions;
using Basiq.Core.Models;
using Basiq.Core.Request;
using Basiq.Core.Response;
using Basiq.Errors;
using Basiq.Models;
using Basiq.Requests.Events;

namespace Basiq.Api;

public sealed class Events
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Events(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve an event type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EventsTypesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEventTypeByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a single event type based on the parameter input.
    /// </remarks>
    public Task<EventsTypesResponse1> GetEventTypeById(GetEventTypeByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/events/types/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EventsTypesResponse1>(),
            GetEventTypeByIdError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EventsGetResponseResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEventsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all events that have taken place.
    /// </remarks>
    public Task<EventsGetResponseResource> GetEvents(GetEventsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/events"),
            [],
            [new Param("filter", request.Filter)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EventsGetResponseResource>(),
            GetEventsError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve an event
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EventsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetTypeByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a single event type based on the parameter input.
    /// </remarks>
    public Task<EventsResponse> GetTypeById(GetTypeByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/events/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EventsResponse>(),
            GetTypeByIdError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List event types
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EventsTypesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEventTypesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of event types.
    /// </remarks>
    public Task<EventsTypesResponse> ListEventTypes(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/events/types"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EventsTypesResponse>(),
            ListEventTypesError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);
}
