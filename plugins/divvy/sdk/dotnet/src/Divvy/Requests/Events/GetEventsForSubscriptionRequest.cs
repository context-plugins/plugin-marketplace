using System.ComponentModel.DataAnnotations;
using Divvy.Core.Validation.Attributes;

namespace Divvy.Requests.Events;

/// <summary>
/// The inputs of the GetEventsForSubscription operation.
/// </summary>
public sealed record GetEventsForSubscriptionRequest
{
    [MinLength(1)]
    public required string SubscriptionId { get; init; }

    public string? EntityId { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int? Max { get; init; }

    public string? CreatedTimeFrom { get; init; }

    public string? CreatedTimeTo { get; init; }

    public bool? Ascending { get; init; }

    public string? Page { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public string? AppKey { get; init; }

    public string? ApiToken { get; init; }
}
