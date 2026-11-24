using System.Text.Json.Serialization;
using CompSniper.Core.Models;
using CompSniper.Models.AnyOf;
using CompSniper.Models.Enums;

namespace CompSniper.Models;

public record ItemCompSniperMarketplaceAndShippingMercariApi
{
    [JsonPropertyName("itemId")]
    public required string ItemId { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Dollars, 2 decimal places
    /// </summary>
    [JsonPropertyName("price")]
    public required string Price { get; init; }

    [JsonPropertyName("currency")]
    public string Currency { get; } = "USD";

    [JsonPropertyName("originalPrice")]
    public required string? OriginalPrice { get; init; }

    [JsonPropertyName("condition")]
    public required string? Condition { get; init; }

    [JsonPropertyName("conditionId")]
    public required double? ConditionId { get; init; }

    [JsonPropertyName("status")]
    public required StatusCompSniperMarketplaceAndShippingMercariApi Status { get; init; }

    [JsonPropertyName("imageUrl")]
    public required string? ImageUrl { get; init; }

    [JsonPropertyName("thumbnailUrl")]
    public required string? ThumbnailUrl { get; init; }

    [JsonPropertyName("sellerId")]
    public required SellerId SellerId { get; init; }

    [JsonPropertyName("brand")]
    public required string? Brand { get; init; }

    [JsonPropertyName("categoryId")]
    public required double? CategoryId { get; init; }

    [JsonPropertyName("categoryName")]
    public required string? CategoryName { get; init; }

    [JsonPropertyName("marketplace")]
    public string Marketplace { get; } = "mercari";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
