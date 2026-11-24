using System.Text.Json.Serialization;
using Shortcut.Core.Models;

namespace Shortcut.Models;

/// <summary>
/// An action representing a Task being deleted.
/// </summary>
public record HistoryActionTaskDelete
{
    /// <summary>
    /// The ID of the entity referenced.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// The type of entity referenced.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The action of the entity referenced.
    /// </summary>
    [JsonPropertyName("action")]
    public string Action { get; } = "delete";

    /// <summary>
    /// The description of the Task being deleted.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
