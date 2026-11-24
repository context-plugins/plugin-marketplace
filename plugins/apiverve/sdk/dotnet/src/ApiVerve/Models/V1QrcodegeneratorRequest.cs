using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1QrcodegeneratorRequest
{
    /// <summary>
    /// The text or data to encode in the QR code
    /// </summary>
    [JsonPropertyName("value")]
    public required string Value { get; init; }

    /// <summary>
    /// The type of data being encoded. Advanced types (wifi, vcard) are premium.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// Output format. Vector formats (svg, webp) are premium.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("format")]
    public string? Format { get; init; }

    /// <summary>
    /// Size of the QR code in pixels (50-2048)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    public double? Size { get; init; }

    /// <summary>
    /// Margin around the QR code in pixels (0-100)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("margin")]
    public double? Margin { get; init; }

    /// <summary>
    /// Foreground color as hex code (e.g., #000000)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("color")]
    public string? Color { get; init; }

    /// <summary>
    /// Background color as hex code (e.g., #ffffff)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("backgroundColor")]
    public string? BackgroundColor { get; init; }

    /// <summary>
    /// Style of QR code dots
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dotStyle")]
    public string? DotStyle { get; init; }

    /// <summary>
    /// Style of corner squares
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cornerSquareStyle")]
    public string? CornerSquareStyle { get; init; }

    /// <summary>
    /// Style of corner dots
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cornerDotStyle")]
    public string? CornerDotStyle { get; init; }

    /// <summary>
    /// Gradient configuration with type (linear, radial) and colorStops array
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gradient")]
    public string? Gradient { get; init; }

    /// <summary>
    /// URL of logo image to place in center of QR code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logo")]
    public string? Logo { get; init; }

    /// <summary>
    /// Size of logo relative to QR code (0.1-0.5)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logoSize")]
    public double? LogoSize { get; init; }

    /// <summary>
    /// Margin around logo in pixels
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logoMargin")]
    public double? LogoMargin { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
