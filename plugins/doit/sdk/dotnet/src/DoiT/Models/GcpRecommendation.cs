using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation.Attributes;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// A CUD purchase recommendation for a (service, region) scope.
/// </summary>
public record GcpRecommendation
{
    /// <summary>
    /// Coverage target policy configured for this product line and region scope (built-in or customer-defined).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("policy")]
    public string? Policy { get; init; }

    /// <summary>
    /// Region scope for this recommendation, in <c>lower_snake_case</c> wire form (for example <c>us_east1</c>). <c>global</c> for <c>compute</c>; a concrete region for <c>cloud_sql</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("region")]
    [RegularExpression("^(global|[a-z]+(_[a-z0-9]+)+)$")]
    public string? Region { get; init; }

    /// <summary>
    /// PS4C product line (<c>gcp_service</c>) this recommendation belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("service")]
    public Service3? Service { get; init; }

    /// <summary>
    /// Active hourly commitment ($/h) currently applied to this billing account and product line, including commitments already purchased.
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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
