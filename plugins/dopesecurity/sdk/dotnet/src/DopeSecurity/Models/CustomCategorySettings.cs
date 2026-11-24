using System.Collections.Generic;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;
using DopeSecurity.Models.Enums;

namespace DopeSecurity.Models;

/// <summary>
/// Settings for a custom category
/// </summary>
public record CustomCategorySettings
{
    /// <summary>
    /// The action applied when the custom category is matched
    /// </summary>
    [JsonPropertyName("restriction")]
    public required Restriction Restriction { get; init; }

    /// <summary>
    /// Optional block/warning page identifier
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page")]
    public string? Page { get; init; }

    /// <summary>
    /// Per-entity overrides keyed by entity identifier
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exceptions")]
    public IReadOnlyDictionary<string, CategoryException>? Exceptions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
