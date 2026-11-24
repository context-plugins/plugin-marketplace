using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1MiscLinkedinPostRequest
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    /// <summary>
    /// The URN of the post to edit
    /// </summary>
    [JsonPropertyName("postId")]
    public required string PostId { get; init; }

    /// <summary>
    /// The updated text content
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
