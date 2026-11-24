using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// RecurringVolume variant
/// </summary>
public record PricingInput2
{
    /// <summary>
    /// Discriminator value: RecurringVolume
    /// </summary>
    [JsonPropertyName("pricingType")]
    public string PricingType { get; } = "RecurringVolume";

    [JsonPropertyName("billingFrequency")]
    public required PricingInputDiscriminatorMappingRecurringVolumeBillingFrequency BillingFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public int? BillingFrequencyCustomMonths { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public PricingInputDiscriminatorMappingRecurringVolumeBillingType? BillingType { get; init; } = PricingInputDiscriminatorMappingRecurringVolumeBillingType.Advance;

    [JsonPropertyName("pricePoints")]
    public required IReadOnlyList<TieredPricePoint> PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
