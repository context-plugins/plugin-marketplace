using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using OddsRelay.Core;
using OddsRelay.Core.Authentication;
using OddsRelay.Core.Exceptions;
using OddsRelay.Core.Models;
using OddsRelay.Core.Request;
using OddsRelay.Core.Response;
using OddsRelay.Errors;
using OddsRelay.Models;
using OddsRelay.Models.AnyOf;
using OddsRelay.Requests.Discovery;

namespace OddsRelay.Api;

/// <summary>
/// Sports, events, venues, regions. Free.
/// </summary>
public sealed class Discovery
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Discovery(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Venues
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V2BookmakersResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListBookmakersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Every bookmaker and exchange key the API serves, with its display name, regions and kind. Free. Takes no <c>region</c>: a <c>region</c> parameter is 400.
    /// </remarks>
    public Task<V2BookmakersResponse1> ListBookmakers(ListBookmakersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/bookmakers"),
            [],
            [new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V2BookmakersResponse1>(),
            ListBookmakersError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.ApiKeyHeader),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Events of a sport
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V2EventsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEventsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The events on the matched boards under one sport key or prefix, with the boards carrying each. Free. Paged 250 at a time in (kick-off, id) order; a cursor resumes strictly after the last event it saw, so an event whose kick-off moves across the cursor during a walk can appear twice or be missed: dedupe by <c>id</c> and take a missed event on the next walk. A cursor expires 300 s after it was issued. <c>region</c> missing means <c>uk</c>.
    /// </remarks>
    public Task<V2EventsResponse1> ListEvents(ListEventsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/events"),
            [],
            [
                new Param("sport", request.Sport),
                new Param("region", request.Region),
                new Param("format", request.Format),
                new Param("dateFormat", request.DateFormat),
                new Param("cursor", request.Cursor),
                new Param("eventIds", request.EventIds),
                new Param("commenceTimeFrom", request.CommenceTimeFrom),
                new Param("commenceTimeTo", request.CommenceTimeTo),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V2EventsResponse1>(),
            ListEventsError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.ApiKeyHeader),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Your regions
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Regions"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRegionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The regions your key covers that have live bookmakers here, with each region's exchanges and coverage model. Free.
    /// </remarks>
    public Task<Regions> ListRegions(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/regions"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Regions>(),
            ListRegionsError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.ApiKeyHeader),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Sports and competitions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V2SportsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSportsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Every competition on the matched boards, grouped, with the market keys seen under each. Free. Paged 250 rows at a time in (group, key) order; a cursor expires 300 s after it was issued. <c>region</c> missing means <c>uk</c>; discovery is not scoped to your key's regions.
    /// </remarks>
    public Task<V2SportsResponse1> ListSports(ListSportsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/sports"),
            [],
            [
                new Param("region", request.Region),
                new Param("format", request.Format),
                new Param("dateFormat", request.DateFormat),
                new Param("cursor", request.Cursor),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V2SportsResponse1>(),
            ListSportsError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.ApiKeyHeader),
            requestOptions,
            cancellationToken);
}
