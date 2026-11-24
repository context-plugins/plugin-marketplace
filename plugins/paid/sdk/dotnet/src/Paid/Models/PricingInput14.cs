using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

/// <summary>
/// SeatBasedPrepaidCredits variant
/// </summary>
public record PricingInput14
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
    public required PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency BillingFrequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingFrequencyCustomMonths")]
    public int? BillingFrequencyCustomMonths { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingType")]
    public PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType? BillingType { get; init; } = PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType.Advance;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pricePoints")]
    public IReadOnlyList<SimplePricePoint>? PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
