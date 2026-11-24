using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record SearchUsersByImageResponse
{
    /// <summary>
    /// An array of UserID objects that matched the input face, along with the confidence in the match. The returned structure will be empty if there are no matches. Returned if the SearchUsersByImageResponse action is successful.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UserMatches")]
    public IReadOnlyList<UserMatch>? UserMatches { get; init; }

    /// <summary>
    /// Version number of the face detection model associated with the input collection CollectionId.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FaceModelVersion")]
    public string? FaceModelVersion { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SearchedFace")]
    public SearchedFaceDetails? SearchedFace { get; init; }

    /// <summary>
    /// List of UnsearchedFace objects. Contains the face details infered from the specified image but not used for search. Contains reasons that describe why a face wasn't used for Search.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UnsearchedFaces")]
    public IReadOnlyList<UnsearchedFace>? UnsearchedFaces { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
