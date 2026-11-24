using System.Collections.Generic;
using System.Text.Json.Serialization;
using CompSniper.Core.Models;

namespace CompSniper.Models;

public record V1PoshmarkSoldResponse
{
    [JsonPropertyName("keyword")]
    public required string Keyword { get; init; }

    /// <summary>
    /// Current page number
    /// </summary>
    [JsonPropertyName("page")]
    public required double Page { get; init; }

    /// <summary>
    /// Number of items returned in this response (up to 48)
    /// </summary>
    [JsonPropertyName("totalItems")]
    public required double TotalItems { get; init; }

    /// <summary>
    /// Whether more pages of results are available.
    /// </summary>
    [JsonPropertyName("hasNextPage")]
    public required bool HasNextPage { get; init; }

    [JsonPropertyName("items")]
    public required IReadOnlyList<ItemCompSniperMarketplaceAndShippingPoshmarkApi> Items { get; init; }

    [JsonPropertyName("summary")]
    public required PriceSummary? Summary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
