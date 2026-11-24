using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Response for ComputeTuningConfig RPC.
/// </summary>
public record ComputeTuningConfigResponse
{
    /// <summary>
    /// Recommended Spark properties for the query (e.g., {"spark.sql.shuffle.partitions": "500"}).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recommendedProperties")]
    public IReadOnlyDictionary<string, string>? RecommendedProperties { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
