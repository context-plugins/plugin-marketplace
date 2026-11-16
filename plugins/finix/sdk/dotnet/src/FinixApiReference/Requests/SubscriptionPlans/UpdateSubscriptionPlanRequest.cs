using FinixApiReference.Models.AnyOf;

namespace FinixApiReference.Requests.SubscriptionPlans;

/// <summary>
/// The inputs of the UpdateSubscriptionPlan operation.
/// </summary>
public sealed record UpdateSubscriptionPlanRequest
{
    /// <summary>
    /// The ID of the <c>Subscription Plan</c>.
    /// </summary>
    public required string SubscriptionPlanId { get; init; }

    public required SubscriptionPlansRequest1 Body { get; init; }
}
