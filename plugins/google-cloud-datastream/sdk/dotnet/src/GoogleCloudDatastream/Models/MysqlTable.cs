using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// MySQL table.
/// </summary>
public record MysqlTable
{
    /// <summary>
    /// The table name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("table")]
    public string? Table { get; init; }

    /// <summary>
    /// MySQL columns in the database. When unspecified as part of include/exclude objects, includes/excludes everything.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mysqlColumns")]
    public IReadOnlyList<MysqlColumn>? MysqlColumns { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
