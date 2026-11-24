using System.Text.Json.Serialization;
using Bitly.Core.Models;
using Bitly.Models.Enums;

namespace Bitly.Models;

/// <summary>
/// Options for customizing a QR Code's appearance
/// </summary>
public record QrCodeCustomizationsPublic
{
    /// <summary>
    /// The QR code's background color in hex code format with values for alpha channel
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("background_color")]
    public string? BackgroundColor { get; init; }

    /// <summary>
    /// The QR code's dot pattern color in hex code format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dot_pattern_color")]
    public string? DotPatternColor { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dot_pattern_type")]
    public QrCodeDotPatternType? DotPatternType { get; init; } = QrCodeDotPatternType.Standard;

    /// <summary>
    /// An object representing all three corners of the QR code. The corners corresponding to each property are: corner_1 = top left, corner_2 = top right, and corner_3 = bottom right
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("corners")]
    public QrCodeCorners? Corners { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gradient")]
    public QrCodeGradient? Gradient { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("background_gradient")]
    public QrCodeGradient? BackgroundGradient { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logo")]
    public QrCodeLogoPublic? Logo { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("frame")]
    public QrCodeFrameRequest? Frame { get; init; }

    /// <summary>
    /// Contains the center, top, and bottom text to be used in the QR code
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public QrCodeText? Text { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("branding")]
    public QrCodeBranding? Branding { get; init; }

    /// <summary>
    /// The QR code's editable spec settings, which for now is just the error correction
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spec_settings")]
    public QrCodeSpecSettingsPublic? SpecSettings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
