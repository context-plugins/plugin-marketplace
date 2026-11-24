using Lusha.Models;

namespace Lusha.Requests.WebhooksApi;

/// <summary>
/// The inputs of the DeleteSubscriptions operation.
/// </summary>
public sealed record DeleteSubscriptionsRequest
{
    public required ApiSubscriptionsDeleteRequest Body { get; init; }
}
