using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Write Spark Application data to internal storage systems
/// </summary>
public record WriteSessionSparkApplicationContextRequest
{
    /// <summary>
    /// Required. Parent (Batch) resource reference.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent")]
    public string? Parent { get; init; }

    /// <summary>
    /// Required. The batch of spark application context objects sent for ingestion.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sparkWrapperObjects")]
    public IReadOnlyList<SparkWrapperObject>? SparkWrapperObjects { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
