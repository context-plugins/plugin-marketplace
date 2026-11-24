using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Request parameters for creating a Task on a Story.
/// </summary>
public record CreateTaskParams
{
    /// <summary>
    /// The Task description.
    /// </summary>
    [JsonPropertyName("description")]
    [StringLength(2048, MinimumLength = 1)]
    public required string Description { get; init; }

    /// <summary>
    /// True/false boolean indicating whether the Task is completed. Defaults to false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("complete")]
    public bool? Complete { get; init; }

    /// <summary>
    /// An array of UUIDs for any members you want to add as Owners on this new Task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner_ids")]
    public IReadOnlyList<Guid>? OwnerIds { get; init; }

    /// <summary>
    /// This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_id")]
    [MaxLength(128)]
    public string? ExternalId { get; init; }

    /// <summary>
    /// Defaults to the time/date the Task is created but can be set to reflect another creation time/date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// Defaults to the time/date the Task is created in Shortcut but can be set to reflect another time/date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }
}
