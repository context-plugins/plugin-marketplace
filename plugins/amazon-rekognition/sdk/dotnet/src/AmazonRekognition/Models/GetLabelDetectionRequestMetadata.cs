using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record GetLabelDetectionRequestMetadata
{
    /// <summary>
    /// The sorting method chosen for a GetLabelDetection request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SortBy")]
    public SortBy1AmazonRekognitionStoredVideoAnalysisApi? SortBy { get; init; }

    /// <summary>
    /// The aggregation method chosen for a GetLabelDetection request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AggregateBy")]
    public AggregateBy1AmazonRekognitionStoredVideoAnalysisApi? AggregateBy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
