using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// BigQuery partitioning rule.
/// </summary>
public record BigQueryPartitioning2
{
    /// <summary>
    /// Ingestion time partitioning.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ingestionTimePartition")]
    public IngestionTimePartition2? IngestionTimePartition { get; init; }

    /// <summary>
    /// Time unit column partitioning.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeUnitPartition")]
    public TimeUnitPartition2? TimeUnitPartition { get; init; }

    /// <summary>
    /// Integer range partitioning.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("integerRangePartition")]
    public IntegerRangePartition2? IntegerRangePartition { get; init; }

    /// <summary>
    /// Optional. If true, queries over the table require a partition filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requirePartitionFilter")]
    public bool? RequirePartitionFilter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
