using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// SQLServer data source objects to avoid backfilling
/// </summary>
public record SqlServerRdbms6
{
    /// <summary>
    /// SQLServer schemas in the database server.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schemas")]
    public IReadOnlyList<SqlServerSchema>? Schemas { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
