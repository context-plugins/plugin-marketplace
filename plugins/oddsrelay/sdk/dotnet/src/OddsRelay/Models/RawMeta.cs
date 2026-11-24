using System.Text.Json.Serialization;
using OddsRelay.Core.Models;
using OddsRelay.Models.AnyOf;
using OddsRelay.Models.Enums;

namespace OddsRelay.Models;

public record RawMeta
{
    [JsonPropertyName("feed_type")]
    public string FeedType { get; } = "raw";

    [JsonPropertyName("region")]
    public required string Region { get; init; }

    [JsonPropertyName("odds_format")]
    public required OddsFormat OddsFormat { get; init; }

    /// <summary>
    /// ISO-8601 UTC, or epoch seconds under <c>dateFormat=unix</c>.
    /// </summary>
    [JsonPropertyName("processed_at")]
    public required ProcessedAt ProcessedAt { get; init; }

    /// <summary>
    /// Events on this page.
    /// </summary>
    [JsonPropertyName("count")]
    public required int Count { get; init; }

    [JsonPropertyName("version")]
    public required string Version { get; init; }

    [JsonPropertyName("next_cursor")]
    public required string? NextCursor { get; init; }

    /// <summary>
    /// Events matching the query, all pages.
    /// </summary>
    [JsonPropertyName("total")]
    public required int Total { get; init; }

    /// <summary>
    /// The page's <c>X-OddsRelay-Version</c>.
    /// </summary>
    [JsonPropertyName("board_version")]
    public required int? BoardVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
