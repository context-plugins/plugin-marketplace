using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

/// <summary>
/// Wraps the image data for a QR code.
/// </summary>
public record PublicQrCodeImageResponse
{
    /// <summary>
    /// The stringified data for the QR code's image
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("qr_code_image")]
    public string? QrCodeImage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
