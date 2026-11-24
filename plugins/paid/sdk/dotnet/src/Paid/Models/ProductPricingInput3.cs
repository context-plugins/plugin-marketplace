using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// RecurringPercentOfTotal variant
/// </summary>
public record ProductPricingInput3
{
    /// <summary>
    /// Discriminator value: RecurringPercentOfTotal
    /// </summary>
    [JsonPropertyName("pricingType")]
    public string PricingType { get; } = "RecurringPercentOfTotal";

    [JsonPropertyName("percentageValue")]
    public required double PercentageValue { get; init; }

    [JsonPropertyName("billingFrequency")]
    public required ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingFrequency BillingFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public int? BillingFrequencyCustomMonths { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType? BillingType { get; init; } = ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType.Advance;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pricePoints")]
    public IReadOnlyList<ProductSimplePricePoint>? PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
