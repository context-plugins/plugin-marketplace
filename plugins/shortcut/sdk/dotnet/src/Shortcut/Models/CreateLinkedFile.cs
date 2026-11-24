using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

public record CreateLinkedFile
{
    /// <summary>
    /// The description of the file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(512)]
    public string? Description { get; init; }

    /// <summary>
    /// The ID of the linked story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("story_id")]
    public long? StoryId { get; init; }

    /// <summary>
    /// The name of the file.
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(256, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// The URL of the thumbnail, if the integration provided it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("thumbnail_url")]
    [MaxLength(2048)]
    [RegularExpression("^https?://.+$")]
    public string? ThumbnailUrl { get; init; }

    /// <summary>
    /// The integration type of the file (e.g. google, dropbox, box).
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeShortcutLinkedFilesApi Type { get; init; }

    /// <summary>
    /// The filesize, if the integration provided it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    public long? Size { get; init; }

    /// <summary>
    /// The UUID of the member that uploaded the file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uploader_id")]
    public Guid? UploaderId { get; init; }

    /// <summary>
    /// The content type of the image (e.g. txt/plain).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_type")]
    [MaxLength(128)]
    public string? ContentType { get; init; }

    /// <summary>
    /// The URL of linked file.
    /// </summary>
    [JsonPropertyName("url")]
    [MaxLength(2048)]
    [RegularExpression("^https?://.+$")]
    public required string Url { get; init; }
}
