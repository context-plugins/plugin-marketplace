using Curlec.Core.Validation.Attributes;

namespace Curlec.Requests.Customers;

/// <summary>
/// The inputs of the FetchAllCustomers operation.
/// </summary>
public sealed record FetchAllCustomersRequest
{
    /// <summary>
    /// Number of records to return per call. Maximum 100. Default 10.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int Count { get; init; } = 10;

    /// <summary>
    /// Number of records to skip. Use with count for pagination. Default 0.
    /// </summary>
    [Minimum(0)]
    public int Skip { get; init; } = 0;
}
