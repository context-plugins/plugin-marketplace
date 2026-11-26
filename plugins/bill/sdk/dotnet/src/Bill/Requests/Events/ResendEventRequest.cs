using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Events;

/// <summary>
/// The inputs of the ResendEvent operation.
/// </summary>
public sealed record ResendEventRequest
{
    [MinLength(1)]
    public required string SubscriptionId { get; init; }

    [MinLength(1)]
    public required string EventId { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public string? AppKey { get; init; }

    public string? ApiToken { get; init; }
}
