using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record SearchFacesByImageResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SearchedFaceBoundingBox")]
    public BoundingBox? SearchedFaceBoundingBox { get; init; }

    /// <summary>
    /// The level of confidence that the searchedFaceBoundingBox, contains a face.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SearchedFaceConfidence")]
    public double? SearchedFaceConfidence { get; init; }

    /// <summary>
    /// An array of faces that match the input face, along with the confidence in the match.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FaceMatches")]
    public IReadOnlyList<FaceMatch>? FaceMatches { get; init; }

    /// <summary>
    /// Version number of the face detection model associated with the input collection (CollectionId).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FaceModelVersion")]
    public string? FaceModelVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
