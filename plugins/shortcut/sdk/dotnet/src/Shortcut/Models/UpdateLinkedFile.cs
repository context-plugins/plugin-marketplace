using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

public record UpdateLinkedFile
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
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [MinLength(1)]
    public string? Name { get; init; }

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
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeShortcutLinkedFilesApi? Type { get; init; }

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
    /// The URL of linked file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    [MaxLength(2048)]
    [RegularExpression("^https?://.+$")]
    public string? Url { get; init; }
}
