using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Configuration for syncing data from a MySQL source.
/// </summary>
public record MysqlSourceConfig
{
    /// <summary>
    /// Maximum number of concurrent CDC tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxConcurrentCdcTasks")]
    public int? MaxConcurrentCdcTasks { get; init; }

    /// <summary>
    /// The MySQL objects to exclude from the stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeObjects")]
    public MysqlRdbms2? ExcludeObjects { get; init; }

    /// <summary>
    /// Use GTID based replication.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gtid")]
    public object? Gtid { get; init; }

    /// <summary>
    /// Use Binary log position based replication.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("binaryLogPosition")]
    public object? BinaryLogPosition { get; init; }

    /// <summary>
    /// The MySQL objects to retrieve from the source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeObjects")]
    public MysqlRdbms3? IncludeObjects { get; init; }

    /// <summary>
    /// Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxConcurrentBackfillTasks")]
    public int? MaxConcurrentBackfillTasks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
