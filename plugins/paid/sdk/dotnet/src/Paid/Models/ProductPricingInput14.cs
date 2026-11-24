using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// SeatBasedPrepaidCredits variant
/// </summary>
public record ProductPricingInput14
{
    /// <summary>
    /// Discriminator value: SeatBasedPrepaidCredits
    /// </summary>
    [JsonPropertyName("pricingType")]
    public string PricingType { get; } = "SeatBasedPrepaidCredits";

    [JsonPropertyName("creditsCurrencyId")]
    public required string CreditsCurrencyId { get; init; }

    [JsonPropertyName("creditCost")]
    public required double CreditCost { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unitValue")]
    public double? UnitValue { get; init; }

    [JsonPropertyName("billingFrequency")]
    public required ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency BillingFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public int? BillingFrequencyCustomMonths { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType? BillingType { get; init; } = ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType.Advance;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pricePoints")]
    public IReadOnlyList<ProductSimplePricePoint>? PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
