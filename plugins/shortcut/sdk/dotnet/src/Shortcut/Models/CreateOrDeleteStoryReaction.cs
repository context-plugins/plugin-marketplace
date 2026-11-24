using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record CreateOrDeleteStoryReaction
{
    /// <summary>
    /// The emoji short-code to add / remove. E.g. <c>:thumbsup::skin-tone-4:</c>.
    /// </summary>
    [JsonPropertyName("emoji")]
    public required string Emoji { get; init; }
}
