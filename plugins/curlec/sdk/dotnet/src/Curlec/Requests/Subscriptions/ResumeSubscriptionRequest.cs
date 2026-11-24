using Curlec.Models;

namespace Curlec.Requests.Subscriptions;

/// <summary>
/// The inputs of the ResumeSubscription operation.
/// </summary>
public sealed record ResumeSubscriptionRequest
{
    /// <summary>
    /// Subscription ID (sub_*).
    /// </summary>
    public required string Id { get; init; }

    public SubscriptionsResumeRequest? Body { get; init; }
}
