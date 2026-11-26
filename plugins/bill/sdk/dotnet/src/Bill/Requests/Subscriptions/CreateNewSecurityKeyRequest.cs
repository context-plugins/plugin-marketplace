using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Subscriptions;

/// <summary>
/// The inputs of the CreateNewSecurityKey operation.
/// </summary>
public sealed record CreateNewSecurityKeyRequest
{
    [MinLength(1)]
    public required string SubscriptionId { get; init; }

    /// <summary>
    /// Idempotency key. The key must be in the UUID4 format.
    /// </summary>
    public required string XIdempotentKey { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public string? AppKey { get; init; }

    public string? ApiToken { get; init; }
}
