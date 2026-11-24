using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

public record CreateDoc
{
    /// <summary>
    /// The title for the new document.
    /// </summary>
    [JsonPropertyName("title")]
    [StringLength(256, MinimumLength = 1)]
    public required string Title { get; init; }

    /// <summary>
    /// The content for the new document.
    /// </summary>
    [JsonPropertyName("content")]
    public required string Content { get; init; }

    /// <summary>
    /// Format of the content being sent. Defaults to 'html'. If 'markdown', content will be converted to HTML for storage. Storage is always HTML; this parameter just tells us what format you're sending.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_format")]
    public ContentFormat1? ContentFormat { get; init; }
}
