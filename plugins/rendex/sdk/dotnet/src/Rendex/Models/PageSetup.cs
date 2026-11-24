using System.Text.Json.Serialization;
using Rendex.Core.Models;
using Rendex.Core.Validation.Attributes;
using Rendex.Models.Enums;

namespace Rendex.Models;

/// <summary>
/// Optional paper/viewport setup for the PDF and PNG.
/// </summary>
public record PageSetup
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    public Size? Size { get; init; } = Size.A4;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("orientation")]
    public Orientation? Orientation { get; init; } = Orientation.Portrait;

    /// <summary>
    /// PDF page margins as CSS values (e.g. '1cm', '24px').
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("margin")]
    public Margin? Margin { get; init; }

    /// <summary>
    /// PDF render scale (0.1–2). Default 1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scale")]
    [Minimum(0.1)]
    [Maximum(2.0)]
    public double? Scale { get; init; }

    /// <summary>
    /// PNG viewport width in px. Default 1280.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("width")]
    [Minimum(320)]
    [Maximum(3840)]
    public int? Width { get; init; }

    /// <summary>
    /// PNG viewport height in px. Default 800.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("height")]
    [Minimum(240)]
    [Maximum(2160)]
    public int? Height { get; init; }

    /// <summary>
    /// Capture the full scrollable page for the PNG. Default true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fullPage")]
    public bool? FullPage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
