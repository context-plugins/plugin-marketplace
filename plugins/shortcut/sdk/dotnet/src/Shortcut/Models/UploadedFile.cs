using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// An UploadedFile is any document uploaded to your Shortcut Workspace. Files attached from a third-party service are different: see the Linked Files endpoint.
/// </summary>
public record UploadedFile
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
    /// The unique IDs of the Stories associated with this file.
    /// </summary>
    [JsonPropertyName("story_ids")]
    public required IReadOnlyList<long> StoryIds { get; init; }

    /// <summary>
    /// <c>Deprecated:</c> use <c>member_mention_ids</c>.
    /// </summary>
    [JsonPropertyName("mention_ids")]
    public required IReadOnlyList<Guid> MentionIds { get; init; }

    /// <summary>
    /// The unique IDs of the Members who are mentioned in the file description.
    /// </summary>
    [JsonPropertyName("member_mention_ids")]
    public required IReadOnlyList<Guid> MemberMentionIds { get; init; }

    /// <summary>
    /// The optional User-specified name of the file.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The url where the thumbnail of the file can be found in Shortcut.
    /// </summary>
    [JsonPropertyName("thumbnail_url")]
    public required string? ThumbnailUrl { get; init; }

    /// <summary>
    /// The size of the file.
    /// </summary>
    [JsonPropertyName("size")]
    public required long Size { get; init; }

    /// <summary>
    /// The unique ID of the Member who uploaded the file.
    /// </summary>
    [JsonPropertyName("uploader_id")]
    public required Guid UploaderId { get; init; }

    /// <summary>
    /// Free form string corresponding to a text or image file.
    /// </summary>
    [JsonPropertyName("content_type")]
    public required string ContentType { get; init; }

    /// <summary>
    /// The time/date that the file was updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// The name assigned to the file in Shortcut upon upload.
    /// </summary>
    [JsonPropertyName("filename")]
    public required string Filename { get; init; }

    /// <summary>
    /// The unique IDs of the Groups who are mentioned in the file description.
    /// </summary>
    [JsonPropertyName("group_mention_ids")]
    public required IReadOnlyList<Guid> GroupMentionIds { get; init; }

    /// <summary>
    /// This field can be set to another unique ID. In the case that the File has been imported from another tool, the ID in the other tool can be indicated here.
    /// </summary>
    [JsonPropertyName("external_id")]
    public required string? ExternalId { get; init; }

    /// <summary>
    /// The unique ID for the file.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// The URL for the file.
    /// </summary>
    [JsonPropertyName("url")]
    public required string? Url { get; init; }

    /// <summary>
    /// The time/date that the file was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }
}
