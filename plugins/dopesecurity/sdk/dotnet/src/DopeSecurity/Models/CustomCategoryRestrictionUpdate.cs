using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;
using DopeSecurity.Models.Enums;

namespace DopeSecurity.Models;

/// <summary>
/// Custom category restriction settings used in write operations
/// </summary>
public record CustomCategoryRestrictionUpdate
{
    /// <summary>
    /// Custom categories can be ignored, in addition to regular restrictions
    /// </summary>
    [JsonPropertyName("restriction")]
    public required Restriction4 Restriction { get; init; }

    /// <summary>
    /// Optional page identifier. Use with BLOCK and WARNING restrictions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page")]
    public string? Page { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
