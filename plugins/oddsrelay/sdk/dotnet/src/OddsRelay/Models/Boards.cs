using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

public record Boards
{
    [JsonPropertyName("processed_at")]
    public required string? ProcessedAt { get; init; }

    /// <summary>
    /// The board's odds age, seconds.
    /// </summary>
    [JsonPropertyName("age_s")]
    public required double? AgeS { get; init; }

    /// <summary>
    /// Events.
    /// </summary>
    [JsonPropertyName("count")]
    public required int? Count { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
