using System.Text.Json.Serialization;

namespace DoiT.Models;

public record BillingExplainerCostLineItem
{
    [JsonPropertyName("costType")]
    public required string CostType { get; init; }

    /// <summary>
    /// Monetary value represented as a decimal string and an ISO 4217 currency code.
    /// </summary>
    [JsonPropertyName("cost")]
    public required BillingExplainerMoney Cost { get; init; }
}
