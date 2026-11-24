using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Deterministic facts about the anomaly, not AI-generated.
/// </summary>
public record Facts
{
    /// <summary>
    /// Service name
    /// </summary>
    [JsonPropertyName("serviceName")]
    public required string ServiceName { get; init; }

    /// <summary>
    /// Cloud Provider name
    /// </summary>
    [JsonPropertyName("platform")]
    public required string Platform { get; init; }

    /// <summary>
    /// Scope: Project or Account
    /// </summary>
    [JsonPropertyName("scope")]
    public required string Scope { get; init; }

    /// <summary>
    /// Severity level: <c>information</c>, <c>warning</c>, or <c>critical</c>.
    /// </summary>
    [JsonPropertyName("severityLevel")]
    public required string SeverityLevel { get; init; }

    /// <summary>
    /// The difference between the actual cost and the maximum cost in the normal range.
    /// </summary>
    [JsonPropertyName("costOfAnomaly")]
    public required double CostOfAnomaly { get; init; }

    /// <summary>
    /// Observed (actual) cost of the anomaly.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actualCost")]
    public double? ActualCost { get; init; }

    /// <summary>
    /// Maximum cost within the expected normal range.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expectedMaxCost")]
    public double? ExpectedMaxCost { get; init; }

    /// <summary>
    /// Array of SKU entries contributing to an anomaly.
    /// </summary>
    [JsonPropertyName("top3SKUs")]
    public required IReadOnlyList<AnomalySku> Top3SkUs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
