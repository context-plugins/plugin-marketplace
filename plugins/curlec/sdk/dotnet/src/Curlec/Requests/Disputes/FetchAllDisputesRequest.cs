using Curlec.Core.Validation.Attributes;
using Curlec.Models.Enums;

namespace Curlec.Requests.Disputes;

/// <summary>
/// The inputs of the FetchAllDisputes operation.
/// </summary>
public sealed record FetchAllDisputesRequest
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

    /// <summary>
    /// Expand sub-entities. Supported: payment, transaction.settlement.
    /// </summary>
    public Expand? Expand { get; init; }
}
