using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AlphaAi.Core;
using AlphaAi.Core.Exceptions;
using AlphaAi.Core.Request;
using AlphaAi.Core.Response;
using AlphaAi.Errors;
using AlphaAi.Models;

namespace AlphaAi.Api;

/// <summary>
/// What each data source holds — from when, how dense, with which caveats.
/// </summary>
public sealed class CoverageApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CoverageApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Coverage passport — what each data source holds, from when, with which caveats
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Coverage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiCoverageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One object per data source: <c>publisher_news</c> (the GDELT stream, RSS
    /// feeds and directly parsed publisher pages), <c>sec_form4</c>, <c>sec_form8k</c>, <c>sec_form6k</c>,
    /// <c>earnings_reads</c>, <c>earnings_schedule</c> and <c>economic_calendar</c>. Each
    /// carries its earliest and latest row, the last ingest time, the row
    /// count in the source's own unit, the collector's cadence, a history
    /// note saying where the history is thin, the known limits, and the
    /// per-plan archive horizon. Read this before backtesting or promising
    /// coverage downstream: <c>first_row_at</c> is the earliest row we hold, NOT
    /// the start of dense coverage — <c>history_note</c> says which months are
    /// thin (publisher news densified in June 2026; Form 4 before May 2026
    /// is an unenriched replay; 8-K history starts June 2026; 6-K and
    /// earnings reads start 2026-07-28).
    /// <para>
    /// The passport is computed once a day (03:50 UTC) and served from a
    /// cache: <c>as_of</c> is when the counts were taken and <c>generated_at</c> when
    /// the payload was assembled, so both describe the computation, never
    /// the response. Rows may be up to a day newer than <c>last_row_at</c>. On a
    /// cold cache the first caller computes it (a few seconds); a concurrent
    /// caller gets <c>503</c> with <c>Retry-After</c> instead of a second scan.
    /// </para>
    /// <para>
    /// <c>stale</c> is an honest flag, not an alert: true when the newest ingest
    /// is older than <c>stale_after_seconds</c> — six poll cycles for the
    /// collectors, three days for SEC filings (EDGAR takes no filings on
    /// weekends), ten days for earnings reads — or, for the economic
    /// calendar (<c>stale_after_seconds</c> null), when no future occurrence is
    /// held. <c>publisher_news</c> additionally reports each discovery channel
    /// (<c>gkg</c>, <c>rss</c>) with its own last ingest and flag.
    /// <c>research_only</c> restates that everything described here is
    /// AI-generated financial information for research, not investment
    /// advice.
    /// </para>
    /// </remarks>
    public Task<Coverage> GetApiCoverage(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/coverage/"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Coverage>(),
            GetApiCoverageError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
