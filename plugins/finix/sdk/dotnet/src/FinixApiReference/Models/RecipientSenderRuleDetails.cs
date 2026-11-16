using System.Collections.Generic;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.AnyOf;

namespace FinixApiReference.Models;

/// <summary>
/// A container for rule configurations.
/// </summary>
public record RecipientSenderRuleDetails
{
    /// <summary>
    /// List of configurations for ACH rules. Each rule can be a DAILY TIME_RANGE rule, MONTHLY TIME_RANGE rule, or GLOBAL rule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ach_rules")]
    public IReadOnlyList<AchRuleConfiguration>? AchRules { get; init; }

    /// <summary>
    /// List of configurations for card rules. Each rule can be a DAILY TIME_RANGE rule, MONTHLY TIME_RANGE rule, or GLOBAL rule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card_rules")]
    public IReadOnlyList<CardRuleConfiguration>? CardRules { get; init; }

    /// <summary>
    /// List of configurations for balance adjustment rules. Each rule can be a DAILY TIME_RANGE rule, MONTHLY TIME_RANGE rule, or GLOBAL rule.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("balance_adjustment_rules")]
    public IReadOnlyList<BalanceAdjustmentRuleConfiguration>? BalanceAdjustmentRules { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
