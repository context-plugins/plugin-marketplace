using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Consolidated summary of executors for a Spark Application.
/// </summary>
public record SummarizeSessionSparkApplicationExecutorsResponse
{
    /// <summary>
    /// Consolidated summary for active executors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activeExecutorSummary")]
    public ConsolidatedExecutorSummary1? ActiveExecutorSummary { get; init; }

    /// <summary>
    /// Overall consolidated summary for all executors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalExecutorSummary")]
    public ConsolidatedExecutorSummary2? TotalExecutorSummary { get; init; }

    /// <summary>
    /// Consolidated summary for dead executors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deadExecutorSummary")]
    public ConsolidatedExecutorSummary3? DeadExecutorSummary { get; init; }

    /// <summary>
    /// Spark Application Id
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("applicationId")]
    public string? ApplicationId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
