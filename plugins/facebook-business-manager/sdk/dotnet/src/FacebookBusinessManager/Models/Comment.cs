using System;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Models;

namespace FacebookBusinessManager.Models;

public record Comment
{
    /// <summary>
    /// The ID of the comment
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The text content of the comment
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    /// <summary>
    /// The person or Page that made the comment
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("from")]
    public From? From { get; init; }

    /// <summary>
    /// When the comment was created
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_time")]
    public DateTimeOffset? CreatedTime { get; init; }

    /// <summary>
    /// Number of likes on the comment
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("like_count")]
    public int? LikeCount { get; init; }

    /// <summary>
    /// Number of replies to the comment
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("comment_count")]
    public int? CommentCount { get; init; }

    /// <summary>
    /// Whether the comment is hidden
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_hidden")]
    public bool? IsHidden { get; init; }

    /// <summary>
    /// Media attachment on the comment
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachment")]
    public object? Attachment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
