using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Core.Validation.Attributes;

namespace Basiq.Models;

public record IncomeInsightDataItem
{
    /// <summary>
    /// Echo of the input parameters
    /// </summary>
    [JsonPropertyName("input")]
    public required Input3 Input { get; init; }

    /// <summary>
    /// Whether the user's income falls within the specified range
    /// </summary>
    [JsonPropertyName("match")]
    public required bool Match { get; init; }

    /// <summary>
    /// Confidence level of the match result (0 or 1)
    /// </summary>
    [JsonPropertyName("confidence")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public required double Confidence { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
