using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record PromotionCode
{
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    [JsonPropertyName("coupon")]
    public required Coupon1 Coupon { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
