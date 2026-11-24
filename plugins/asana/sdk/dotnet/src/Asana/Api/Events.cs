using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Asana.Core;
using Asana.Core.Authentication;
using Asana.Core.Exceptions;
using Asana.Core.Models;
using Asana.Core.Request;
using Asana.Core.Response;
using Asana.Errors;
using Asana.Models;
using Asana.Requests.Events;

namespace Asana.Api;

/// <summary>
/// An event is an object representing a change to a resource that was observed by an event subscription. Event streams rely on the same infrastructure as webhooks, which ensures events are delivered within a minute (on average). This system is designed for at most once delivery, meaning in exceptional circumstances a small number of events may be missing from the stream. For this reason, if your use case requires strong guarantees about processing all changes on a resource and cannot tolerate any missing events, regardless of how rare that might be, we recommend building a fallback polling system that fetches the resource periodically as well. Note that while webhooks cannot be replayed once delivered, events are retrievable from the event stream for 24 hours after being processed.
/// <para>
/// In general, requesting events on a resource is faster and subject to higher rate limits than requesting the resource itself. Additionally, change events "bubble up" (e.g., listening to events on a project would include when stories are added to tasks in the project, and even to subtasks).
/// </para>
/// <para>
/// Establish an initial sync token by making a request with no sync token. The response will be a <c>412 Precondition Failed</c> error - the same as if the sync token had expired.
/// </para>
/// <para>
/// Subsequent requests should always provide the sync token from the immediately preceding call.
/// </para>
/// <para>
/// Sync tokens may not be valid if you attempt to go "backward" in the history by requesting previous tokens, though re-requesting the current sync token is generally safe, and will always return the same results.
/// </para>
/// <para>
/// When you receive a <c>412 Precondition Failed</c> error, it means that the sync token is either invalid or expired. If you are attempting to keep a set of data in sync, this signals you may need to re-crawl the data.
/// </para>
/// <para>
/// Sync tokens always expire after 24 hours, but may expire sooner, depending on load on the service.
/// </para>
/// </summary>
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
    /// Get events on a resource
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EventsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEventsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the full record for all events that have occurred since the sync
    /// token was created.
    /// <para>
    /// A <c>GET</c> request to the endpoint <c>/[path_to_resource]/events</c> can be made in
    /// lieu of including the resource ID in the data for the request.
    /// </para>
    /// <para>
    /// Asana limits a single sync token to 100 events. If more than 100 events exist
    /// for a given resource, <c>has_more: true</c> will be returned in the response, indicating
    /// that there are more events to pull.
    /// </para>
    /// <para>
    /// *Note: The resource returned will be the resource that triggered the
    /// event. This may be different from the one that the events were requested
    /// for. For example, a subscription to a project will contain events for
    /// tasks contained within the project.*
    /// </para>
    /// </remarks>
    public Task<EventsResponse> GetEvents(GetEventsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/events"),
            [],
            [
                new Param("resource", request.Resource),
                new Param("sync", request.Sync),
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EventsResponse>(),
            GetEventsError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
