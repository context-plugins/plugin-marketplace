using System.Text.Json.Serialization;
using Shortcut.Core.Models;

namespace Shortcut.Models;

/// <summary>
/// An action representing a VCS Branch being merged.
/// </summary>
public record HistoryActionBranchMerge
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
    /// The name of the VCS Branch that was pushed
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The URL from the provider of the VCS Branch that was pushed
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// The action of the entity referenced.
    /// </summary>
    [JsonPropertyName("action")]
    public string Action { get; } = "merge";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
