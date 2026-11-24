using System.Text.Json.Serialization;
using Shortcut.Core.Models;
using Shortcut.Models.AnyOf;

namespace Shortcut.Models;

/// <summary>
/// A reference to a Story Task.
/// </summary>
public record HistoryReferenceStoryTask
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
    /// The description of the Story Task.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
