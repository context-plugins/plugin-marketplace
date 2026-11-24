using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Shortcut.Core.Models;

namespace Shortcut.Models;

/// <summary>
/// An action representing a Task being created.
/// </summary>
public record HistoryActionTaskCreate
{
    /// <summary>
    /// The description of the Task.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// The type of entity referenced.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// An array of Member IDs that represent who has been mentioned in the Task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mention_ids")]
    public IReadOnlyList<Guid>? MentionIds { get; init; }

    /// <summary>
    /// An array of Groups IDs that represent which have been mentioned in the Task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group_mention_ids")]
    public IReadOnlyList<Guid>? GroupMentionIds { get; init; }

    /// <summary>
    /// An array of Member IDs that represent the Task's owners.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner_ids")]
    public IReadOnlyList<Guid>? OwnerIds { get; init; }

    /// <summary>
    /// The ID of the entity referenced.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// The action of the entity referenced.
    /// </summary>
    [JsonPropertyName("action")]
    public string Action { get; } = "create";

    /// <summary>
    /// Whether or not the Task is complete.
    /// </summary>
    [JsonPropertyName("complete")]
    public required bool Complete { get; init; }

    /// <summary>
    /// A timestamp that represent's the Task's deadline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deadline")]
    public string? Deadline { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
