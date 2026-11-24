using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Oracle table.
/// </summary>
public record OracleTable
{
    /// <summary>
    /// Oracle columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oracleColumns")]
    public IReadOnlyList<OracleColumn>? OracleColumns { get; init; }

    /// <summary>
    /// The table name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("table")]
    public string? Table { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
