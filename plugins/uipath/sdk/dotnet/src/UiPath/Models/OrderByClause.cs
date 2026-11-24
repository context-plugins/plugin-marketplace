using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// Sort specification for query results
/// </summary>
public record OrderByClause
{
    /// <summary>
    /// Name of the field to sort by
    /// </summary>
    [JsonPropertyName("fieldName")]
    public required string FieldName { get; init; }

    /// <summary>
    /// Whether to sort in descending order
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("descending")]
    public bool? Descending { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
