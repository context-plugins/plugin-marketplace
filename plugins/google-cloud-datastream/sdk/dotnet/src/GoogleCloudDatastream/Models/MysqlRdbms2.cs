using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// The MySQL objects to exclude from the stream.
/// </summary>
public record MysqlRdbms2
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
