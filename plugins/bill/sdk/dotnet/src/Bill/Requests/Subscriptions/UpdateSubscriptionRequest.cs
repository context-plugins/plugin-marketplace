using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.Subscriptions;

/// <summary>
/// The inputs of the UpdateSubscription operation.
/// </summary>
public sealed record UpdateSubscriptionRequest
{
    [MinLength(1)]
    public required string SubscriptionId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public string? AppKey { get; init; }

    public string? ApiToken { get; init; }

    public required SubscriptionUpdateRequestDto Body { get; init; }
}
