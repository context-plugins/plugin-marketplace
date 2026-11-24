using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CustomerState
{
    [JsonPropertyName("customer")]
    public required CustomerStateCustomer Customer { get; init; }

    /// <summary>
    /// ISO 4217 currency code, for example USD, EUR, or GBP.
    /// </summary>
    [JsonPropertyName("defaultCurrency")]
    public required string DefaultCurrency { get; init; }

    [JsonPropertyName("orders")]
    public required IReadOnlyList<CustomerStateOrder> Orders { get; init; }

    [JsonPropertyName("seats")]
    public required CustomerStateSeats Seats { get; init; }

    [JsonPropertyName("checkoutLinks")]
    public required IReadOnlyList<CustomerStateCheckoutLink> CheckoutLinks { get; init; }

    [JsonPropertyName("credits")]
    public required CustomerStateCreditSummary Credits { get; init; }

    [JsonPropertyName("timestamp")]
    public required DateTimeOffset Timestamp { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
