using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record SearchFacesResponse
{
    /// <summary>
    /// ID of the face that was searched for matches in a collection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SearchedFaceId")]
    public string? SearchedFaceId { get; init; }

    /// <summary>
    /// An array of faces that matched the input face, along with the confidence in the match.
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
