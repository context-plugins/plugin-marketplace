using System;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

public record XPost
{
    [JsonPropertyName("tweetId")]
    public required string TweetId { get; init; }

    [JsonPropertyName("screenName")]
    public required string ScreenName { get; init; }

    [JsonPropertyName("text")]
    public required string Text { get; init; }

    [JsonPropertyName("lang")]
    public required string Lang { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("avatarUrl")]
    public string? AvatarUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("favorites")]
    public long? Favorites { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retweets")]
    public long? Retweets { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("replies")]
    public long? Replies { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quotes")]
    public long? Quotes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bookmarks")]
    public long? Bookmarks { get; init; }

    [JsonPropertyName("media")]
    public required XPostMedia Media { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
