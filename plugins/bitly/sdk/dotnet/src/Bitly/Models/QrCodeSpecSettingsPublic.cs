using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

/// <summary>
/// The QR code's editable spec settings, which for now is just the error correction
/// </summary>
public record QrCodeSpecSettingsPublic
{
    /// <summary>
    /// The amount of error correction that the QR code was generated with
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error_correction")]
    public int? ErrorCorrection { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
