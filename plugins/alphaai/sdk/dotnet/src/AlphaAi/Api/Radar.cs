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
using AlphaAi.Requests.Radar;

namespace AlphaAi.Api;

/// <summary>
/// Descriptive news activity and supporting headlines.
/// </summary>
public sealed class Radar
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Radar(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Rank market or saved-watchlist news activity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SnapshotPreviewDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRadarSnapshotError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Descriptive news-activity ranking. Free delay 3600 seconds; Basic 900 seconds; Pro no added delay. Tier and watchlist owner come from authentication, never query parameters. The public API requires a Bearer API key and uses the normal request quotas. The whole snapshot, including supporting headlines and company names, is selected at or before wall-clock time minus the tier delay. Snapshots refresh every minute and are retained for three hours. Collection and enrichment add processing time. preview_reference_at is null in live mode; a frozen development preview uses that historical clock instead and explicitly reports freshness.mode=historical_preview. as_of is the actual selected cutoff. Only tickers with current-window news appear. snapshot_id identifies immutable content including public evidence metadata. freshness states the effective delay, generation time, source check time and latest enrichment observed. Missing history or a producer more than four minutes behind returns 503, never newer data in place of a delayed snapshot. watchlist_coverage separates known quiet names from names absent from the snapshot; absent does not mean an invalid symbol. Summary is scoped before search/ticker/sentiment/min_z filters and pagination; universe describes the entire stored snapshot. Null metrics stay null. Collection coverage is unverified; these calculations are not point-in-time backtests or confirmed alerts. Historical corrections can affect the model baseline. All responses: private, no-store. event_context reports separate SEC/insider availability, cutoff, generation time, age_seconds at the numeric cutoff (not HTTP time), and lookback windows. results[].event_context contains only that row's issuer-CIK context: up to 3 recent 8-K/6-K filings over 7 days by filed_at and up to 3 open-market insider clusters over 30 days by known_at (the latest SEC filing time). Counts cover all eligible records; arrays contain the newest records. Each cluster includes up to 5 SEC evidence links, filings_count and evidence_truncated. 6-K coverage is selected ingested earnings releases only. Filings also carry news_uid, news_title, news_published and has_article for AlphAI article links. has_article means enrichment existed before the context cutoff; older snapshots default to false with null title/publication metadata. SEC URLs remain available as sec_url. Share classes with the same CIK share context, without changing news counts, scores, filters, ranking or row eligibility. No USD totals are reported. Context and its evidence follow the same tier delay and cursor; later corrections appear only in new snapshots. Context older than max_age_seconds=300 at the numeric cutoff is unavailable. Missing, disabled, stale or failed context does not fail news readings. Unavailable context has null row context; a row also has null context when it is absent from the context snapshot. Unsupported or unidentified issuers have explicit row status/reason and null counts. Supported issuers with no eligible stored records have zero counts. Available does not certify complete SEC coverage. Unknown or repeated query parameters are rejected.
    /// </remarks>
    public Task<SnapshotPreviewDto> GetRadarSnapshot(GetRadarSnapshotRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/signals/snapshot/"),
            [],
            [
                new Param("window", request.Window),
                new Param("scope", request.Scope),
                new Param("market", request.Market),
                new Param("ticker", request.Ticker),
                new Param("tickers", request.Tickers),
                new Param("search", request.Search),
                new Param("sort", request.Sort),
                new Param("order", request.Order),
                new Param("sentiment", request.Sentiment),
                new Param("min_z", request.MinZ),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("cursor", request.Cursor),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SnapshotPreviewDto>(),
            GetRadarSnapshotError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
