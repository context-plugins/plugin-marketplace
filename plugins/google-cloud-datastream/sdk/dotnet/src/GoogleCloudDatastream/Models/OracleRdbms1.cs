using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Enriched Oracle RDBMS object.
/// </summary>
public record OracleRdbms1
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
