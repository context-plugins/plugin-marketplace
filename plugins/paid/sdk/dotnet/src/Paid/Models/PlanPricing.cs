using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// The pricing configuration for a plan. Uses the same PricePoints structure as product pricing.
/// </summary>
public record PlanPricing
{
    /// <summary>
    /// Price points keyed by currency code (e.g., "USD", "EUR")
    /// </summary>
    [JsonPropertyName("PricePoints")]
    public required IReadOnlyDictionary<string, PricePoint> PricePoints { get; init; }

    /// <summary>
    /// The billing frequency for the plan
    /// </summary>
    [JsonPropertyName("billingFrequency")]
    public required PlanPricingBillingFrequency BillingFrequency { get; init; }

    /// <summary>
    /// Custom billing frequency in months (when billingFrequency is "custom")
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public double? BillingFrequencyCustomMonths { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
