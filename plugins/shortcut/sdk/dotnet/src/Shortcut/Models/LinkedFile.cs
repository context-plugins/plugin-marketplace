using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Linked files are stored on a third-party website and linked to one or more Stories. Shortcut currently supports linking files from Google Drive, Dropbox, Box, and by URL.
/// </summary>
public record LinkedFile
{
    /// <summary>
    /// The description of the file.
    /// </summary>
    [JsonPropertyName("description")]
    public required string? Description { get; init; }

    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The IDs of the stories this file is attached to.
    /// </summary>
    [JsonPropertyName("story_ids")]
    public required IReadOnlyList<long> StoryIds { get; init; }

    /// <summary>
    /// <c>Deprecated:</c> use <c>member_mention_ids</c>.
    /// </summary>
    [JsonPropertyName("mention_ids")]
    public required IReadOnlyList<Guid> MentionIds { get; init; }

    /// <summary>
    /// The members that are mentioned in the description of the file.
    /// </summary>
    [JsonPropertyName("member_mention_ids")]
    public required IReadOnlyList<Guid> MemberMentionIds { get; init; }

    /// <summary>
    /// The name of the linked file.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The URL of the file thumbnail, if the integration provided it.
    /// </summary>
    [JsonPropertyName("thumbnail_url")]
    public required string? ThumbnailUrl { get; init; }

    /// <summary>
    /// The integration type (e.g. google, dropbox, box).
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// The filesize, if the integration provided it.
    /// </summary>
    [JsonPropertyName("size")]
    public required long? Size { get; init; }

    /// <summary>
    /// The UUID of the member that uploaded the file.
    /// </summary>
    [JsonPropertyName("uploader_id")]
    public required Guid UploaderId { get; init; }

    /// <summary>
    /// The content type of the image (e.g. txt/plain).
    /// </summary>
    [JsonPropertyName("content_type")]
    public required string? ContentType { get; init; }

    /// <summary>
    /// The time/date the LinkedFile was updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The groups that are mentioned in the description of the file.
    /// </summary>
    [JsonPropertyName("group_mention_ids")]
    public required IReadOnlyList<Guid> GroupMentionIds { get; init; }

    /// <summary>
    /// The unique identifier for the file.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// The URL of the file.
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// The time/date the LinkedFile was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }
}
