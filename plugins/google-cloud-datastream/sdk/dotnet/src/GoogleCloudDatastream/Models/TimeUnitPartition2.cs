using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;
using GoogleCloudDatastream.Models.Enums;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Time unit column partitioning.
/// </summary>
public record TimeUnitPartition2
{
    /// <summary>
    /// Optional. Partition granularity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partitioningTimeGranularity")]
    public PartitioningTimeGranularity1? PartitioningTimeGranularity { get; init; }

    /// <summary>
    /// Required. The partitioning column.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("column")]
    public string? Column { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
