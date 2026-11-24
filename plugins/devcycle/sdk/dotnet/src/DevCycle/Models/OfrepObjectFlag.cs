using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

/// <summary>
/// An object typed flag value
/// </summary>
public record OfrepObjectFlag
{
    /// <summary>
    /// Flag evaluation result
    /// </summary>
    [JsonPropertyName("value")]
    public required object Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
