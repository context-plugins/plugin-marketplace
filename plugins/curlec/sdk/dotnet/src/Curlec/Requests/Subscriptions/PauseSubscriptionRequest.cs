using Curlec.Models;

namespace Curlec.Requests.Subscriptions;

/// <summary>
/// The inputs of the PauseSubscription operation.
/// </summary>
public sealed record PauseSubscriptionRequest
{
    /// <summary>
    /// Subscription ID (sub_*).
    /// </summary>
    public required string Id { get; init; }

    public SubscriptionsPauseRequest? Body { get; init; }
}
