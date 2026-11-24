using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

public record UpdateDoc
{
    /// <summary>
    /// The new title for the document
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    [StringLength(256, MinimumLength = 1)]
    public string? Title { get; init; }

    /// <summary>
    /// The new content for the document.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content")]
    public string? Content { get; init; }

    /// <summary>
    /// Format of content. For input: specifies format of provided content (defaults to 'html'). For output: controls response format - 'markdown' (default) or 'html' to include HTML content.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_format")]
    public ContentFormat2? ContentFormat { get; init; }
}
