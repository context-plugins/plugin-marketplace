using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

/// <summary>
/// Response containing a generated static QR code image.
/// </summary>
public record PublicStaticQrCodeResponse
{
    /// <summary>
    /// The image data, base64-encoded. Format is SVG or PNG depending on the requested format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image")]
    public string? Image { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
