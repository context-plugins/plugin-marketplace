using System.Collections.Generic;
using System.Text.Json.Serialization;
using CompSniper.Core.Models;

namespace CompSniper.Models;

public record V1MercariResponse
{
    [JsonPropertyName("keyword")]
    public required string Keyword { get; init; }

    [JsonPropertyName("page")]
    public required double Page { get; init; }

    [JsonPropertyName("count")]
    public required double Count { get; init; }

    [JsonPropertyName("totalResults")]
    public required double TotalResults { get; init; }

    [JsonPropertyName("totalItems")]
    public required double TotalItems { get; init; }

    [JsonPropertyName("hasNextPage")]
    public required bool HasNextPage { get; init; }

    [JsonPropertyName("items")]
    public required IReadOnlyList<ItemCompSniperMarketplaceAndShippingMercariApi> Items { get; init; }

    [JsonPropertyName("marketplace")]
    public string Marketplace { get; } = "mercari";

    [JsonPropertyName("scrapedAt")]
    public required string ScrapedAt { get; init; }

    [JsonPropertyName("summary")]
    public required PriceSummary? Summary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
