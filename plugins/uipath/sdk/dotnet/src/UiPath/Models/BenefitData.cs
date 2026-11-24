using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// Estimated cost-benefit analysis data for an automation idea
/// </summary>
public record BenefitData
{
    /// <summary>
    /// Estimated hours saved per year by automating this process
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimatedTimeSavingsPerYear")]
    public double? EstimatedTimeSavingsPerYear { get; init; }

    /// <summary>
    /// Full-time equivalent headcount savings from the automation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimatedFTESavings")]
    public double? EstimatedFteSavings { get; init; }

    /// <summary>
    /// Estimated monetary cost savings per year in the organization's currency
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimatedCostSavingsPerYear")]
    public double? EstimatedCostSavingsPerYear { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
