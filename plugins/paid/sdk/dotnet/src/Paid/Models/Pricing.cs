using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record Pricing
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventName")]
    public string? EventName { get; init; }

    [JsonPropertyName("taxable")]
    public required bool Taxable { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditCost")]
    public double? CreditCost { get; init; }

    [JsonPropertyName("chargeType")]
    public required ChargeType ChargeType { get; init; }

    [JsonPropertyName("pricingModel")]
    public required PricingModelType PricingModel { get; init; }

    [JsonPropertyName("billingFrequency")]
    public required BillingFrequency BillingFrequency { get; init; }

    [JsonPropertyName("pricePoints")]
    public required IReadOnlyDictionary<string, AgentPricePoint> PricePoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
