using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Core.Validation.Attributes;

namespace Basiq.Models;

/// <summary>
/// Balance verification result
/// </summary>
public record Balance
{
    [JsonPropertyName("input")]
    public required Input1 Input { get; init; }

    /// <summary>
    /// Whether the balance falls within the specified range
    /// </summary>
    [JsonPropertyName("match")]
    public required bool? Match { get; init; }

    /// <summary>
    /// Confidence score of the match (0.0 to 1.0)
    /// </summary>
    [JsonPropertyName("confidence")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public required double Confidence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
