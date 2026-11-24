using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// RecurringGraduated variant
/// </summary>
public record PricingInput1
{
    /// <summary>
    /// Discriminator value: RecurringGraduated
    /// </summary>
    [JsonPropertyName("pricingType")]
    public string PricingType { get; } = "RecurringGraduated";

    [JsonPropertyName("billingFrequency")]
    public required PricingInputDiscriminatorMappingRecurringGraduatedBillingFrequency BillingFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public int? BillingFrequencyCustomMonths { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public PricingInputDiscriminatorMappingRecurringGraduatedBillingType? BillingType { get; init; } = PricingInputDiscriminatorMappingRecurringGraduatedBillingType.Advance;

    [JsonPropertyName("pricePoints")]
    public required IReadOnlyList<TieredPricePoint> PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
