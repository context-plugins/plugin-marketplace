using Lusha.Models;

namespace Lusha.Requests.WebhooksApi;

/// <summary>
/// The inputs of the UpdateSubscription operation.
/// </summary>
public sealed record UpdateSubscriptionOperationRequest
{
    /// <summary>
    /// Subscription ID
    /// </summary>
    public required string Id { get; init; }

    public required UpdateSubscriptionRequest Body { get; init; }
}
