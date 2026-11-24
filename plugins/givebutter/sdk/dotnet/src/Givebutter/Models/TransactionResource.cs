using System.Collections.Generic;
using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

public record TransactionResource
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("plan_id")]
    public required string PlanId { get; init; }

    [JsonPropertyName("pledge_id")]
    public required string PledgeId { get; init; }

    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    [JsonPropertyName("fee")]
    public required double Fee { get; init; }

    [JsonPropertyName("fee_covered")]
    public required double FeeCovered { get; init; }

    [JsonPropertyName("donated")]
    public required double Donated { get; init; }

    [JsonPropertyName("payout")]
    public required double Payout { get; init; }

    [JsonPropertyName("captured")]
    public required string Captured { get; init; }

    [JsonPropertyName("captured_at")]
    public required string CapturedAt { get; init; }

    [JsonPropertyName("timezone")]
    public required string Timezone { get; init; }

    [JsonPropertyName("refunded")]
    public required string Refunded { get; init; }

    [JsonPropertyName("refunded_at")]
    public required string RefundedAt { get; init; }

    [JsonPropertyName("line_items")]
    public required IReadOnlyList<TransactionLineItemResource> LineItems { get; init; }

    [JsonPropertyName("fair_market_value_amount")]
    public required string? FairMarketValueAmount { get; init; }

    [JsonPropertyName("tax_deductible_amount")]
    public required string? TaxDeductibleAmount { get; init; }

    [JsonPropertyName("is_recurring")]
    public required string IsRecurring { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
