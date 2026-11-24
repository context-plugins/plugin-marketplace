using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1MiscFacebookPostRequest
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    /// <summary>
    /// The ID of the post/reel to edit
    /// </summary>
    [JsonPropertyName("postId")]
    public required string PostId { get; init; }

    /// <summary>
    /// The updated message/text content of the post
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
