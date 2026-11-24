using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

public record Line
{
    [JsonPropertyName("action")]
    public required ActionBundleSocialCreditApi Action { get; init; }

    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonPropertyName("unitAmountMicros")]
    public required int UnitAmountMicros { get; init; }

    [JsonPropertyName("amountMicros")]
    public required int AmountMicros { get; init; }

    [JsonPropertyName("amountCents")]
    public required int AmountCents { get; init; }

    [JsonPropertyName("currency")]
    public string Currency { get; } = "usd";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
