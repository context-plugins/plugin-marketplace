using System.Text.Json.Serialization;
using CodeQr.Core.Models;
using CodeQr.Models.Enums;

namespace CodeQr.Models;

/// <summary>
/// Typographic styles applied to the frame label text. Object with optional keys: <c>weight</c> (<c>normal</c> | <c>bold</c>), <c>style</c> (<c>normal</c> | <c>italic</c>), <c>family</c> (<c>sans</c> | <c>sans-condensed</c> | <c>serif</c> | <c>serif-elegant</c> | <c>mono</c>), <c>size</c> (<c>s</c> | <c>m</c> | <c>l</c> | <c>xl</c>). Every field is enum-gated on write; omitted keys render with defaults.
/// </summary>
public record FrameTextStyles
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("weight")]
    public Weight? Weight { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("style")]
    public Style? Style { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("family")]
    public Family? Family { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    public Size? Size { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
