using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.Subscriptions;

/// <summary>
/// The inputs of the ReplaceSubscription operation.
/// </summary>
public sealed record ReplaceSubscriptionRequest
{
    [MinLength(1)]
    public required string SubscriptionId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public string? AppKey { get; init; }

    public string? ApiToken { get; init; }

    public required SubscriptionRequestDto Body { get; init; }
}
