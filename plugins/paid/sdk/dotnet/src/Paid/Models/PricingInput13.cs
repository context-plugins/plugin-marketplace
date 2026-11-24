using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// SeatBasedVolume variant
/// </summary>
public record PricingInput13
{
    /// <summary>
    /// Discriminator value: SeatBasedVolume
    /// </summary>
    [JsonPropertyName("pricingType")]
    public string PricingType { get; } = "SeatBasedVolume";

    [JsonPropertyName("billingFrequency")]
    public required PricingInputDiscriminatorMappingSeatBasedVolumeBillingFrequency BillingFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public int? BillingFrequencyCustomMonths { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public PricingInputDiscriminatorMappingSeatBasedVolumeBillingType? BillingType { get; init; } = PricingInputDiscriminatorMappingSeatBasedVolumeBillingType.Advance;

    [JsonPropertyName("pricePoints")]
    public required IReadOnlyList<TieredPricePoint> PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
