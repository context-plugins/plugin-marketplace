using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record PaymentInstrumentAddAddressForGoogleOrApplePay
{
    [JsonPropertyName("address")]
    public required Address Address { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
