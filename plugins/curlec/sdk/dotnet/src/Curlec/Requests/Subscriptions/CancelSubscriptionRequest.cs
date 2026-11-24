using Curlec.Models;

namespace Curlec.Requests.Subscriptions;

/// <summary>
/// The inputs of the CancelSubscription operation.
/// </summary>
public sealed record CancelSubscriptionRequest
{
    /// <summary>
    /// Subscription ID (sub_*).
    /// </summary>
    public required string Id { get; init; }

    public SubscriptionsCancelRequest? Body { get; init; }
}
