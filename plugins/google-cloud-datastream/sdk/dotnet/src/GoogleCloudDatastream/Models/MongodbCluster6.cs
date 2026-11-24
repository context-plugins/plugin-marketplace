using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// MongoDB data source objects to avoid backfilling
/// </summary>
public record MongodbCluster6
{
    /// <summary>
    /// MongoDB databases in the cluster.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("databases")]
    public IReadOnlyList<MongodbDatabase>? Databases { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
