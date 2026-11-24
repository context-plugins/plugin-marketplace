using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// RecurringGraduated variant
/// </summary>
public record ProductPricingInput1
{
    /// <summary>
    /// Discriminator value: RecurringGraduated
    /// </summary>
    [JsonPropertyName("pricingType")]
    public string PricingType { get; } = "RecurringGraduated";

    [JsonPropertyName("billingFrequency")]
    public required ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingFrequency BillingFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public int? BillingFrequencyCustomMonths { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingType? BillingType { get; init; } = ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingType.Advance;

    [JsonPropertyName("pricePoints")]
    public required IReadOnlyList<ProductTieredPricePoint> PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
