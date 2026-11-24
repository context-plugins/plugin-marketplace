using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Workflow State is any of the at least 3 columns. Workflow States correspond to one of 3 types: Unstarted, Started, or Done.
/// </summary>
public record WorkflowState
{
    /// <summary>
    /// The description of what sort of Stories belong in that Workflow state.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The hex color for this Workflow State.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("color")]
    [MinLength(1)]
    [RegularExpression("^#[a-fA-F0-9]{6}$")]
    public string? Color { get; init; }

    /// <summary>
    /// The verb that triggers a move to that Workflow State when making VCS commits.
    /// </summary>
    [JsonPropertyName("verb")]
    public required string? Verb { get; init; }

    /// <summary>
    /// The Workflow State's name.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("global_id")]
    public required string GlobalId { get; init; }

    /// <summary>
    /// The number of Stories currently in that Workflow State.
    /// </summary>
    [JsonPropertyName("num_stories")]
    public required long NumStories { get; init; }

    /// <summary>
    /// The type of Workflow State (Unstarted, Started, or Finished)
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// When the Workflow State was last updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The unique ID of the Workflow State.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// The number of Story Templates associated with that Workflow State.
    /// </summary>
    [JsonPropertyName("num_story_templates")]
    public required long NumStoryTemplates { get; init; }

    /// <summary>
    /// The position that the Workflow State is in, starting with 0 at the left.
    /// </summary>
    [JsonPropertyName("position")]
    public required long Position { get; init; }

    /// <summary>
    /// The time/date the Workflow State was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }
}
