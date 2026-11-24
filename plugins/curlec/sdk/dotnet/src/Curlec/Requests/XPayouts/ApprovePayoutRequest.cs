using Curlec.Models;

namespace Curlec.Requests.XPayouts;

/// <summary>
/// The inputs of the ApprovePayout operation.
/// </summary>
public sealed record ApprovePayoutRequest
{
    /// <summary>
    /// Unique identifier of the payout to approve.
    /// </summary>
    public required string PayoutId { get; init; }

    public PayoutsApproveRequest? Body { get; init; }
}
