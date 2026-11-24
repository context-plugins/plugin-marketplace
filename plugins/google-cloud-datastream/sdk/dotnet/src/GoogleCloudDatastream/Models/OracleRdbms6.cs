using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Oracle data source objects to avoid backfilling.
/// </summary>
public record OracleRdbms6
{
    /// <summary>
    /// Oracle schemas/databases in the database server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oracleSchemas")]
    public IReadOnlyList<OracleSchema>? OracleSchemas { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
