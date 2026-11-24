using Curlec.Core.Validation.Attributes;

namespace Curlec.Requests.VirtualAccounts;

/// <summary>
/// The inputs of the ListVirtualAccounts operation.
/// </summary>
public sealed record ListVirtualAccountsRequest
{
    /// <summary>
    /// Unix timestamp filter (start).
    /// </summary>
    public int? From { get; init; }

    /// <summary>
    /// Unix timestamp filter (end).
    /// </summary>
    public int? To { get; init; }

    /// <summary>
    /// Number of records to return. Default: 10. Maximum: 100.
    /// </summary>
    [Maximum(100)]
    public int Count { get; init; } = 10;

    /// <summary>
    /// Number of records to skip. Use for pagination. Default: 0.
    /// </summary>
    public int Skip { get; init; } = 0;
}
