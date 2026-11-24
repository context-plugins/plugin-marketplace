using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record MediaAnalysisDetectModerationLabelsConfig
{
    /// <summary>
    /// Specifies the minimum confidence level for the moderation labels to return. Amazon Rekognition doesn't return any labels with a confidence level lower than this specified value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MinConfidence")]
    public double? MinConfidence { get; init; }

    /// <summary>
    /// Specifies the custom moderation model to be used during the label detection job. If not provided the pre-trained model is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ProjectVersion")]
    public string? ProjectVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
