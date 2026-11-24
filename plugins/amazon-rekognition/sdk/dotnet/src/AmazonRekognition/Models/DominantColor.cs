using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DominantColor
{
    /// <summary>
    /// The Red RGB value for a dominant color.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Red")]
    public int? Red { get; init; }

    /// <summary>
    /// The Blue RGB value for a dominant color.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Blue")]
    public int? Blue { get; init; }

    /// <summary>
    /// The Green RGB value for a dominant color.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Green")]
    public int? Green { get; init; }

    /// <summary>
    /// The Hex code equivalent of the RGB values for a dominant color.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HexCode")]
    public string? HexCode { get; init; }

    /// <summary>
    /// The CSS color name of a dominant color.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CSSColor")]
    public string? CssColor { get; init; }

    /// <summary>
    /// One of 12 simplified color names applied to a dominant color.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SimplifiedColor")]
    public string? SimplifiedColor { get; init; }

    /// <summary>
    /// The percentage of image pixels that have a given dominant color.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PixelPercent")]
    public double? PixelPercent { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
