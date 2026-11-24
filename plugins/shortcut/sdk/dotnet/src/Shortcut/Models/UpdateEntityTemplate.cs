using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Request parameters for changing either a template's name or any of
///   the attributes it is designed to pre-populate.
/// </summary>
public record UpdateEntityTemplate
{
    /// <summary>
    /// The updated template name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [StringLength(128, MinimumLength = 1)]
    public string? Name { get; init; }

    /// <summary>
    /// Updated attributes for the template to populate.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("story_contents")]
    public UpdateStoryContents? StoryContents { get; init; }
}
