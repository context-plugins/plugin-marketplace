using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Request parameters for creating an entirely new entity template.
/// </summary>
public record CreateEntityTemplate
{
    /// <summary>
    /// The name of the new entity template
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(128, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// The id of the user creating this template.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("author_id")]
    public Guid? AuthorId { get; init; }

    /// <summary>
    /// A map of story attributes this template populates.
    /// </summary>
    [JsonPropertyName("story_contents")]
    public required CreateStoryContents StoryContents { get; init; }
}
