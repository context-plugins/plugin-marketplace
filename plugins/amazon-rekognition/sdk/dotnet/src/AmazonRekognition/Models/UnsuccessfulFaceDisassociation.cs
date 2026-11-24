using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record UnsuccessfulFaceDisassociation
{
    /// <summary>
    /// A unique identifier assigned to the face.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FaceId")]
    public string? FaceId { get; init; }

    /// <summary>
    /// A provided ID for the UserID. Unique within the collection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UserId")]
    public string? UserId { get; init; }

    /// <summary>
    /// The reason why the deletion was unsuccessful.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Reasons")]
    public IReadOnlyList<Reason2>? Reasons { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
