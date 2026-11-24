using System.Collections.Generic;
using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.Enums;

namespace Beehiiv.Models;

public record VisibilitySettings
{
    /// <summary>
    /// Whether to show the block on the web.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("show_on_web")]
    public bool? ShowOnWeb { get; init; }

    /// <summary>
    /// Whether to show the block on the email.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("show_on_email")]
    public bool? ShowOnEmail { get; init; }

    /// <summary>
    /// Whether to show the block to anonymous users on the web.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("show_to_anonymous_users_web")]
    public bool? ShowToAnonymousUsersWeb { get; init; }

    /// <summary>
    /// Whether to show the block to free subscribers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("show_to_free_subscribers")]
    public bool? ShowToFreeSubscribers { get; init; }

    /// <summary>
    /// Whether to show the block to paid subscribers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("show_to_paid_subscribers")]
    public bool? ShowToPaidSubscribers { get; init; }

    /// <summary>
    /// The exact referral count required to show the block to subscribers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("show_to_subscribers_with_referral_value")]
    public int? ShowToSubscribersWithReferralValue { get; init; }

    /// <summary>
    /// The condition required to show the block to subscribers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("show_to_subscribers_with_referral_condition")]
    public ReferralCondition2? ShowToSubscribersWithReferralCondition { get; init; }

    /// <summary>
    /// An optional list of condition set UUIDs to gate this block behind dynamic content targeting. When provided, only subscribers matching the specified condition sets will see this block. Condition sets must belong to the same publication and be active.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("condition_set_ids")]
    public IReadOnlyList<string>? ConditionSetIds { get; init; }

    /// <summary>
    /// Instructs how to combine multiple condition sets. Defaults to "or" (subscriber can match any condition). Use "and" to show the block if the subscriber meets all conditions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("condition_set_operator")]
    public ConditionSetOperator2? ConditionSetOperator { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
