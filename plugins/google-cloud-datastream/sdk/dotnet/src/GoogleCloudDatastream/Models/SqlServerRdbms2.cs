using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Optional. SQLServer RDBMS to enrich with child data objects and metadata.
/// </summary>
public record SqlServerRdbms2
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
