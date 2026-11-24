using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record SearchUsersResponse
{
    /// <summary>
    /// An array of UserMatch objects that matched the input face along with the confidence in the match. Array will be empty if there are no matches.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UserMatches")]
    public IReadOnlyList<UserMatch>? UserMatches { get; init; }

    /// <summary>
    /// Version number of the face detection model associated with the input CollectionId.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FaceModelVersion")]
    public string? FaceModelVersion { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SearchedFace")]
    public SearchedFace? SearchedFace { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SearchedUser")]
    public SearchedUser? SearchedUser { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
