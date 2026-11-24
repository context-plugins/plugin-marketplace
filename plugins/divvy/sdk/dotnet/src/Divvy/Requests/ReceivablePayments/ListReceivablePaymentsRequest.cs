using Divvy.Core.Validation.Attributes;

namespace Divvy.Requests.ReceivablePayments;

/// <summary>
/// The inputs of the ListReceivablePayments operation.
/// </summary>
public sealed record ListReceivablePaymentsRequest
{
    [Minimum(1)]
    [Maximum(100)]
    public int? Max { get; init; }

    public string? Sort { get; init; }

    public string? Filters { get; init; }

    public string? Page { get; init; }

    public string? SessionId { get; init; }

    public string? DevKey { get; init; }
}
