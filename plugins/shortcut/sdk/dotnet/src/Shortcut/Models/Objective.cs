using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// An Objective is a collection of Epics that represent a release or some other large initiative that you are working on.
/// </summary>
public record Objective
{
    /// <summary>
    /// The Shortcut application url for the Objective.
    /// </summary>
    [JsonPropertyName("app_url")]
    public required string AppUrl { get; init; }

    /// <summary>
    /// The Objective's description.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// A boolean indicating whether the Objective has been archived or not.
    /// </summary>
    [JsonPropertyName("archived")]
    public required bool Archived { get; init; }

    /// <summary>
    /// A true/false boolean indicating if the Objective has been started.
    /// </summary>
    [JsonPropertyName("started")]
    public required bool Started { get; init; }

    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// A manual override for the time/date the Objective was completed.
    /// </summary>
    [JsonPropertyName("completed_at_override")]
    public required DateTimeOffset? CompletedAtOverride { get; init; }

    /// <summary>
    /// The time/date the Objective was started.
    /// </summary>
    [JsonPropertyName("started_at")]
    public required DateTimeOffset? StartedAt { get; init; }

    /// <summary>
    /// The time/date the Objective was completed.
    /// </summary>
    [JsonPropertyName("completed_at")]
    public required DateTimeOffset? CompletedAt { get; init; }

    /// <summary>
    /// The name of the Objective.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("global_id")]
    public required string GlobalId { get; init; }

    /// <summary>
    /// A true/false boolean indicating if the Objectivehas been completed.
    /// </summary>
    [JsonPropertyName("completed")]
    public required bool Completed { get; init; }

    /// <summary>
    /// The workflow state that the Objective is in.
    /// </summary>
    [JsonPropertyName("state")]
    public required string State { get; init; }

    /// <summary>
    /// A manual override for the time/date the Objective was started.
    /// </summary>
    [JsonPropertyName("started_at_override")]
    public required DateTimeOffset? StartedAtOverride { get; init; }

    /// <summary>
    /// The time/date the Objective was updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// An array of Categories attached to the Objective.
    /// </summary>
    [JsonPropertyName("categories")]
    public required IReadOnlyList<Category> Categories { get; init; }

    /// <summary>
    /// The unique ID of the Objective.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// The IDs of the Key Results associated with the Objective.
    /// </summary>
    [JsonPropertyName("key_result_ids")]
    public required IReadOnlyList<Guid> KeyResultIds { get; init; }

    /// <summary>
    /// A number representing the position of the Objective in relation to every other Objective within the Workspace.
    /// </summary>
    [JsonPropertyName("position")]
    public required long Position { get; init; }

    /// <summary>
    /// A group of calculated values for this Objective.
    /// </summary>
    [JsonPropertyName("stats")]
    public required ObjectiveStats Stats { get; init; }

    /// <summary>
    /// The time/date the Objective was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }
}
