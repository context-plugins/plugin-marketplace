using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Represents a filter for included data on a stream object.
/// </summary>
public record EventFilter
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
