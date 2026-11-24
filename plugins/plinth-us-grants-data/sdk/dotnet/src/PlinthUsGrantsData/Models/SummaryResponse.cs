using System.Collections.Generic;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Models;

/// <summary>
/// Aggregates over the WHOLE filter — not paginated, and not restricted by any trial row cap.
/// </summary>
public record SummaryResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public int? Code { get; init; } = 200;

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("x_plinth")]
    public XPlinth1? XPlinth { get; init; }

    /// <summary>
    /// Corpus totals for the filter.
    /// <para>
    /// ⚠️ NO <c>recipient_count</c>, DELIBERATELY (removed 2026-08-19). It was two incommensurable things
    /// added together — 961,743 resolved EINs plus 1,721,550 distinct strings a filer typed — so 64% of
    /// it counted text rather than organizations and the total had no defined unit. Worse, it moved the
    /// WRONG WAY: resolving a name to an EIN merges it with that EIN's other rows, so the figure FALLS
    /// as entity resolution improves. Resolution has gone 67.3% → 76.0% while this was published, which
    /// can only have driven it down against an unchanged reality.
    /// </para>
    /// <para>
    /// It also cost more than everything else here combined: profiled on the live warehouse, the other
    /// five fields are ~1.2s and this one was ~6s (a COUNT(DISTINCT) over 2.68M keys, most of them long
    /// strings, wrapped in a per-row regexp and a correlated EXISTS). Measured alternatives, both
    /// rejected: approx_count_distinct returned 2,469,271 against a true 2,683,293 (8% wrong, not
    /// publishable), and precomputing the normalized key as a Parquet column bought 1.44x for +112MB.
    /// </para>
    /// <para>
    /// A per-FUNDER recipient_count still exists on /grants/funders and /premier and is untouched: at
    /// that scale it is grouped, cheap, and interpretable, and lib/challenge.ts answers a trial-key
    /// challenge from it.
    /// </para>
    /// </summary>
    [JsonPropertyName("summary")]
    public required SummaryTotals Summary { get; init; }

    [JsonPropertyName("by_year")]
    public required IReadOnlyList<SummaryByYear> ByYear { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
