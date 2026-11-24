using System;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Models.Enums;

namespace FacebookBusinessManager.Models;

public record AdSetCreate
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("campaign_id")]
    public required string CampaignId { get; init; }

    [JsonPropertyName("optimization_goal")]
    public required OptimizationGoal1 OptimizationGoal { get; init; }

    [JsonPropertyName("billing_event")]
    public required BillingEvent1 BillingEvent { get; init; }

    /// <summary>
    /// Targeting specification
    /// </summary>
    [JsonPropertyName("targeting")]
    public required object Targeting { get; init; }

    [JsonPropertyName("status")]
    public required Status1 Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daily_budget")]
    public string? DailyBudget { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lifetime_budget")]
    public string? LifetimeBudget { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bid_amount")]
    public int? BidAmount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bid_strategy")]
    public BidStrategy1? BidStrategy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start_time")]
    public DateTimeOffset? StartTime { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("end_time")]
    public DateTimeOffset? EndTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
