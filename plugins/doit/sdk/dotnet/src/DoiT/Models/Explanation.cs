using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// The AI-generated portion of the response.
/// </summary>
public record Explanation
{
    /// <summary>
    /// Concise, likely-cause explanation of the anomaly.
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    /// <summary>
    /// Identifies the system that generated the explanation.
    /// </summary>
    [JsonPropertyName("generatedBy")]
    public required string GeneratedBy { get; init; }

    /// <summary>
    /// Always true; present so consumers can identify AI-generated content explicitly.
    /// </summary>
    [JsonPropertyName("aiGenerated")]
    public required bool AiGenerated { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
