using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record SearchUsersByImageRequest
{
    /// <summary>
    /// The ID of an existing collection containing the UserID.
    /// </summary>
    [JsonPropertyName("CollectionId")]
    public required string CollectionId { get; init; }

    [JsonPropertyName("Image")]
    public required Image Image { get; init; }

    /// <summary>
    /// Specifies the minimum confidence in the UserID match to return. Default value is 80.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UserMatchThreshold")]
    public double? UserMatchThreshold { get; init; }

    /// <summary>
    /// Maximum number of UserIDs to return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxUsers")]
    public int? MaxUsers { get; init; }

    /// <summary>
    /// A filter that specifies a quality bar for how much filtering is done to identify faces. Filtered faces aren't searched for in the collection. The default value is NONE.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("QualityFilter")]
    public QualityFilterAmazonRekognitionUserApi? QualityFilter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
