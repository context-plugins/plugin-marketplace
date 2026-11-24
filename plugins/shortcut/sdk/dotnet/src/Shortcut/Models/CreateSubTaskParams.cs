using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Shortcut.Core.Validation.Attributes;

namespace Shortcut.Models;

public record CreateSubTaskParams
{
    /// <summary>
    /// The name of the SubTask.
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(512, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// An array of UUIDs of the owners of this story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner_ids")]
    [UniqueItems]
    public IReadOnlyList<Guid>? OwnerIds { get; init; }

    /// <summary>
    /// The ID of the workflow state the story will be in.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflow_state_id")]
    public long? WorkflowStateId { get; init; }
}
