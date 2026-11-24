using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

/// <summary>
/// An object representing all three corners of the QR code. The corners corresponding to each property are: corner_1 = top left, corner_2 = top right, and corner_3 = bottom right
/// </summary>
public record QrCodeCorners
{
    /// <summary>
    /// Represents one corner, both inner and outer, of a QR code, with color and shape values
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("corner_1")]
    public QrCodeCorner? Corner1 { get; init; }

    /// <summary>
    /// Represents one corner, both inner and outer, of a QR code, with color and shape values
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("corner_2")]
    public QrCodeCorner? Corner2 { get; init; }

    /// <summary>
    /// Represents one corner, both inner and outer, of a QR code, with color and shape values
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("corner_3")]
    public QrCodeCorner? Corner3 { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
