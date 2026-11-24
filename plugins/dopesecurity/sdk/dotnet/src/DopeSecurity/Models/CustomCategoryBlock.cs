using System.Collections.Generic;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

/// <summary>
/// Wrapper for custom category data with inheritance flag
/// </summary>
public record CustomCategoryBlock
{
    /// <summary>
    /// Whether the custom categories are inherited from the base policy
    /// </summary>
    [JsonPropertyName("inheritsFromBase")]
    public required bool InheritsFromBase { get; init; }

    /// <summary>
    /// Custom category restrictions keyed by custom category name
    /// </summary>
    [JsonPropertyName("restrictions")]
    public required IReadOnlyDictionary<string, CustomCategorySettings> Restrictions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
