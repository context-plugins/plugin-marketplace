using System.Text.Json.Serialization;
using CompSniper.Models.Enums;

namespace CompSniper.Models;

public record ShippingRateRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ebaySite")]
    public EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi? EbaySite { get; init; } = EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi.EbayCom;

    [JsonPropertyName("shipFrom")]
    public required ShipFrom ShipFrom { get; init; }

    [JsonPropertyName("shipTo")]
    public required ShipTo ShipTo { get; init; }

    [JsonPropertyName("package")]
    public required Package Package { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contents")]
    public Contents? Contents { get; init; }
}
