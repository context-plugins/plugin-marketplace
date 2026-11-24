using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;
using OddsRelay.Models.AnyOf;
using OddsRelay.Models.Enums;

namespace OddsRelay.Models;

public record MatchedMeta
{
    [JsonPropertyName("feed_type")]
    public required string FeedType { get; init; }

    [JsonPropertyName("region")]
    public required string Region { get; init; }

    [JsonPropertyName("odds_format")]
    public required OddsFormat OddsFormat { get; init; }

    /// <summary>
    /// The board time (<c>X-Processed-At</c>).
    /// </summary>
    [JsonPropertyName("processed_at")]
    public required ProcessedAt1 ProcessedAt { get; init; }

    /// <summary>
    /// <c>{bookmaker key: {sport key base: ISO-8601 Z}}</c>: the last instant each venue and sport was read, the oldest observation behind the board, so <c>now - last_seen</c> is an upper bound on that venue's price age. The region's venues only, cut to a filtered body's venues and sports; always ISO; absent until the board carries the table; never on <c>format=bare</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_seen")]
    public IReadOnlyDictionary<string, string>? LastSeen { get; init; }

    /// <summary>
    /// Events in <c>data</c>.
    /// </summary>
    [JsonPropertyName("count")]
    public required int Count { get; init; }

    [JsonPropertyName("version")]
    public string Version { get; } = "v2";

    [JsonPropertyName("next_cursor")]
    public required string? NextCursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
