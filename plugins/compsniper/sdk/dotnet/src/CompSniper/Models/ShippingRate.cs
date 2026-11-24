using System.Text.Json.Serialization;
using CompSniper.Core.Models;
using CompSniper.Core.Validation.Attributes;
using CompSniper.Models.Enums;

namespace CompSniper.Models;

public record ShippingRate
{
    [JsonPropertyName("carrierCode")]
    public required string CarrierCode { get; init; }

    [JsonPropertyName("serviceName")]
    public required string ServiceName { get; init; }

    [JsonPropertyName("serviceCode")]
    public required string ServiceCode { get; init; }

    [JsonPropertyName("serviceGroup")]
    public required string? ServiceGroup { get; init; }

    [JsonPropertyName("tracking")]
    public required bool Tracking { get; init; }

    [JsonPropertyName("estimatedDeliveryMinHours")]
    public required int? EstimatedDeliveryMinHours { get; init; }

    [JsonPropertyName("estimatedDeliveryMaxHours")]
    public required int? EstimatedDeliveryMaxHours { get; init; }

    [JsonPropertyName("includedCoverage")]
    public required string? IncludedCoverage { get; init; }

    /// <summary>
    /// True when this applicable service has the shortest maximum delivery window. Ties are allowed.
    /// </summary>
    [JsonPropertyName("fastest")]
    public required bool Fastest { get; init; }

    [JsonPropertyName("discountedPrice")]
    public required ShippingPrice? DiscountedPrice { get; init; }

    [JsonPropertyName("retailPrice")]
    public required ShippingPrice RetailPrice { get; init; }

    [JsonPropertyName("effectivePrice")]
    public required ShippingPrice EffectivePrice { get; init; }

    [JsonPropertyName("priceSource")]
    public required PriceSource PriceSource { get; init; }

    [JsonPropertyName("savingsPercent")]
    [Minimum(0)]
    public required int? SavingsPercent { get; init; }

    [JsonPropertyName("eligibility")]
    public required Eligibility Eligibility { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
