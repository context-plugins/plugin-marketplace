using System.Collections.Generic;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

/// <summary>
/// Wrapper for category data with inheritance flag
/// </summary>
public record CategoryBlock
{
    /// <summary>
    /// Whether the categories are inherited from the base policy
    /// </summary>
    [JsonPropertyName("inheritsFromBase")]
    public required bool InheritsFromBase { get; init; }

    /// <summary>
    /// Category restrictions keyed by category name
    /// </summary>
    [JsonPropertyName("restrictions")]
    public required IReadOnlyDictionary<string, CategorySettings> Restrictions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
