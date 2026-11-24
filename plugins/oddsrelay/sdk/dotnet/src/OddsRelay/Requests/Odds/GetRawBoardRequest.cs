using OddsRelay.Core.Validation.Attributes;
using OddsRelay.Models.Enums;

namespace OddsRelay.Requests.Odds;

/// <summary>
/// The inputs of the GetRawBoard operation.
/// </summary>
public sealed record GetRawBoardRequest
{
    /// <summary>
    /// ONE lowercase region code (<c>/v2/regions</c> lists yours). Missing means <c>uk</c>: on a data route only when your key covers <c>uk</c>, else 400 <c>region_required</c> naming a code your key has; on discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400 <c>bad_request</c>; an unknown code, or one with no live bookmaker here, is 404 <c>unknown_region</c>.
    /// </summary>
    public string? Region { get; init; }

    /// <summary>
    /// <c>envelope</c> (default): <c>{meta, data}</c>. <c>bare</c>: the <c>data</c> array alone, <c>meta</c> moved to <c>X-*</c> headers.
    /// </summary>
    public Format Format { get; init; } = Format.Envelope;

    /// <summary>
    /// <c>decimal</c> (default) or <c>american</c> (a signed integer; null for a price at or below 1.0). <c>standard</c> and <c>dutching</c> serve decimal only: anything else is 400.
    /// </summary>
    public OddsFormat OddsFormat { get; init; } = OddsFormat.Decimal;

    /// <summary>
    /// <c>iso</c> (default, ISO-8601 UTC) or <c>unix</c> (integer epoch seconds) for <c>commence_time</c>, <c>processed_at</c> and <c>last_update</c>. <c>standard</c> and <c>dutching</c> serve iso only: anything else is 400.
    /// </summary>
    public DateFormat DateFormat { get; init; } = DateFormat.Iso;

    /// <summary>
    /// Comma-separated, at most 20: a sport key, a prefix of one, or a sport name raw serves, lowercased. Unknown is 400 <c>unknown_sport</c> with <c>valid</c>. Inside your account's raw scope: a key or prefix starting with a scope sport, a sport name only when it equals one (send <c>soccer</c>, not <c>football</c>); outside, 403 <c>sport_not_in_plan</c> with <c>valid</c>; left out, trimmed to the scope.
    /// </summary>
    public string? Sports { get; init; }

    /// <summary>
    /// The same as <c>sports</c> (what <c>/v2/events</c> takes); ignored when <c>sports</c> is sent.
    /// </summary>
    public string? Sport { get; init; }

    /// <summary>
    /// Comma-separated, at most 40: competition names (an event's league or <c>sport_title</c>), lowercased. Not checked against a catalogue.
    /// </summary>
    public string? Leagues { get; init; }

    /// <summary>
    /// Comma-separated, at most 40: venue keys of either kind, bookmakers and exchanges, as <c>/v2/bookmakers</c> lists them. Unknown is 400 <c>unknown_bookmaker</c> with <c>valid</c>; outside the region 403 <c>bookmaker_not_in_region</c>; outside your plan's bookmaker list or your account's raw scope 403 <c>bookmaker_not_in_plan</c> with <c>valid</c>. An account scope's raw list is the whole venue list, exchanges included: left out, trimmed to it (so <c>exchangesOnly=true</c> keeps only the exchanges it names).
    /// </summary>
    public string? Bookmakers { get; init; }

    /// <summary>
    /// Comma-separated, at most 40 venue keys, checked as <c>bookmakers</c> is (the same 400 and 403 codes). Keeps only the events where EVERY named venue quotes the call's <c>markets</c> (with several, at least one of them each), under <c>exchangesOnly</c> if set; a venue that lists the event but not the market does not count. <c>bookmakers</c> does not narrow this test and <c>updatedSince</c> is not part of it: with <c>updatedSince</c>, an event carrying every named venue is kept when any venue shown changed, and the page shows only the venues that changed. It narrows events, never venues: every venue the other filters keep is still shown, named or not. <c>meta.total</c> and <c>X-Count</c> count the events kept. Price: like <c>eventIds</c>, it narrows the page and not the query, so a page pays its share of the same call without <c>requireBookmakers</c>, and an empty page is free.
    /// </summary>
    public string? RequireBookmakers { get; init; }

    /// <summary>
    /// Comma-separated, at most 20: market keys raw serves. Raw's keys: keyless <c>/v2/coverage</c>'s <c>markets.raw</c>. Unknown is 400 <c>unknown_market</c> with <c>valid</c> (raw's keys) and, when another product carries it, <c>products</c>. Keeps venues quoting one of them, and only those markets. Outside your account's scope for this product: 403 <c>market_not_in_plan</c> with <c>valid</c>; left out, trimmed to the scope.
    /// </summary>
    public string? Markets { get; init; }

    /// <summary>
    /// Comma-separated, at most 50 event ids. Narrows the page, not the query: a page pays its share of the same call without <c>eventIds</c>.
    /// </summary>
    public string? EventIds { get; init; }

    /// <summary>
    /// Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a second rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400.
    /// </summary>
    public string? CommenceTimeFrom { get; init; }

    /// <summary>
    /// Events kicking off at or before this ISO-8601 instant (no offset = UTC).
    /// </summary>
    public string? CommenceTimeTo { get; init; }

    /// <summary>
    /// Exactly <c>YYYY-MM-DDTHH:MM:SSZ</c> (any other form is 400). Keeps venues whose <c>last_update</c> is at or after it, and the events holding one. The bulk way to follow raw: a recent <c>updatedSince</c> pays a reduced share (<c>/v2/pricing</c> <c>recent</c>).
    /// </summary>
    public string? UpdatedSince { get; init; }

    /// <summary>
    /// <c>true</c>: exchanges only. <c>true</c> or <c>false</c>, else 400.
    /// </summary>
    public ExchangesOnly? ExchangesOnly { get; init; }

    /// <summary>
    /// <c>true</c>: each venue's <c>link</c> (its primary event page; left out when it has none). Default <c>false</c>. <c>true</c> or <c>false</c>, else 400.
    /// </summary>
    public IncludeLinks IncludeLinks { get; init; } = IncludeLinks.False;

    /// <summary>
    /// <c>false</c>: leave out <c>available</c> beside an exchange's <c>lay_price</c>. Default <c>true</c>. <c>true</c> or <c>false</c>, else 400.
    /// </summary>
    public IncludeLiquidity IncludeLiquidity { get; init; } = IncludeLiquidity.True;

    /// <summary>
    /// The previous page's <c>meta.next_cursor</c> (or <c>X-Next-Cursor</c>). A cursor is bound to no account and expires 300 s after it was issued: 400 <c>cursor expired: start again from the first page</c>; any other shape 400 <c>cursor not recognised: start again from the first page</c>.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Events per page, 1-250 (default and maximum 250). Anything else is 400.
    /// </summary>
    [Minimum(1)]
    [Maximum(250)]
    public int? Limit { get; init; }

    /// <summary>
    /// <c>true</c> (also <c>1</c>, <c>yes</c>, <c>on</c>): price this exact request instead of serving it. 200 <c>{cost, remaining, rate_card}</c>, free, every check before the price still applies; any other value is an ordinary request.
    /// </summary>
    public string? Quote { get; init; }

    /// <summary>
    /// Send <c>gzip</c>; with curl, <c>--compressed</c> sends it and decompresses the reply. The raw board answers a request that refuses gzip (<c>identity</c> alone, as Python's <c>urllib</c> sends by default, or <c>gzip;q=0</c> or <c>*;q=0</c>) with 400 <c>bad_request</c>, message <c>add Accept-Encoding: gzip; with curl use --compressed</c>.
    /// </summary>
    public required string AcceptEncoding { get; init; }
}
