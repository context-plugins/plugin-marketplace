using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Core.Validation.Attributes;
using UiPath.Models.Enums;

namespace UiPath.Models;

/// <summary>
/// The extracted value with confidence and source reference
/// </summary>
public record FieldValue
{
    /// <summary>
    /// Extracted value, which may be a string, number, or object depending on field type
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Value")]
    public object? Value { get; init; }

    /// <summary>
    /// Confidence score for the extracted value (0.0 to 1.0)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Confidence")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? Confidence { get; init; }

    /// <summary>
    /// OCR confidence score for the text underlying this value
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OcrConfidence")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? OcrConfidence { get; init; }

    /// <summary>
    /// Whether the source text was printed or handwritten
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TextType")]
    public TextType? TextType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
