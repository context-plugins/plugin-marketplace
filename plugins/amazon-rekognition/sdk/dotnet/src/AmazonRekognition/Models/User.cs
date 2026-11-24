using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record User
{
    /// <summary>
    /// A provided ID for the User. Unique within the collection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UserId")]
    public string? UserId { get; init; }

    /// <summary>
    /// Communicates if the UserID has been updated with latest set of faces to be associated with the UserID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UserStatus")]
    public UserStatusAmazonRekognitionUserApi? UserStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
