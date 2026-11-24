using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// RDD operation graph for a Spark Application Stage limited to maximum 10000 clusters.
/// </summary>
public record AccessSessionSparkApplicationStageRddOperationGraphResponse
{
    /// <summary>
    /// RDD operation graph for a Spark Application Stage.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rddOperationGraph")]
    public RddOperationGraph1? RddOperationGraph { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
