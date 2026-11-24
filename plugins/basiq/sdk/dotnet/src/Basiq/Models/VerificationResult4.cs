using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Core.Validation.Attributes;
using Basiq.Models.AnyOf;

namespace Basiq.Models;

/// <summary>
/// Account number verification result
/// </summary>
public record VerificationResult4
{
    /// <summary>
    /// The input value being verified
    /// </summary>
    [JsonPropertyName("input")]
    public required Input4 Input { get; init; }

    /// <summary>
    /// Whether the input matched the source data. Null if verification could not be completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("match")]
    public bool? Match { get; init; }

    /// <summary>
    /// Confidence score of the match (0.0 to 1.0)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("confidence")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? Confidence { get; init; }

    /// <summary>
    /// Error message if verification could not be completed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
