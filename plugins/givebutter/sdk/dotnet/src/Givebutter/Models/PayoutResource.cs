using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record PayoutResource
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("campaign_id")]
    public required string CampaignId { get; init; }

    [JsonPropertyName("method")]
    public required string Method { get; init; }

    [JsonPropertyName("status")]
    public required string Status { get; init; }

    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    [JsonPropertyName("fee")]
    public required double Fee { get; init; }

    [JsonPropertyName("tip")]
    public required double Tip { get; init; }

    [JsonPropertyName("payout")]
    public required double Payout { get; init; }

    [JsonPropertyName("currency")]
    public required string Currency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address")]
    public string? Address { get; init; }

    [JsonPropertyName("memo")]
    public required string Memo { get; init; }

    [JsonPropertyName("expected_at")]
    public required string ExpectedAt { get; init; }

    [JsonPropertyName("paid_at")]
    public required string PaidAt { get; init; }

    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required string UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
