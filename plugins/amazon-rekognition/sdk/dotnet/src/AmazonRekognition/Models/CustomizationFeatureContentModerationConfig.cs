using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record CustomizationFeatureContentModerationConfig
{
    /// <summary>
    /// The confidence level you plan to use to identify if unsafe content is present during inference.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ConfidenceThreshold")]
    public double? ConfidenceThreshold { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
