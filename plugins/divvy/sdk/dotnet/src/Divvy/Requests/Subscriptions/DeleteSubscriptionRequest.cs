using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.Subscriptions;

/// <summary>
/// The inputs of the DeleteSubscription operation.
/// </summary>
public sealed record DeleteSubscriptionRequest
{
    [MinLength(1)]
    public required string SubscriptionId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public string? AppKey { get; init; }

    public string? ApiToken { get; init; }
}
