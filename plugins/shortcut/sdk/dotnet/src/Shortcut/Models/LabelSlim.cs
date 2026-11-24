using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// A Label can be used to associate and filter Stories and Epics, and also create new Workspaces. A slim Label does not include aggregate stats. Fetch the Label using the labels endpoint to retrieve them.
/// </summary>
public record LabelSlim
{
    /// <summary>
    /// The Shortcut application url for the Label.
    /// </summary>
    [JsonPropertyName("app_url")]
    public required string AppUrl { get; init; }

    /// <summary>
    /// The description of the Label.
    /// </summary>
    [JsonPropertyName("description")]
    public required string? Description { get; init; }

    /// <summary>
    /// A true/false boolean indicating if the Label has been archived.
    /// </summary>
    [JsonPropertyName("archived")]
    public required bool Archived { get; init; }

    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The hex color to be displayed with the Label (for example, "#ff0000").
    /// </summary>
    [JsonPropertyName("color")]
    [MinLength(1)]
    [RegularExpression("^#[a-fA-F0-9]{6}$")]
    public required string? Color { get; init; }

    /// <summary>
    /// The name of the Label.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("global_id")]
    public required string GlobalId { get; init; }

    /// <summary>
    /// The time/date that the Label was updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// This field can be set to another unique ID. In the case that the Label has been imported from another tool, the ID in the other tool can be indicated here.
    /// </summary>
    [JsonPropertyName("external_id")]
    public required string? ExternalId { get; init; }

    /// <summary>
    /// The unique ID of the Label.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// The time/date that the Label was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset? CreatedAt { get; init; }
}
