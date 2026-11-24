using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record SearchUsersRequest
{
    /// <summary>
    /// The ID of an existing collection containing the UserID, used with a UserId or FaceId. If a FaceId is provided, UserId isn’t required to be present in the Collection.
    /// </summary>
    [JsonPropertyName("CollectionId")]
    public required string CollectionId { get; init; }

    /// <summary>
    /// ID for the existing User.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UserId")]
    public string? UserId { get; init; }

    /// <summary>
    /// ID for the existing face.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FaceId")]
    public string? FaceId { get; init; }

    /// <summary>
    /// Optional value that specifies the minimum confidence in the matched UserID to return. Default value of 80.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UserMatchThreshold")]
    public double? UserMatchThreshold { get; init; }

    /// <summary>
    /// Maximum number of identities to return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxUsers")]
    public int? MaxUsers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
