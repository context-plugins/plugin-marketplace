using System.Collections.Generic;
using System.Text.Json.Serialization;
using Statable.Core.Models;
using Statable.Models.AnyOf;

namespace Statable.Models;

public record FunnelReportRequest
{
    /// <summary>
    /// Optional for a single-site key; required for an all-sites key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("site_id")]
    public long? SiteId { get; init; }

    /// <summary>
    /// A scalar string — a preset (<c>7d</c>/<c>30d</c> = last N full days; <c>month</c> = current calendar month to date; <c>realtime</c> = last ~30 min) or a bare <c>Nd</c> for the last N days, N in 1–90 (e.g. <c>14d</c>) — OR a custom inclusive <c>[from, to]</c> pair of <c>YYYY-MM-DD</c> dates with <c>from &lt;= to</c> and a span of at most 366 days. The scalar forms are exactly what <c>GET /sites</c> accepts; for a window over 90 days use a custom pair.
    /// </summary>
    [JsonPropertyName("date_range")]
    public required DateRange DateRange { get; init; }

    /// <summary>
    /// Segment/session filters only (country, browser, os, device, source, channel, referrer, utm_*, entry_page, exit_page, hostname). Event-level fields (event, page, code) return <c>invalid_filter</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public IReadOnlyList<Filter>? Filters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
