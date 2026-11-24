using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Spanner table.
/// </summary>
public record SpannerTable
{
    /// <summary>
    /// Required. The table name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("table")]
    public string? Table { get; init; }

    /// <summary>
    /// Optional. Spanner columns in the table.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("columns")]
    public IReadOnlyList<SpannerColumn>? Columns { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
