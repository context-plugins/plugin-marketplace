using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Models.Enums;

namespace FacebookBusinessManager.Models;

public record Campaign
{
    /// <summary>
    /// The ID of the campaign
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The name of the campaign
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The campaign objective
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("objective")]
    public Objective? Objective { get; init; }

    /// <summary>
    /// The configured status of the campaign
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status1FacebookBusinessManagerFacebookMarketingCampaignsApi? Status { get; init; }

    /// <summary>
    /// The effective status of the campaign taking into account parent statuses and schedule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("effective_status")]
    public string? EffectiveStatus { get; init; }

    /// <summary>
    /// Daily budget amount in account currency smallest unit
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daily_budget")]
    public string? DailyBudget { get; init; }

    /// <summary>
    /// Lifetime budget amount in account currency smallest unit
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lifetime_budget")]
    public string? LifetimeBudget { get; init; }

    /// <summary>
    /// Remaining budget for the campaign
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("budget_remaining")]
    public string? BudgetRemaining { get; init; }

    /// <summary>
    /// Buying type of the campaign
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("buying_type")]
    public BuyingType? BuyingType { get; init; }

    /// <summary>
    /// Special ad categories required for housing, employment, credit, or social issues ads.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("special_ad_categories")]
    public IReadOnlyList<string>? SpecialAdCategories { get; init; }

    /// <summary>
    /// Time when the campaign was created
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_time")]
    public DateTimeOffset? CreatedTime { get; init; }

    /// <summary>
    /// Time when the campaign was last updated
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_time")]
    public DateTimeOffset? UpdatedTime { get; init; }

    /// <summary>
    /// Scheduled start time of the campaign
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start_time")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// Scheduled stop time of the campaign
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stop_time")]
    public DateTimeOffset? StopTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
