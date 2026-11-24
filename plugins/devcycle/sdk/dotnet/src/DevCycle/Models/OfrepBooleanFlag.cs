using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

/// <summary>
/// A boolean typed flag value
/// </summary>
public record OfrepBooleanFlag
{
    /// <summary>
    /// Flag evaluation result
    /// </summary>
    [JsonPropertyName("value")]
    public required bool Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
