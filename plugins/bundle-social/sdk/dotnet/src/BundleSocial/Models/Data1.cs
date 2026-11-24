using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record Data1
{
    /// <summary>
    /// Instagram Media ID
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Instagram media type
    /// </summary>
    [JsonPropertyName("media_type")]
    public required string MediaType { get; init; }

    /// <summary>
    /// Number of likes if available
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("like_count")]
    public double? LikeCount { get; init; }

    /// <summary>
    /// Number of comments if available
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("comments_count")]
    public double? CommentsCount { get; init; }

    /// <summary>
    /// Media publication timestamp
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timestamp")]
    public string? Timestamp { get; init; }

    /// <summary>
    /// Media caption if available
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("caption")]
    public string? Caption { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
