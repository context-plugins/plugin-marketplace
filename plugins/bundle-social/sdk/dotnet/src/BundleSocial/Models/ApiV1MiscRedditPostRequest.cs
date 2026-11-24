using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1MiscRedditPostRequest
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    /// <summary>
    /// The ID of the post to edit (without prefix)
    /// </summary>
    [JsonPropertyName("postId")]
    public required string PostId { get; init; }

    /// <summary>
    /// The updated text content (selftext for text posts, works for all editable post types)
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
