using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

public record QrCodeBranding
{
    /// <summary>
    /// A boolean that determines if the QR code should have the bitly brand in its bottom right corner
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bitly_brand")]
    public bool? BitlyBrand { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
