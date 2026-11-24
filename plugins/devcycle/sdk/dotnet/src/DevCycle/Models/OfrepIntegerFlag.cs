using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

/// <summary>
/// An integer typed flag value
/// </summary>
public record OfrepIntegerFlag
{
    /// <summary>
    /// Flag evaluation result
    /// </summary>
    [JsonPropertyName("value")]
    public required int Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
