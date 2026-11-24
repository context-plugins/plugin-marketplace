using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record UpdateComment
{
    /// <summary>
    /// The updated comment text.
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }
}
