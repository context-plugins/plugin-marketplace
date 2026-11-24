using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Models.Enums;

namespace UiPath.Models;

/// <summary>
/// A single field comparison condition in a query
/// </summary>
public record QueryFilter
{
    /// <summary>
    /// Name of the entity field to filter on
    /// </summary>
    [JsonPropertyName("fieldName")]
    public required string FieldName { get; init; }

    /// <summary>
    /// Comparison operator for the filter condition
    /// </summary>
    [JsonPropertyName("operator")]
    public required Operator Operator { get; init; }

    /// <summary>
    /// Value to compare against; type depends on the field type
    /// </summary>
    [JsonPropertyName("value")]
    public required object Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
