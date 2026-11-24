using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// SparkPlanGraph for a Spark Application execution limited to maximum 10000 clusters.
/// </summary>
public record AccessSessionSparkApplicationSqlSparkPlanGraphResponse
{
    /// <summary>
    /// SparkPlanGraph for a Spark Application execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkPlanGraph")]
    public SparkPlanGraph1? SparkPlanGraph { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
