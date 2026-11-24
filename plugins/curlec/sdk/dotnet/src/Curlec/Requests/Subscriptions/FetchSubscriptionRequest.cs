namespace Curlec.Requests.Subscriptions;

/// <summary>
/// The inputs of the FetchSubscription operation.
/// </summary>
public sealed record FetchSubscriptionRequest
{
    /// <summary>
    /// Subscription ID (sub_*).
    /// </summary>
    public required string Id { get; init; }
}
