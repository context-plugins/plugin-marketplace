using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

/// <summary>
/// Request to redirect a QRCode
/// </summary>
public record RedirectQrCodeRequest
{
    [JsonPropertyName("long_url")]
    public required string LongUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
