using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;

namespace AlphAi.Models;

public record Coverage
{
    /// <summary>
    /// When the cached payload was assembled (UTC).
    /// </summary>
    [JsonPropertyName("generated_at")]
    public required DateTimeOffset GeneratedAt { get; init; }

    /// <summary>
    /// The instant the counts were taken (UTC). Up to a day older than the response — the passport is recomputed daily, not per request.
    /// </summary>
    [JsonPropertyName("as_of")]
    public required DateTimeOffset AsOf { get; init; }

    /// <summary>
    /// Always <c>true</c>. Research information, not investment advice.
    /// </summary>
    [JsonPropertyName("research_only")]
    public required bool ResearchOnly { get; init; }

    /// <summary>
    /// Fixed order: publisher_news, sec_form4, sec_form8k, sec_form6k, earnings_reads, earnings_schedule, economic_calendar. A source with no rows is still present, with null dates and <c>rows_total: 0</c>.
    /// </summary>
    [JsonPropertyName("sources")]
    public required IReadOnlyList<CoverageSource> Sources { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
