using System.Text.Json.Serialization;
using AlphaAi.Core.Models;
using AlphaAi.Models.AnyOf;
using AlphaAi.Models.Enums;

namespace AlphaAi.Models;

public record RadarSnapshotFreshness
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode")]
    public ModeAlphAiRestRadarApi? Mode { get; init; } = ModeAlphAiRestRadarApi.HistoricalPreview;

    [JsonPropertyName("effective_delay_seconds")]
    public required int EffectiveDelaySeconds { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("generated_at")]
    public GeneratedAt? GeneratedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source_watermark")]
    public SourceWatermark? SourceWatermark { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source_checked_at")]
    public SourceCheckedAt? SourceCheckedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unavailable_reason")]
    public UnavailableReason? UnavailableReason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
