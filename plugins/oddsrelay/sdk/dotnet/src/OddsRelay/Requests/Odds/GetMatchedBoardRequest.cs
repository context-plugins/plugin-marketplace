using OddsRelay.Models.Enums;

namespace OddsRelay.Requests.Odds;

/// <summary>
/// The inputs of the GetMatchedBoard operation.
/// </summary>
public sealed record GetMatchedBoardRequest
{
    /// <summary>
    /// A matched board: <c>standard</c>, <c>2up</c>, <c>dutching</c>, <c>each-way</c>, <c>extra-place</c> or <c>bog</c>. The aliases <c>two-up</c>, <c>each_way</c> and <c>extra_place</c> are accepted and served as their canonical slug. Anything else is 404 <c>unknown_type</c>.
    /// </summary>
    public required Type1 Type { get; init; }

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
    /// <c>true</c> (also <c>1</c>, <c>yes</c>, <c>on</c>): price this exact request instead of serving it. 200 <c>{cost, remaining, rate_card}</c>, free, every check before the price still applies; any other value is an ordinary request.
    /// </summary>
    public string? Quote { get; init; }

    /// <summary>
    /// Comma-separated, at most 20: a sport key or a prefix of one as <c>/v2/sports</c> lists them (<c>soccer</c>, <c>soccer_epl</c>), lowercased. Unknown is 400 <c>unknown_sport</c> with <c>valid</c> (the sport key bases). A known value with nothing on the board is an empty 200, free. A value is inside your account's scope when it starts with a scope sport (<c>soccer_epl</c> under <c>soccer</c>); outside, 403 <c>sport_not_in_plan</c> with <c>valid</c>; left out, trimmed to the scope.
    /// </summary>
    public string? Sports { get; init; }

    /// <summary>
    /// Comma-separated, at most 40: bookmaker keys as <c>/v2/bookmakers</c> lists them (a listed name is accepted too). Unknown is 400 <c>unknown_bookmaker</c> with <c>valid</c>; an exchange here is that 400 naming <c>exchanges</c> (on <c>dutching</c> both lists take venues of either kind); a venue outside the region is 403 <c>bookmaker_not_in_region</c>; one outside your plan's bookmaker list or your account's scope is 403 <c>bookmaker_not_in_plan</c> with <c>valid</c> (on <c>dutching</c>, an exchange outside the scope is 403 <c>exchange_not_in_plan</c>). A plan with a bookmaker list, or an account scope, trims a call naming none to that list.
    /// </summary>
    public string? Bookmakers { get; init; }

    /// <summary>
    /// Comma-separated, at most 4: exchange keys as <c>/v2/bookmakers</c> lists them. Unknown is 400 <c>unknown_exchange</c> with <c>valid</c>; a bookmaker here is that 400 naming <c>bookmakers</c>. Outside your account's scope for this product: 403 <c>exchange_not_in_plan</c> with <c>valid</c>; left out, trimmed to the scope.
    /// </summary>
    public string? Exchanges { get; init; }

    /// <summary>
    /// Comma-separated, at most 20: market keys (<c>h2h</c>, <c>totals</c>, …; <c>/v2/sports</c> rows list the keys seen under each competition). Each product's keys: keyless <c>/v2/coverage</c>'s <c>markets</c>. Unknown is 400 <c>unknown_market</c> with <c>valid</c> (this product's keys) and, when another product carries it, <c>products</c>; another product's key may instead be accepted and match nothing. Outside your account's scope for this product: 403 <c>market_not_in_plan</c> with <c>valid</c>; left out, trimmed to the scope.
    /// </summary>
    public string? Markets { get; init; }

    /// <summary>
    /// Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a second rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400.
    /// </summary>
    public string? CommenceTimeFrom { get; init; }

    /// <summary>
    /// Events kicking off at or before this ISO-8601 instant (no offset = UTC).
    /// </summary>
    public string? CommenceTimeTo { get; init; }

    /// <summary>
    /// Send <c>gzip</c>; with curl, <c>--compressed</c> sends it and decompresses the reply. <c>standard</c> and <c>dutching</c> answer a request that refuses gzip (<c>identity</c> alone, as Python's <c>urllib</c> sends by default, or <c>gzip;q=0</c> or <c>*;q=0</c>) with 400 <c>bad_request</c>, message <c>add Accept-Encoding: gzip; with curl use --compressed</c>; the other four boards answer it plain.
    /// </summary>
    public required string AcceptEncoding { get; init; }
}
