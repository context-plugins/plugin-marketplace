using System.ComponentModel.DataAnnotations;

namespace Statable.Requests.Stats;

/// <summary>
/// The inputs of the ListSites operation.
/// </summary>
public sealed record ListSitesRequest
{
    /// <summary>
    /// A preset (<c>7d</c>/<c>30d</c>/<c>month</c>/<c>realtime</c>) or <c>Nd</c> = last N full days, N in 1–90 (e.g. <c>7d</c>, <c>14d</c>) — the same scalar forms POST /query accepts (custom <c>[from,to]</c> pairs are /query-only). When present, each site gains a <c>stats</c> block with basic aggregate metrics for the window. Omit to keep the list lean (no analytics read). These batch stats are NOT per-site-timezone — use POST /query for TZ-exact numbers.
    /// </summary>
    [RegularExpression("^(month|realtime|([1-9]|[1-8][0-9]|90)d)$")]
    public string? DateRange { get; init; }
}
