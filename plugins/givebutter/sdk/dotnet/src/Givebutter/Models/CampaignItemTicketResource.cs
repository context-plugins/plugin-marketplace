using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record CampaignItemTicketResource
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("campaign_id")]
    public required string CampaignId { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonPropertyName("price")]
    public required string Price { get; init; }

    [JsonPropertyName("total_quantity")]
    public required string TotalQuantity { get; init; }

    [JsonPropertyName("subtype")]
    public required string Subtype { get; init; }

    [JsonPropertyName("active")]
    public required string Active { get; init; }

    [JsonPropertyName("retail_price")]
    public required string RetailPrice { get; init; }

    [JsonPropertyName("bundle_only")]
    public required string BundleOnly { get; init; }

    [JsonPropertyName("hide_remaining")]
    public required string HideRemaining { get; init; }

    [JsonPropertyName("scope")]
    public required string Scope { get; init; }

    [JsonPropertyName("bundles")]
    public required string Bundles { get; init; }

    [JsonPropertyName("custom_fields")]
    public required string CustomFields { get; init; }

    [JsonPropertyName("pictures")]
    public required string Pictures { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
