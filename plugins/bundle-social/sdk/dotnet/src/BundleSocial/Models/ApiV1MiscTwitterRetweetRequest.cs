using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record ApiV1MiscTwitterRetweetRequest
{
    [JsonPropertyName("teamId")]
    public required string TeamId { get; init; }

    /// <summary>
    /// The numeric ID of the X post to repost (the last segment of its URL)
    /// </summary>
    [JsonPropertyName("tweetId")]
    [RegularExpression("^\\d+$")]
    public required string TweetId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
