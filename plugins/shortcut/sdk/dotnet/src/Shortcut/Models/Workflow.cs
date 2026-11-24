using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Workflow is the array of defined Workflow States. Workflow can be queried using the API but must be updated in the Shortcut UI.
/// </summary>
public record Workflow
{
    /// <summary>
    /// A description of the workflow.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// An array of IDs of projects within the Workflow.
    /// </summary>
    [JsonPropertyName("project_ids")]
    public required IReadOnlyList<double> ProjectIds { get; init; }

    /// <summary>
    /// A map of the states in this Workflow.
    /// </summary>
    [JsonPropertyName("states")]
    public required IReadOnlyList<WorkflowState> States { get; init; }

    /// <summary>
    /// The name of the workflow.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The date the Workflow was updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// Indicates if an owner is automatically assigned when an unowned story is started.
    /// </summary>
    [JsonPropertyName("auto_assign_owner")]
    public required bool AutoAssignOwner { get; init; }

    /// <summary>
    /// The unique ID of the Workflow.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// The ID of the team the workflow belongs to.
    /// </summary>
    [JsonPropertyName("team_id")]
    public required long TeamId { get; init; }

    /// <summary>
    /// The date the Workflow was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The unique ID of the default state that new Stories are entered into.
    /// </summary>
    [JsonPropertyName("default_state_id")]
    public required long DefaultStateId { get; init; }
}
