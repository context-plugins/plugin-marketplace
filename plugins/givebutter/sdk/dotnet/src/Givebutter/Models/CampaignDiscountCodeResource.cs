using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record CampaignDiscountCodeResource
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("campaign_id")]
    public required string CampaignId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("items")]
    public string? Items { get; init; }

    [JsonPropertyName("code")]
    public required string Code { get; init; }

    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    [JsonPropertyName("used")]
    public required string Used { get; init; }

    [JsonPropertyName("uses")]
    public required string Uses { get; init; }

    [JsonPropertyName("active")]
    public required string Active { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("all_items")]
    public string? AllItems { get; init; }

    [JsonPropertyName("total_discount")]
    public required string TotalDiscount { get; init; }

    [JsonPropertyName("starts_at")]
    public required string StartsAt { get; init; }

    [JsonPropertyName("expires_at")]
    public required string ExpiresAt { get; init; }

    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required string UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
