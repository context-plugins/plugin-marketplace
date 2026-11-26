using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;

namespace AlphAi.Models;

public record WatchlistBriefDto
{
    [JsonPropertyName("generated_at")]
    public required DateTimeOffset GeneratedAt { get; init; }

    [JsonPropertyName("window_start")]
    public required DateTimeOffset WindowStart { get; init; }

    [JsonPropertyName("window_end")]
    public required DateTimeOffset WindowEnd { get; init; }

    [JsonPropertyName("hours")]
    public required int Hours { get; init; }

    [JsonPropertyName("tickers")]
    public required IReadOnlyList<string> Tickers { get; init; }

    [JsonPropertyName("unknown_tickers")]
    public required IReadOnlyList<string> UnknownTickers { get; init; }

    [JsonPropertyName("events")]
    public required IReadOnlyList<BriefEventDto> Events { get; init; }

    [JsonPropertyName("filings")]
    public required IReadOnlyList<BriefEventDto> Filings { get; init; }

    [JsonPropertyName("upcoming_earnings")]
    public required IReadOnlyList<BriefEarningsDateDto> UpcomingEarnings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("events_truncated")]
    public bool? EventsTruncated { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filings_truncated")]
    public bool? FilingsTruncated { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
