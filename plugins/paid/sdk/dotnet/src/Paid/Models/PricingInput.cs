using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// RecurringPerUnit variant
/// </summary>
public record PricingInput
{
    /// <summary>
    /// Discriminator value: RecurringPerUnit
    /// </summary>
    [JsonPropertyName("pricingType")]
    public string PricingType { get; } = "RecurringPerUnit";

    [JsonPropertyName("billingFrequency")]
    public required PricingInputDiscriminatorMappingRecurringPerUnitBillingFrequency BillingFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public int? BillingFrequencyCustomMonths { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public PricingInputDiscriminatorMappingRecurringPerUnitBillingType? BillingType { get; init; } = PricingInputDiscriminatorMappingRecurringPerUnitBillingType.Advance;

    [JsonPropertyName("pricePoints")]
    public required IReadOnlyList<SimplePricePoint> PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
