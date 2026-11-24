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
using OddsRelay.Models.AnyOf;
using OddsRelay.Requests.Odds;

namespace OddsRelay.Api;

/// <summary>
/// Matched boards, raw, one event.
/// </summary>
public sealed class Odds
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Odds(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// A matched board
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V2OddsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMatchedBoardError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The six matched boards: each event's bookmaker back prices beside the exchanges' lay prices (<c>dutching</c>: back legs that cover every outcome, grouped by <c>dutch_id</c>; <c>each-way</c> and <c>extra-place</c>: each-way terms against win and place lays).
    /// <para>
    /// <b>Checks, in this order</b> (each refusal is free): the per-address shield, the key, the account's flood cap, a suspended account, a browser key's website, the API version; then <c>type</c> (404 <c>unknown_type</c>), <c>region</c>, the region in the key (403 <c>region_not_in_scope</c>), the product in the key (403 <c>not_in_key_scope</c>), the product in the region (403 <c>product_not_in_region</c>: a region with no exchange serves only dutching and raw); then the parameters: each one this route reads, once; <c>format</c>, <c>oddsFormat</c> and <c>dateFormat</c> values; on <c>standard</c> and <c>dutching</c> decimal ISO only and gzip accepted (400 <c>add Accept-Encoding: gzip; with curl use --compressed</c>); then the filters (400 unknown values, 403 <c>bookmaker_not_in_region</c>, then your account's scope: 403 <c>sport_not_in_plan</c>, <c>market_not_in_plan</c>, <c>bookmaker_not_in_plan</c>, <c>exchange_not_in_plan</c>; and your plan's bookmaker list), then <c>quote=true</c>, the price (402), and the board (503 while it is not ready).
    /// </para>
    /// <para>
    /// <b>Filters</b> cut the whole board's events in order: sport and kick-off, then markets, then back offers by bookmaker and lay offers by exchange; an outcome left with no back or no lay goes, then empty markets and events. <c>dutching</c> keeps a dutch only when every leg is a named venue. A filtered reply is priced on its filters (<c>/v2/pricing</c>); the kick-off window is never priced.
    /// </para>
    /// <para>
    /// <b>Freshness</b>: <c>meta.processed_at</c> and <c>X-Processed-At</c> are the board time; <c>meta.last_seen</c> is each venue and sport's last read. The API drops no row for age; a venue not read within its own window (at most two minutes) is off the board until its next read.
    /// </para>
    /// <para>
    /// <b>Conditional requests</b>: send the <c>ETag</c> back as <c>If-None-Match</c>; an unchanged body is a 304 with no body, free. A reply with no events is free.
    /// </para>
    /// </remarks>
    public Task<V2OddsResponse> GetMatchedBoard(GetMatchedBoardRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/odds/{type}"),
            [new TemplateParam("type", request.Type)],
            [
                new Param("region", request.Region),
                new Param("format", request.Format),
                new Param("oddsFormat", request.OddsFormat),
                new Param("dateFormat", request.DateFormat),
                new Param("quote", request.Quote),
                new Param("sports", request.Sports),
                new Param("bookmakers", request.Bookmakers),
                new Param("exchanges", request.Exchanges),
                new Param("markets", request.Markets),
                new Param("commenceTimeFrom", request.CommenceTimeFrom),
                new Param("commenceTimeTo", request.CommenceTimeTo),
            ],
            [new HeaderParam("Accept-Encoding", request.AcceptEncoding)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V2OddsResponse>(),
            GetMatchedBoardError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.ApiKeyHeader),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The raw board, paged
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V2OddsRawResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRawBoardError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Every venue's prices per event, one page at a time: bookmakers as <c>{name, price}</c>, exchanges quoting a lay side as <c>{name, back_price, lay_price, available}</c>. Served gzip only: a request refusing gzip is 400 <c>add Accept-Encoding: gzip; with curl use --compressed</c>.
    /// <para>
    /// <b>Checks, in this order</b>: the per-address shield, the key, the flood cap, a suspended account, a browser key's website, the API version; <c>region</c>, the region and <c>raw</c> in the key; the parameters (each one this route reads, once) and their values; the filters (400 unknown values, 403 <c>bookmaker_not_in_region</c>, 403 <c>bookmaker_not_in_plan</c>, then your account's scope: 403 <c>sport_not_in_plan</c>, <c>market_not_in_plan</c>, <c>bookmaker_not_in_plan</c>); <c>includeLinks</c> and <c>includeLiquidity</c>; <c>limit</c>; <c>cursor</c>; gzip; the raw board (503 <c>raw_not_enabled</c>); the page (503 while it cannot be cut); <c>quote=true</c>; the price (402).
    /// </para>
    /// <para>
    /// <b>Paging</b>: pages are ordered by (kick-off, event id) and a cursor resumes strictly after the last event it saw, so an event that leaves the board between pages never restarts the walk. The accepted limit: an event whose kick-off moves across the cursor during a walk can appear twice or be missed. Dedupe by event <c>id</c>, and take a missed event on the next walk. A cursor expires 300 s after it was issued.
    /// </para>
    /// <para>
    /// <b>Following changes</b>: walk with <c>updatedSince</c> set to the start of your previous walk; <c>last_update</c> is when a venue's market last moved (see the schema for what it is not).
    /// </para>
    /// <para>
    /// <b>Price</b>: a page pays its share of the query's price (its prices over all the query's events' prices, at least 1; <c>eventIds</c> and <c>requireBookmakers</c> narrow the page, never the query), so a whole walk pays the query's price (narrowed by <c>eventIds</c> or <c>requireBookmakers</c>, only its kept events' share of it); a recent <c>updatedSince</c> pays a reduced share. <c>quote=true</c> prices this page.
    /// </para>
    /// </remarks>
    public Task<V2OddsRawResponse> GetRawBoard(GetRawBoardRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/odds/raw"),
            [],
            [
                new Param("region", request.Region),
                new Param("format", request.Format),
                new Param("oddsFormat", request.OddsFormat),
                new Param("dateFormat", request.DateFormat),
                new Param("sports", request.Sports),
                new Param("sport", request.Sport),
                new Param("leagues", request.Leagues),
                new Param("bookmakers", request.Bookmakers),
                new Param("requireBookmakers", request.RequireBookmakers),
                new Param("markets", request.Markets),
                new Param("eventIds", request.EventIds),
                new Param("commenceTimeFrom", request.CommenceTimeFrom),
                new Param("commenceTimeTo", request.CommenceTimeTo),
                new Param("updatedSince", request.UpdatedSince),
                new Param("exchangesOnly", request.ExchangesOnly),
                new Param("includeLinks", request.IncludeLinks),
                new Param("includeLiquidity", request.IncludeLiquidity),
                new Param("cursor", request.Cursor),
                new Param("limit", request.Limit),
                new Param("quote", request.Quote),
            ],
            [new HeaderParam("Accept-Encoding", request.AcceptEncoding)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V2OddsRawResponse>(),
            GetRawBoardError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.ApiKeyHeader),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// One event from the raw board
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V2OddsEventResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRawEventError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One raw event by id, every venue (a plan with a bookmaker list sees those venues and the region's exchanges; an account scope sees its raw venue list and markets only, no exchange added). Checks: the key and scope as raw, the parameters and their values, the raw board (503 <c>raw_not_enabled</c>), the id (404 <c>unknown_event</c>), the event's sport in your account's raw scope (403 <c>sport_not_in_plan</c>), <c>quote=true</c>, the price (402). The price is the whole event's, whatever the scope cuts. Priced by the event's share of the region's raw prices. Gzip unless refused (over 1 kB).
    /// </remarks>
    public Task<V2OddsEventResponse> GetRawEvent(GetRawEventRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/odds/event/{id}"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("region", request.Region),
                new Param("oddsFormat", request.OddsFormat),
                new Param("dateFormat", request.DateFormat),
                new Param("includeLinks", request.IncludeLinks),
                new Param("includeLiquidity", request.IncludeLiquidity),
                new Param("quote", request.Quote),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V2OddsEventResponse>(),
            GetRawEventError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.ApiKeyHeader),
            requestOptions,
            cancellationToken);
}
