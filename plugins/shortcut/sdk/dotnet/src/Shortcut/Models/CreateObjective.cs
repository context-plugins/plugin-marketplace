using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

public record CreateObjective
{
    /// <summary>
    /// The name of the Objective.
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(256, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// The Objective's description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(100000)]
    public string? Description { get; init; }

    /// <summary>
    /// The workflow state that the Objective is in.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public StateShortcutObjectivesApi? State { get; init; }

    /// <summary>
    /// A manual override for the time/date the Objective was started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("started_at_override")]
    public DateTimeOffset? StartedAtOverride { get; init; }

    /// <summary>
    /// A manual override for the time/date the Objective was completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed_at_override")]
    public DateTimeOffset? CompletedAtOverride { get; init; }

    /// <summary>
    /// An array of IDs of Categories attached to the Objective.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("categories")]
    public IReadOnlyList<CreateCategoryParams>? Categories { get; init; }
}
