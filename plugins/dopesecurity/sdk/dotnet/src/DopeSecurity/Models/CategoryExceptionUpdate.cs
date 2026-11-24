using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;
using DopeSecurity.Models.Enums;

namespace DopeSecurity.Models;

/// <summary>
/// Exception settings used in write operations
/// </summary>
public record CategoryExceptionUpdate
{
    /// <summary>
    /// The action applied for this user or group
    /// </summary>
    [JsonPropertyName("restriction")]
    public required Restriction5 Restriction { get; init; }

    /// <summary>
    /// Optional page identifier. Use with BLOCK and WARNING restrictions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page")]
    public string? Page { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
