using Bill.Core.Validation.Attributes;

namespace Bill.Requests.Subscriptions;

/// <summary>
/// The inputs of the GetAllSubscriptions operation.
/// </summary>
public sealed record GetAllSubscriptionsRequest
{
    [Minimum(1)]
    [Maximum(100)]
    public int? Max { get; init; }

    public string? Page { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }

    public string? AppKey { get; init; }

    public string? ApiToken { get; init; }
}
