using System.Text.Json.Serialization;
using Lusha.Core.Models;
using Lusha.Core.Validation.Attributes;

namespace Lusha.Models;

/// <summary>
/// Refinement-only — must be paired with a base filter. Raw 0–100 contact score. Distinct from the <c>confidence</c> band ("A+"/"A") returned on enriched contacts, which is derived from this score (e.g. <c>A+</c> when score &gt; 75).
/// </summary>
public record Score
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minScore")]
    [Minimum(0)]
    [Maximum(100)]
    public int? MinScore { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxScore")]
    [Minimum(0)]
    [Maximum(100)]
    public int? MaxScore { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
