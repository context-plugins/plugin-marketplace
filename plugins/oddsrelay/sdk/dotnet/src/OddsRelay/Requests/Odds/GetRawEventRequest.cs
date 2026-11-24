using OddsRelay.Models.Enums;

namespace OddsRelay.Requests.Odds;

/// <summary>
/// The inputs of the GetRawEvent operation.
/// </summary>
public sealed record GetRawEventRequest
{
    /// <summary>
    /// An event id (<c>or_evt_…</c>) from raw, a matched board or <c>/v2/events</c>. Not on the raw board now is 404 <c>unknown_event</c>.
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// ONE lowercase region code (<c>/v2/regions</c> lists yours). Missing means <c>uk</c>: on a data route only when your key covers <c>uk</c>, else 400 <c>region_required</c> naming a code your key has; on discovery and keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400 <c>bad_request</c>; an unknown code, or one with no live bookmaker here, is 404 <c>unknown_region</c>.
    /// </summary>
    public string? Region { get; init; }

    /// <summary>
    /// <c>decimal</c> (default) or <c>american</c> (a signed integer; null for a price at or below 1.0). <c>standard</c> and <c>dutching</c> serve decimal only: anything else is 400.
    /// </summary>
    public OddsFormat OddsFormat { get; init; } = OddsFormat.Decimal;

    /// <summary>
    /// <c>iso</c> (default, ISO-8601 UTC) or <c>unix</c> (integer epoch seconds) for <c>commence_time</c>, <c>processed_at</c> and <c>last_update</c>. <c>standard</c> and <c>dutching</c> serve iso only: anything else is 400.
    /// </summary>
    public DateFormat DateFormat { get; init; } = DateFormat.Iso;

    /// <summary>
    /// <c>true</c>: each venue's <c>link</c> (its primary event page; left out when it has none). Default <c>false</c>. <c>true</c> or <c>false</c>, else 400.
    /// </summary>
    public IncludeLinks IncludeLinks { get; init; } = IncludeLinks.False;

    /// <summary>
    /// <c>false</c>: leave out <c>available</c> beside an exchange's <c>lay_price</c>. Default <c>true</c>. <c>true</c> or <c>false</c>, else 400.
    /// </summary>
    public IncludeLiquidity IncludeLiquidity { get; init; } = IncludeLiquidity.True;

    /// <summary>
    /// <c>true</c> (also <c>1</c>, <c>yes</c>, <c>on</c>): price this exact request instead of serving it. 200 <c>{cost, remaining, rate_card}</c>, free, every check before the price still applies; any other value is an ordinary request.
    /// </summary>
    public string? Quote { get; init; }
}
