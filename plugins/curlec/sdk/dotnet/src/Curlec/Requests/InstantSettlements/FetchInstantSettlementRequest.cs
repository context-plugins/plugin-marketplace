using Curlec.Models.Enums;

namespace Curlec.Requests.InstantSettlements;

/// <summary>
/// The inputs of the FetchInstantSettlement operation.
/// </summary>
public sealed record FetchInstantSettlementRequest
{
    /// <summary>
    /// Instant settlement ID (setlod_*).
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Set to ondemand_payouts to include payout details.
    /// </summary>
    public ExpandRazorpayInstantSettlementsApi? Expand { get; init; }
}
