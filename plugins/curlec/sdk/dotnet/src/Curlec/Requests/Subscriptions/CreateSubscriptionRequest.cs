using Curlec.Models;

namespace Curlec.Requests.Subscriptions;

/// <summary>
/// The inputs of the CreateSubscription operation.
/// </summary>
public sealed record CreateSubscriptionRequest
{
    public required SubscriptionsRequest Body { get; init; }
}
