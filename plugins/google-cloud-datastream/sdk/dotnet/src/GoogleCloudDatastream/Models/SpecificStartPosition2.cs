using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Optional. Start replicating from a specific position in the source.
/// </summary>
public record SpecificStartPosition2
{
    /// <summary>
    /// Oracle SCN to start replicating from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oracleScnPosition")]
    public OracleScnPosition2? OracleScnPosition { get; init; }

    /// <summary>
    /// MySQL GTID set to start replicating from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mysqlGtidPosition")]
    public MysqlGtidPosition2? MysqlGtidPosition { get; init; }

    /// <summary>
    /// MySQL specific log position to start replicating from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mysqlLogPosition")]
    public MysqlLogPosition1? MysqlLogPosition { get; init; }

    /// <summary>
    /// MongoDB change stream position to start replicating from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mongodbChangeStreamPosition")]
    public MongodbChangeStreamPosition2? MongodbChangeStreamPosition { get; init; }

    /// <summary>
    /// SqlServer LSN to start replicating from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sqlServerLsnPosition")]
    public SqlServerLsnPosition1? SqlServerLsnPosition { get; init; }

    /// <summary>
    /// Optional. Spanner change stream position to start replicating from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spannerChangeStreamPosition")]
    public SpannerChangeStreamPosition2? SpannerChangeStreamPosition { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
