using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Statable.Core.Validation.Attributes;
using Statable.Models.AnyOf;
using Statable.Models.Enums;

namespace Statable.Models;

public record QueryRequest
{
    /// <summary>
    /// Required for an all-sites key; optional for a single-site key (defaults to the key's site). Omitting it on an all-sites key → <c>site_id_required</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("site_id")]
    public long? SiteId { get; init; }

    [JsonPropertyName("metrics")]
    [MinLength(1)]
    public required IReadOnlyList<Metric> Metrics { get; init; }

    /// <summary>
    /// A scalar string — a preset (<c>7d</c>/<c>30d</c> = last N full days; <c>month</c> = current calendar month to date; <c>realtime</c> = last ~30 min) or a bare <c>Nd</c> for the last N days, N in 1–90 (e.g. <c>14d</c>) — OR a custom inclusive <c>[from, to]</c> pair of <c>YYYY-MM-DD</c> dates with <c>from &lt;= to</c> and a span of at most 366 days. The scalar forms are exactly what <c>GET /sites</c> accepts; for a window over 90 days use a custom pair.
    /// </summary>
    [JsonPropertyName("date_range")]
    public required DateRange DateRange { get; init; }

    /// <summary>
    /// Zero or one element. Omit / empty = aggregate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensions")]
    [MaxLength(1)]
    public IReadOnlyList<Dimension>? Dimensions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public IReadOnlyList<Filter>? Filters { get; init; }

    /// <summary>
    /// Breakdown queries only. Clamped to 1–1000. Sending it on an aggregate or time-series query → <c>limit_offset_misuse</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    [Minimum(1)]
    [Maximum(1000)]
    public int? Limit { get; init; } = 100;

    /// <summary>
    /// Breakdown queries only. Sending it on an aggregate or time-series query → <c>limit_offset_misuse</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offset")]
    [Minimum(0)]
    public int? Offset { get; init; } = 0;

    /// <summary>
    /// <c>"previous_period"</c> (equal-length window before date_range) or a custom <c>["YYYY-MM-DD","YYYY-MM-DD"]</c> pair. Adds a <c>compare</c> {value, change%} block — per metric (aggregate), per row (breakdown, each row's true previous value; not on event:status_code/event:goal), or per bucket (time-series) — plus <c>compare_date_range</c> to the query echo. The compare range must be the same length as date_range (<c>previous_period</c> always is) → an unequal custom pair yields <c>compare_length_mismatch</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("compare")]
    public Compare11? Compare { get; init; }
}
