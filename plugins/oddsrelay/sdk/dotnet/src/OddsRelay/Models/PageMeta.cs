using System.Text.Json.Serialization;
using OddsRelay.Core.Models;
using OddsRelay.Models.AnyOf;

namespace OddsRelay.Models;

public record PageMeta
{
    [JsonPropertyName("feed_type")]
    public required string FeedType { get; init; }

    [JsonPropertyName("region")]
    public required string Region { get; init; }

    [JsonPropertyName("odds_format")]
    public required string OddsFormat { get; init; }

    /// <summary>
    /// ISO-8601 UTC, or epoch seconds under <c>dateFormat=unix</c>.
    /// </summary>
    [JsonPropertyName("processed_at")]
    public required ProcessedAt ProcessedAt { get; init; }

    /// <summary>
    /// Rows on this page.
    /// </summary>
    [JsonPropertyName("count")]
    public required int Count { get; init; }

    [JsonPropertyName("version")]
    public required string Version { get; init; }

    [JsonPropertyName("next_cursor")]
    public required string? NextCursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
