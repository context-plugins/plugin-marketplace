using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// The SQLServer objects to include in the stream.
/// </summary>
public record SqlServerRdbms3
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
