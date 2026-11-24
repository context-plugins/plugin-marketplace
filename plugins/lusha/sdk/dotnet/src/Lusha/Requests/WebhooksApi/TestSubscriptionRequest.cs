using Lusha.Models.Enums;

namespace Lusha.Requests.WebhooksApi;

/// <summary>
/// The inputs of the TestSubscription operation.
/// </summary>
public sealed record TestSubscriptionRequest
{
    /// <summary>
    /// Subscription ID
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Test mode
    /// </summary>
    public Mode Mode { get; init; } = Mode.Full;
}
