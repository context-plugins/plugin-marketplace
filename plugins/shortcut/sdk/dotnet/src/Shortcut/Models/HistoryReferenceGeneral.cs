using System.Text.Json.Serialization;
using Shortcut.Models.AnyOf;

namespace Shortcut.Models;

/// <summary>
/// A default reference for entity types that don't have extra fields.
/// </summary>
public record HistoryReferenceGeneral
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
    /// The name of the entity referenced.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }
}
