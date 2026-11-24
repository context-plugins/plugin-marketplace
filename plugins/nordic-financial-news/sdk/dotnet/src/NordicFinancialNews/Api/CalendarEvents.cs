using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using NordicFinancialNews.Core;
using NordicFinancialNews.Core.Exceptions;
using NordicFinancialNews.Core.Models;
using NordicFinancialNews.Core.Request;
using NordicFinancialNews.Core.Response;
using NordicFinancialNews.Errors;
using NordicFinancialNews.Models;
using NordicFinancialNews.Requests.CalendarEvents;

namespace NordicFinancialNews.Api;

public sealed class CalendarEvents
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CalendarEvents(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Calendar Events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CalendarEventsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1CalendarEventsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of scheduled Nordic financial calendar events: earnings reports (Q1 / H1 / FY etc.), earnings calls, trading updates, AGMs/EGMs, capital markets days, conference presentations, dividends, and M&amp;A milestones (announcements, offer deadlines, completions).
    /// <para>
    /// Each event is tied to a single company and is sorted by <c>scheduled_at</c> ascending (soonest first). <c>scheduled_at</c> is always in UTC; for local-time display use the <c>local_time</c> field (<c>scheduled_at</c> rendered in the issuer's <c>timezone</c>, ISO 8601 with offset). Prefer <c>local_time</c> for the calendar date. A day-precision event is stored at local midnight, so its UTC <c>scheduled_at</c> falls on the previous day for ahead-of-UTC (Nordic) zones. <c>title</c> and <c>description</c> are always English regardless of the source-article language.
    /// </para>
    /// <para>
    /// ## Dividends
    /// Each dividend row carries a nested <c>dividend</c> object with <c>ex_date</c>, <c>record_date</c>, <c>payment_date</c>, <c>declaration_date</c>, and <c>kind</c>. <c>scheduled_at</c> follows the priority <b>ex-date &gt; record-date &gt; payment-date</b>, whichever is explicitly stated, in that order. <c>dividend</c> is <c>null</c> for non-dividend events.
    /// </para>
    /// <para>
    /// ## Default window
    /// By default only upcoming events are returned, from today onward by the issuer's local date (so events scheduled for today stay listed throughout the day). Pass <c>scheduled_after</c> or <c>scheduled_before</c> to query a specific window. This also surfaces past events, which carry <c>status: published</c> (events flip from <c>scheduled</c> to <c>published</c> ~2 days after their date). An <c>updated_after</c> sync walk also lifts this floor, since sync must cover past events too.
    /// </para>
    /// <para>
    /// ## Status
    /// List endpoints return <c>scheduled</c> + <c>published</c> events and <b>exclude <c>cancelled</c></b> by default. Pass the <c>status</c> parameter to filter (<c>status=cancelled</c> to retrieve cancellations, or <c>scheduled</c>/<c>published</c> to narrow). Discarded events are never returned. Note: a <c>scheduled → cancelled</c> transition is *not* surfaced by default <c>updated_after</c> polling. To track cancellations, poll with <c>status=cancelled</c> or subscribe to cancellation alerts.
    /// </para>
    /// <para>
    /// ## Filtering
    /// Compose <c>ticker</c>, <c>country</c>, <c>market</c>, <c>domicile</c>, <c>exchange</c>, <c>index</c>, <c>sector</c>, and <c>event_type</c> to narrow the result set. All filters are intersected.
    /// </para>
    /// <para>
    /// ## Polling for updates
    /// Use <c>updated_after</c> with the timestamp of your last completed sync to fetch only events that have changed since. Results are then ordered by <c>updated_at</c> ascending and cursor-paginated: follow <c>pagination.next_cursor</c>, resending the same <c>updated_after</c>, until it is null. Advance your stored timestamp only once every page is drained. Incremental sync is not available on plans with a capped calendar. <c>updated_after</c> returns 403 there, because the capped window is recomputed per request and a change feed over it cannot be drained. The walk covers the full served dataset, including past events, so a first sync from an old watermark returns history rather than only upcoming events. Updates to past events that occurred before your currently stored watermark are not replayed; reset the watermark (or start a fresh sync) to backfill them.
    /// </para>
    /// <para>
    /// ## Pagination
    /// List responses include <c>pagination.next_cursor</c> when more pages are available. Pass it back as the <c>cursor</c> parameter on the next request. Cursors are opaque. Do not parse them.
    /// </para>
    /// <para>
    /// ## Caching
    /// Requests with <c>updated_after</c> are not cached: they return <c>Cache-Control: no-cache, no-store</c> and no <c>ETag</c>. Otherwise the <c>ETag</c> reflects the response as served, not only record timestamps: it changes when plan limits alter the visible set, so a changed <c>ETag</c> does not necessarily mean a record was updated.
    /// </para>
    /// </remarks>
    public Task<ApiV1CalendarEventsResponse> GetApiV1CalendarEvents(GetApiV1CalendarEventsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/calendar_events"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("fields", request.Fields),
                new Param("updated_after", request.UpdatedAfter),
                new Param("ticker", request.Ticker),
                new Param("company", request.Company),
                new Param("country", request.Country),
                new Param("market", request.Market),
                new Param("domicile", request.Domicile),
                new Param("exchange", request.Exchange),
                new Param("index", request.Index),
                new Param("sector", request.Sector),
                new Param("event_type", request.EventType),
                new Param("status", request.Status),
                new Param("scheduled_after", request.ScheduledAfter),
                new Param("scheduled_before", request.ScheduledBefore),
                new Param("watchlist", request.Watchlist),
            ],
            [
                new HeaderParam("If-None-Match", request.IfNoneMatch),
                new HeaderParam("If-Modified-Since", request.IfModifiedSince),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CalendarEventsResponse>(),
            GetApiV1CalendarEventsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Calendar Event
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CalendarEventsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1CalendarEventsByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches a single scheduled calendar event by ID. Cancelled or discarded events return 404.
    /// <para>
    /// On plans with a capped calendar, only events inside your plan's window are readable; anything outside it returns 403.
    /// </para>
    /// <para>
    /// Responses are cached with <c>ETag</c> and <c>Last-Modified</c> headers and a <c>private, max-age=300</c> <c>Cache-Control</c>; clients can send <c>If-None-Match</c> or <c>If-Modified-Since</c> to receive a <c>304 Not Modified</c>.
    /// </para>
    /// </remarks>
    public Task<ApiV1CalendarEventsResponse1> GetApiV1CalendarEventsById(GetApiV1CalendarEventsByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/calendar_events/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [
                new HeaderParam("If-None-Match", request.IfNoneMatch),
                new HeaderParam("If-Modified-Since", request.IfModifiedSince),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CalendarEventsResponse1>(),
            GetApiV1CalendarEventsByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
