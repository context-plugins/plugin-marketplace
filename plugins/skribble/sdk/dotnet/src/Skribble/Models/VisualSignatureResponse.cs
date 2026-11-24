using System.Collections.Generic;
using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

/// <summary>
/// Visual signature placement information.
/// </summary>
public record VisualSignatureResponse
{
    /// <summary>
    /// Visual signature image.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image")]
    public VisualSignatureImage? Image { get; init; }

    /// <summary>
    /// Position where the signature should appear.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("position")]
    public VisualSignaturePosition1? Position { get; init; }

    /// <summary>
    /// List of additional positions where the signature should appear.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("positions")]
    public IReadOnlyList<VisualSignaturePosition>? Positions { get; init; }

    /// <summary>
    /// Name of the form field in which the signature is placed. If multiple fields of this name are present in the document, all will be used. Takes precedence before positions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("form_field")]
    public string? FormField { get; init; }

    /// <summary>
    /// Text displayed inside the form field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public TextSkribbleSignatureApi? Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
