using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record StoryContentsTask
{
    /// <summary>
    /// Full text of the Task.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// The number corresponding to the Task's position within a list of Tasks on a Story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("position")]
    public long? Position { get; init; }

    /// <summary>
    /// True/false boolean indicating whether the Task has been completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("complete")]
    public bool? Complete { get; init; }

    /// <summary>
    /// An array of UUIDs of the Owners of this Task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner_ids")]
    public IReadOnlyList<Guid>? OwnerIds { get; init; }

    /// <summary>
    /// This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_id")]
    public string? ExternalId { get; init; }
}
