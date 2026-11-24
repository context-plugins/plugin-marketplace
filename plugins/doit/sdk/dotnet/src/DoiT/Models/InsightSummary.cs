using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Aggregate summary of risks and savings across all resource results for an insight.
/// </summary>
public record InsightSummary
{
    /// <summary>
    /// Total number of operational risks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("operationalRisks")]
    public double? OperationalRisks { get; init; }

    /// <summary>
    /// Total number of performance risks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("performanceRisks")]
    public double? PerformanceRisks { get; init; }

    /// <summary>
    /// Total potential daily savings in USD.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("potentialDailySavings")]
    public double? PotentialDailySavings { get; init; }

    /// <summary>
    /// Total number of reliability risks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reliabilityRisks")]
    public double? ReliabilityRisks { get; init; }

    /// <summary>
    /// Total number of security risks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("securityRisks")]
    public double? SecurityRisks { get; init; }

    /// <summary>
    /// Total number of sustainability risks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sustainabilityRisks")]
    public double? SustainabilityRisks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
