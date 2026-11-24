using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record CompareFacesRequest
{
    [JsonPropertyName("SourceImage")]
    public required Image SourceImage { get; init; }

    [JsonPropertyName("TargetImage")]
    public required Image TargetImage { get; init; }

    /// <summary>
    /// The minimum level of confidence in the face matches that a match must meet to be included in the FaceMatches array.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SimilarityThreshold")]
    public double? SimilarityThreshold { get; init; }

    /// <summary>
    /// A filter that specifies a quality bar for how much filtering is done to identify faces. Filtered faces aren't compared. If you specify AUTO, Amazon Rekognition chooses the quality bar. If you specify LOW, MEDIUM, or HIGH, filtering removes all faces that don’t meet the chosen quality bar. The quality bar is based on a variety of common use cases. Low-quality detections can occur for a number of reasons. Some examples are an object that's misidentified as a face, a face that's too blurry, or a face with a pose that's too extreme to use. If you specify NONE, no filtering is performed. The defaul
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("QualityFilter")]
    public QualityFilterAmazonRekognitionFacialAnalysisApi? QualityFilter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
