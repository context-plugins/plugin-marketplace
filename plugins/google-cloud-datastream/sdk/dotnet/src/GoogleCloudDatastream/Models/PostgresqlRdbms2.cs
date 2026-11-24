using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Optional. PostgreSQL RDBMS to enrich with child data objects and metadata.
/// </summary>
public record PostgresqlRdbms2
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
