using System.Text.Json.Serialization;
using CircleCi.Core.Models;

namespace CircleCi.Models;

/// <summary>
/// Job metrics
/// </summary>
public record Metrics
{
    /// <summary>
    /// Total number of runs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_runs")]
    public int? TotalRuns { get; init; }

    /// <summary>
    /// Number of successful runs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("successful_runs")]
    public int? SuccessfulRuns { get; init; }

    /// <summary>
    /// Number of failed runs
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failed_runs")]
    public int? FailedRuns { get; init; }

    /// <summary>
    /// Success rate as a decimal
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("success_rate")]
    public double? SuccessRate { get; init; }

    /// <summary>
    /// Duration statistics
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("duration_metrics")]
    public DurationMetrics? DurationMetrics { get; init; }

    /// <summary>
    /// Total credits consumed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_credits_used")]
    public int? TotalCreditsUsed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
