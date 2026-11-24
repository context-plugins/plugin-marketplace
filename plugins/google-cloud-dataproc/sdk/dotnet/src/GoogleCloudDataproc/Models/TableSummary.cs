using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Aggregated summary of results for all tables in a database.
/// </summary>
public record TableSummary
{
    /// <summary>
    /// Output only. Number of tables with a specific migration plan action. The key is the action name (e.g. CREATE, UPDATE, SKIP, etc.).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("planCounts")]
    public IReadOnlyDictionary<string, string>? PlanCounts { get; init; }

    /// <summary>
    /// Output only. The total number of partitions that failed to migrate at the target.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partitionFailedCount")]
    public string? PartitionFailedCount { get; init; }

    /// <summary>
    /// Output only. Partition migration summary across all Hive tables in the database.The total number of partitions discovered at the source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partitionDiscoveredCount")]
    public string? PartitionDiscoveredCount { get; init; }

    /// <summary>
    /// Output only. The total number of partitions successfully migrated at the target.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partitionSuccessCount")]
    public string? PartitionSuccessCount { get; init; }

    /// <summary>
    /// Output only. Number of tables with a specific migration result status. The key is the status name (e.g. SUCCEEDED, FAILED, SKIPPED, etc.). This is only set if the migration is not a dry run.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resultCounts")]
    public IReadOnlyDictionary<string, string>? ResultCounts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
