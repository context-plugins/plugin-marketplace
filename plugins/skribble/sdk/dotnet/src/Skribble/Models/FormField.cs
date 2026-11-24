using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

/// <summary>
/// Use a form field only.
/// </summary>
public record FormField
{
    /// <summary>
    /// Name of the form field in which the signature is placed. If multiple fields of this name are present in the document, all will be used.
    /// </summary>
    [JsonPropertyName("form_field")]
    public required string FormFieldValue { get; init; }

    /// <summary>
    /// Optional text to display inside the form field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public Text? Text { get; init; }

    /// <summary>
    /// Visual signature image.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image")]
    public VisualSignatureImage? Image { get; init; }

    /// <summary>
    /// Must not be provided when form_field is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("position")]
    public object? Position { get; init; }

    /// <summary>
    /// Must not be provided when form_field is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("positions")]
    public object? Positions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
