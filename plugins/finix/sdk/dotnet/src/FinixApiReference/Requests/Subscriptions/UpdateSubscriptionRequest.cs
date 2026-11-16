using FinixApiReference.Models.AnyOf;

namespace FinixApiReference.Requests.Subscriptions;

/// <summary>
/// The inputs of the UpdateSubscription operation.
/// </summary>
public sealed record UpdateSubscriptionRequest
{
    /// <summary>
    /// The <c>Subscription</c> ID.
    /// </summary>
    public required string SubscriptionId { get; init; }

    public required SubscriptionsRequest1 Body { get; init; }
}
