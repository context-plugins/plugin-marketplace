using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record BillingExplainerSupportCharges
{
    /// <summary>
    /// Monetary value represented as a decimal string and an ISO 4217 currency code.
    /// </summary>
    [JsonPropertyName("cost")]
    public required BillingExplainerMoney Cost { get; init; }

    [JsonPropertyName("details")]
    public required IReadOnlyList<BillingExplainerSupportDetail> Details { get; init; }
}
