namespace Curlec.Requests.Subscriptions;

/// <summary>
/// The inputs of the CancelSubscriptionScheduledChanges operation.
/// </summary>
public sealed record CancelSubscriptionScheduledChangesRequest
{
    /// <summary>
    /// Subscription ID (sub_*).
    /// </summary>
    public required string Id { get; init; }
}
