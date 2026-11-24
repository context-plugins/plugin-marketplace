using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// Pricing configuration for a plan attribute. Money amounts are expressed in cents.
/// </summary>
public record PlanPricing1
{
    [JsonPropertyName("pricingType")]
    public required PlanPricingPricingType PricingType { get; init; }

    [JsonPropertyName("chargeType")]
    public required string ChargeType { get; init; }

    [JsonPropertyName("pricingModel")]
    public required string PricingModel { get; init; }

    [JsonPropertyName("pricePoints")]
    public required IReadOnlyList<object> PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
