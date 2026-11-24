using System.Text.Json.Serialization;
using AlphaAi.Core.Models;
using AlphaAi.Models.AnyOf;

namespace AlphaAi.Models;

public record RadarSentiment
{
    [JsonPropertyName("value")]
    public required Value Value { get; init; }

    [JsonPropertyName("usable_stories")]
    public required int UsableStories { get; init; }

    [JsonPropertyName("coverage")]
    public required CoverageAlphAiRestRadarApi Coverage { get; init; }

    [JsonPropertyName("reason")]
    public required Reason2 Reason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
