using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// SQLServer schema.
/// </summary>
public record SqlServerSchema
{
    /// <summary>
    /// The schema name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schema")]
    public string? Schema { get; init; }

    /// <summary>
    /// Tables in the schema.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tables")]
    public IReadOnlyList<SqlServerTable>? Tables { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
