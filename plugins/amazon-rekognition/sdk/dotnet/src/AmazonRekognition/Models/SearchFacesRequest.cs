using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record SearchFacesRequest
{
    /// <summary>
    /// ID of the collection the face belongs to.
    /// </summary>
    [JsonPropertyName("CollectionId")]
    public required string CollectionId { get; init; }

    /// <summary>
    /// ID of a face to find matches for in the collection.
    /// </summary>
    [JsonPropertyName("FaceId")]
    public required string FaceId { get; init; }

    /// <summary>
    /// Maximum number of faces to return. The operation returns the maximum number of faces with the highest confidence in the match.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxFaces")]
    public int? MaxFaces { get; init; }

    /// <summary>
    /// Optional value specifying the minimum confidence in the face match to return. For example, don't return any matches where confidence in matches is less than 70%. The default value is 80%.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FaceMatchThreshold")]
    public double? FaceMatchThreshold { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
