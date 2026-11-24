using Curlec.Models;

namespace Curlec.Requests.Subscriptions;

/// <summary>
/// The inputs of the UpdateSubscription operation.
/// </summary>
public sealed record UpdateSubscriptionRequest
{
    /// <summary>
    /// Subscription ID (sub_*).
    /// </summary>
    public required string Id { get; init; }

    public required SubscriptionsRequest1 Body { get; init; }
}
