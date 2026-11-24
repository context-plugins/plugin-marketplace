using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record BotRecommendationResults
{
    /// <summary>
    /// The presigned URL link of the recommended bot definition.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botLocaleExportUrl")]
    public string? BotLocaleExportUrl { get; init; }

    /// <summary>
    /// The presigned url link of the associated transcript.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("associatedTranscriptsUrl")]
    public string? AssociatedTranscriptsUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statistics")]
    public BotRecommendationResultStatistics? Statistics { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
