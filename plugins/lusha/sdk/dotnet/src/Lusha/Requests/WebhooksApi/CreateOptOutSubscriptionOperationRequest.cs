using Lusha.Models;

namespace Lusha.Requests.WebhooksApi;

/// <summary>
/// The inputs of the CreateOptOutSubscription operation.
/// </summary>
public sealed record CreateOptOutSubscriptionOperationRequest
{
    public required CreateOptOutSubscriptionRequest Body { get; init; }
}
