using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// PostgreSQL table.
/// </summary>
public record PostgresqlTable
{
    /// <summary>
    /// The table name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("table")]
    public string? Table { get; init; }

    /// <summary>
    /// PostgreSQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postgresqlColumns")]
    public IReadOnlyList<PostgresqlColumn>? PostgresqlColumns { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
