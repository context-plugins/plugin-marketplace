using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;
using GoogleCloudDatastream.Models.Enums;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Configuration for syncing data from a MongoDB source.
/// </summary>
public record MongodbSourceConfig
{
    /// <summary>
    /// Optional. Maximum number of concurrent backfill tasks. The number should be non-negative and less than or equal to 50. If not set (or set to 0), the system's default value is used
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxConcurrentBackfillTasks")]
    public int? MaxConcurrentBackfillTasks { get; init; }

    /// <summary>
    /// The MongoDB collections to exclude from the stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeObjects")]
    public MongodbCluster4? ExcludeObjects { get; init; }

    /// <summary>
    /// The MongoDB collections to include in the stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeObjects")]
    public MongodbCluster5? IncludeObjects { get; init; }

    /// <summary>
    /// Optional. MongoDB JSON mode to use for the stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jsonMode")]
    public JsonMode? JsonMode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
