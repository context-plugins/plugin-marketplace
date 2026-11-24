using Curlec.Models;

namespace Curlec.Requests.XPayouts;

/// <summary>
/// The inputs of the RejectPayout operation.
/// </summary>
public sealed record RejectPayoutRequest
{
    /// <summary>
    /// Unique identifier of the payout to reject.
    /// </summary>
    public required string PayoutId { get; init; }

    public PayoutsRejectRequest? Body { get; init; }
}
