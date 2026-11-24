using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record StartShotDetectionFilter
{
    /// <summary>
    /// Specifies the minimum confidence that Amazon Rekognition Video must have in order to return a detected segment. Confidence represents how certain Amazon Rekognition is that a segment is correctly identified. 0 is the lowest confidence. 100 is the highest confidence. Amazon Rekognition Video doesn't return any segments with a confidence level lower than this specified value. If you don't specify MinSegmentConfidence, the GetSegmentDetection returns segments with confidence values greater than or equal to 50 percent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MinSegmentConfidence")]
    public double? MinSegmentConfidence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
