using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// PostgreSQL data source configuration.
/// </summary>
public record PostgresqlSourceConfig2
{
    /// <summary>
    /// Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxConcurrentBackfillTasks")]
    public int? MaxConcurrentBackfillTasks { get; init; }

    /// <summary>
    /// The PostgreSQL objects to include in the stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeObjects")]
    public PostgresqlRdbms3? IncludeObjects { get; init; }

    /// <summary>
    /// Required. The name of the publication that includes the set of all tables that are defined in the stream's include_objects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publication")]
    public string? Publication { get; init; }

    /// <summary>
    /// Required. Immutable. The name of the logical replication slot that's configured with the pgoutput plugin.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("replicationSlot")]
    public string? ReplicationSlot { get; init; }

    /// <summary>
    /// The PostgreSQL objects to exclude from the stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeObjects")]
    public PostgresqlRdbms4? ExcludeObjects { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
