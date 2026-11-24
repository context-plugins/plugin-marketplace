using Curlec.Core.Validation.Attributes;
using Curlec.Models.Enums;

namespace Curlec.Requests.InstantSettlements;

/// <summary>
/// The inputs of the FetchAllInstantSettlements operation.
/// </summary>
public sealed record FetchAllInstantSettlementsRequest
{
    /// <summary>
    /// Unix timestamp (seconds). Fetch records created on or after this time.
    /// </summary>
    public int? From { get; init; }

    /// <summary>
    /// Unix timestamp (seconds). Fetch records created on or before this time.
    /// </summary>
    public int? To { get; init; }

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
    /// Set to ondemand_payouts to include payout details.
    /// </summary>
    public ExpandRazorpayInstantSettlementsApi? Expand { get; init; }
}
