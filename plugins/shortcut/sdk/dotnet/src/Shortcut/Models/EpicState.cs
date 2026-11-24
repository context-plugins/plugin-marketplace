using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Epic State is any of the at least 3 columns. Epic States correspond to one of 3 types: Unstarted, Started, or Done.
/// </summary>
public record EpicState
{
    /// <summary>
    /// The description of what sort of Epics belong in that Epic State.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The hex color for this Epic State.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("color")]
    [MinLength(1)]
    [RegularExpression("^#[a-fA-F0-9]{6}$")]
    public string? Color { get; init; }

    /// <summary>
    /// The Epic State's name.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("global_id")]
    public required string GlobalId { get; init; }

    /// <summary>
    /// The type of Epic State (Unstarted, Started, or Done)
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// When the Epic State was last updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The unique ID of the Epic State.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// The position that the Epic State is in, starting with 0 at the left.
    /// </summary>
    [JsonPropertyName("position")]
    public required long Position { get; init; }

    /// <summary>
    /// The time/date the Epic State was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }
}
