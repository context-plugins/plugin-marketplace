using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Projects typically map to teams (such as Frontend, Backend, Mobile, Devops, etc) but can represent any open-ended product, component, or initiative.
/// </summary>
public record Project
{
    /// <summary>
    /// The Shortcut application url for the Project.
    /// </summary>
    [JsonPropertyName("app_url")]
    public required string AppUrl { get; init; }

    /// <summary>
    /// The description of the Project.
    /// </summary>
    [JsonPropertyName("description")]
    public required string? Description { get; init; }

    /// <summary>
    /// True/false boolean indicating whether the Project is in an Archived state.
    /// </summary>
    [JsonPropertyName("archived")]
    public required bool Archived { get; init; }

    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The number of days before the thermometer appears in the Story summary.
    /// </summary>
    [JsonPropertyName("days_to_thermometer")]
    public required long DaysToThermometer { get; init; }

    /// <summary>
    /// The color associated with the Project in the Shortcut member interface.
    /// </summary>
    [JsonPropertyName("color")]
    [MinLength(1)]
    [RegularExpression("^#[a-fA-F0-9]{6}$")]
    public required string? Color { get; init; }

    /// <summary>
    /// The ID of the workflow the project belongs to.
    /// </summary>
    [JsonPropertyName("workflow_id")]
    public required long WorkflowId { get; init; }

    /// <summary>
    /// The name of the Project
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The Global ID of the Project.
    /// </summary>
    [JsonPropertyName("global_id")]
    public required string GlobalId { get; init; }

    /// <summary>
    /// The date at which the Project was started.
    /// </summary>
    [JsonPropertyName("start_time")]
    public required DateTimeOffset StartTime { get; init; }

    /// <summary>
    /// The time/date that the Project was last updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// An array of UUIDs for any Members listed as Followers.
    /// </summary>
    [JsonPropertyName("follower_ids")]
    public required IReadOnlyList<Guid> FollowerIds { get; init; }

    /// <summary>
    /// This field can be set to another unique ID. In the case that the Project has been imported from another tool, the ID in the other tool can be indicated here.
    /// </summary>
    [JsonPropertyName("external_id")]
    public required string? ExternalId { get; init; }

    /// <summary>
    /// The unique ID of the Project.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// Configuration to enable or disable thermometers in the Story summary.
    /// </summary>
    [JsonPropertyName("show_thermometer")]
    public required bool ShowThermometer { get; init; }

    /// <summary>
    /// The ID of the team the project belongs to.
    /// </summary>
    [JsonPropertyName("team_id")]
    public required long TeamId { get; init; }

    /// <summary>
    /// The number of weeks per iteration in this Project.
    /// </summary>
    [JsonPropertyName("iteration_length")]
    public required long IterationLength { get; init; }

    /// <summary>
    /// The Project abbreviation used in Story summaries. Should be kept to 3 characters at most.
    /// </summary>
    [JsonPropertyName("abbreviation")]
    public required string? Abbreviation { get; init; }

    /// <summary>
    /// A group of calculated values for this Project.
    /// </summary>
    [JsonPropertyName("stats")]
    public required ProjectStats Stats { get; init; }

    /// <summary>
    /// The time/date that the Project was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset? CreatedAt { get; init; }
}
