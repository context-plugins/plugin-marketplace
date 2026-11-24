using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation.Attributes;

namespace DoiT.Models;

/// <summary>
/// Recommended commitment levels and savings estimates for one PerfectScale for Commitments commitment type on an AWS organization.
/// </summary>
public record AwsRecommendation
{
    /// <summary>
    /// Coverage target policy this recommendation was generated for (built-in or customer-defined).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("policy")]
    public string? Policy { get; init; }

    /// <summary>
    /// Active hourly commitment ($/h) currently applied to this AWS organization and commitment type, including commitments already purchased.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currentCommitment")]
    public double? CurrentCommitment { get; init; }

    /// <summary>
    /// Recommended total hourly commitment ($/h) based on usage patterns and your commitment policy. Designed to increase savings while managing underutilization risk.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recommendedCommitment")]
    public double? RecommendedCommitment { get; init; }

    /// <summary>
    /// Estimated additional monthly savings ($/month) from applying the recommended commitment relative to <c>currentCommitment</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("potentialAdditionalSavings")]
    public double? PotentialAdditionalSavings { get; init; }

    /// <summary>
    /// Estimated average coverage of eligible spend if the recommended commitment were in place, as a fraction from 0 to 1 (for example, <c>0.5517</c> is 55.17%). Same scale as <c>esr</c> and the inventory utilization and coverage fields.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimatedAverageCoverage")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? EstimatedAverageCoverage { get; init; }

    /// <summary>
    /// Shelf-price hourly equivalent ($/h) of the recommended commitment, derived from the median hourly eligible usage over the last 60 days multiplied by <c>estimatedAverageCoverage</c>. Use this to compare the recommendation line to eligible usage on charts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimatedEquivalentRecommendedCommitment")]
    public double? EstimatedEquivalentRecommendedCommitment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
