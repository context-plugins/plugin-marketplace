using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record UpdateStoryComment
{
    /// <summary>
    /// The updated comment text.
    /// </summary>
    [JsonPropertyName("text")]
    [MaxLength(100000)]
    public required string Text { get; init; }
}
