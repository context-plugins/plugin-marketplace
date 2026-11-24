using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record BillingExplainerServiceSummary
{
    [JsonPropertyName("serviceCharges")]
    public required IReadOnlyList<BillingExplainerCostLineItem> ServiceCharges { get; init; }

    [JsonPropertyName("marketplaceCharges")]
    public required IReadOnlyList<BillingExplainerCostLineItem> MarketplaceCharges { get; init; }

    [JsonPropertyName("discounts")]
    public required IReadOnlyList<BillingExplainerCostLineItem> Discounts { get; init; }

    [JsonPropertyName("tax")]
    public required IReadOnlyList<BillingExplainerCostLineItem> Tax { get; init; }

    [JsonPropertyName("supportCharges")]
    public required BillingExplainerSupportCharges SupportCharges { get; init; }

    [JsonPropertyName("credits")]
    public required IReadOnlyList<BillingExplainerCostLineItem> Credits { get; init; }

    [JsonPropertyName("savings")]
    public required IReadOnlyList<BillingExplainerCostLineItem> Savings { get; init; }

    [JsonPropertyName("otherCharges")]
    public required IReadOnlyList<BillingExplainerCostLineItem> OtherCharges { get; init; }

    [JsonPropertyName("refunds")]
    public required IReadOnlyList<BillingExplainerCostLineItem> Refunds { get; init; }

    /// <summary>
    /// Monetary value represented as a decimal string and an ISO 4217 currency code.
    /// </summary>
    [JsonPropertyName("total")]
    public required BillingExplainerMoney Total { get; init; }
}
