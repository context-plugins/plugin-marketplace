using System.Text.Json.Serialization;
using CodeQr.Models.Enums;

namespace CodeQr.Models;

/// <summary>
/// Typographic styles applied to the frame label text. Every key is enum-gated — unknown keys or out-of-enum values are rejected to prevent SVG attribute injection. All fields are optional; omitted keys fall back to the default (normal weight, normal style, sans family, medium size).
/// </summary>
public record FrameTextStyles1
{
    /// <summary>
    /// Font weight of the frame label text. <c>bold</c> renders at SVG <c>font-weight="700"</c>, <c>normal</c> at <c>400</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("weight")]
    public Weight1? Weight { get; init; }

    /// <summary>
    /// Font style of the frame label text. <c>italic</c> applies <c>font-style="italic"</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("style")]
    public Style1? Style { get; init; }

    /// <summary>
    /// Font family used for the frame label text. <c>sans</c> = Arial / Helvetica (default). <c>sans-condensed</c> = Arial Narrow. <c>serif</c> = Georgia / Times New Roman. <c>serif-elegant</c> = Palatino Linotype / Book Antiqua. <c>mono</c> = Courier New. Values resolve to safe system font stacks on the rendered SVG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("family")]
    public Family1? Family { get; init; }

    /// <summary>
    /// Font size preset for the frame label. <c>s</c> = 60 viewBox units, <c>m</c> = 89.1 (default), <c>l</c> = 120, <c>xl</c> = 150. Larger sizes grow the frame bar vertically to fit. Extremely long text auto-shrinks to keep within 4 lines (floor 48).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    public Size1? Size { get; init; }
}
