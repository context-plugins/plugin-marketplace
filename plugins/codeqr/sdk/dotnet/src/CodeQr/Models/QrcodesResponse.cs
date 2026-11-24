using System.Text.Json.Serialization;
using CodeQr.Core.Models;

namespace CodeQr.Models;

public record QrcodesResponse
{
    /// <summary>
    /// The ID of the QR Code.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
