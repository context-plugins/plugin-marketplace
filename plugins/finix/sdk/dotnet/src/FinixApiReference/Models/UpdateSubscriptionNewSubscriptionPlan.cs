using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record UpdateSubscriptionNewSubscriptionPlan
{
    /// <summary>
    /// The ID of the new <c>Subscription Plan</c> on which the <c>Subscription</c> is based.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subscription_plan_id")]
    public string? SubscriptionPlanId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
