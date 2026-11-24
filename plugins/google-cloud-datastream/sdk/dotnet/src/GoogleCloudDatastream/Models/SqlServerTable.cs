using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// SQLServer table.
/// </summary>
public record SqlServerTable
{
    /// <summary>
    /// SQLServer columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("columns")]
    public IReadOnlyList<SqlServerColumn>? Columns { get; init; }

    /// <summary>
    /// The table name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("table")]
    public string? Table { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
