namespace Curlec.Requests.Subscriptions;

/// <summary>
/// The inputs of the FetchSubscriptionScheduledChanges operation.
/// </summary>
public sealed record FetchSubscriptionScheduledChangesRequest
{
    /// <summary>
    /// Subscription ID (sub_*).
    /// </summary>
    public required string Id { get; init; }
}
