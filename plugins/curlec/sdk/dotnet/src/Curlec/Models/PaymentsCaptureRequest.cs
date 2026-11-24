using System.Text.Json.Serialization;
using Curlec.Core.Models;

namespace Curlec.Models;

public record PaymentsCaptureRequest
{
    /// <summary>
    /// Amount to capture in paise. Must equal authorized amount unless partial capture is enabled.
    /// </summary>
    [JsonPropertyName("amount")]
    public required int Amount { get; init; }

    [JsonPropertyName("currency")]
    public string Currency { get; init; } = "INR";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
