using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record PledgeResource
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("contact_id")]
    public required string ContactId { get; init; }

    [JsonPropertyName("campaign_id")]
    public required string CampaignId { get; init; }

    [JsonPropertyName("fund_id")]
    public required string FundId { get; init; }

    [JsonPropertyName("type")]
    public required string Type { get; init; }

    [JsonPropertyName("status")]
    public required string Status { get; init; }

    [JsonPropertyName("status_friendly")]
    public required string StatusFriendly { get; init; }

    [JsonPropertyName("amount")]
    public required string Amount { get; init; }

    [JsonPropertyName("amount_fulfilled")]
    public required string AmountFulfilled { get; init; }

    [JsonPropertyName("amount_remaining")]
    public required string AmountRemaining { get; init; }

    [JsonPropertyName("allow_custom_amount")]
    public required string AllowCustomAmount { get; init; }

    [JsonPropertyName("installment_frequency")]
    public required string InstallmentFrequency { get; init; }

    [JsonPropertyName("first_installment_date")]
    public required string FirstInstallmentDate { get; init; }

    [JsonPropertyName("next_installment_date")]
    public required string NextInstallmentDate { get; init; }

    [JsonPropertyName("expected_fulfillment_date")]
    public required string ExpectedFulfillmentDate { get; init; }

    [JsonPropertyName("memo")]
    public required string Memo { get; init; }

    [JsonPropertyName("auto_remind")]
    public required string AutoRemind { get; init; }

    [JsonPropertyName("last_reminded_at")]
    public required string LastRemindedAt { get; init; }

    [JsonPropertyName("fee_coverage_type")]
    public required string FeeCoverageType { get; init; }

    [JsonPropertyName("fee_coverage_visibility")]
    public required string FeeCoverageVisibility { get; init; }

    [JsonPropertyName("include_in_campaign_goal")]
    public required string IncludeInCampaignGoal { get; init; }

    [JsonPropertyName("tips_enabled")]
    public required string TipsEnabled { get; init; }

    [JsonPropertyName("canceled_at")]
    public required string CanceledAt { get; init; }

    [JsonPropertyName("pledged_at")]
    public required string PledgedAt { get; init; }

    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    [JsonPropertyName("updated_at")]
    public required string UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
