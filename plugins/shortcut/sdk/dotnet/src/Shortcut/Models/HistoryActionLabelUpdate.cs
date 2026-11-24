using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// An action representing a Label being updated.
/// </summary>
public record HistoryActionLabelUpdate
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
    public string Action { get; } = "update";
}
