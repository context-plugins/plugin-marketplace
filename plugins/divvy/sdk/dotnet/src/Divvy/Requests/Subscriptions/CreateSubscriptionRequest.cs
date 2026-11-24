using Divvy.Models;

namespace Divvy.Requests.Subscriptions;

/// <summary>
/// The inputs of the CreateSubscription operation.
/// </summary>
public sealed record CreateSubscriptionRequest
{
    /// <summary>
    /// Idempotency key. The key must be in the UUID4 format.
    /// </summary>
    public required string XIdempotentKey { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public string? AppKey { get; init; }

    public string? ApiToken { get; init; }

    public required SubscriptionRequestDto Body { get; init; }
}
