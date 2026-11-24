using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

public record Error402
{
    /// <summary>
    /// <c>insufficient_tokens</c>: the request's price is above the account's balance. Nothing was served or spent. The message names the price, the balance and the reset, and two fixes: add filters, or (plan <c>business</c>) talk to us about Enterprise at https://oddsrelay.io/contact, or (a custom plan) talk to us about raising your allowance at https://oddsrelay.io/contact, or (every other plan) upgrade. No <c>Retry-After</c>.
    /// </summary>
    [JsonPropertyName("error")]
    public required Error7 Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
