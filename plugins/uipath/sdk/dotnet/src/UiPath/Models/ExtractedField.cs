using System.Text.Json.Serialization;
using UiPath.Core.Models;

namespace UiPath.Models;

/// <summary>
/// A single extracted field with its value and confidence metadata
/// </summary>
public record ExtractedField
{
    /// <summary>
    /// Identifier of the extracted field as defined in the extractor schema
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FieldId")]
    public string? FieldId { get; init; }

    /// <summary>
    /// Display name of the extracted field
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FieldName")]
    public string? FieldName { get; init; }

    /// <summary>
    /// Whether the field was not found in the document
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IsMissing")]
    public bool? IsMissing { get; init; }

    /// <summary>
    /// The extracted value with confidence and source reference
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Value")]
    public FieldValue? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
