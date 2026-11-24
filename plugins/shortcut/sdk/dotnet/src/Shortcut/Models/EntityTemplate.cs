using System;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// An entity template can be used to prefill various fields when creating new stories.
/// </summary>
public record EntityTemplate
{
    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The unique identifier for the entity template.
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// The time/date when the entity template was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The time/date when the entity template was last updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The template's name.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The unique ID of the member who created the template.
    /// </summary>
    [JsonPropertyName("author_id")]
    public required Guid AuthorId { get; init; }

    /// <summary>
    /// The last time that someone created an entity using this template.
    /// </summary>
    [JsonPropertyName("last_used_at")]
    public required DateTimeOffset LastUsedAt { get; init; }

    /// <summary>
    /// A container entity for the attributes this template should populate.
    /// </summary>
    [JsonPropertyName("story_contents")]
    public required StoryContents StoryContents { get; init; }
}
