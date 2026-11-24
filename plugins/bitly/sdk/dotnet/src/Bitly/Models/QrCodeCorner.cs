using System.Text.Json.Serialization;
using Bitly.Core.Models;
using Bitly.Models.Enums;

namespace Bitly.Models;

/// <summary>
/// Represents one corner, both inner and outer, of a QR code, with color and shape values
/// </summary>
public record QrCodeCorner
{
    /// <summary>
    /// The inner color of a corner of the QR code in hex code format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inner_color")]
    public string? InnerColor { get; init; }

    /// <summary>
    /// The outer color of a corner of the QR code in hex code format
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outer_color")]
    public string? OuterColor { get; init; }

    /// <summary>
    /// The shape one of the QR code's corners should take
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shape")]
    public Shape? Shape { get; init; } = Shape.Standard;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
