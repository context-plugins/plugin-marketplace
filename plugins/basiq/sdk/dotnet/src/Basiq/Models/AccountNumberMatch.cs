using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Core.Validation.Attributes;

namespace Basiq.Models;

public record AccountNumberMatch
{
    /// <summary>
    /// The original account number input
    /// </summary>
    [JsonPropertyName("input")]
    public required string Input { get; init; }

    /// <summary>
    /// Whether the account number matches
    /// </summary>
    [JsonPropertyName("match")]
    public required bool Match { get; init; }

    /// <summary>
    /// Confidence score for the match (0.0 to 1.0)
    /// </summary>
    [JsonPropertyName("confidence")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public required double Confidence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
