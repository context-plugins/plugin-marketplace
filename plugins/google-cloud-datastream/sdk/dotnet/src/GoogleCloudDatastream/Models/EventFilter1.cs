using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Optional. Optional event filter. If not set, or empty, the backfill will be performed on the entire object. This is currently used for partial backfill and only supported for SQL sources.
/// </summary>
public record EventFilter1
{
    /// <summary>
    /// An SQL-query Where clause selecting which data should be included, not including the "WHERE" keyword. e.g., <c>t.key1 = 'value1' AND t.key2 = 'value2'</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sqlWhereClause")]
    public string? SqlWhereClause { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
