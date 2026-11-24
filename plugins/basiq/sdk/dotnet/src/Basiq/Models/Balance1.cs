using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Core.Validation.Attributes;

namespace Basiq.Models;

/// <summary>
/// Balance verification result
/// </summary>
public record Balance1
{
    [JsonPropertyName("input")]
    public required Input2 Input { get; init; }

    /// <summary>
    /// Whether the account balance matches the criteria
    /// </summary>
    [JsonPropertyName("match")]
    public required bool Match { get; init; }

    /// <summary>
    /// Confidence score for the match result
    /// </summary>
    [JsonPropertyName("confidence")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public required double Confidence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
