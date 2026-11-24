using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Request message for DataprocMetastore.MoveTableToDatabase.
/// </summary>
public record MoveTableToDatabaseRequest
{
    /// <summary>
    /// Required. The name of the database where the table resides.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dbName")]
    public string? DbName { get; init; }

    /// <summary>
    /// Required. The name of the table to be moved.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tableName")]
    public string? TableName { get; init; }

    /// <summary>
    /// Required. The name of the database where the table should be moved.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destinationDbName")]
    public string? DestinationDbName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
