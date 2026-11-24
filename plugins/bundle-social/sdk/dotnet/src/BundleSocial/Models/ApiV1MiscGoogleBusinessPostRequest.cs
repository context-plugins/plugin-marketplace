using System.Text.Json.Serialization;

namespace BundleSocial.Models;

public record ApiV1MiscGoogleBusinessPostRequest
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    /// <summary>
    /// The ID of the post in bundle.social
    /// </summary>
    [JsonPropertyName("postId")]
    public required string PostId { get; init; }
}
