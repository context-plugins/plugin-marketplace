using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Shortcut.Core.Models;
using Shortcut.Models.AnyOf;

namespace Shortcut.Models;

/// <summary>
/// A reference to an Iteration.
/// </summary>
public record HistoryReferenceIteration
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
    /// The application URL of the Iteration.
    /// </summary>
    [JsonPropertyName("app_url")]
    [MaxLength(2048)]
    [RegularExpression("^https?://.+$")]
    public required string AppUrl { get; init; }

    /// <summary>
    /// The name of the entity referenced.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
