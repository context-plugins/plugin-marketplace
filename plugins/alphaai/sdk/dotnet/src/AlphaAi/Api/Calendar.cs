using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AlphaAi.Core;
using AlphaAi.Core.Exceptions;
using AlphaAi.Core.Models;
using AlphaAi.Core.Request;
using AlphaAi.Core.Response;
using AlphaAi.Errors;
using AlphaAi.Models;
using AlphaAi.Requests.Calendar;

namespace AlphaAi.Api;

/// <summary>
/// Scheduled US macro releases (FOMC, CPI, jobs, GDP, PCE…).
/// </summary>
public sealed class Calendar
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Calendar(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Scheduled US macro releases (economic calendar)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CalendarEvents"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiCalendarError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The official forward schedule of US macro releases: FOMC decisions
    /// (with SEP and press-conference markers) and minutes, CPI, PPI, the
    /// jobs report (nonfarm payrolls), GDP estimates (advance/second/third),
    /// PCE, advance retail sales, weekly jobless claims and JOLTS — sourced
    /// from the agencies' own schedule pages (Fed, BLS, BEA, Census, DOL).
    /// <para>
    /// Each occurrence carries a stable <c>uid</c> (<c>US-CPI-2026-07</c>) that
    /// survives reschedules: a moved release keeps its identity, updates
    /// <c>scheduled_at</c> and reports <c>schedule_status</c>. <c>phase</c> says only
    /// whether the scheduled moment has passed (<c>upcoming</c>/<c>elapsed</c>) — it
    /// deliberately does not claim the agency actually published. Pair the
    /// calendar with <c>/api/news/macro/</c> to read what a release meant once
    /// it's out.
    /// </para>
    /// <para>
    /// The window is <c>[from_date, to_date)</c> — from inclusive, to exclusive;
    /// date-only values mean UTC midnight; defaults are today (UTC) → +7
    /// days; the span is capped at 400 days. No pagination: a full year of
    /// every series is ~250 rows (hard cap 500), ordered by <c>scheduled_at</c>
    /// ascending. Cancelled and postponed occurrences stay in the response
    /// with their <c>schedule_status</c>.
    /// </para>
    /// </remarks>
    public Task<CalendarEvents> GetApiCalendar(GetApiCalendarRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/calendar/"),
            [],
            [
                new Param("from_date", request.FromDate),
                new Param("to_date", request.ToDate),
                new Param("event_key", request.EventKey),
                new Param("importance", request.Importance),
                new Param("country", request.Country),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CalendarEvents>(),
            GetApiCalendarError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
