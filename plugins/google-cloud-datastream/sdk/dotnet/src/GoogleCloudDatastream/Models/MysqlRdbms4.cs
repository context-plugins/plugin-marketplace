using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Optional. MySQL RDBMS to enrich with child data objects and metadata.
/// </summary>
public record MysqlRdbms4
{
    /// <summary>
    /// Mysql databases on the server
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mysqlDatabases")]
    public IReadOnlyList<MysqlDatabase>? MysqlDatabases { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
