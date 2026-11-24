using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CustomerStateCreditBalance
{
    [JsonPropertyName("creditsCurrencyId")]
    public required string CreditsCurrencyId { get; init; }

    [JsonPropertyName("currencyName")]
    public required string CurrencyName { get; init; }

    [JsonPropertyName("currencyKey")]
    public required string CurrencyKey { get; init; }

    [JsonPropertyName("balance")]
    public required double Balance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
