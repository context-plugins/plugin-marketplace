using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Income range to verify
/// </summary>
public record Income
{
    /// <summary>
    /// Minimum income value as a numeric string
    /// </summary>
    [JsonPropertyName("min")]
    public required string Min { get; init; }

    /// <summary>
    /// Maximum income value as a numeric string
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max")]
    public string? Max { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
