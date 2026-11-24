using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1MiscFacebookCommentRequest
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    /// <summary>
    /// The ID of the comment in bundle.social
    /// </summary>
    [JsonPropertyName("commentId")]
    public required string CommentId { get; init; }

    /// <summary>
    /// The updated comment text
    /// </summary>
    [JsonPropertyName("text")]
    [StringLength(8000, MinimumLength = 1)]
    public required string Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
