using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Configuration for syncing data from a SQLServer source.
/// </summary>
public record SqlServerSourceConfig
{
    /// <summary>
    /// Max concurrent CDC tasks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxConcurrentCdcTasks")]
    public int? MaxConcurrentCdcTasks { get; init; }

    /// <summary>
    /// The SQLServer objects to include in the stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includeObjects")]
    public SqlServerRdbms3? IncludeObjects { get; init; }

    /// <summary>
    /// Max concurrent backfill tasks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxConcurrentBackfillTasks")]
    public int? MaxConcurrentBackfillTasks { get; init; }

    /// <summary>
    /// The SQLServer objects to exclude from the stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeObjects")]
    public SqlServerRdbms4? ExcludeObjects { get; init; }

    /// <summary>
    /// CDC reader reads from transaction logs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transactionLogs")]
    public object? TransactionLogs { get; init; }

    /// <summary>
    /// CDC reader reads from change tables.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("changeTables")]
    public SqlServerChangeTables1? ChangeTables { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
