using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;
using GoogleCloudDatastream.Models.Enums;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Ingestion time partitioning. see https://cloud.google.com/bigquery/docs/partitioned-tables#ingestion_time
/// </summary>
public record IngestionTimePartition
{
    /// <summary>
    /// Optional. Partition granularity
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partitioningTimeGranularity")]
    public PartitioningTimeGranularity? PartitioningTimeGranularity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
