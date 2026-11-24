using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Core.Validation.Attributes;

namespace Basiq.Models;

public record IdentityMatch
{
    /// <summary>
    /// Original input value provided
    /// </summary>
    [JsonPropertyName("input")]
    public required string Input { get; init; }

    /// <summary>
    /// Whether the field matches the user's records
    /// </summary>
    [JsonPropertyName("match")]
    public required bool Match { get; init; }

    /// <summary>
    /// Confidence score for the match
    /// </summary>
    [JsonPropertyName("confidence")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public required double Confidence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
