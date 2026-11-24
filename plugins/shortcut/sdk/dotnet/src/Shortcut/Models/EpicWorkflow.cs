using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Epic Workflow is the array of defined Epic States. Epic Workflow can be queried using the API but must be updated in the Shortcut UI.
/// </summary>
public record EpicWorkflow
{
    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The unique ID of the Epic Workflow.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// The date the Epic Workflow was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The date the Epic Workflow was updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The unique ID of the default Epic State that new Epics are assigned by default.
    /// </summary>
    [JsonPropertyName("default_epic_state_id")]
    public required long DefaultEpicStateId { get; init; }

    /// <summary>
    /// A map of the Epic States in this Epic Workflow.
    /// </summary>
    [JsonPropertyName("epic_states")]
    public required IReadOnlyList<EpicState> EpicStates { get; init; }
}
