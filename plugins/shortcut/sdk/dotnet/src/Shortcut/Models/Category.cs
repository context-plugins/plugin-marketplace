using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// A Category can be used to associate Objectives.
/// </summary>
public record Category
{
    /// <summary>
    /// A true/false boolean indicating if the Category has been archived.
    /// </summary>
    [JsonPropertyName("archived")]
    public required bool Archived { get; init; }

    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The hex color to be displayed with the Category (for example, "#ff0000").
    /// </summary>
    [JsonPropertyName("color")]
    [MinLength(1)]
    [RegularExpression("^#[a-fA-F0-9]{6}$")]
    public required string? Color { get; init; }

    /// <summary>
    /// The name of the Category.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The Global ID of the Category.
    /// </summary>
    [JsonPropertyName("global_id")]
    public required string GlobalId { get; init; }

    /// <summary>
    /// The type of entity this Category is associated with; currently Milestone or Objective is the only type of Category.
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// The time/date that the Category was updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// This field can be set to another unique ID. In the case that the Category has been imported from another tool, the ID in the other tool can be indicated here.
    /// </summary>
    [JsonPropertyName("external_id")]
    public required string? ExternalId { get; init; }

    /// <summary>
    /// The unique ID of the Category.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// The time/date that the Category was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }
}
