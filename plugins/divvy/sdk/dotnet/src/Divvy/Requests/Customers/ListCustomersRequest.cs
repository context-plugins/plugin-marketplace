using Divvy.Core.Validation.Attributes;

namespace Divvy.Requests.Customers;

/// <summary>
/// The inputs of the ListCustomers operation.
/// </summary>
public sealed record ListCustomersRequest
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
