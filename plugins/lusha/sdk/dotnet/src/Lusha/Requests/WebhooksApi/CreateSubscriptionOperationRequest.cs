using Lusha.Models;

namespace Lusha.Requests.WebhooksApi;

/// <summary>
/// The inputs of the CreateSubscription operation.
/// </summary>
public sealed record CreateSubscriptionOperationRequest
{
    public required CreateSubscriptionRequest Body { get; init; }
}
