using System.Text.Json.Serialization;
using Shortcut.Core.Models;
using Shortcut.Models.AnyOf;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

/// <summary>
/// A references to a Story Workflow State.
/// </summary>
public record HistoryReferenceWorkflowState
{
    /// <summary>
    /// The ID of the entity referenced.
    /// </summary>
    [JsonPropertyName("id")]
    public required Id Id { get; init; }

    /// <summary>
    /// The type of entity referenced.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// Either "backlog", "unstarted", "started", or "done".
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeShortcutStoriesApi Type { get; init; }

    /// <summary>
    /// The name of the entity referenced.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
