using System.Text.Json.Serialization;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

public record GetDoc
{
    /// <summary>
    /// Format of the content to return. Defaults to 'markdown'. If 'html', includes HTML content in response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content_format")]
    public ContentFormat? ContentFormat { get; init; }
}
