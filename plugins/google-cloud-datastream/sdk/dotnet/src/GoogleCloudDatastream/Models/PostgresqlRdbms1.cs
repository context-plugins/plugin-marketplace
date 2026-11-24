using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Enriched PostgreSQL RDBMS object.
/// </summary>
public record PostgresqlRdbms1
{
    /// <summary>
    /// PostgreSQL schemas in the database server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postgresqlSchemas")]
    public IReadOnlyList<PostgresqlSchema>? PostgresqlSchemas { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
