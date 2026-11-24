using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// RecurringPerUnit variant
/// </summary>
public record ProductPricingInput
{
    /// <summary>
    /// Discriminator value: RecurringPerUnit
    /// </summary>
    [JsonPropertyName("pricingType")]
    public string PricingType { get; } = "RecurringPerUnit";

    [JsonPropertyName("billingFrequency")]
    public required ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingFrequency BillingFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public int? BillingFrequencyCustomMonths { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingType? BillingType { get; init; } = ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingType.Advance;

    [JsonPropertyName("pricePoints")]
    public required IReadOnlyList<ProductSimplePricePoint> PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
